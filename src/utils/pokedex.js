const { readFileSync, writeFileSync, existsSync } = require("fs");
const { join } = require("path");

const TYPE_CHART = {
  Normal: { weak: ["Fighting"], resist: [], immune: ["Ghost"] },
  Fire: {
    weak: ["Water", "Ground", "Rock"],
    resist: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    immune: [],
  },
  Water: {
    weak: ["Electric", "Grass"],
    resist: ["Fire", "Water", "Ice", "Steel"],
    immune: [],
  },
  Electric: {
    weak: ["Ground"],
    resist: ["Electric", "Flying", "Steel"],
    immune: [],
  },
  Grass: {
    weak: ["Fire", "Ice", "Poison", "Flying", "Bug"],
    resist: ["Water", "Electric", "Grass", "Ground"],
    immune: [],
  },
  Ice: {
    weak: ["Fire", "Fighting", "Rock", "Steel"],
    resist: ["Ice"],
    immune: [],
  },
  Fighting: {
    weak: ["Flying", "Psychic", "Fairy"],
    resist: ["Rock", "Bug", "Dark"],
    immune: [],
  },
  Poison: {
    weak: ["Ground", "Psychic"],
    resist: ["Fighting", "Poison", "Bug", "Grass", "Fairy"],
    immune: [],
  },
  Ground: {
    weak: ["Water", "Grass", "Ice"],
    resist: ["Poison", "Rock"],
    immune: ["Electric"],
  },
  Flying: {
    weak: ["Electric", "Ice", "Rock"],
    resist: ["Fighting", "Bug", "Grass"],
    immune: ["Ground"],
  },
  Psychic: {
    weak: ["Bug", "Ghost", "Dark"],
    resist: ["Fighting", "Psychic"],
    immune: [],
  },
  Bug: {
    weak: ["Fire", "Flying", "Rock"],
    resist: ["Fighting", "Ground", "Grass"],
    immune: [],
  },
  Rock: {
    weak: ["Water", "Grass", "Fighting", "Ground", "Steel"],
    resist: ["Normal", "Fire", "Poison", "Flying"],
    immune: [],
  },
  Ghost: {
    weak: ["Ghost", "Dark"],
    resist: ["Poison", "Bug"],
    immune: ["Normal", "Fighting"],
  },
  Dragon: {
    weak: ["Ice", "Dragon", "Fairy"],
    resist: ["Fire", "Water", "Electric", "Grass"],
    immune: [],
  },
  Dark: {
    weak: ["Fighting", "Bug", "Fairy"],
    resist: ["Ghost", "Dark"],
    immune: ["Psychic"],
  },
  Steel: {
    weak: ["Fire", "Fighting", "Ground"],
    resist: [
      "Normal",
      "Grass",
      "Ice",
      "Flying",
      "Psychic",
      "Bug",
      "Rock",
      "Dragon",
      "Steel",
      "Fairy",
    ],
    immune: ["Poison"],
  },
  Fairy: {
    weak: ["Poison", "Steel"],
    resist: ["Fighting", "Bug", "Dark"],
    immune: ["Dragon"],
  },
};

const ALL_TYPES = Object.keys(TYPE_CHART);

function getWeaknesses(types) {
  // Inspired by:
  // https://github.com/yashrajbharti/Pokemon-Type-Weakness-Calculator/blob/main/script.js
  const typeList = Array.isArray(types) ? types : [types];
  const weaknesses = [];

  for (const attackingType of ALL_TYPES) {
    let effectiveness = 1;
    for (const defendingType of typeList) {
      const chart = TYPE_CHART[defendingType];
      if (!chart) continue;
      if (chart.immune.includes(attackingType)) effectiveness *= 0;
      else if (chart.weak.includes(attackingType)) effectiveness *= 2;
      else if (chart.resist.includes(attackingType)) effectiveness *= 0.5;
    }
    if (effectiveness >= 2) weaknesses.push(attackingType);
  }
  return weaknesses;
}

const POKEDEX_FILE = join(__dirname, "../../client/pokedex.json");

class PokedexUtils {
  pokedex = [];
  length = 0;

  constructor() {
    this._load();
  }

  _load() {
    if (!existsSync(POKEDEX_FILE)) {
      this.pokedex = [];
      this.length = 0;
      return;
    }

    try {
      const data = readFileSync(POKEDEX_FILE, "utf-8");
      this.pokedex = JSON.parse(data);
      this.length = this.pokedex.length;
    } catch {
      this.pokedex = [];
      this.length = 0;
    }
  }

  _save() {
    writeFileSync(POKEDEX_FILE, JSON.stringify(this.pokedex, null, 2), "utf-8");
    this.length = this.pokedex.length;
  }

  getTypes() {
    return ALL_TYPES;
  }

  getTypeChart() {
    return TYPE_CHART;
  }

  getPokemon(identifier) {
    return this.pokedex.find(
      (p) =>
        p.id === parseInt(identifier) ||
        p.num === identifier ||
        p.name.toLowerCase() === identifier.toLowerCase(),
    );
  }

  getPokemonById(id) {
    return this.pokedex.find((p) => p.id === parseInt(id));
  }

  getPokemonByNum(num) {
    return this.pokedex.find((p) => p.num === num);
  }

  getPokemonByName(name) {
    return this.pokedex.find(
      (p) => p.name.toLowerCase() === name.toLowerCase(),
    );
  }

  addPokemon(name, type, height, weight, next_evolution) {
    // Check if the pokemon already exists
    if (this.getPokemonByName(name)) {
      return null;
    }

    // Get the last pokemon
    const lastPokemon = this.pokedex[this.pokedex.length - 1];
    const weaknesses = getWeaknesses(type);

    // Create the new pokemon
    const newPokemon = {
      id: lastPokemon.id + 1,
      num: String(parseInt(lastPokemon.num) + 1).padStart(3, "0"),
      name: name,
      type: type,
      height: height,
      weight: weight,
      weaknesses,
      next_evolution: next_evolution,
    };

    // Add the new pokemon to the pokedex
    this.pokedex.push(newPokemon);
    this._save();
    return newPokemon;
  }
}

const Pokedex = new PokedexUtils();

module.exports = {
  Pokedex,
};
