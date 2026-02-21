export const POKEMON_TYPES = [
  "Normal",
  "Fire",
  "Water",
  "Electric",
  "Grass",
  "Ice",
  "Fighting",
  "Poison",
  "Ground",
  "Flying",
  "Psychic",
  "Bug",
  "Rock",
  "Ghost",
  "Dragon",
  "Dark",
  "Steel",
  "Fairy",
] as const;

export type PokemonType = (typeof POKEMON_TYPES)[number];

export const TYPE_COLORS: Record<PokemonType, string> = {
  Normal: "bg-gray-400 hover:bg-gray-500",
  Fire: "bg-orange-500 hover:bg-orange-600",
  Water: "bg-blue-500 hover:bg-blue-600",
  Electric: "bg-yellow-400 hover:bg-yellow-500",
  Grass: "bg-green-500 hover:bg-green-600",
  Ice: "bg-cyan-300 hover:bg-cyan-400",
  Fighting: "bg-red-700 hover:bg-red-800",
  Poison: "bg-purple-500 hover:bg-purple-600",
  Ground: "bg-amber-600 hover:bg-amber-700",
  Flying: "bg-indigo-400 hover:bg-indigo-500",
  Psychic: "bg-pink-500 hover:bg-pink-600",
  Bug: "bg-lime-500 hover:bg-lime-600",
  Rock: "bg-stone-500 hover:bg-stone-600",
  Ghost: "bg-violet-700 hover:bg-violet-800",
  Dragon: "bg-indigo-700 hover:bg-indigo-800",
  Dark: "bg-neutral-700 hover:bg-neutral-800",
  Steel: "bg-slate-400 hover:bg-slate-500",
  Fairy: "bg-pink-300 hover:bg-pink-400",
};

export const TYPE_BG_ONLY: Record<PokemonType, string> = {
  Normal: "bg-gray-400",
  Fire: "bg-orange-500",
  Water: "bg-blue-500",
  Electric: "bg-yellow-400",
  Grass: "bg-green-500",
  Ice: "bg-cyan-300",
  Fighting: "bg-red-700",
  Poison: "bg-purple-500",
  Ground: "bg-amber-600",
  Flying: "bg-indigo-400",
  Psychic: "bg-pink-500",
  Bug: "bg-lime-500",
  Rock: "bg-stone-500",
  Ghost: "bg-violet-700",
  Dragon: "bg-indigo-700",
  Dark: "bg-neutral-700",
  Steel: "bg-slate-400",
  Fairy: "bg-pink-300",
};

export function getTypeColor(type: string): string {
  return TYPE_COLORS[type as PokemonType] ?? "bg-gray-400 hover:bg-gray-500";
}

export function getTypeBg(type: string): string {
  return TYPE_BG_ONLY[type as PokemonType] ?? "bg-gray-400";
}
