const { readFileSync, writeFileSync, existsSync } = require("fs");
const { join } = require("path");
const { randomUUID } = require("crypto");

const TEAM_FILE = join(__dirname, "../data/team.json");

class TeamUtils {
  team = [];
  length = 0;

  constructor() {
    this._load();
  }

  _load() {
    if (!existsSync(TEAM_FILE)) {
      this.team = [];
      this.length = 0;
      return;
    }

    try {
      const data = readFileSync(TEAM_FILE, "utf-8");
      this.team = JSON.parse(data);
      this.length = this.team.length;
    } catch {
      this.team = [];
      this.length = 0;
    }
  }

  _save() {
    writeFileSync(TEAM_FILE, JSON.stringify(this.team, null, 2), "utf-8");
    this.length = this.team.length;
  }

  createTeam(name, pokemons) {
    if (!name || !pokemons) {
      return null;
    }

    if (pokemons.length < 1 || pokemons.length > 6) {
      return null;
    }

    const newTeam = {
      id: randomUUID(),
      name: name,
      pokemons: pokemons,
    };

    this.team.push(newTeam);
    this._save();
    return newTeam;
  }

  getTeam(id) {
    return this.team.find((t) => t.id === id);
  }

  updateTeamName(id, name) {
    if (!name) {
      return null;
    }

    const team = this.getTeam(id);
    if (!team) {
      return null;
    }

    team.name = name;
    this._save();
    return team;
  }

  updateTeamPokemons(id, pokemons) {
    if (!pokemons) {
      return null;
    }

    const team = this.getTeam(id);
    if (!team) {
      return null;
    }

    team.pokemons = pokemons;
    this._save();
    return team;
  }

  deleteTeam(id) {
    const team = this.getTeam(id);
    if (!team) {
      return null;
    }

    this.team = this.team.filter((t) => t.id !== id);
    this._save();
    return team;
  }
}

const Team = new TeamUtils();

module.exports = {
  Team,
};
