const {
  getParams,
  respond,
  optimizeAndUpload,
} = require("../../../utils/index");
const { Pokedex } = require("../../../db/pokedex");

const GET = async (req, res) => {
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
  const pokemon = await Pokedex.getPokemon(id || num || name);
  if (!pokemon) {
    respond(req, res, 404, "application/json", {
      id: "pokemonNotFound",
      message: "Pokemon not found",
    });
    return;
  }

  respond(req, res, 200, "application/json", pokemon);
};

const HEAD = async (req, res) => {
  const { id, num, name } = getParams(req);
  if (!id && !num && !name) {
    respond(req, res, 400, "application/json", {
      id: "missingRequiredFields",
      message: "Missing required fields",
    });
    return;
  }

  // Find a matching pokemon
  const pokemon = await Pokedex.getPokemon(id || num || name);
  if (!pokemon) {
    respond(req, res, 404, "application/json", {
      id: "pokemonNotFound",
      message: "Pokemon not found",
    });
    return;
  }

  respond(req, res, 200, "application/json", pokemon);
};

const POST = async (req, res) => {
  let { name, type, height, weight } = req.body;

  // Parse type if it's a JSON string (from FormData)
  if (typeof type === "string") {
    try {
      type = JSON.parse(type);
    } catch {
      type = [type];
    }
  }

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

  // Handle image upload if there
  let imageUrl = null;
  const imageFile = req.files?.image;
  if (imageFile) {
    const { url } = await optimizeAndUpload(
      imageFile.buffer,
      name,
      "custom-pkm",
    );
    imageUrl = url;
  }

  // Add the new pokemon
  const newPokemon = await Pokedex.addPokemon(
    name,
    type,
    height,
    weight,
    null,
    imageUrl,
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
