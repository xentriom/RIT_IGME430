const mongoose = require("mongoose");

let CommentLikeModel = {};

const CommentLikeSchema = new mongoose.Schema({
  comment: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Comment",
    index: true,
  },
  account: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Account",
    index: true,
  },
});

CommentLikeSchema.index({ comment: 1, account: 1 }, { unique: true });

CommentLikeSchema.statics.toAPI = (doc) => ({
  _id: doc._id,
  comment: doc.comment,
  account: doc.account,
});

CommentLikeSchema.statics.like = async (commentId, accountId) => {
  if (!commentId || !accountId) return null;
  try {
    const doc = new CommentLikeModel({ comment: commentId, account: accountId });
    await doc.save();
    return doc;
  } catch (err) {
    if (err.code === 11000) return null;
    throw err;
  }
};

CommentLikeSchema.statics.unlike = (commentId, accountId) =>
  CommentLikeModel.deleteOne({ comment: commentId, account: accountId }).exec();

CommentLikeSchema.statics.isLiked = async (commentId, accountId) => {
  const doc = await CommentLikeModel.findOne({ comment: commentId, account: accountId })
    .select("_id")
    .lean()
    .exec();
  return !!doc;
};

CommentLikeSchema.statics.countByComment = (commentId) =>
  CommentLikeModel.countDocuments({ comment: commentId }).exec();

CommentLikeModel = mongoose.model("CommentLike", CommentLikeSchema);
module.exports = CommentLikeModel;
