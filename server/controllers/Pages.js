const landingPage = (_req, res) => {
  res.render("web");
};

const appPage = (_req, res) => {
  res.render("app", {
    title: "Home",
  });
};

const profilePage = (req, res) => {
  const userId = String(req.params.id ?? "").trim();
  if (!userId) return res.redirect("/app");

  // Fetch username based on userId
  const username = "Demo";

  res.render("profile", {
    userId: userId,
    username: username,
  });
};

const dmsPage = (req, res) => {
  const userId = String(req.params.id ?? "").trim();
  console.log("test", userId);
  if (!userId) return res.redirect("/app");

  // Fetch username based on userId
  const username = "Demo";

  res.render("chat", {
    userId: userId,
    username: username,
  });
};

const authPage = (req, res) => {
  res.render("auth", {
    title: "Auth",
  });
};

module.exports = {
  landingPage,
  appPage,
  profilePage,
  dmsPage,
  authPage,
};
