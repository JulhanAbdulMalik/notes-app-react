import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NotesApp from "./components/NotesApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotesApp />
  </StrictMode>
);
