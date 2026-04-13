const models = require("../models");

const webPage = (_req, res) => {
  res.render("web");
};

const profilePage = async (req, res) => {
  const { username } = req.params;
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
  const { type } = req.params;
  res.render("auth", {
    title: "Auth",
    type,
  });
};

const premiumPage = (req, res) => {
  res.render("premium");
};

const postPage = async (req, res) => {
  const { postId } = req.params;
  if (!postId) return res.redirect("/");

  const post = await models.Post.findById(postId);
  if (!post) return res.redirect("/");

  const account = await models.Account.findById(post.owner);

  res.render("post", {
    username: account.displayName,
    title: post.body.slice(0, 50) + (post.body.length > 50 ? "..." : ""),
    post: post,
  });
};

const mynaPage = (req, res) => {
  res.render("myna");
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
  mynaPage,
  notFoundPage,
};
