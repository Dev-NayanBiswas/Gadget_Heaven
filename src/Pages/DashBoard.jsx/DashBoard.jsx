import { NavLink, Outlet} from 'react-router-dom'
import useTitle from '../../../public/Scripts/useTitle'

function DashBoard() {
    useTitle("Dashboard")
  return (
    <>
        <section className="h-[30vh] w-full bg-[var(--primary-color)] py-7 flex flex-col justify-between">
            <h1 className="text-white text-center text-3xl font-semibold">Dashboard</h1>
            <p className="w-5/12 mx-auto text-sm text-center my-3 text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <nav className="flex justify-center items-center gap-6">
              <NavLink to="/dashboard/cart" className={({isActive})=>isActive? "dashNavAc" : "dashNavIn"}>Cart</NavLink>
              <NavLink to="/dashboard/wishList" className={({isActive})=>isActive? "dashNavAc" : "dashNavIn"}>Wishlist</NavLink>
            </nav>
        </section>
        <Outlet/>
    </>
  )
}

export default DashBoard