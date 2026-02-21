import { cn } from "../lib/utils";
import { Link } from "react-router";
import { SIDEBAR, type Tab, type Link as LinkType } from "../lib/constants";
import ThemeSwitcher from "./ThemeSwitcher";

function isLink(item: Tab | LinkType): item is LinkType {
  return "url" in item;
}

function NavItem({ item, tab }: { item: Tab | LinkType; tab: string | null }) {
  const isActive = tab === item.path;
  const baseStyles = "block p-2 rounded-r-md no-underline";
  const activeStyles =
    "bg-taupe-200 -ml-0.5 border-l-2 border-taupe-500 text-taupe-900 font-medium";
  const inactiveStyles =
    "text-taupe-700 hover:bg-taupe-200 hover:text-taupe-900";

  if (isLink(item)) {
    return (
      <li className="border-l-2 border-taupe-300">
        <Link
          to={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, inactiveStyles)}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="border-l-2 border-taupe-300">
      <Link
        to={{ pathname: "/", search: `?page=${item.path}` }}
        className={cn(baseStyles, isActive ? activeStyles : inactiveStyles)}
      >
        {item.label}
      </Link>
    </li>
  );
}

function NavSection({
  label,
  items,
  tab,
}: {
  label: string;
  items: (Tab | LinkType)[];
  tab: string | null;
}) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase text-taupe-400 select-none py-1">
        {label}
      </h2>
      <ul className="space-y-0">
        {items.map((item) => (
          <NavItem key={item.path} item={item} tab={tab} />
        ))}
      </ul>
    </div>
  );
}

export default function Sidebar({
  tab,
  sidebarOpen,
}: {
  tab: string | null;
  sidebarOpen: boolean;
}) {
  return (
    <aside
      className={cn(
        "fixed md:static top-10 bottom-0 left-0 z-50 w-72 border-r border-taupe-300 bg-taupe-100 transition-transform duration-200 ease-out flex flex-col min-h-0 md:h-full md:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <nav className="flex-1 min-h-0 flex flex-col" aria-label="Documentation">
        <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4 text-sm">
          <div className="flex items-center gap-2 border-b border-taupe-300 pb-4">
            <img
              src="/assets/pokeball.png"
              alt="P'dexiom"
              className="size-10 rounded-md"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">P'dexiom</h1>
              <span className="text-sm text-taupe-500">
                The ultimate API for Pokémon
              </span>
            </div>
          </div>

          {SIDEBAR.map((section) => (
            <NavSection
              key={section.label}
              label={section.label}
              items={section.items}
              tab={tab}
            />
          ))}
        </div>

        <ThemeSwitcher />
      </nav>
    </aside>
  );
}
