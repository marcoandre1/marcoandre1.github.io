import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
  // Unlike with createRoot, you don't need a separate root.render() call here.
} else {
  const root = createRoot(rootElement);
  root.render(<App />);
}
