import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const queryClient = new QueryClient();
const initialOptions = {
  clientId:
    "AcfzHrpELdXbmgAyI6qNmIqacZyFNF1G7xIokNH4aB_P9OK5Ka4t9j31zWKL0uD5YortTiQPdAOClsxU",
  currency: "USD",
  intent: "capture",
};
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <PayPalScriptProvider options={initialOptions}>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            className="index-20"
          />
          <App />
        </PayPalScriptProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
