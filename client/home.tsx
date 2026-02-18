import { createRoot } from "react-dom/client";
import App from "./home/App";
import "./globals.css";
import "./home/index.css";

const root = document.getElementById("root");
if (root) createRoot(root).render(<App />);
