const mongoose = require("mongoose");
const sharp = require("sharp");

let FilestoreModel = {};

const FilestoreSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  data: {
    type: Buffer,
    required: true,
  },
});

FilestoreSchema.statics.toAPI = (doc) => ({
  _id: doc._id,
  filename: doc.filename,
});

FilestoreSchema.statics.upload = async (filename, data) => {
  if (!filename || !data) return null;

  // generate a safe filename
  const sfn = `${Date.now()}-${filename.toLowerCase().replace(/[^a-z0-9]/g, "")}.webp`;

  // resize image to 128x128
  // format to webp
  const buffer = await sharp(data)
    .resize(128, 128, { fit: "cover" })
    .webp({ quality: 80, effort: 6 })
    .toBuffer();

  const doc = new FilestoreModel({
    filename: sfn,
    data: buffer,
  });

  await doc.save();
  return doc;
};

FilestoreModel = mongoose.model("Filestore", FilestoreSchema);
module.exports = FilestoreModel;
