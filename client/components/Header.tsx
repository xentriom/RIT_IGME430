import { useState } from "react";
import MenuIcon from "./MenuIcon";
import Menu from "./Menu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="row-span-1 z-50 h-12 flex items-center border-b border-taupe-300 bg-taupe-100">
        <div className="flex items-center px-4 md:px-8 w-full justify-between">
          <a href="/" className="text-xl font-bold">
            Pokémon API
          </a>

          <nav className="hidden sm:flex items-center gap-4" aria-label="Main">
            <a
              href="/"
              className="text-sm text-taupe-700 hover:text-taupe-900 no-underline"
            >
              Docs
            </a>
            <a
              href="/team"
              className="text-sm text-taupe-700 hover:text-taupe-900 no-underline"
            >
              Team
            </a>
            <a
              href="https://github.com/xentriom/RIT_IGME430/tree/Project1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-taupe-700 hover:text-taupe-900 no-underline"
            >
              GitHub
            </a>
          </nav>

          <button
            type="button"
            className="sm:hidden p-2 rounded-md hover:bg-taupe-200 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </header>

      {menuOpen && <Menu />}
    </>
  );
}
