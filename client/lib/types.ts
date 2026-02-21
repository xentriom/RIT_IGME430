export interface Pokemon {
  id: number;
  num: string;
  name: string;
  img: string;
  type: string[];
  height: string;
  weight: string;
  weaknesses: string[];
  next_evolution?: { num: string; name: string }[];
}

export interface Team {
  id: string;
  name: string;
  created_at: string;
  pokemons: { id: number; position: number }[];
}
