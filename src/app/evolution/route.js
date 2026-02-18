const { getParams, respond } = require("../../utils/index");
const { getEvolutionChain } = require("./getEvolutionChain");
const pokedex = require("../../../client/pokedex.json");

const GET = (req, res) => {
  const { id, num, name } = getParams(req);
  if (!id && !num && !name) {
    respond(req, res, 400, "application/json", {
      id: "missingRequiredFields",
      message: "Missing required fields",
    });
    return;
  }

  // Find a matching pokemon
  const pokemon = pokedex.find(
    (p) => p.id === parseInt(id) || p.num === num || p.name === name,
  );

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
  if (!id && !num && !name) {
    respond(req, res, 400, "application/json", {
      id: "missingRequiredFields",
      message: "Missing required fields",
    });
    return;
  }

  // Find a matching pokemon
  const pokemon = pokedex.find(
    (p) => p.id === parseInt(id) || p.num === num || p.name === name,
  );

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
