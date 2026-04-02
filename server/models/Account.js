const mongoose = require("mongoose");
const { hash, compare } = require("bcrypt");

let AccountModel = {};

const AccountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: (v) => typeof v === "string" && !/\s/.test(v),
      message: "Username cannot contain spaces.",
    },
    match: [
      /^[A-Za-z0-9_\-.]{1,16}$/,
      "Username must be 1-16 characters (letters, numbers, _, -, .) with no spaces.",
    ],
  },
  displayName: {
    type: String,
    required: true,
    trim: true,
    default: function () {
      return this.username;
    },
  },
  password: {
    type: String,
    required: true,
  },
  isPublic: {
    type: Boolean,
    default: true,
  },
  bio: {
    type: String,
    trim: true,
    default: "",
  },
  plan: {
    type: String,
    enum: ["free", "basic", "premium", "premium+"],
    default: "free",
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

AccountSchema.statics.toAPI = (doc) => ({
  _id: doc._id,
  username: doc.username,
  displayName: doc.displayName,
  isPublic: doc.isPublic,
  bio: doc.bio,
  plan: doc.plan,
  createdDate: doc.createdDate,
});

AccountSchema.statics.generateHash = (password) => hash(password, 12);

AccountSchema.statics.authenticate = async (username, password, callback) => {
  try {
    const doc = await AccountModel.findOne({ username }).exec();
    if (!doc) {
      return callback();
    }

    const match = await compare(password, doc.password);
    if (match) {
      return callback(null, doc);
    }
    return callback();
  } catch (err) {
    return callback(err);
  }
};

AccountSchema.statics.findByUsername = async (username) => {
  const doc = await AccountModel.findOne({ username }).lean().exec();
  return doc ? AccountSchema.statics.toAPI(doc) : null;
};

AccountModel = mongoose.model("Account", AccountSchema);
module.exports = AccountModel;
