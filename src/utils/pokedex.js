class PokedexUtils {
  pokedex = [];
  length = 0;

  constructor() {
    this.pokedex = require("../../client/pokedex.json");
    this.length = this.pokedex.length;
  }

  getPokemon(identifier) {
    return this.pokedex.find(
      (p) =>
        p.id === parseInt(identifier) ||
        p.num === identifier ||
        p.name === identifier,
    );
  }

  getPokemonById(id) {
    return this.pokedex.find((p) => p.id === id);
  }

  getPokemonByNum(num) {
    return this.pokedex.find((p) => p.num === num);
  }

  getPokemonByName(name) {
    return this.pokedex.find((p) => p.name === name);
  }

  addPokemon(name, type, height, weight, weaknesses, next_evolution) {
    // Check if the pokemon already exists
    if (this.getPokemonByName(name)) {
      return null;
    }

    // Get the last pokemon
    const lastPokemon = this.pokedex[this.pokedex.length - 1];

    // Create the new pokemon
    const newPokemon = {
      id: lastPokemon.id + 1,
      num: String(lastPokemon.num).padStart(3, "0") + 1,
      name: name,
      type: type,
      height: height,
      weight: weight,
      weaknesses: weaknesses,
      next_evolution: next_evolution,
    };

    // Add the new pokemon to the pokedex
    this.pokedex.push(newPokemon);
    return newPokemon;
  }
}

const Pokedex = new PokedexUtils();

module.exports = {
  Pokedex,
};
