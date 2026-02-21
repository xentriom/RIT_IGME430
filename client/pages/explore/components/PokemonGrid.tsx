import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Search } from "lucide-react";
import { TypeBadge } from "../../../components/TypeSelector";
import type { Pokemon } from "../../../lib/types";

export default function PokemonGrid({
  pokedex,
  loading,
}: {
  pokedex: Pokemon[];
  loading: boolean;
}) {
  const [filtered, setFiltered] = useState<Pokemon[]>(pokedex);

  useEffect(() => {
    setFiltered(pokedex);
  }, [pokedex]);

  return (
    <>
      <div className="py-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-taupe-400" />
          <input
            className="w-full pl-10 pr-4 py-2 bg-taupe-100 border border-taupe-200 rounded-lg text-sm placeholder:text-taupe-400 focus:outline-none focus:ring-2 focus:ring-taupe-400 focus:ring-inset transition-colors"
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
      </div>

      {loading ? (
        <PokemonGridSkeleton />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
          {filtered.map((p) => (
            <Link
              key={p.id}
              to={{
                pathname: "/",
                search: `?page=view-pokedex&id=${p.id}`,
              }}
              className="group p-2 relative overflow-hidden rounded-xl bg-taupe-100 border border-taupe-200 shadow-sm hover:shadow-md hover:border-taupe-300 transition-all duration-300 cursor-pointer"
            >
              <span className="absolute top-2 right-2 text-xs font-mono text-taupe-400 group-hover:text-taupe-600 transition-colors">
                #{p.num}
              </span>
              <img
                src={p.img}
                alt={p.name}
                title={p.name}
                className="aspect-square w-full h-auto object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
              />
              <div className="text-center py-2">
                <h2 className="font-bold truncate line-clamp-1">{p.name}</h2>
                <div className="flex flex-wrap justify-center gap-1">
                  {p.type.map((t) => (
                    <TypeBadge key={t} type={t} className="text-xs" />
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

function PokemonGridSkeleton() {
  return (
    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="aspect-3/4 animate-pulse rounded-xl bg-taupe-100"
        />
      ))}
    </div>
  );
}
