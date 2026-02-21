import { Activity, useState } from "react";
import { useSearchParams } from "react-router";
import MobileHeader from "./components/MobileHeader";
import Sidebar from "./components/Sidebar";
import { PAGES } from "./lib/constants";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "overview";

  return (
    <div className="grid grid-rows-[auto_auto_1fr] h-dvh bg-taupe-200 text-taupe-900 overflow-hidden">
      <MobileHeader
        tab={page}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] md:grid-rows-1 overflow-hidden min-h-0 h-full md:h-dvh">
        <Sidebar tab={page} sidebarOpen={sidebarOpen} />
        <div className="overflow-y-auto h-full">
          <main className="px-6 pt-8 pb-20 md:px-12 md:pt-16 md:pb-40">
            {PAGES.map((p) => (
              // Uses Activity to keep component mounted
              // Also speeds up the page load time
              <Activity
                key={p.path}
                mode={page === p.path ? "visible" : "hidden"}
              >
                {p.component}
              </Activity>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
