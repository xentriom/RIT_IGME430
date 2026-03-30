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
  createdDate: doc.createdDate,
});

PostSchema.statics.findByOwner = (ownerId) =>
  PostModel.find({ owner: ownerId }).sort({ createdDate: -1 }).lean().exec();

PostSchema.statics.findRecent = (limit = 50) =>
  PostModel.find({}).sort({ createdDate: -1 }).limit(limit).lean().exec();

PostModel = mongoose.model("Post", PostSchema);
module.exports = PostModel;
