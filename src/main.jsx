import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Router.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import PlantProvider from "./contexts/PlantProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <PlantProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </PlantProvider>
    </AuthProvider>
  </StrictMode>
);