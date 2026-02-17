const { respond } = require("../../utils/respond");
const pokedex = require("../../../client/pokedex.json");

const GET = (req, res) => {
  respond(req, res, 200, "application/json", pokedex);
};

const HEAD = (req, res) => {
  respond(req, res, 200, "application/json", pokedex);
};

module.exports = {
  GET,
  HEAD,
};
