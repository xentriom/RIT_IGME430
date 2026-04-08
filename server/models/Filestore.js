const mongoose = require("mongoose");
const sharp = require("sharp");

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

FilestoreSchema.statics.upload = async (accountId, filename, data) => {
  if (!accountId || !filename || !data) return null;

  // generate a safe filename
  const sfn = `${Date.now()}-${filename.toLowerCase().replace(/[^a-z0-9]/g, "")}.webp`;

  // resize image to 128x128
  // format to webp
  const buffer = await sharp(data)
    .resize(128, 128, { fit: "cover" })
    .webp({ quality: 80, effort: 6 })
    .toBuffer();

  const doc = new FilestoreModel({
    account: accountId,
    filename: sfn,
    contentType: "image/webp",
    size: buffer.length,
    data: buffer,
  });

  await doc.save();
  return doc;
};

FilestoreSchema.statics.findByAccount = (accountId) =>
  FilestoreModel.find({ account: accountId }).exec();

FilestoreSchema.statics.findById = (id) => FilestoreModel.findById(id).exec();

FilestoreModel = mongoose.model("Filestore", FilestoreSchema);
module.exports = FilestoreModel;
