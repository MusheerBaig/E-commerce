import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import FormProvider from "./context/FormContext.jsx";
import ShoppingCartProvider from "./context/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FormProvider>
        <ShoppingCartProvider>
          <App />
        </ShoppingCartProvider>
      </FormProvider>
    </BrowserRouter>
  </StrictMode>
);
