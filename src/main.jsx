import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes.jsx";
import CartContextProvider from "./CartContextProvider.jsx";
import WishlistContextProvider from "./WishlistContextProvider.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextProvider>
      <WishlistContextProvider>
        <RouterProvider router={routes}>
      <ToastContainer />
        </RouterProvider>
      </WishlistContextProvider>
    </CartContextProvider>
  </StrictMode>,
);
