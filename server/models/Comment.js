const mongoose = require("mongoose");

let CommentModel = {};

const CommentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Post",
    index: true,
  },
  author: {
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
  createdDate: {
    type: Date,
    default: Date.now,
    index: true,
  },
});

CommentSchema.index({ post: 1, createdDate: 1 });

CommentSchema.statics.toAPI = (doc) => ({
  _id: doc._id,
  post: doc.post,
  author: doc.author,
  body: doc.body,
  createdDate: doc.createdDate,
});

CommentSchema.statics.createForPost = (postId, authorId, body) => {
  if (!postId || !authorId) return Promise.resolve(null);
  const doc = new CommentModel({ post: postId, author: authorId, body });
  return doc.save();
};

CommentSchema.statics.findByPost = (postId, limit = 200) =>
  CommentModel.find({ post: postId }).sort({ createdDate: 1 }).limit(limit).lean().exec();

CommentSchema.statics.countByPost = (postId) =>
  CommentModel.countDocuments({ post: postId }).exec();

CommentModel = mongoose.model("Comment", CommentSchema);
module.exports = CommentModel;
