import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes.tsx";
import { ProductsProvider } from "./context/Product_context.tsx";
import Nav from "./components/Navbar.tsx";
import Sidebar from "./components/Sidebar.tsx";

import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>
          <Auth0ProviderWithNavigate>
            <Nav />
            <Sidebar />
            <AppRoutes />
            <Toaster visibleToasts={1} position="top-right" richColors />
          </Auth0ProviderWithNavigate>
        </ProductsProvider>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
