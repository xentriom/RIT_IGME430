const models = require("../models");

const getAccount = async (req, res) => {
  const username = req.params.username;
  if (!username) return res.status(400).json({ error: "Username is required!" });

  const account = await models.Account.findByUsername(username);
  if (!account) return res.status(404).json({ error: "User not found!" });

  return res.json(account);
};

module.exports = { getAccount };
