import useTitle from "../../Utils/Scripts/useTitle";
import MyBarChart from "../../Components/BarChart";
import SimpleBanner from "../../Components/SimpleBanner";
import { useOutletContext } from "react-router-dom";
import StaticsNav from "./StaticsNav";
import { useEffect, useState } from "react";



function Statics() {
  useTitle("Statistics");
  const [category, setCategory] = useState("Laptops");
  const [checkData, setCheckData] = useState([]);
  const [outletData] = useOutletContext();
  const categories = outletData?.map((data) => data.category);
  // console.log(categories);

  useEffect(() => {
    const allGenre = outletData && outletData?.map((data) => data.items);
    const sameGenre = allGenre
      ?.flatMap((items) => items).filter((product=>product.category ===category));
      const sameGenreShortData = sameGenre?.map(({product_title,price,rating})=>({product_title,price,rating}));
      setCheckData(sameGenreShortData)

    // console.log(sameGenreShortData);
  }, [category]);

  return (
    <>
      <section className='w-full py-7'>
        <SimpleBanner title={"Statics"} />
      </section>
      <section className="flex justify-center items-center gap-4 mb-10">
        {categories?.map((category, index) => (
          <StaticsNav
            setCategory={setCategory}
            category={category}
            key={index}
          />
        ))}
      </section>
      <section className='flex justify-center items-center my-10'>
        <MyBarChart data={checkData} />
      </section>
    </>
  );
}

export default Statics;
