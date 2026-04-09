const models = require("../models");
const { enrichPosts, canViewPrivateAuthor, parseLimit } = require("./Post");

const getAccount = async (req, res) => {
  const username = req.params.username;
  if (!username) return res.status(400).json({ error: "Username is required!" });

  const account = await models.Account.findByUsername(username);
  if (!account) return res.status(404).json({ error: "User not found!" });

  const [followingCount, followersCount] = await Promise.all([
    models.Relationship.countFollowing(account._id),
    models.Relationship.countFollowers(account._id),
  ]);

  const payload = { ...account, followingCount, followersCount };

  const viewer = req.session?.account;
  const isOther = viewer && viewer.username !== account.username;
  const isFollowing = isOther
    ? await models.Relationship.isFollowing(viewer._id, account._id)
    : false;

  return res.json({ ...payload, isFollowing });
};

const toggleFollow = async (req, res) => {
  const username = String(req.params.username ?? "")
    .trim()
    .toLowerCase();
  if (!username) return res.status(400).json({ error: "Username is required!" });

  const viewer = req.session?.account;
  if (!viewer) return res.status(401).json({ error: "Login required" });

  const target = await models.Account.findOne({ username }).select("_id username").lean().exec();
  if (!target) return res.status(404).json({ error: "User not found" });
  if (String(target._id) === String(viewer._id)) {
    return res.status(400).json({ error: "Cannot follow yourself" });
  }

  const already = await models.Relationship.isFollowing(viewer._id, target._id);
  if (already) {
    await models.Relationship.unfollow(viewer._id, target._id);
    const followersCount = await models.Relationship.countFollowers(target._id);
    return res.json({ isFollowing: false, followersCount });
  }
  await models.Relationship.follow(viewer._id, target._id);
  const followersCount = await models.Relationship.countFollowers(target._id);
  return res.json({ isFollowing: true, followersCount });
};

// a variation of the stackoverflow answer
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array#:~:text=58%20Answers,23%20revs%2C%2019%20users%2032%25
const shuffleToNew = (arr) => {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const getAccounts = async (req, res) => {
  const limit = req.query.limit ?? 10;
  const accounts = await models.Account.find({})
    .select("_id username displayName avatar isPublic bio plan isOrg createdDate")
    .exec();

  const randomAccounts = shuffleToNew(accounts).slice(0, limit);
  return res.json(randomAccounts);
};

const getFollowers = async (req, res) => {
  const username = req.params.username;
  if (!username) return res.status(400).json({ error: "Username is required!" });

  const account = await models.Account.findByUsername(username);
  if (!account) return res.status(404).json({ error: "User not found!" });

  const followers = await models.Relationship.findFollowers(account._id);
  return res.json(followers);
};

const getPosts = async (req, res) => {
  const username = req.params.username;
  if (!username) return res.status(400).json({ error: "Username is required!" });

  try {
    const account = await models.Account.findByUsername(username);
    if (!account) return res.status(404).json({ error: "User not found!" });

    const viewerId = req.session?.account?._id ?? null;
    if (!(await canViewPrivateAuthor(account, viewerId))) {
      return res.json([]);
    }

    const limit = parseLimit(req.query.limit);
    const posts = await models.Post.findRootsByOwnerWithOwner(account._id, limit);
    const payload = await enrichPosts(posts, viewerId);
    return res.json(payload);
  } catch {
    return res.status(500).json({ error: "An error occurred" });
  }
};

const updateAccount = async (req, res) => {
  const { displayName, bio, isPublic } = req.body;
  if (
    typeof displayName !== "string" ||
    !displayName.trim() ||
    typeof bio !== "string" ||
    isPublic === undefined
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const avatar = req.files?.avatar;

  const session = req.session;
  if (!session) return res.status(401).json({ error: "Login required" });

  const account = await models.Account.findById(session.account._id);
  if (!account) return res.status(404).json({ error: "Account not found" });

  try {
    account.displayName = displayName.trim();
    account.bio = bio.trim(); // allow empty bio
    account.isPublic = isPublic === true || isPublic === "true";

    if (avatar) {
      // so we can delete the old one
      const previousAvatarId = account.avatar;

      const photo = await models.Filestore.upload(account._id, account.username, avatar.data);
      if (!photo) return res.status(400).json({ error: "Failed to upload avatar" });

      // uploaded, so set and delete the old one if exists
      account.avatar = photo._id;
      if (previousAvatarId) {
        await models.Filestore.deleteOne({ _id: previousAvatarId });
      }
    }

    await account.save();
    session.account = models.Account.toAPI(account);
    return res.json({ account: session.account });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "An error occurred" });
  }
};

const getAvatar = async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).json({ error: "ID is required!" });

  const photo = await models.Filestore.findById(id).exec();
  if (!photo?.data?.length) return res.status(404).json({ error: "User has no avatar" });

  res.set({
    "Content-Type": "image/webp",
    "Content-Length": photo.data.length,
    "Content-Disposition": `filename="${photo.filename}"`,
  });

  return res.send(photo.data);
};

const getUserAvatar = async (req, res) => {
  const username = req.params.username;
  if (!username) return res.status(400).json({ error: "Username is required!" });

  const avatarId = req.params.avatarId;
  if (!avatarId) return res.status(400).json({ error: "Avatar ID is required!" });

  const photo = await models.Filestore.findById(avatarId);
  if (!photo?.data?.length) return res.status(404).json({ error: "User has no avatar" });

  res.set({
    "Content-Type": "image/webp",
    "Content-Length": photo.data.length,
    "Content-Disposition": `filename="${photo.filename}"`,
  });

  return res.send(photo.data);
};

module.exports = {
  getAccount,
  toggleFollow,
  getAccounts,
  getFollowers,
  getPosts,
  updateAccount,
  getAvatar,
  getUserAvatar,
};
