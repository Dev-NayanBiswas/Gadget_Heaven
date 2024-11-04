import imageURL from "../../public/Scripts/imageURL";
import { FaStar } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function DetailsCard() {

  const [product, setProduct] = useState({})
  const {ID} = useParams()
  const data = useLoaderData();
  useEffect(()=>{
    const flattingData = data.flatMap(category => category.items);
    const seekingProduct = flattingData.find(product => product.product_id === ID);
    setProduct({...seekingProduct});
    // console.log(product);
  },[ID,data])


      const {
        product_id,
        product_title,
        product_image,
        category,
        price,
        description,
        Specification,
        availability,
        rating
    } = product || {}


  return (
    <>
      <section>
        <section className='relative h-[40vh] w-full flex flex-col justify-center gap-6 bg-[var(--primary-color)]'>
          <section className="">
            <h1 className='text-white text-center text-3xl font-semibold'>
              Product Details
            </h1>
            <p className='w-5/12 mx-auto text-sm text-center my-3 text-white'>
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </section>
        
          <section className="absolute bg-white/35 w-8/12 mx-auto rounded-2xl p-4 border-2 scale-y-95 top-[150%] -translate-x-1/2 -translate-y-1/2 left-1/2">
                <section className="w-full h-[60vh] rounded-xl flex gap-4 bg-gray-50">
                        <figure className="w-2/5 p-3">
                        <img src={imageURL(product_image)} alt="vision pro" className="object-cover object-center w-full h-full rounded-xl" />
                        </figure>
                <section className="w-3/5 flex flex-col justify-between py-3">
                    <h3 className="text-3xl text-gray-700 font-bold">{product_title}</h3>
                    <h5 className="text-xl font-semibold text-gray-500/45">Price : $ {price}</h5>
                    
                      
                    <span className={`inline-block font-semibold px-5 py-1 ${availability ? "bg-green-100 text-green-600/45 border-green-500/65" : "bg-red-100 text-red-600/45 border-red-500/65"} border-[1px]  text-xs  rounded-e-full rounded-s-full my-3 self-baseline`}>{availability?"In Stock":"Stock Out"}</span>
                    
                    <p className="font-semibold text-lg text-gray-400">{description}</p>
                    <ol>
                    <p className="text-gray-800 font-bold text-xl my-3">Specifications :</p>
                        <li className="text-gray-500/50 font-semibold">Intel Core i7</li>
                        {
                          Specification && Specification.map((item)=><li key={crypto.randomUUID()} className="text-gray-500/50 font-semibold">{item}</li>)
                        }
                    </ol>
                    <div >
                    <p className="text-gray-800 font-bold text-xl my-3">Rating :</p>
                    <section className="flex justify-start items-center gap-2">
                    <div className="flex justify-start items-center gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    
                    </div>
                    <span className="h-3 w-7 px-4 py-[10px] rounded-s-full rounded-e-full bg-gray-500/35 text-xs flex justify-center items-center font-semibold btn_anim">{rating}</span>
                    </section>
                    </div>
                        <section className="flex justify-start items-center gap-4">
                            <button className="bg-[var(--primary-color)] text-white font-semibold btn_primary flex gap-2 justify-center items-center">Add to Cart<BsCart3 style={{fontSize:'1.2rem'}}/></button>

                            <button className="btn_anim p-2 rounded-full text-gray-700 bg-green-100/45 border shadow-inset-lg">
                            <GoHeart style={{fontSize:'1.5rem'}}/>
                            </button>
                        </section>
                </section>
                </section>
            </section>
        
        </section>
      </section>
    </>
  );
}

export default DetailsCard;
