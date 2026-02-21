import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import TeamDetail, { TeamDetailSkeleton } from "./components/TeamDetail";
import TeamGrid from "./components/TeamGrid";
import type { Team, Pokemon } from "../../lib/types";

export default function Team() {
  const [pokedex, setPokedex] = useState<Pokemon[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    async function fetchData() {
      const [teamsRes, pokedexRes] = await Promise.all([
        fetch("/api/team"),
        fetch("/api/pokedex"),
      ]);

      const teamsData = await teamsRes.json();
      const pokedexData = await pokedexRes.json();

      setTeams(teamsData);
      setPokedex(pokedexData);
      setLoading(false);
    }

    setLoading(true);
    fetchData();
  }, []);

  const tid = searchParams.get("tid");
  const team = tid ? teams.find((t) => t.id === tid) : null;

  return (
    <>
      <header>
        <h1 className="text-3xl font-bold">P'dexiom Teams</h1>
      </header>

      {/* If tid is provided, show the team detail */}
      {tid && loading ? (
        <TeamDetailSkeleton />
      ) : team ? (
        <TeamDetail team={team} pokedex={pokedex} />
      ) : (
        <TeamGrid teams={teams} pokedex={pokedex} loading={loading} />
      )}
    </>
  );
}
