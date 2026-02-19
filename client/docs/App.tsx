import { Activity, useState, Suspense } from "react";
import { useSearchParams } from "react-router";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import Sidebar from "./components/Sidebar";
import { PAGES } from "./utils/constants";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "overview";

  return (
    <div className="grid grid-rows-[auto_auto_1fr] h-dvh bg-taupe-200 text-taupe-900 overflow-hidden">
      <Header />
      <MobileHeader
        tab={tab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] md:grid-rows-1 overflow-hidden min-h-0 h-full md:h-[calc(100dvh-3rem)]">
        <Sidebar tab={tab} sidebarOpen={sidebarOpen} />
        <div className="overflow-y-auto h-full">
          <main className="p-8 pb-20 md:p-16 md:pb-40">
            {PAGES.map((p) => (
              <Activity
                key={p.path}
                mode={tab === p.path ? "visible" : "hidden"}
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
