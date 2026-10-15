import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/next";
import "modern-normalize/modern-normalize.css";
import App from "./components/App/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
);
