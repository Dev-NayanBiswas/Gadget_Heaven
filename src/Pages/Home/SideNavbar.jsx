import { NavLink } from "react-router-dom"

function SideNavbar() {
  return (
    <>
    <section className="rounded-xl bg-gray-300/10 border-[1px]">
        <section className="">
            <section className="text-center  rounded-lg px-3 py-4">
                <nav className="grid grid-cols-1 gap-4 w-[170px] h-fit">
                    <NavLink className={({isActive})=>isActive? "sideActive":"sideInactive"}  to="/">All Products</NavLink>
                    <NavLink className={({isActive})=>isActive? "sideActive":"sideInactive"} to="/laptops">Laptops</NavLink>
                    <NavLink className={({isActive})=>isActive? "sideActive":"sideInactive"} to="/phones">Phones</NavLink>
                    <NavLink className={({isActive})=>isActive? "sideActive":"sideInactive"} to="/accessories">Accessories</NavLink>
                    <NavLink className={({isActive})=>isActive? "sideActive":"sideInactive"}  to="/smartWatches">Smart Watches</NavLink>
                    <NavLink className={({isActive})=>isActive? "sideActive":"sideInactive"}  to="/macBook">MacBook</NavLink>
                    <NavLink className={({isActive})=>isActive? "sideActive":"sideInactive"} to="/iPhone">iPhone</NavLink>
                </nav>
            </section>
        </section>
    </section>
    </>
  )
}

export default SideNavbar


//"allProducts","laptops","phones","accessories","smartWatches","macBook","iPhone"

