// Comments for how this file functions can be found on the original assignment:
// https://github.com/xentriom/http-api-assignment-ii/blob/master/src/server.js
// Everything is copied and pasted

const { createServer } = require("http");
const { join } = require("path");
const { existsSync } = require("fs");
require("dotenv").config();
const { parseBody, respond } = require("./utils/index.js");

const port = process.env.PORT || process.env.NODE_PORT || 3000;
const baseDir = join(__dirname, "app");

const onRequest = async (req, res) => {
  const path = req.url.split("?")[0];

  const segment = path === "/" ? "" : path.slice(1).replace(/\/$/, "");
  const routePath = segment
    ? join(baseDir, segment, "route.js")
    : join(baseDir, "route.js");

  if (!existsSync(routePath)) {
    await respond(req, res, 404, "application/json", {
      id: "notFound",
      message: "The page you are looking for was not found.",
    });
    return;
  }

  const route = require(routePath);
  const handler = route[req.method];

  if (!handler || typeof handler !== "function") {
    await respond(req, res, 405, "application/json", {
      id: "methodNotAllowed",
      message: "The method you are trying to use is not allowed.",
    });
    return;
  }

  if (req.method === "POST") {
    await parseBody(req);
  }

  try {
    await handler(req, res);
  } catch (err) {
    console.error("Handler error:", err);
    await respond(req, res, 500, "application/json", {
      id: "serverError",
      message: "An internal server error occurred.",
    });
  }
};

createServer(onRequest).listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on: http://localhost:${port}`);
});
