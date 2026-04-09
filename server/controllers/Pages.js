const models = require("../models");

const webPage = (_req, res) => {
  res.render("web");
};

const profilePage = async (req, res) => {
  const username = req.params.username ?? "".trim();
  if (!username) return res.redirect("/app");

  const account = await models.Account.findByUsername(username);
  if (!account) return res.redirect("/app");

  res.render("profile", {
    username: account.username,
    displayName: account.displayName,
    desc: account.bio,
    avatar: account.avatar,
  });
};

const authPage = (req, res) => {
  const type = String(req.params.type ?? "login")
    .trim()
    .toLowerCase();
  res.render("auth", {
    title: "Auth",
    type,
  });
};

const premiumPage = (req, res) => {
  res.render("premium", {
    title: "Premium",
  });
};

const postPage = async (req, res) => {
  const postId = req.params.postId;
  if (!postId) return res.redirect("/");

  const post = await models.Post.findById(postId);
  if (!post) return res.redirect("/");

  res.render("post", {
    username: "Demo",
    post: post,
  });
};

const notFoundPage = (req, res) => {
  res.status(404).render("not-found");
};

module.exports = {
  webPage,
  profilePage,
  authPage,
  premiumPage,
  postPage,
  notFoundPage,
};
