import MenuIcon from "./MenuIcon";
import { Link } from "react-router";
import { cn } from "../lib/utils";
import { SIDEBAR, type Tab } from "../lib/constants";

type BreadcrumbItem = { label: string; path: string | null };

function getBreadcrumbs(tab: string | null): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ label: "Home", path: "" }];
  if (!tab) return items;

  for (const section of SIDEBAR) {
    const found = (section.items as Tab[]).find((item) => item.path === tab);
    if (found) {
      items.push({ label: section.label, path: null });
      items.push({ label: found.label, path: found.path });
      return items;
    }
  }

  return items;
}

// The mobile header that is shown on smaller screen
// Allows the user to open/close the sidebar
export default function MobileHeader({
  tab,
  sidebarOpen,
  setSidebarOpen,
}: {
  tab: string | null;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}) {
  const breadcrumbs = getBreadcrumbs(tab);

  return (
    <div className="md:hidden z-50 flex items-center gap-2 h-10 px-2 border-b border-taupe-300 bg-taupe-100">
      <button
        type="button"
        className="p-2 rounded-md hover:bg-taupe-200 transition-colors"
        aria-label={sidebarOpen ? "Close menu" : "Open menu"}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <MenuIcon open={sidebarOpen} />
      </button>

      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 text-sm text-taupe-600 min-w-0"
      >
        <ol className="flex items-center gap-2 list-none p-0 m-0 min-w-0 flex-wrap">
          {breadcrumbs.map((item, i) => (
            <li key={i} className="flex items-center gap-2 shrink-0 min-w-0">
              {i > 0 && (
                <span
                  className="text-taupe-400 shrink-0 select-none"
                  aria-hidden
                >
                  /
                </span>
              )}

              {item.path !== null ? (
                <Link
                  to={{
                    pathname: "/",
                    search: item.path ? `?page=${item.path}` : "",
                  }}
                  className={cn(
                    "shrink-0 no-underline",
                    i === breadcrumbs.length - 1
                      ? "font-medium text-taupe-800 truncate"
                      : "text-taupe-500 hover:text-taupe-900",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(
                    "shrink-0 select-none",
                    i === breadcrumbs.length - 1
                      ? "font-medium text-taupe-800 truncate"
                      : "text-taupe-500",
                  )}
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
