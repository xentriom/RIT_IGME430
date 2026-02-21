const { getParams, respond } = require("../../../utils/index");
const { Team } = require("../../../db/team");

const GET = async (req, res) => {
  const { id } = getParams(req);
  if (!id) {
    const teams = await Team.getAll();
    respond(req, res, 200, "application/json", teams);
    return;
  }

  const team = await Team.getTeam(id);
  if (!team) {
    respond(req, res, 404, "application/json", {
      id: "teamNotFound",
      message: "Team not found",
    });
    return;
  }

  respond(req, res, 200, "application/json", team);
};

const HEAD = async (req, res) => {
  const { id } = getParams(req);
  if (!id) {
    const teams = await Team.getAll();
    respond(req, res, 200, "application/json", teams);
    return;
  }

  const team = await Team.getTeam(id);
  if (!team) {
    respond(req, res, 404, "application/json", {
      id: "teamNotFound",
      message: "Team not found",
    });
    return;
  }

  respond(req, res, 200, "application/json", team);
};

const POST = async (req, res) => {
  const { name, pokemons } = req.body || {};
  if (!name || !pokemons) {
    respond(req, res, 400, "application/json", {
      id: "missingRequiredFields",
      message: "Missing required fields: name and pokemons",
    });
    return;
  }

  const team = await Team.createTeam(name, pokemons);
  if (!team) {
    respond(req, res, 400, "application/json", {
      id: "invalidTeam",
      message: "Team must have 1-6 pokémon",
    });
    return;
  }

  respond(req, res, 201, "application/json", team);
};

module.exports = {
  GET,
  HEAD,
  POST,
};
