const { getParams, respond } = require("../../utils/index");
const { getRandomPokemon } = require("./getRandomPokemon");
const pokedex = require("../../../client/pokedex.json");

const GET = (req, res) => {
  const limit = getParams(req).limit || 1;

  // Invalid limit range
  if (limit < 1 || limit > pokedex.length) {
    respond(req, res, 400, "application/json", {
      id: "invalidLimit",
      message: "Invalid limit provided",
    });
    return;
  }

  // Pick random Pokemon and return them
  const randomPokemon = getRandomPokemon(limit);
  respond(req, res, 200, "application/json", randomPokemon);
};

const HEAD = (req, res) => {
  const limit = getParams(req).limit || 1;

  // Invalid limit range
  if (limit < 1 || limit > pokedex.length) {
    respond(req, res, 400, "application/json", {
      id: "invalidLimit",
      message: "Invalid limit provided",
    });
    return;
  }

  // Pick random Pokemon and return them
  const randomPokemon = getRandomPokemon(limit);
  respond(req, res, 200, "application/json", randomPokemon);
};

module.exports = {
  GET,
  HEAD,
};
