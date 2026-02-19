import type { ReactNode } from "react";
import Overview from "../pages/Overview";
import GettingStarted from "../pages/GettingStarted";
import Pokedex from "../pages/Pokedex";
import Pokemon from "../pages/Pokemon";
import RandomPokemon from "../pages/RandomPokemon";
import Evolution from "../pages/Evolution";
import Team from "../pages/Team";

export type Tab = {
  path: string;
  label: string;
  component: ReactNode;
};

export const INTRO_TABS: Tab[] = [
  { path: "overview", label: "Overview", component: <Overview /> },
  {
    path: "getting-started",
    label: "Getting started",
    component: <GettingStarted />,
  },
];

export const API_ENDPOINTS: Tab[] = [
  { path: "pokedex", label: "Pokedex", component: <Pokedex /> },
  { path: "pokemon", label: "Pokemon", component: <Pokemon /> },
  {
    path: "randomPokemon",
    label: "Random Pokemon",
    component: <RandomPokemon />,
  },
  { path: "evolution", label: "Evolution", component: <Evolution /> },
  { path: "team", label: "Team", component: <Team /> },
];

export const PAGES: Tab[] = [...INTRO_TABS, ...API_ENDPOINTS];

export const getApiBaseUrl = () =>
  typeof window !== "undefined" ? `${window.location.origin}/api` : "/api";
