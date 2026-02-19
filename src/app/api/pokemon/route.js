const { getParams, respond } = require("../../../utils/index");
const { Pokedex } = require("../../../utils/pokedex");

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
  const { name, type, height, weight } = req.body;
  if (!name || !type || !height || !weight) {
    respond(req, res, 400, "application/json", {
      id: "missingRequiredFields",
      message: "Missing required fields",
    });
    return;
  }

  // Only 2 types max
  if (type.length > 2) {
    respond(req, res, 400, "application/json", {
      id: "invalidTypes",
      message: "Only 2 types max",
    });
    return;
  }

  // Check if the types are valid
  let invalidTypes = [];
  for (const t of type) {
    if (!Pokedex.getTypes().includes(t)) {
      invalidTypes.push(t);
    }
  }

  // If there are invalid types, return an error
  if (invalidTypes.length > 0) {
    respond(req, res, 400, "application/json", {
      id: "invalidTypes",
      message: "Invalid type(s): " + invalidTypes.join(", "),
    });
    return;
  }

  // Add the new pokemon to the pokedex (weaknesses are computed from type)
  const newPokemon = Pokedex.addPokemon(name, type, height, weight);

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
