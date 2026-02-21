import { ArrowRight } from "lucide-react";
import EvolutionLink from "./EvolutionLink";
import type { Pokemon } from "../../../lib/types";

type Evolution = { num: string; name: string };

type EvolutionChain = {
  previous_evolution: Evolution[];
  next_evolution: Evolution[];
};

export default function EvolutionSection({
  evolution,
  getPokemon,
}: {
  evolution: EvolutionChain | null;
  getPokemon: (num: string) => Pokemon | undefined;
}) {
  const hasEvolutions =
    evolution &&
    (evolution.previous_evolution.length > 0 ||
      evolution.next_evolution.length > 0);

  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-sm font-medium text-taupe-600">Evolution Chain</h3>
      {hasEvolutions ? (
        <div className="flex flex-wrap items-center gap-3">
          {evolution.previous_evolution.map((evo) => (
            <EvolutionLink
              key={evo.num}
              evo={evo}
              pokemon={getPokemon(evo.num)}
            />
          ))}
          {evolution.previous_evolution.length > 0 && (
            <ArrowRight className="size-4 text-taupe-400" />
          )}
          <span className="font-medium text-taupe-600">(current)</span>
          {evolution.next_evolution.length > 0 && (
            <ArrowRight className="size-4 text-taupe-400" />
          )}
          {evolution.next_evolution.map((evo) => (
            <EvolutionLink
              key={evo.num}
              evo={evo}
              pokemon={getPokemon(evo.num)}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm text-taupe-400">No evolution chain</p>
      )}
    </section>
  );
}
