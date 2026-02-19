import { useState } from "react";
import type { Pokemon } from "../types";
import pokedexData from "../pokedex.json";

const pokedex = pokedexData as Pokemon[];

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="antialiased min-h-screen bg-slate-100 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div>
          <input
            className="w-full p-2 border border-slate-300 rounded-md shadow-sm focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
            type="text"
            placeholder="Search Pokémon..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
