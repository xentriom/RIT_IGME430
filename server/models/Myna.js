const crypto = require("crypto");
const mongoose = require("mongoose");

let MynaModel = {};

const MynaMessageSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["user", "assistant"],
    },
    content: {
      type: String,
      required: true,
    },
    createdDate: {
      type: Date,
      default: Date.now,
    },
  },
  // client will set the id so disable auto generated _id
  { _id: false },
);

const MynaSchema = new mongoose.Schema(
  {
    account: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Account",
    },
    isPublic: {
      type: Boolean,
      default: function () {
        // default to the account's isPublic setting
        // no account? we fucked up and default to true
        return this.account?.isPublic ?? true;
      },
    },
    messages: {
      type: [MynaMessageSchema],
      default: [],
    },
  },
  // mongoose will add createdAt and updatedAt fields
  { timestamps: true },
);

MynaSchema.index({ account: 1, updatedAt: -1 });
MynaSchema.index({ isPublic: 1 });

MynaSchema.statics.getChats = (accountId) =>
  MynaModel.find({ account: accountId }).sort({ updatedAt: -1 }).lean().exec();

/** Lightweight rows for sidebar / index (no full message arrays). */
MynaSchema.statics.getChatSummariesForAccount = (accountId) => {
  const oid = mongoose.Types.ObjectId.createFromHexString(accountId);
  return MynaModel.aggregate([
    { $match: { account: oid } },
    { $sort: { updatedAt: -1 } },
    {
      $project: {
        _id: 1,
        createdAt: 1,
        updatedAt: 1,
        isPublic: 1,
        messageCount: { $size: { $ifNull: ["$messages", []] } },
        lastMessage: { $arrayElemAt: ["$messages", -1] },
      },
    },
  ]).exec();
};

MynaSchema.statics.getChatById = (id) =>
  MynaModel.findById(id).populate("account", "_id username").lean().exec();

MynaSchema.statics.getChatByIdForAccount = (id, accountId) =>
  MynaModel.findOne({ _id: id, account: accountId })
    .populate("account", "_id username")
    .lean()
    .exec();

MynaSchema.statics.startChat = (accountId, content, messageId) => {
  const trimmed = typeof content === "string" ? content.trim() : "";
  if (!trimmed) {
    return Promise.reject(new Error("Message content is required"));
  }
  const userId = messageId || crypto.randomUUID();
  return MynaModel.create({
    account: accountId,
    messages: [
      { id: userId, role: "user", content: trimmed },
      { id: crypto.randomUUID(), role: "assistant", content: trimmed },
    ],
  });
};

MynaSchema.statics.appendMessage = (chatId, accountId, message) => {
  const { id, role, content } = message;
  if (!id || !role || typeof content !== "string") {
    return Promise.reject(new Error("Message id, role, and content are required"));
  }

  const trimmed = content.trim();
  if (!trimmed) {
    return Promise.reject(new Error("Message content is required"));
  }

  return MynaModel.findOneAndUpdate(
    { _id: chatId, account: accountId },
    { $push: { messages: { id, role, content: trimmed } } },
    { new: true, runValidators: true, timestamps: true },
  )
    .lean()
    .exec();
};

MynaSchema.statics.setChatPublic = (chatId, accountId, isPublic) =>
  MynaModel.findOneAndUpdate(
    { _id: chatId, account: accountId },
    { $set: { isPublic: Boolean(isPublic) } },
    { new: true, runValidators: true, timestamps: true },
  )
    .lean()
    .exec();

MynaModel = mongoose.model("Myna", MynaSchema);
module.exports = MynaModel;
