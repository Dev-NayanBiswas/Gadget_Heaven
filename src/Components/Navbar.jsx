import { Link, NavLink, useLocation } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";

function Navbar() {
  const location = useLocation();
  const item = [1,2];

  const pathsArray = ["/","/allProducts","/laptops","/phones","/accessories","/smartWatches","/macBook","/iPhone"]

  return (
    <>
      <div className={pathsArray.includes(location.pathname ) ? "homeNav mt-5 p-[5px]":"otherNav"}>
        <section className={pathsArray.includes(location.pathname ) ?"w-11/12 mx-auto navbar":"w-full navbar"}>
        <div className='navbar-start pl-5'>
          <a className='btn btn-ghost text-xl'>Gadget Heaven</a>
        </div>



        <section className='navbar-center space-x-3 '>
          <NavLink to="/" className={({isActive})=>isActive?"active":"inactive"}>Home</NavLink>
          <NavLink to="/statics" className={({isActive})=>isActive?"active":"inactive"}>Statistics</NavLink>
          <NavLink to="/dashboard" className={({isActive})=>isActive?"active":"inactive"}>Dashboard</NavLink>
          <NavLink to="/aboutUs" className={({isActive})=>isActive?"active":"inactive"}>About Us</NavLink>
          <NavLink to="/FAQ" className={({isActive})=>isActive?"active":"inactive"}>FAQ</NavLink>
        </section>





        <div className='navbar-end pr-5'>
          <section className="flex justify-center items-center gap-5">
          <Link to="/dashboard/cart" className="relative btn_anim p-2 rounded-full bg-white/65 shadow-inset-lg text-black">
          <BsCart3/>
          {item.length && <span className="absolute -top-2 -right-2 text-sm w-5 h-5 text-white bg-red-500 rounded-full p-1 flex justify-center items-center">0</span>}
          </Link>
          <Link to="/dashboard/wishList" className="btn_anim p-2 rounded-full bg-white/65 shadow-inset-lg text-black relative">
          <GoHeart/>
          {item.length && <span className="absolute -top-2 -right-2 text-sm w-5 h-5 text-white bg-red-500 rounded-full p-1 flex justify-center items-center">0</span>}
          </Link>
          </section>
        </div>
        </section>
      </div>
    </>
  );
}

export default Navbar;