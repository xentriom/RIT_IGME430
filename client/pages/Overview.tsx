import { Link } from "react-router";
import { ArrowRight, BookOpen, CodeXml, Brush, Blocks } from "lucide-react";

const FEATURES = [
  {
    title: "Complete Pokédex",
    description:
      "Access data for 151 original Pokémon including types, stats, evolutions, and more.",
    icon: <BookOpen className="size-6" />,
  },
  {
    title: "Team Builder",
    description:
      "Create and manage custom Pokémon teams with up to 6 members each.",
    icon: <Blocks className="size-6" />,
  },
  {
    title: "Custom Pokémon",
    description:
      "Add your own Pokémon to the database with custom types, stats, and details.",
    icon: <Brush className="size-6" />,
  },
  {
    title: "RESTful API",
    description:
      "Clean, well-documented endpoints with JSON responses and proper HTTP methods.",
    icon: <CodeXml className="size-6" />,
  },
];

export default function Overview() {
  return (
    <article className="max-w-none space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Welcome to P'dexiom</h1>
        <p className="text-lg text-taupe-600 max-w-2xl">
          A powerful REST API for Pokémon data. Browse the Pokédex, create
          custom Pokémon, build teams, and integrate Pokémon data into your
          applications.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            to={{ pathname: "/", search: "?page=getting-started" }}
            className="inline-flex items-center gap-2 rounded-md bg-taupe-900 px-4 py-2 text-sm font-medium text-taupe-50 hover:bg-taupe-800 transition-colors no-underline"
          >
            Get Started
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to={{ pathname: "/", search: "?page=view-pokedex" }}
            className="inline-flex items-center gap-2 rounded-md border border-taupe-300 bg-taupe-100 px-4 py-2 text-sm font-medium text-taupe-900 hover:bg-taupe-200 transition-colors no-underline"
          >
            Explore Pokédex
          </Link>
          <Link
            to={{ pathname: "/", search: "?page=view-teams" }}
            className="inline-flex items-center gap-2 rounded-md border border-taupe-300 bg-taupe-100 px-4 py-2 text-sm font-medium text-taupe-900 hover:bg-taupe-200 transition-colors no-underline"
          >
            Explore Teams
          </Link>
        </div>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Features</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-taupe-300 bg-taupe-100 p-5 space-y-2"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-taupe-200 p-2 text-taupe-700">
                  {feature.icon}
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
              </div>
              <p className="text-sm text-taupe-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
