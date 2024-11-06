import { useContext, useState } from "react";
import { CartContext, WishlistContext } from "./Utils/Context/allContext";
import { toast } from "react-toastify";

function WishlistContextProvider({ children }) {
  const { cart, cartManager,totalPrice} = useContext(CartContext);

  const [wishlist, setWishlist] = useState([]);

  function removeFromWishlist(data) {
    const leftOverValue = wishlist?.filter(
      (item) => item.product_id !== data.product_id,
    );
    setWishlist(leftOverValue);
    return;
  }

  function addToCart(data){
    const existedOrNot = cart?.find((product)=>product.product_id === data.product_id);
    if(existedOrNot){
      toast.info(`${data.product_title} Exists on Cart`)
        return;
    }else if(totalPrice + data.price > 1000){
      toast.error("$1000 Limit Reached")
        return;
    }
    cartManager(data,"add");
    removeFromWishlist(data);
  }


  function wishlistManager(data) {
    const filterData = wishlist?.find(
      (item) => item.product_id === data.product_id,
    );
    if (!filterData) {
      setWishlist([...wishlist, data]);
      toast.success(`${data.product_title} added to wishlist`)
    } else {
      toast.error(`${data.product_title} already in wishlist`);
      return;
    }
  }

  return (
    <WishlistContext.Provider
      value={{ wishlist, setWishlist, wishlistManager, removeFromWishlist ,addToCart}}>
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistContextProvider;
