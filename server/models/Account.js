const mongoose = require("mongoose");
const { hash, compare } = require("bcrypt");
const FilestoreModel = require("./Filestore");
const sharp = require("sharp");

let AccountModel = {};

function randomHexColor() {
  // https://stackoverflow.com/a/5092872
  return "#" + "000000".replace(/0/g, () => (~~(Math.random() * 16)).toString(16));
}

async function defaultAvatarWebpBuffer(username) {
  // https://stackoverflow.com/a/31522006
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128">
    <rect width="100%" height="100%" fill="${randomHexColor()}"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="72" font-weight="bold" fill="#ffffff">
      ${username.charAt(0).toUpperCase()}
    </text>
  </svg>`;

  return sharp(Buffer.from(svg)).webp({ quality: 80 }).toBuffer();
}

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
  avatar: {
    type: mongoose.Schema.ObjectId,
    ref: "Filestore",
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
  isOrg: {
    type: Boolean,
    default: false,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

// generate a default avatar if none is set before saving
AccountSchema.pre("save", async function () {
  if (!this.isNew || this.avatar != null) {
    return;
  }
  const username = this.username;
  if (!username) {
    return;
  }

  const buffer = await defaultAvatarWebpBuffer(username);
  const avatar = new FilestoreModel({
    account: this._id,
    filename: `${Date.now()}-default-${this._id.toString().slice(0, 8)}.webp`,
    contentType: "image/webp",
    size: buffer.length,
    data: buffer,
  });

  await avatar.save();
  this.avatar = avatar._id;
});

AccountSchema.statics.toAPI = (doc) => ({
  _id: doc._id,
  username: doc.username,
  displayName: doc.displayName,
  avatar: doc.avatar,
  isPublic: doc.isPublic,
  bio: doc.bio,
  plan: doc.plan,
  isOrg: doc.isOrg,
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
