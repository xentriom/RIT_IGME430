import { Link } from "react-router";
import type { Pokemon } from "../../../lib/types";

type Evolution = { num: string; name: string };

export default function EvolutionLink({
  evo,
  pokemon,
}: {
  evo: Evolution;
  pokemon?: Pokemon;
}) {
  return (
    <Link
      to={{ pathname: "/", search: `?page=view-pokedex&id=${pokemon?.id}` }}
      className="flex items-center gap-2 bg-taupe-200/50 hover:bg-taupe-200 rounded-xl px-3 py-2 transition-colors"
    >
      {pokemon && (
        <img
          src={pokemon.img}
          alt={evo.name}
          className="size-10 object-contain"
        />
      )}
      <div>
        <p className="text-xs text-taupe-500">#{evo.num}</p>
        <p className="font-medium">{evo.name}</p>
      </div>
    </Link>
  );
}
