import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom"
import ItemCard from "./ItemCard";

function ProductCards() {
  const [sameCategory, setSameCategory] = useState([])

  const{category} = useParams();
  const [flatData] = useOutletContext();
  useEffect(()=>{
    const filteredCategory = flatData && flatData?.filter(items=>items.category === category);
    setSameCategory(filteredCategory);
    // console.log(sameCategory);
  },[category])

  return (
    <>
    <section className="mb-20">
      <section className="grid grid-cols-3 gap-10">
            {
              sameCategory && sameCategory?.map((item)=><ItemCard key={item.product_id} cardInfo={item}/>)
            }
      </section>
    </section>
    </>
  )
}

export default ProductCards