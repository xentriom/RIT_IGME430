const controllers = require("./controllers");
const mid = require("./middleware");

const router = (app) => {
  app.get("/", mid.requiresSecure, controllers.Pages.landingPage);
  app.get("/app", mid.requiresSecure, controllers.Pages.appPage);

  app.get("/auth", mid.requiresSecure, mid.requiresLogout, (req, res) => {
    res.redirect("/auth/login");
  });
  app.get("/auth/logout", mid.requiresLogin, controllers.Account.logout);
  app.get("/auth/:type", mid.requiresSecure, mid.requiresLogout, controllers.Pages.authPage);

  app.get("/u/:id", mid.requiresSecure, controllers.Pages.profilePage);
  app.get("/dms/:id", mid.requiresLogin, controllers.Pages.dmsPage);

  app.post("/auth/login", mid.requiresSecure, mid.requiresLogout, controllers.Account.login);
  app.post("/auth/signup", mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
};

module.exports = router;
