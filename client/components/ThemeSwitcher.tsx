import { useTheme, THEMES } from "../lib/theme";
import { cn } from "../lib/utils";

// A 2x3 grid of buttons, each representing a theme
// Allows the user to switch between preset themes
export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="shrink-0 p-4">
      <h2 className="text-xs font-semibold uppercase text-taupe-400 select-none py-1">
        Theme
      </h2>
      <div className="grid grid-cols-3 items-center gap-1 rounded-md border border-taupe-300 bg-taupe-50 p-1">
        {THEMES.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTheme(t)}
            className={cn(
              "rounded px-2 py-1 text-xs font-medium capitalize transition-colors",
              theme === t
                ? "bg-taupe-700 text-taupe-50"
                : "text-taupe-700 hover:bg-taupe-200",
            )}
            aria-pressed={theme === t}
            aria-label={`Switch to ${t} theme`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
