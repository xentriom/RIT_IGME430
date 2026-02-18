const { readFileSync } = require("fs");
const { respond } = require("../../utils/index.js");

const index = readFileSync(`${__dirname}/../../../hosted/docs.html`, "utf-8");

const GET = (req, res) => {
  respond(req, res, 200, "text/html", index);
};

module.exports = {
  GET,
};
