import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./routes/Routes";
import { RouterProvider } from "react-router";
import UserProvider from "./context/UserProvider";
import ToastProvider from "./components/ToastProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <ToastProvider />
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
