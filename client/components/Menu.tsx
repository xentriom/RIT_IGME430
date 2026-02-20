import { Link } from "react-router";

export default function Menu() {
  return (
    <div className="absolute top-10 left-0 z-100 w-full h-full bg-taupe-100 p-4 pt-8 sm:hidden">
      <div className="flex flex-col gap-6 text-2xl">
        <Link to="/docs">Docs</Link>
        <Link to="/team">Team</Link>
        <Link to="https://github.com/xentriom/RIT_IGME430/tree/Project1">
          GitHub
        </Link>
      </div>
    </div>
  );
}
