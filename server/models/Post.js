const mongoose = require("mongoose");

let PostModel = {};

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
    .populate("owner", "username plan displayName bio")
    .lean()
    .exec();

// find replies with owner
PostSchema.statics.findRepliesWithOwner = (parentId, limit = 200) =>
  PostModel.find({ parent: parentId })
    .sort({ createdDate: 1 })
    .limit(limit)
    .populate("owner", "username plan displayName bio")
    .lean()
    .exec();

// find post by id with owner
PostSchema.statics.findByIdWithOwner = (id) =>
  PostModel.findById(id).populate("owner", "username plan displayName bio").lean().exec();

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
