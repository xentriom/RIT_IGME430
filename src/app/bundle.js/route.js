const { readFileSync } = require("fs");
const { respond } = require("../../utils/index.js");

const script = readFileSync(`${__dirname}/../../../hosted/bundle.js`, "utf-8");

const GET = (req, res) => {
  respond(req, res, 200, "application/javascript", script);
};

module.exports = {
  GET,
};
