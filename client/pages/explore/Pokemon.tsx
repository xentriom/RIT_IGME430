import { useState, useEffect } from "react";
import type { Pokemon } from "../../lib/types";

export default function App() {
  const [pokedex, setPokedex] = useState<Pokemon[]>([]);
  const [filtered, setFiltered] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchPokedex() {
      const res = await fetch("/api/pokedex");
      const data = await res.json();
      setPokedex(data);
      setFiltered(data);
    }

    fetchPokedex();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Pokedex</h1>
      <div className="py-8">
        <input
          className="w-full p-2 border border-taupe-300 rounded-md shadow-sm focus:ring-2 focus:ring-taupe-500 focus:border-taupe-500"
          type="text"
          placeholder="Search Pokémon..."
          onChange={(e) =>
            setFiltered(
              pokedex.filter((p) =>
                p.name.toLowerCase().includes(e.target.value.toLowerCase()),
              ),
            )
          }
        />
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="group p-2 relative overflow-hidden rounded-xl bg-taupe-100 border border-taupe-200 shadow-sm hover:shadow-md hover:border-taupe-300 transition-all duration-300 cursor-pointer"
          >
            <span className="absolute top-2 right-2 text-xs font-mono text-taupe-400 group-hover:text-taupe-600 transition-colors">
              #{p.num}
            </span>
            <img
              src={p.img}
              alt={p.name}
              className="aspect-square w-full h-auto object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
            />
            <div className="text-center py-2">
              <h2 className="font-bold truncate line-clamp-1">{p.name}</h2>
              <div className="flex flex-wrap justify-center gap-1">
                {p.type.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-taupe-200/70 text-taupe-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
