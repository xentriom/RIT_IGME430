import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import SessionProvider from "../../contexts/session";
import { TooltipProvider } from "../../components/ui/tooltip";
import { Toaster } from "../../components/ui/sonner";
import { Dialog } from "../../components/ui/dialog";
import "../../style.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SessionProvider>
      <TooltipProvider>
        <Dialog>
          <App />
        </Dialog>
        <Toaster position="top-center" richColors />
      </TooltipProvider>
    </SessionProvider>
  </StrictMode>,
);
