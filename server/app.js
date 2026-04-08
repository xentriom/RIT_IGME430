require("dotenv").config();
const { resolve } = require("path");
const express = require("express");
const compression = require("compression");
const favicon = require("serve-favicon");
const mongoose = require("mongoose");
const { engine } = require("express-handlebars");
const helmet = require("helmet");
const session = require("express-session");
const { RedisStore } = require("connect-redis");
const { createClient } = require("redis");
const fileUpload = require("express-fileupload");

const router = require("./router.js");

const port = process.env.PORT || process.env.NODE_PORT || 3000;
const dbURI = process.env.MONGODB_URI || "mongodb://localhost/Harmony";

mongoose.connect(dbURI).catch((err) => {
  console.log("Could not connect to database");
  throw err;
});

const redisClient = createClient({
  url: process.env.REDISCLOUD_URL,
});

const redisStore = new RedisStore({
  client: redisClient,
});

redisClient.connect().then(() => {
  const app = express();

  app.use(helmet());
  app.use("/assets", express.static(resolve(`${__dirname}/../hosted`)));
  app.use(favicon(`${__dirname}/../hosted/img/favicon.png`));
  app.use(compression());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(fileUpload());
  app.use(
    session({
      key: "sessionid",
      store: redisStore,
      secret: process.env.SESSION_SECRET || "Harmoniz3d",
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.engine("handlebars", engine({ defaultLayout: "" }));
  app.set("view engine", "handlebars");
  app.set("views", resolve(__dirname, "views"));

  router(app);

  app.listen(port, () => {
    console.log(`Listening on localhost:${port}`);
  });
});
