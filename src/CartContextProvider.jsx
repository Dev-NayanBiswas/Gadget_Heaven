import React, { useState } from "react";
import { CartContext } from "./Utils/Context/AllContext.js";


function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function cartManager(data,action) {
    if(action==="add"){
      let checkingExistence = cart?.find(
        (product) => product.product_id === data.product_id,
      );
      if (checkingExistence) {
        alert(`${data.product_title} is Existed on Cart`);
        return;
      } else {
        if (totalPrice + data.price > 1000) {
          alert("Limit Crossed");
          return;
        } else {
          setCart([...cart, data]);
          setTotalPrice((totalPrice) => totalPrice + data.price);
        }
        return;
      }
    }else if(action==="remove"){
      const filtrateData = cart?.filter(item=>item.product_id !== data.product_id);
      setTotalPrice(prev=>prev - data.price)
      setCart(filtrateData); 
    }
  }
  return (
    <CartContext.Provider
      value={{ cart, cartManager, totalPrice, setTotalPrice, setCart}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
