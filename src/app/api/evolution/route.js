const { getParams, respond } = require("../../../utils/index");
const { getEvolutionChain } = require("./getEvolutionChain");
const { Pokedex } = require("../../../db/pokedex");

const GET = async (req, res) => {
  const { id, num, name } = getParams(req);
  if (!id && !num && !name) {
    await respond(req, res, 400, "application/json", {
      id: "missingRequiredFields",
      message: "Missing required fields",
    });
    return;
  }

  const pokemon = await Pokedex.getPokemon(id || num || name);
  if (!pokemon) {
    await respond(req, res, 404, "application/json", {
      id: "pokemonNotFound",
      message: "Pokemon not found",
    });
    return;
  }

  const payload = await getEvolutionChain(pokemon);
  await respond(req, res, 200, "application/json", payload);
};

const HEAD = async (req, res) => {
  const { id, num, name } = getParams(req);
  if (!id && !num && !name) {
    await respond(req, res, 400, "application/json", {
      id: "missingRequiredFields",
      message: "Missing required fields",
    });
    return;
  }

  // Find a matching pokemon
  const pokemon = await Pokedex.getPokemon(id || num || name);
  if (!pokemon) {
    await respond(req, res, 404, "application/json", {
      id: "pokemonNotFound",
      message: "Pokemon not found",
    });
    return;
  }

  const payload = await getEvolutionChain(pokemon);
  await respond(req, res, 200, "application/json", payload);
};

const PATCH = async (req, res) => {
  const id = getParams(req).id;
  if (!id) {
    await respond(req, res, 400, "application/json", {
      id: "missingRequiredFields",
      message: "Missing required fields",
    });
    return;
  }

  // Pokemon exists?
  const pokemon = await Pokedex.getPokemonById(id);
  if (!pokemon) {
    await respond(req, res, 404, "application/json", {
      id: "pokemonNotFound",
      message: "Pokemon not found",
    });
    return;
  }

  // Get next pokemon id from body
  const body = req.body || {};
  const nextId = parseInt(body.next, 10);
  if (!body.next || isNaN(nextId)) {
    await respond(req, res, 400, "application/json", {
      id: "invalidNext",
      message: "Next is missing or not a valid ID",
    });
    return;
  }

  // Is next a valid pokemon?
  const last = await Pokedex.getCount();
  if (nextId > last) {
    await respond(req, res, 400, "application/json", {
      id: "invalidNext",
      message: "Next does not exist",
    });
    return;
  }

  // Next is trying to evolve into itself
  if (nextId === pokemon.id) {
    await respond(req, res, 400, "application/json", {
      id: "invalidNext",
      message: `${pokemon.name} cannot evolve into itself`,
    });
    return;
  }

  const nextPokemon = await Pokedex.getPokemonById(nextId);
  if (!nextPokemon) {
    await respond(req, res, 400, "application/json", {
      id: "invalidNext",
      message: "Next is not a valid pokemon",
    });
    return;
  }

  // Next is less than current
  if (nextId < pokemon.id) {
    await respond(req, res, 400, "application/json", {
      id: "invalidNext",
      message: `${pokemon.name} cannot evolve into ${nextPokemon.name}`,
    });
    return;
  }

  const nextEvolution = pokemon.next_evolution || [];
  if (nextEvolution.some((e) => e.num === nextPokemon.num)) {
    await respond(req, res, 400, "application/json", {
      id: "invalidNext",
      message: `${nextPokemon.name} is already in the next_evolution`,
    });
    return;
  }

  // Apparently an evo chain cannot exceed 3
  // https://pokemon.fandom.com/wiki/Evolution#:~:text=achieving%20self%2Dimprovements.-,Evolutionary%20lines,own%20branched%20evolutionary%20line%20each.
  const { previous_evolution } = await getEvolutionChain(pokemon);
  const chainLength = previous_evolution.length + 1 + nextEvolution.length;
  if (chainLength >= 3) {
    await respond(req, res, 400, "application/json", {
      id: "invalidNext",
      message: "Evolution chain cannot exceed 3 pokemon (includes previous)",
    });
    return;
  }

  // Get the highest id in next_evolution
  const maxId = Math.max(
    ...nextEvolution.map((e) => parseInt(e.num, 10)),
    pokemon.id,
  );

  if (nextId > maxId) {
    await respond(req, res, 400, "application/json", {
      id: "invalidNext",
      message: `${nextPokemon.name} cannot be an evolution of ${pokemon.name}`,
    });
    return;
  }

  const updatedEvolution = [
    ...nextEvolution,
    { num: nextPokemon.num, name: nextPokemon.name },
  ];

  // Updated next_evolution with 204
  await Pokedex.updateNextEvolution(pokemon.id, updatedEvolution);
  await respond(req, res, 204, "application/json", {});
};

module.exports = {
  GET,
  HEAD,
  PATCH,
};
