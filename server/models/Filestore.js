const mongoose = require("mongoose");

let FilestoreModel = {};

const FilestoreSchema = new mongoose.Schema({
  account: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Account",
    index: true,
  },
  filename: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
    max: 1024 * 1024 * 10, // 10MB
  },
  data: {
    type: Buffer,
    required: true,
  },
});

FilestoreSchema.statics.toAPI = (doc) => ({
  _id: doc._id,
  account: doc.account,
  filename: doc.filename,
  contentType: doc.contentType,
  size: doc.size,
});

FilestoreSchema.statics.upload = async (accountId, filename, contentType, size, data) => {
  if (!accountId || !filename || !contentType || !size || !data) return null;
  try {
    const doc = new FilestoreModel({ account: accountId, filename, contentType, size, data });
    await doc.save();
    return doc;
  } catch (err) {
    throw err;
  }
};

FilestoreSchema.statics.findByAccount = (accountId) =>
  FilestoreModel.find({ account: accountId }).exec();

FilestoreSchema.statics.findById = (id) => FilestoreModel.findById(id).exec();

FilestoreModel = mongoose.model("Filestore", FilestoreSchema);
module.exports = FilestoreModel;
