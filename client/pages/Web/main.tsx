import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import SessionProvider from "../../contexts/session";
import { TooltipProvider } from "../../components/ui/tooltip";
import { Toaster } from "../../components/ui/sonner";
import "../../style.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SessionProvider>
      <TooltipProvider>
        <App />
        <Toaster position="top-center" richColors />
      </TooltipProvider>
    </SessionProvider>
  </StrictMode>,
);
