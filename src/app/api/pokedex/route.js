const { getParams } = require("../../../utils/getParams");
const { respond } = require("../../../utils/respond");
const { Pokedex } = require("../../../utils/pokedex");

const pokedexLength = Pokedex.length;

const GET = (req, res) => {
  const limit = getParams(req).limit || 5;
  if (!limit || isNaN(limit) || limit < 1 || limit > pokedexLength) {
    respond(req, res, 400, "application/json", {
      id: "invalidLimit",
      message: "Invalid limit provided",
    });
    return;
  }

  respond(req, res, 200, "application/json", Pokedex.pokedex.slice(0, limit));
};

const HEAD = (req, res) => {
  const limit = getParams(req).limit || 5;
  if (!limit || isNaN(limit) || limit < 1 || limit > pokedexLength) {
    respond(req, res, 400, "application/json", {
      id: "invalidLimit",
      message: "Invalid limit provided",
    });
    return;
  }

  respond(req, res, 200, "application/json", Pokedex.pokedex.slice(0, limit));
};

module.exports = {
  GET,
  HEAD,
};
