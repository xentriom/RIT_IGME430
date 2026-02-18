const { respond } = require("../../utils/respond");
const { Pokedex } = require("../../utils/pokedex");

const GET = (req, res) => {
  respond(req, res, 200, "application/json", Pokedex.pokedex);
};

const HEAD = (req, res) => {
  respond(req, res, 200, "application/json", Pokedex.pokedex);
};

module.exports = {
  GET,
  HEAD,
};
