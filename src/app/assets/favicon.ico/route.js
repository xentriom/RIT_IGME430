const { readFileSync } = require("fs");
const { respond } = require("../../../utils/index.js");

const favicon = readFileSync(
  `${__dirname}/../../../../hosted/assets/favicon.ico`,
);

const GET = async (req, res) => {
  await respond(req, res, 200, "image/x-icon", favicon);
};

module.exports = {
  GET,
};
