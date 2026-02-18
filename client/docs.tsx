import { createRoot } from "react-dom/client";
import App from "./docs/App";
import "./globals.css";
import "./docs/index.css";

const root = document.getElementById("root");
if (root) createRoot(root).render(<App />);
