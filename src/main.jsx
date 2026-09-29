import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./pages/header.jsx";
import { Main } from "./pages/main.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Main />
  </StrictMode>,
);
