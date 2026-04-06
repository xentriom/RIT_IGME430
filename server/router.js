const controllers = require("./controllers");
const mid = require("./middleware");

const router = (app) => {
  // Pages
  app.get("/", mid.requiresSecure, controllers.Pages.webPage);
  app.get("/premium", mid.requiresSecure, controllers.Pages.premiumPage);
  app.get("/u/:username", mid.requiresSecure, controllers.Pages.profilePage);
  app.get("/p/:postId", mid.requiresSecure, controllers.Pages.postPage);

  // Helper to redirect on session
  app.get("/profile", mid.requiresSecure, (req, res) => {
    const session = req.session.account;
    if (!session) return res.redirect("/auth/login");
    return res.redirect(`/u/${session.username}`);
  });

  // Auth
  app.get("/auth/logout", mid.requiresSecure, mid.requiresLogin, controllers.Account.logout);
  app.get("/auth/:type", mid.requiresSecure, mid.requiresLogout, controllers.Pages.authPage);
  app.post("/auth/login", mid.requiresSecure, mid.requiresLogout, controllers.Account.login);
  app.post("/auth/signup", mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
  app.get("/api/session", mid.requiresSecure, controllers.Account.getSession);

  // Users
  app.get("/api/users", mid.requiresSecure, controllers.User.getAccounts);
  app.get("/api/users/:username", mid.requiresSecure, controllers.User.getAccount);
  app.post(
    "/api/users/:username/follow",
    mid.requiresSecure,
    mid.requiresLogin,
    controllers.User.toggleFollow,
  );

  // Posts
  app.get("/posts", mid.requiresSecure, controllers.Post.getFeed);
  app.get("/posts/:postId", mid.requiresSecure, controllers.Post.getPost);
  app.get("/posts/:postId/replies", mid.requiresSecure, controllers.Post.getPostReplies);
  app.post("/posts", mid.requiresSecure, mid.requiresLogin, controllers.Post.createPost);
  app.post(
    "/posts/:postId/replies",
    mid.requiresSecure,
    mid.requiresLogin,
    controllers.Post.createReply,
  );
  app.post(
    "/posts/:postId/like",
    mid.requiresSecure,
    mid.requiresLogin,
    controllers.Post.toggleLike,
  );
  app.delete("/posts/:postId", mid.requiresSecure, mid.requiresLogin, controllers.Post.deletePost);

  // Misc
  app.get("/api/stories", mid.requiresSecure, async (req, res) => {
    const stories = await fetch("https://actually-relevant-api.onrender.com/api/stories");
    const data = await stories.json();
    return res.json(data);
  });

  // Premium
  app.post("/api/premium/purchase", mid.requiresSecure, controllers.Premium.purchase);
};

module.exports = router;
