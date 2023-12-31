import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes";
import AuthContext from "./Provider/AuthContext";
import {QueryClient,QueryClientProvider,} from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContext>
        <HelmetProvider>
        <RouterProvider router={MainRoutes} />
        </HelmetProvider>
      </AuthContext>
    </QueryClientProvider>
    <Toaster position="top-center" reverseOrder={false} />
  </React.StrictMode>
);
