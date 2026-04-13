const mongoose = require("mongoose");
const models = require("../models");
const Myna = models.Myna;

const sessionAccountId = (req) => req.session?.account?._id ?? null;

const listChats = async (req, res) => {
  const accountId = sessionAccountId(req);
  if (!accountId) return res.status(401).json({ error: "Unauthorized" });

  try {
    const rows = await Myna.getChatSummariesForAccount(accountId);
    return res.json(
      rows.map((row) => ({
        _id: row._id,
        createdAt: row.createdAt,
        updatedAt: row.updatedAt,
        isPublic: Boolean(row.isPublic),
        messageCount: row.messageCount,
        lastMessage: row.lastMessage ?? null,
      })),
    );
  } catch {
    return res.status(500).json({ error: "An error occurred" });
  }
};

const getChat = async (req, res) => {
  const { chatId } = req.params;
  if (!chatId || !mongoose.isObjectIdOrHexString(chatId)) {
    return res.status(400).json({ error: "Invalid chat id" });
  }

  const sessionId = sessionAccountId(req);

  try {
    const doc = await Myna.getChatById(chatId);
    if (!doc) {
      return res.status(404).json({ error: "Not found" });
    }

    const ownerId = doc.account?._id ?? doc.account;
    const isOwner = sessionId && String(ownerId) === String(sessionId);

    if (isOwner || doc.isPublic) {
      return res.json(doc);
    }

    return res.status(403).json({
      error: "Forbidden",
      code: "CHAT_PRIVATE",
      _id: doc._id,
      account: doc.account,
      isPublic: false,
    });
  } catch {
    return res.status(500).json({ error: "An error occurred" });
  }
};

const createChat = async (req, res) => {
  const accountId = sessionAccountId(req);
  if (!accountId) return res.status(401).json({ error: "Unauthorized" });

  const content = String(req.body?.content ?? "").trim() || "";
  const messageId = req.body?.messageId ? String(req.body.messageId).trim() : undefined;
  const isPublic = req.body?.isPublic === undefined ? true : Boolean(req.body.isPublic);

  try {
    const doc = await Myna.startChat(accountId, content, messageId, isPublic);
    const hydrated = await Myna.getChatById(doc._id);
    return res.status(201).json(hydrated);
  } catch (err) {
    if (err instanceof Error && err.message === "Message content is required") {
      return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({ error: "An error occurred" });
  }
};

const appendMessage = async (req, res) => {
  const accountId = sessionAccountId(req);
  if (!accountId) return res.status(401).json({ error: "Unauthorized" });

  const { chatId, id, content } = req.params;
  if (!chatId || !mongoose.isObjectIdOrHexString(chatId)) {
    return res.status(400).json({ error: "Invalid chat id" });
  }

  const oChatId = mongoose.Types.ObjectId.createFromHexString(chatId);
  const oAccountId = mongoose.Types.ObjectId.createFromHexString(accountId);

  try {
    const updated = await Myna.appendMessage(oChatId, oAccountId, { id, content });
    if (!updated) {
      return res.status(404).json({ error: "Not found" });
    }
    const hydrated = await Myna.getChatById(updated._id);
    return res.json(hydrated);
  } catch (err) {
    if (err instanceof Error && err.message.includes("required")) {
      return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = {
  listChats,
  getChat,
  createChat,
  appendMessage,
};
