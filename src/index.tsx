import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Routes/Routes";
import "./index.css";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
