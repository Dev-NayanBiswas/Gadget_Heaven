import { useLocation } from "react-router-dom"
import { PiSortAscendingBold } from "react-icons/pi";

function SmallNav() {
    const location = useLocation();
    console.log(location);
  return (
    <>
    <section className="my-4">
        <section className="flex justify-between items-center">
                <h6 className="text-left text-gray-800/45 text-2xl">{location.pathname === "/dashboard/cart" ? "Cart" : "Wishlist"}</h6>
                <div></div>
                { location.pathname === "/dashboard/cart" &&
                <section className="buttons flex justify-center items-center gap-5">
                    <h6 className="text-left text-gray-800/45 text-2xl">Total Cost :</h6>
                        <button className="btn_primary flex items-center justify-center gap-3 text-[var(--primary-color)] border-[1px] border-[var(--primary-color)]">Sort By Price <PiSortAscendingBold className="text-xl"/></button>
                        <button className="btn_primary text-white bg-[var(--primary-color)]">Purchase</button>
                </section>
                }
        </section>
    </section>

         
       
            
    </>
  )
}

export default SmallNav