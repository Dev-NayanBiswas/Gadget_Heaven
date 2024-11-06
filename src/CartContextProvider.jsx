import React, { useEffect, useState } from "react";
import {CartContext} from "./Utils/Context/allContext.js"
import { toast, ToastContainer } from "react-toastify";



function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);


  function cartManager(data,action) {
    if(action==="add"){
      let checkingExistence = cart?.find(
        (product) => product.product_id === data.product_id,
      );
      if (checkingExistence) {
        toast.warn(`${data.product_title} Existed on Cart`)
        return;
      } else {
        if (totalPrice + data.price > 1000) {
          toast.error("Limit Crossed");
          return;
        } else {
          setCart([...cart, data]);
          setTotalPrice((totalPrice) => totalPrice + data.price)
          toast.info(`${data.product_title} added on Cart`);
        }
        return;
      }
    }else if(action==="remove"){
      const filtrateData = cart?.filter(item=>item.product_id !== data.product_id);
      setTotalPrice(prev=>prev - data.price)
      setCart(filtrateData);
      toast.success(`${data.product_title} removed from Cart`) 
    }
  }
  return (
    <CartContext.Provider
      value={{ cart, cartManager, totalPrice, setTotalPrice, setCart}}>
      {children}
      <ToastContainer position="top-center" autoClose={3000} />
    </CartContext.Provider>
  );
}

export default CartContextProvider;
