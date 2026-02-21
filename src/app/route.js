const { readFileSync } = require("fs");
const { respond } = require("../utils/index.js");

const index = readFileSync(`${__dirname}/../../hosted/client.html`, "utf-8");

const GET = async (req, res) => {
  await respond(req, res, 200, "text/html", index);
};

module.exports = {
  GET,
};
