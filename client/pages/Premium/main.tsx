import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import SessionProvider from "../../contexts/session";
import { Toaster } from "../../components/ui/sonner";
import "../../style.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SessionProvider>
      <App />
      <Toaster position="top-center" richColors />
    </SessionProvider>
  </StrictMode>,
);
