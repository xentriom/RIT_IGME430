const { getParams, respond } = require("../../../utils/index");
const { getRandomPokemon } = require("./getRandomPokemon");
const { Pokedex } = require("../../../utils/pokedex");

const GET = async (req, res) => {
  const limit = getParams(req).limit || 1;
  const count = await Pokedex.getCount();

  // Invalid limit range
  if (!limit || limit < 1 || limit > count) {
    respond(req, res, 400, "application/json", {
      id: "invalidLimit",
      message: "Invalid limit provided",
    });
    return;
  }

  // Pick random Pokemon and return them
  const randomPokemon = await getRandomPokemon(limit);
  respond(req, res, 200, "application/json", randomPokemon);
};

const HEAD = async (req, res) => {
  const limit = getParams(req).limit || 1;
  const count = await Pokedex.getCount();

  // Invalid limit range
  if (!limit || limit < 1 || limit > count) {
    respond(req, res, 400, "application/json", {
      id: "invalidLimit",
      message: "Invalid limit provided",
    });
    return;
  }

  // Pick random Pokemon and return them
  const randomPokemon = await getRandomPokemon(limit);
  respond(req, res, 200, "application/json", randomPokemon);
};

module.exports = {
  GET,
  HEAD,
};
