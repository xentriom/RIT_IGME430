const models = require("../models");

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

module.exports = { getAccount, toggleFollow };
