import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root from "./Pages";
import "./style.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
