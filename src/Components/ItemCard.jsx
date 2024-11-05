import { Link } from "react-router-dom"
import imageURL from "../Utils/Scripts/imageURL"


function ItemCard({cardInfo}) {

  const {
    product_id,
    product_title,
    product_image,
    price
} = cardInfo || {}


  return (
    <>
        <section className="p-4 rounded-lg border-[1px] flex flex-col gap-3">
            <figure className="h-[35vh] w-full rounded-lg bg-white">
                <img src={imageURL(product_image)} className="h-full w-full rounded-lg object-cover object-center bg-white" alt="" />
            </figure>
            <article>
                <h5 className="text-2xl font-semibold text-gray-900/45">{product_title}</h5>
                <p className="text-lg font-semibold text-black/20">Price : $ {price}</p>
            </article>
            <Link to={`/detailsCard/${product_id}`} className="px-5 py-2 btn_anim rounded-e-full rounded-s-full border-[1px] border-[var(--primary-color)] text-[var(--primary-color)] font-bold self-start">View Details</Link>
        </section>
    </>
  )
}

export default ItemCard