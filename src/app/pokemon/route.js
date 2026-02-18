const { getParams, respond } = require("../../utils/index");
const { Pokedex } = require("../../utils/pokedex");

const GET = (req, res) => {
  // Check for search params
  const { id, num, name } = getParams(req);
  if (!id && !num && !name) {
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

  respond(req, res, 200, "application/json", pokemon);
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
  const pokemon = Pokedex.getPokemon(id || num || name);
  if (!pokemon) {
    respond(req, res, 404, "application/json", {
      id: "pokemonNotFound",
      message: "Pokemon not found",
    });
    return;
  }

  respond(req, res, 200, "application/json", pokemon);
};

const POST = (req, res) => {
  const { name, type, height, weight, weaknesses, next_evolution } = req.body;
  if (!name || !type || !height || !weight || !weaknesses || !next_evolution) {
    respond(req, res, 400, "application/json", {
      id: "missingRequiredFields",
      message: "Missing required fields",
    });
    return;
  }

  // Add the new pokemon to the pokedex
  const newPokemon = Pokedex.addPokemon(
    name,
    type,
    height,
    weight,
    weaknesses,
    next_evolution,
  );

  // If the pokemon already exists, return an error
  if (!newPokemon) {
    respond(req, res, 400, "application/json", {
      id: "pokemonAlreadyExists",
      message: "Pokemon already exists",
    });
    return;
  }

  respond(req, res, 201, "application/json", newPokemon);
};

module.exports = {
  GET,
  HEAD,
  POST,
};
