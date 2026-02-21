import type { ReactNode } from "react";
import Overview from "../pages/Overview";
import GettingStarted from "../pages/GettingStarted";
import Evolution from "../pages/endpoint/Evolution";
import Pokedex from "../pages/endpoint/Pokedex";
import Pokemon from "../pages/endpoint/Pokemon";
import RandomPokemon from "../pages/endpoint/RandomPokemon";
import Team from "../pages/endpoint/Team";
import ExplorePokedex from "../pages/explore/Pokedex";
import ExploreTeam from "../pages/explore/Team";
import BuilderPokemon from "../pages/builder/Pokemon";
import BuilderTeam from "../pages/builder/Team";

export type Tab = {
  path: string;
  label: string;
  component: ReactNode;
};

export type Link = {
  path: string;
  label: string;
  url: string;
  icon?: ReactNode;
};

export const INTRO_TABS: Tab[] = [
  { path: "overview", label: "Overview", component: <Overview /> },
  {
    path: "getting-started",
    label: "Getting started",
    component: <GettingStarted />,
  },
];

export const VIEW_TABS: Tab[] = [
  {
    path: "view-pokedex",
    label: "Pokedex",
    component: <ExplorePokedex />,
  },
  { path: "view-team", label: "Teams", component: <ExploreTeam /> },
];

export const CREATOR_TABS: Tab[] = [
  {
    path: "create-pokemon",
    label: "Pokémon",
    component: <BuilderPokemon />,
  },
  {
    path: "create-team",
    label: "Team",
    component: <BuilderTeam />,
  },
];

export const API_ENDPOINTS: Tab[] = [
  { path: "evolution", label: "Evolution", component: <Evolution /> },
  { path: "pokedex", label: "Pokedex", component: <Pokedex /> },
  { path: "pokemon", label: "Pokémon", component: <Pokemon /> },
  {
    path: "randomPokemon",
    label: "Random Pokémon",
    component: <RandomPokemon />,
  },
  { path: "team", label: "Team", component: <Team /> },
];

export const LINKS: Link[] = [
  {
    path: "github",
    label: "GitHub Repository",
    url: "https://github.com/xentriom/RIT_IGME430/tree/Project1",
  },
];

export type SidebarItem = {
  label: string;
  items: Tab[] | Link[];
};

export const SIDEBAR: SidebarItem[] = [
  { label: "Introduction", items: INTRO_TABS },
  { label: "Explore", items: VIEW_TABS },
  { label: "Build Your Own", items: CREATOR_TABS },
  { label: "Endpoints", items: API_ENDPOINTS },
  { label: "Links", items: LINKS },
];

export const PAGES: Tab[] = [
  ...INTRO_TABS,
  ...VIEW_TABS,
  ...CREATOR_TABS,
  ...API_ENDPOINTS,
];

export const getApiBase = () =>
  typeof window !== "undefined" ? `${window.location.origin}/api` : "/api";
