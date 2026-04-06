const mongoose = require("mongoose");

let PostModel = {};

const ownerPopulateFields = "username plan displayName bio isPublic";

const PostSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Account",
    index: true,
  },
  body: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 2000,
  },
  parent: {
    type: mongoose.Schema.ObjectId,
    ref: "Post",
    default: null,
    index: true,
  },
  audience: {
    type: String,
    enum: ["everyone", "followers", "verified", "none"],
    default: function () {
      // match parent audience
      if (this.parent) {
        return this.parent.audience;
      }

      // default to everyone
      return "everyone";
    },
  },
  createdDate: {
    type: Date,
    default: Date.now,
    index: true,
  },
});

PostSchema.statics.toAPI = (doc) => ({
  _id: doc._id,
  owner: doc.owner,
  body: doc.body,
  parent: doc.parent ?? null,
  audience: doc.audience,
  createdDate: doc.createdDate,
});

// find posts by owner
PostSchema.statics.findByOwner = (ownerId) =>
  PostModel.find({ owner: ownerId }).sort({ createdDate: -1 }).lean().exec();

// root posts on a profile timeline (same shape as feed: populated owner)
PostSchema.statics.findRootsByOwnerWithOwner = (ownerId, limit = 50) =>
  PostModel.find({ owner: ownerId, parent: null })
    .sort({ createdDate: -1 })
    .limit(limit)
    .populate("owner", ownerPopulateFields)
    .lean()
    .exec();

// find recent posts
PostSchema.statics.findRecent = (limit = 50) =>
  PostModel.find({ parent: null }).sort({ createdDate: -1 }).limit(limit).lean().exec();

// find replies by parent id
PostSchema.statics.findByParent = (parentId, limit = 200) =>
  PostModel.find({ parent: parentId }).sort({ createdDate: 1 }).limit(limit).lean().exec();

// find recent posts with owner
PostSchema.statics.findRecentWithOwner = (limit = 50) =>
  PostModel.find({ parent: null })
    .sort({ createdDate: -1 })
    .limit(limit)
    .populate("owner", ownerPopulateFields)
    .lean()
    .exec();

// since you read all code....
// this wouldve been so much easier if we used a sql database...
// headache inducing and documentation sourcing
PostSchema.statics.findRecentFeedForViewer = async (viewerId, followingIds, limit = 50) => {
  const viewerOid = viewerId ? new mongoose.Types.ObjectId(String(viewerId)) : null;
  const followingOids = (followingIds ?? []).map((id) =>
    id instanceof mongoose.Types.ObjectId ? id : new mongoose.Types.ObjectId(String(id)),
  );

  const visibilityMatch = viewerOid
    ? {
        $or: [
          { "ownerArr.isPublic": { $ne: false } },
          { "ownerArr._id": viewerOid },
          { "ownerArr._id": { $in: followingOids } },
        ],
      }
    : { "ownerArr.isPublic": { $ne: false } };

  return PostModel.aggregate([
    { $match: { parent: null } }, // only parent posts
    { $sort: { createdDate: -1 } }, // sort by created date descending
    {
      $lookup: {
        from: "accounts",
        localField: "owner",
        foreignField: "_id",
        as: "ownerArr",
      },
    },
    { $unwind: "$ownerArr" }, // unwind the owner array
    { $match: visibilityMatch }, // match the visibility
    { $limit: limit }, // limit the results
    {
      // project the results
      $project: {
        _id: 1,
        body: 1,
        parent: 1,
        audience: 1,
        createdDate: 1,
        owner: {
          _id: "$ownerArr._id",
          username: "$ownerArr.username",
          plan: "$ownerArr.plan",
          displayName: "$ownerArr.displayName",
          bio: "$ownerArr.bio",
          isPublic: "$ownerArr.isPublic",
        },
      },
    },
  ]).exec();
};

// find replies with owner
PostSchema.statics.findRepliesWithOwner = (parentId, limit = 200) =>
  PostModel.find({ parent: parentId })
    .sort({ createdDate: 1 })
    .limit(limit)
    .populate("owner", ownerPopulateFields)
    .lean()
    .exec();

// find post by id with owner
PostSchema.statics.findByIdWithOwner = (id) =>
  PostModel.findById(id).populate("owner", ownerPopulateFields).lean().exec();

// find post document by id with owner (non-lean; supports deleteOne/save/etc)
PostSchema.statics.findDocByIdWithOwner = (id) =>
  PostModel.findById(id).populate("owner", ownerPopulateFields).exec();

// check if post exists by id
PostSchema.statics.existsById = async (id) => {
  const doc = await PostModel.findById(id).select("_id").lean().exec();
  return !!doc;
};

PostSchema.statics.createRoot = (ownerId, body) =>
  PostModel.create({ owner: ownerId, body, parent: null });

PostSchema.statics.createReply = (parentId, ownerId, body) =>
  PostModel.create({ owner: ownerId, body, parent: parentId });

PostModel = mongoose.model("Post", PostSchema);
module.exports = PostModel;
