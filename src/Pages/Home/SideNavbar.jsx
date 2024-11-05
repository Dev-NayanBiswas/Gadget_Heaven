import { NavLink} from "react-router-dom"

function SideNavbar({categories}) {
  
  const allCategories = categories.map(item=>item.category);
  
  return (
    <>
    <section className="rounded-xl bg-gray-100/10 border-[1px]">
        <section className="">
            <section className="text-center  rounded-lg px-3 py-4">
                <nav className="grid grid-cols-1 gap-4 w-[170px] h-fit">
                    <NavLink className={({isActive})=>isActive? "sideActive":"sideInactive"}  to="/">All Products</NavLink>
                    {
                      allCategories && allCategories?.map((category)=><NavLink key={crypto.randomUUID()} className={({isActive})=>isActive? "sideActive":"sideInactive"} to={`/productCards/${category}`}>{category}</NavLink>)
                    }
                </nav>
            </section>
        </section>
    </section>
    </>
  )
}

export default SideNavbar


//"AllProducts","Laptops","Phones","Accessories","SmartWatches","MacBook","iPhone"
