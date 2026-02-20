import { useState } from "react";
import type { Pokemon } from "../types";
import pokedexData from "../pokedex.json";

const pokedex = pokedexData as Pokemon[];

export default function App() {
  const [search, setSearch] = useState("");
  const filtered = pokedex.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="antialiased min-h-screen bg-taupe-100 text-taupe-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex">
          <input
            className="flex-1 p-2 border border-taupe-300 rounded-md shadow-sm focus:ring-2 focus:ring-taupe-500 focus:border-taupe-500"
            type="text"
            placeholder="Search Pokémon..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="shrink-0">Create Pokemon</button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-2 p-4 md:p-8">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="relative group border border-taupe-300 rounded-md my-2 bg-taupe-50 h-full"
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-auto object-contain group-hover:scale-105 mask-b-from-10% to-0%"
            />
            <div className="text-center absolute inset-x-0 bottom-0 p-2">
              <h2 className="text-xl font-bold">{p.name}</h2>
              <p className="text-sm text-taupe-700 hidden group-hover:block">
                Type: {p.type.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
