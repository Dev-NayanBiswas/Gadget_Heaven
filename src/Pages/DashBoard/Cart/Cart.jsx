import { useContext } from "react"
import DashCard from "../../../Components/DashCard"
import { CartContext } from "../../../Utils/Context/allContext";
import EmptyPage from "../../../Components/EmptyPage";

function Cart() {
     const {totalPrice,cart,cartManager} = useContext(CartContext);
  return (
    <>
    <section>
      {
        cart.length? cart?.map((info)=><DashCard key={info.product_id} cartInfo={info}/>) : <EmptyPage msg={"Select some products first"}/>
      }
    </section>
    </>
  )
}

export default Cart
