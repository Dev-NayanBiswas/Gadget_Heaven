import { useOutletContext } from "react-router-dom";
import ItemCard from "../../../Components/ItemCard";
import { useState } from "react";

function AllProducts() {
    const [pageData, setPageData] = useState(6)
    const [flatData] = useOutletContext();
    
    
  return (
    <>
      <section className="mb-20">
      <section className="grid grid-cols-3 gap-10">
        {
          flatData && flatData.slice(0,pageData).map((item)=><ItemCard key={crypto.randomUUID()} cardInfo={item}/>)
        }
      </section>
      <section className="w-full text-center flex justify-between items-center gap-20">
        <div className="flex-1 text-left">
        {
          pageData > 6 && <button onClick={()=>setPageData(prev=>prev-6)} className="px-5 py-2 btn_anim rounded-e-full rounded-s-full border-[1px] border-[var(--primary-color)] text-white bg-[var(--primary-color)] font-bold self-start my-7">See Less</button>
        }
        </div>
        <div className="flex-1 text-right">
        {
          flatData && flatData.length !== pageData && <button onClick={()=>setPageData(prev=>prev+6)} className="px-5 py-2 btn_anim rounded-e-full rounded-s-full border-[1px] border-[var(--primary-color)] text-white bg-[var(--primary-color)] font-bold self-start my-7">See More</button>
        }
        </div>
      
      </section>
      </section>
    </>
  )
}

export default AllProducts