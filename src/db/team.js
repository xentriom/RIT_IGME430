const supabase = require("./index");

class TeamUtils {
  async getAll() {
    const { data: teams, error } = await supabase
      .from("teams")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;

    const teamsWithPokemons = await Promise.all(
      teams.map(async (team) => ({
        ...team,
        pokemons: await this._getTeamPokemons(team.id),
      })),
    );

    return teamsWithPokemons;
  }

  async _getTeamPokemons(teamId) {
    const { data, error } = await supabase
      .from("team_members")
      .select("pid, position")
      .eq("tid", teamId)
      .order("position");
    if (error) throw error;
    return data.map((row) => ({ id: row.pid, position: row.position }));
  }

  async createTeam(name, pokemons) {
    if (!name || !pokemons) {
      return null;
    }

    if (pokemons.length < 1 || pokemons.length > 6) {
      return null;
    }

    const { data: team, error: teamError } = await supabase
      .from("teams")
      .insert({ name })
      .select()
      .single();
    if (teamError) throw teamError;

    const members = pokemons.map((p) => ({
      tid: team.id,
      pid: p.id,
      position: p.position,
    }));

    const { error: membersError } = await supabase
      .from("team_members")
      .insert(members);
    if (membersError) throw membersError;

    return { ...team, pokemons };
  }

  async getTeam(id) {
    const { data: team, error } = await supabase
      .from("teams")
      .select("*")
      .eq("id", id)
      .maybeSingle();
    if (error) throw error;
    if (!team) return null;

    const pokemons = await this._getTeamPokemons(id);
    return { ...team, pokemons };
  }

  async updateTeamName(id, name) {
    if (!name) {
      return null;
    }

    const { data: team, error } = await supabase
      .from("teams")
      .update({ name })
      .eq("id", id)
      .select()
      .maybeSingle();
    if (error) throw error;
    if (!team) return null;

    const pokemons = await this._getTeamPokemons(id);
    return { ...team, pokemons };
  }

  async updateTeamPokemons(id, pokemons) {
    if (!pokemons) {
      return null;
    }

    const { data: team, error: teamError } = await supabase
      .from("teams")
      .select("*")
      .eq("id", id)
      .maybeSingle();
    if (teamError) throw teamError;
    if (!team) return null;

    const { error: deleteError } = await supabase
      .from("team_members")
      .delete()
      .eq("tid", id);
    if (deleteError) throw deleteError;

    const members = pokemons.map((p) => ({
      tid: id,
      pid: p.id,
      position: p.position,
    }));

    const { error: insertError } = await supabase
      .from("team_members")
      .insert(members);
    if (insertError) throw insertError;

    return { ...team, pokemons };
  }

  async deleteTeam(id) {
    const team = await this.getTeam(id);
    if (!team) {
      return null;
    }

    const { error } = await supabase.from("teams").delete().eq("id", id);
    if (error) throw error;

    return team;
  }
}

const Team = new TeamUtils();

module.exports = {
  Team,
};
