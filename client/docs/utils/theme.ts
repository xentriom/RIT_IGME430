const STORAGE_KEY = "theme";
export const THEMES = [
  "neutral",
  "zinc",
  "taupe",
  "mauve",
  "mist",
  "olive",
] as const;
export type Theme = (typeof THEMES)[number];

export function getTheme(): Theme {
  if (typeof window === "undefined") return "taupe";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && THEMES.includes(stored as Theme)) return stored as Theme;
  return "taupe";
}

export function setTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
}

export function initTheme(): void {
  setTheme(getTheme());
}
