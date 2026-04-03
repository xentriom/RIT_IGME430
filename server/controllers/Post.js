const models = require("../models");

const Post = models.Post;
const Like = models.Like;
const Relationship = models.Relationship;

const DEFAULT_FEED_LIMIT = 50;
const MAX_REPLY_LIMIT = 200;

// helpers
const sessionAccountId = (req) => req.session?.account?._id ?? null;
const parseBody = (req) => String(req.body?.body ?? req.body?.text ?? "").trim();

const parseLimit = (value, fallback = DEFAULT_FEED_LIMIT) => {
  const parsed = Number.parseInt(String(value ?? fallback), 10);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(parsed, 1);
};

const parseRequiredOidParam = (req, key) => {
  const id = String(req.params?.[key] ?? "").trim();
  return String(id);
};

const isPaidPlan = (plan) => typeof plan === "string" && plan !== "free";

const canViewPrivateAuthor = async (owner, viewerId) => {
  if (!owner || owner.isPublic !== false) return true;
  if (!viewerId) return false;
  if (String(owner._id) === String(viewerId)) return true;
  return Relationship.isFollowing(viewerId, owner._id);
};

const enrichPosts = async (posts, viewerId) => {
  if (!posts.length) return [];
  const postIds = posts.map((p) => p._id);

  const [likeRows, childRows, likedRows] = await Promise.all([
    Like.aggregate([
      { $match: { post: { $in: postIds } } }, // match posts by id
      { $group: { _id: "$post", count: { $sum: 1 } } }, // group by post id and count likes
    ]).exec(),
    Post.aggregate([
      { $match: { parent: { $in: postIds } } }, // match replies by parent id
      { $group: { _id: "$parent", count: { $sum: 1 } } }, // group by parent id and count replies
    ]).exec(),
    viewerId
      ? Like.find({ post: { $in: postIds }, account: viewerId }) // find likes by post id and account id
          .select("post")
          .lean()
          .exec()
      : Promise.resolve([]),
  ]);

  const likeMap = new Map(likeRows.map((row) => [String(row._id), row.count]));
  const childMap = new Map(childRows.map((row) => [String(row._id), row.count]));
  const likedSet = new Set(likedRows.map((row) => String(row.post)));

  // combine and return
  return posts.map((post) => {
    const id = String(post._id);
    return {
      _id: post._id,
      body: post.body,
      createdDate: post.createdDate,
      parent: post.parent ?? null,
      audience: post.audience ?? "everyone",
      owner: {
        username: post.owner.username,
        displayName: post.owner.displayName,
        isPremium: isPaidPlan(post.owner.plan),
        bio: typeof post.owner.bio === "string" ? post.owner.bio : "",
      },
      likeCount: likeMap.get(id) ?? 0,
      replyCount: childMap.get(id) ?? 0,
      likedByMe: viewerId ? likedSet.has(id) : false,
    };
  });
};

const getFeed = async (req, res) => {
  const limit = parseLimit(req.query.limit);

  try {
    const viewerId = sessionAccountId(req);
    const followingIds = viewerId ? await Relationship.findFollowingIds(viewerId) : [];
    const posts = await Post.findRecentFeedForViewer(viewerId, followingIds, limit);

    const payload = await enrichPosts(posts, viewerId);
    return res.json(payload);
  } catch {
    return res.status(500).json({ error: "An error occurred" });
  }
};

const createPost = async (req, res) => {
  const accountId = sessionAccountId(req);
  if (!accountId) return res.status(401).json({ error: "Unauthorized" });

  const body = parseBody(req);
  if (!body) return res.status(400).json({ error: "Post body is required" });

  try {
    const created = await Post.createRoot(accountId, body);
    const post = await Post.findByIdWithOwner(created._id);
    if (!post) return res.status(500).json({ error: "An error occurred" });

    const [enriched] = await enrichPosts([post], accountId);
    return res.json(enriched ?? null);
  } catch (err) {
    if (err?.name === "ValidationError") {
      return res.status(400).json({ error: "Invalid post body" });
    }
    return res.status(500).json({ error: "An error occurred" });
  }
};

const getPostReplies = async (req, res) => {
  const postId = parseRequiredOidParam(req, "postId");
  if (!postId) return res.status(400).json({ error: "Invalid post id" });

  try {
    const parent = await Post.findByIdWithOwner(postId);
    if (!parent) return res.status(404).json({ error: "Post not found" });

    const viewerId = sessionAccountId(req);
    if (!(await canViewPrivateAuthor(parent.owner, viewerId))) {
      return res.status(404).json({ error: "Post not found" });
    }

    const replies = await Post.findRepliesWithOwner(postId, MAX_REPLY_LIMIT);
    const visible = [];
    for (const reply of replies) {
      if (await canViewPrivateAuthor(reply.owner, viewerId)) visible.push(reply);
    }

    const payload = await enrichPosts(visible, viewerId);
    return res.json(payload);
  } catch {
    return res.status(500).json({ error: "An error occurred" });
  }
};

const createReply = async (req, res) => {
  const postId = parseRequiredOidParam(req, "postId");
  if (!postId) return res.status(400).json({ error: "Invalid post id" });

  const accountId = sessionAccountId(req);
  if (!accountId) return res.status(401).json({ error: "Unauthorized" });

  const body = parseBody(req);
  if (!body) return res.status(400).json({ error: "Reply body is required" });

  try {
    const parent = await Post.findByIdWithOwner(postId);
    if (!parent) return res.status(404).json({ error: "Post not found" });
    if (!(await canViewPrivateAuthor(parent.owner, accountId))) {
      return res.status(404).json({ error: "Post not found" });
    }

    const created = await Post.createReply(postId, accountId, body);
    const reply = await Post.findByIdWithOwner(created._id);
    if (!reply) return res.status(500).json({ error: "An error occurred" });

    const [enriched] = await enrichPosts([reply], accountId);
    return res.json(enriched ?? null);
  } catch (err) {
    if (err?.name === "ValidationError") {
      return res.status(400).json({ error: "Invalid reply body" });
    }
    return res.status(500).json({ error: "An error occurred" });
  }
};

const toggleLikeById = async (entityId, accountId) => {
  const likedBefore = await Like.isLiked(entityId, accountId);
  if (likedBefore) await Like.unlike(entityId, accountId);
  else await Like.like(entityId, accountId);

  const likeCount = await Like.countByPost(entityId);
  const likedByMe = await Like.isLiked(entityId, accountId);
  return { likeCount, likedByMe };
};

const toggleLike = async (req, res) => {
  const targetId = parseRequiredOidParam(req, "postId");
  if (!targetId) return res.status(400).json({ error: "Invalid post id" });
  const accountId = sessionAccountId(req);
  if (!accountId) return res.status(401).json({ error: "Unauthorized" });

  try {
    const target = await Post.findByIdWithOwner(targetId);
    if (!target) return res.status(404).json({ error: "Post not found" });
    if (!(await canViewPrivateAuthor(target.owner, accountId))) {
      return res.status(404).json({ error: "Post not found" });
    }
    return res.json(await toggleLikeById(targetId, accountId));
  } catch {
    return res.status(500).json({ error: "An error occurred" });
  }
};

const getPost = async (req, res) => {
  const postId = parseRequiredOidParam(req, "postId");
  if (!postId) return res.status(400).json({ error: "Invalid post id" });

  try {
    const post = await Post.findByIdWithOwner(postId);
    if (!post) return res.status(404).json({ error: "Post not found" });

    const viewerId = sessionAccountId(req);
    if (!(await canViewPrivateAuthor(post.owner, viewerId))) {
      return res.status(404).json({ error: "Post not found" });
    }

    const [enriched] = await enrichPosts([post], viewerId);
    return res.json(enriched ?? null);
  } catch {
    return res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = {
  getFeed,
  createPost,
  getPostReplies,
  createReply,
  toggleLike,
  getPost,
};
