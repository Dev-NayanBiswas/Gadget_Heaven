import { StrictMode} from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes.jsx";
import CartContextProvider from "./CartContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextProvider>
    <RouterProvider router={routes}>
    </RouterProvider>
    </CartContextProvider>
  </StrictMode>,
);
