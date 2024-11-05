import { useContext } from "react"
import { WishlistContext } from "../../../Utils/Context/allContext"
import WishlistCard from "../../../Components/WishlistCard";
import EmptyPage from "../../../Components/EmptyPage";

function WishList(){
    const {wishlist} = useContext(WishlistContext);

  return (
    <>
      <section>
        {
          wishlist.length ? wishlist?.map((cardInfo)=><WishlistCard key={cardInfo.product_id} cartInfo={cardInfo}/>) : <EmptyPage msg={"Your Wishlist is Empty"}/>
        }
      </section>
    </>
  )
}

export default WishList