const { readFileSync } = require("fs");
const { respond } = require("../../utils/index.js");

const css = readFileSync(`${__dirname}/../../../hosted/client.css`, "utf-8");

const GET = (req, res) => {
  respond(req, res, 200, "text/css", css);
};

module.exports = {
  GET,
};
