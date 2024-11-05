import { useContext } from "react"
import DashCard from "../../../Components/DashCard"
import { CartContext } from "../../../Utils/Context/allContext";

function Cart() {
     const {totalPrice,cart,cartManager} = useContext(CartContext);
     console.log(totalPrice, cart);
  return (
    <>
    <section className="">
      {
        cart && cart?.map((info)=><DashCard key={info.product_id} cartInfo={info}/>)
      }
    </section>
    </>
  )
}

export default Cart
