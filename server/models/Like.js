const mongoose = require("mongoose");

let LikeModel = {};

const LikeSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Post",
    index: true,
  },
  account: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Account",
    index: true,
  },
});

LikeSchema.index({ post: 1, account: 1 }, { unique: true });

LikeSchema.statics.toAPI = (doc) => ({
  _id: doc._id,
  post: doc.post,
  account: doc.account,
});

LikeSchema.statics.like = async (postId, accountId) => {
  if (!postId || !accountId) return null;
  try {
    const doc = new LikeModel({ post: postId, account: accountId });
    await doc.save();
    return doc;
  } catch (err) {
    if (err.code === 11000) return null;
    throw err;
  }
};

LikeSchema.statics.unlike = (postId, accountId) =>
  LikeModel.deleteOne({ post: postId, account: accountId }).exec();

LikeSchema.statics.isLiked = async (postId, accountId) => {
  const doc = await LikeModel.findOne({ post: postId, account: accountId })
    .select("_id")
    .lean()
    .exec();
  return !!doc;
};

LikeSchema.statics.countByPost = (postId) => LikeModel.countDocuments({ post: postId }).exec();

LikeModel = mongoose.model("Like", LikeSchema);
module.exports = LikeModel;
