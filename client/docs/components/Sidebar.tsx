import { cn } from "../../lib/utils";
import { Link } from "react-router";
import { INTRO_TABS, API_ENDPOINTS } from "../utils/constants";
import ThemeSwitcher from "./ThemeSwitcher";

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
        "fixed md:static top-22 bottom-0 left-0 z-50 w-72 border-r border-taupe-300 bg-taupe-100 transition-transform duration-200 ease-out flex flex-col min-h-0 md:h-full md:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <nav className="flex-1 min-h-0 flex flex-col" aria-label="Documentation">
        <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4 text-sm">
          <div>
            <h2 className="text-xs font-semibold uppercase text-taupe-400 select-none py-1">
              Base URL
            </h2>
            <code className="block text-xs text-taupe-600 bg-taupe-200/80 rounded px-2 py-1.5 font-mono break-all">
              {typeof window !== "undefined"
                ? `${window.location.origin}/api`
                : "/api"}
            </code>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase text-taupe-400 select-none py-1">
              Introduction
            </h2>
            <ul className="space-y-0">
              {INTRO_TABS.map((intro) => (
                <li key={intro.path} className="border-l-2 border-taupe-300">
                  <Link
                    to={{
                      pathname: "/docs",
                      search: `?tab=${intro.path}`,
                    }}
                    className={cn(
                      "block p-2 rounded-r-md no-underline",
                      (intro.path ? tab === intro.path : !tab)
                        ? "bg-taupe-200 -ml-0.5 border-l-2 border-taupe-500 text-taupe-900 font-medium"
                        : "text-taupe-700 hover:bg-taupe-200 hover:text-taupe-900",
                    )}
                  >
                    {intro.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase text-taupe-400 select-none py-1">
              Endpoints
            </h2>
            <ul className="space-y-0">
              {API_ENDPOINTS.map((endpoint) => (
                <li key={endpoint.path} className="border-l-2 border-taupe-300">
                  <Link
                    to={{
                      pathname: "/docs",
                      search: `?tab=${endpoint.path}`,
                    }}
                    className={cn(
                      "block p-2 rounded-r-md no-underline",
                      tab === endpoint.path
                        ? "bg-taupe-200 -ml-0.5 border-l-2 border-taupe-500 text-taupe-900 font-medium"
                        : "text-taupe-700 hover:bg-taupe-200 hover:text-taupe-900",
                    )}
                  >
                    {endpoint.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ThemeSwitcher />
      </nav>
    </aside>
  );
}
