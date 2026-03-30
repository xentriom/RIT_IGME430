const controllers = require("./controllers");
const mid = require("./middleware");

const router = (app) => {
  app.get("/", mid.requiresSecure, controllers.Pages.landingPage);
  app.get("/app", mid.requiresSecure, controllers.Pages.appPage);
  app.get("/auth", mid.requiresSecure, mid.requiresLogout, controllers.Pages.authPage);
  app.get("/u/:id", mid.requiresSecure, controllers.Pages.profilePage);
  app.get("/dms/:id", mid.requiresLogin, controllers.Pages.dmsPage);
};

module.exports = router;
