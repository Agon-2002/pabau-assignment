import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { StepProvider } from "./context/stepContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StepProvider>
      <RouterProvider router={router} />
    </StepProvider>
  </React.StrictMode>
);
