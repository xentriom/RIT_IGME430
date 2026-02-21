const { respond } = require("../../../utils/respond");
const { Pokedex } = require("../../../db/pokedex");

const GET = async (req, res) => {
  const pokedex = await Pokedex.getAll();
  respond(req, res, 200, "application/json", pokedex);
};

const HEAD = async (req, res) => {
  const pokedex = await Pokedex.getAll();
  respond(req, res, 200, "application/json", pokedex);
};

module.exports = {
  GET,
  HEAD,
};
