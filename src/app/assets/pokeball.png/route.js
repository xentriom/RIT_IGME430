const { readFileSync } = require("fs");
const { respond } = require("../../../utils/index.js");

const pokeball = readFileSync(
  `${__dirname}/../../../../hosted/assets/pokeball.png`,
);

const GET = async (req, res) => {
  await respond(req, res, 200, "image/png", pokeball);
};

module.exports = {
  GET,
};
