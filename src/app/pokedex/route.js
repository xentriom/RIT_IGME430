const { respond } = require("../../utils/respond");
const { Pokedex } = require("../../utils/pokedex");

const GET = (req, res) => {
  respond(req, res, 200, "application/json", Pokedex.getPokedex());
};

const HEAD = (req, res) => {
  respond(req, res, 200, "application/json", Pokedex.getPokedex());
};

module.exports = {
  GET,
  HEAD,
};
