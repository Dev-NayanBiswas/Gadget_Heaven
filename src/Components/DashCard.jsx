import React, { useContext } from 'react'
import { CgCloseO } from "react-icons/cg";
import { useLocation } from 'react-router-dom';
import imageURL from '../Utils/Scripts/imageURL';
import { CartContext } from '../Utils/Context/allContext';

function DashCard({cartInfo}) {
  console.log(cartInfo);
  const location = useLocation();
  const {cartManager} = useContext(CartContext);

  const {product_title,product_image,price,description} = cartInfo || {}
  
  return (
    <>
        <section className="border-[1px] bg-white/45 border-opacity-10 p-4 rounded-xl my-5">
            <section className="bg-gray-50 min-h-[20vh] rounded-xl relative flex justify-start gap-7 shadow-md">
                
                    <figure className=" h-[200px] aspect-square py-4 pl-4">
                      <img className="rounded-lg shadow-sm object-cover w-full h-full" src={imageURL(product_image)} alt={product_title} />
                    </figure>
                
                <article className="flex flex-col justify-evenly items-start gap-4 py-4 pl-4">
                  <h3 className="text-2xl text-left font-bold text-gray-700/85">{product_title}</h3>
                  <p className="text-sm font-semibold text-gray-900/25 w-9/12">{description}</p>
                  <h5 className="text-xl font-bold text-gray-800/65 text-left">Price : $ {price}</h5>
                  {
                    location.pathname.includes("/dashboard/wishList") && <button className="bg-[var(--primary-color)] text-white font-semibold btn_primary flex gap-2 justify-center items-center mb-2">Add to Cart</button>
                  }
                </article>
                <button onClick={()=>cartManager(cartInfo,"remove")} className="absolute -right-6 -top-6">
                  <CgCloseO color='' size={30} />
                </button>
            </section>
        </section>
    </>
  )
}

export default DashCard