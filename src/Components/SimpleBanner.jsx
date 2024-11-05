import { useContext, useState } from "react";
import { PiSortAscendingBold } from "react-icons/pi";
import { NavLink, useLocation } from "react-router-dom";
import { CartContext } from "../Utils/Context/AllContext";
import Modal from "./Modal";

function SimpleBanner({title}) {
  const [showModal, setShowModal] = useState(false)
  const {totalPrice,cart,cartManager, setCart} = useContext(CartContext)
  const location = useLocation();
    const path = location.pathname.split("/");
    const sectionHeader = path[path.length-1];

      function handleSortAndPurchase(command){

        if(command === "sort"){
          const sortedData = cart&& cart?.toSorted((a,b)=>b.price - a.price);
          setCart(sortedData);
        }else{
            setShowModal(!showModal)
        }
      }
    return (
    <>
    {
      showModal && <Modal taka={totalPrice} onClose={handleSortAndPurchase}/>
    }
      <section className='h-[30vh] w-full flex flex-col justify-center gap-6 bg-[var(--primary-color)]'>
        <h1 className='text-white text-center text-3xl font-semibold'>
          {title}
        </h1>
        <p className='w-5/12 mx-auto text-sm text-center my-3 text-white'>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>

        {/* Only Visible on DashBoard */}
        {
          location.pathname.includes("dashboard") && <nav className='flex justify-center items-center gap-6'>
          <NavLink
            to='/dashboard/cart'
            className={({ isActive }) =>
              isActive ? "dashNavAc" : "dashNavIn"
            }>
            Cart
          </NavLink>
          <NavLink
            to='/dashboard/wishList'
            className={({ isActive }) =>
              isActive ? "dashNavAc" : "dashNavIn"
            }>
            Wishlist
          </NavLink>
        </nav>
        }
      </section>
        {/* Only visible on Cart */}
        <section className='my-4'>
          <section className='flex justify-between items-center'>
            <h6 className='text-left text-gray-800/45 text-2xl capitalize'>
              {sectionHeader}
            </h6>
            <div></div>
            {location.pathname === "/dashboard/cart" && (
              <section className='buttons flex justify-center items-center gap-5'>
                <h6 className='text-left text-gray-800/45 text-2xl'>
                  Total Cost : $ {totalPrice}
                </h6>
                {cart && cart.length ? <button onClick={()=>handleSortAndPurchase("sort")} className='btn_primary flex items-center justify-center gap-3 text-[var(--primary-color)] border-[1px] border-[var(--primary-color)]'>
                  Sort By Price <PiSortAscendingBold className='text-xl' />
                </button> : ""}
                {
                  cart && cart?.length ? <button onClick={handleSortAndPurchase} className='btn_primary text-white bg-[var(--primary-color)]'>
                  Purchase
                </button> : ""
                }
              </section>
            )}
          </section>
        </section>
    </>
  );
}

export default SimpleBanner;
