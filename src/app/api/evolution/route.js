const { getParams, respond } = require("../../../utils/index");
const { getEvolutionChain } = require("./getEvolutionChain");
const { Pokedex } = require("../../../utils/pokedex");

const GET = (req, res) => {
  const { id, num, name } = getParams(req);
  if (!id || !num || !name) {
    respond(req, res, 400, "application/json", {
      id: "missingRequiredFields",
      message: "Missing required fields",
    });
    return;
  }

  // Find a matching pokemon
  const pokemon = Pokedex.getPokemon(id || num || name);
  if (!pokemon) {
    respond(req, res, 404, "application/json", {
      id: "pokemonNotFound",
      message: "Pokemon not found",
    });
    return;
  }

  const payload = getEvolutionChain(pokemon);
  respond(req, res, 200, "application/json", payload);
};

const HEAD = (req, res) => {
  const { id, num, name } = getParams(req);
  if (!id || !num || !name) {
    respond(req, res, 400, "application/json", {
      id: "missingRequiredFields",
      message: "Missing required fields",
    });
    return;
  }

  // Find a matching pokemon
  const pokemon = Pokedex.getPokemon(id || num || name);
  if (!pokemon) {
    respond(req, res, 404, "application/json", {
      id: "pokemonNotFound",
      message: "Pokemon not found",
    });
    return;
  }

  const payload = getEvolutionChain(pokemon);
  respond(req, res, 200, "application/json", payload);
};

module.exports = {
  GET,
  HEAD,
};
