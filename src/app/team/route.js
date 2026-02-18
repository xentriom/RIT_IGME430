const { getParams, respond } = require("../../utils/index");
const { Team } = require("../../utils/team");

const GET = (req, res) => {
  const { id } = getParams(req);
  if (!id) {
    respond(req, res, 200, "application/json", Team.team);
    return;
  }

  const team = Team.getTeam(id);
  if (!team) {
    respond(req, res, 404, "application/json", {
      id: "teamNotFound",
      message: "Team not found",
    });
  }

  respond(req, res, 200, "application/json", team);
};

const HEAD = (req, res) => {
  const { id } = getParams(req);
  if (!id) {
    respond(req, res, 200, "application/json", Team.team);
    return;
  }
  
  const team = Team.getTeam(id);
  if (!team) {
    respond(req, res, 404, "application/json", {
      id: "teamNotFound",
      message: "Team not found",
    });
    return;
  }

  respond(req, res, 200, "application/json", team);
};

const POST = (req, res) => {
  const { name, pokemons } = req.body;
  if (!name || !pokemons) {
    respond(req, res, 400, "application/json", {
      id: "missingRequiredFields",
      message: "Missing required fields",
    });
  }

  // idk how its gonna work so its gonna be empty for now
};

module.exports = {
  GET,
  HEAD,
  POST,
};
