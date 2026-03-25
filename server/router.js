const controllers = require("./controllers");
const mid = require("./middleware");

const router = (app) => {
  app.get("/getDomos", mid.requiresLogin, controllers.Domo.getDomos);
  app.get("/getAllPublicDomos", mid.requiresSecure, controllers.Domo.getAllPublicDomos);
  app.post("/updateDomoVisibility", mid.requiresLogin, controllers.Domo.updateDomoVisibility);
  app.get("/getOwnerName/:ownerId", mid.requiresSecure, controllers.Account.getOwnerName);

  app.get("/login", mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.post("/login", mid.requiresSecure, mid.requiresLogout, controllers.Account.login);

  app.post("/signup", mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);

  app.get("/logout", mid.requiresLogin, controllers.Account.logout);

  app.get("/maker", mid.requiresLogin, controllers.Domo.makerPage);
  app.post("/maker", mid.requiresLogin, controllers.Domo.makeDomo);

  app.get("/", mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
};

module.exports = router;
