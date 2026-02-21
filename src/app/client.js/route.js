const { readFileSync } = require("fs");
const { respond } = require("../../utils/index.js");

const script = readFileSync(`${__dirname}/../../../hosted/client.js`, "utf-8");

const GET = async (req, res) => {
  await respond(req, res, 200, "application/javascript", script);
};

module.exports = {
  GET,
};
