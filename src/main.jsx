import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./routes/Routes";
import { RouterProvider } from "react-router";
import UserProvider from "./context/UserProvider";
import ToastProvider from "./components/ToastProvider";
import CourseProvider from "./context/CourseProvider";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <CourseProvider>
          <ToastProvider />
          <RouterProvider router={router} />
        </CourseProvider>
      </UserProvider>
    </QueryClientProvider>
  </StrictMode>
);
