import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "./providers/ThemeProvider.jsx";
import App from "./App.jsx";
import { BASE_PATH } from "./routes.config.js";

import "./scss/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={BASE_PATH}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
