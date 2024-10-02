import { Fragment } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.jsx";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <Fragment>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Fragment>
);
