import {Outlet} from 'react-router-dom'
import useTitle from '../../Utils/Scripts/useTitle'
import SimpleBanner from '../../Components/SimpleBanner'

const desc = "Our Dashboard provides a user-friendly interface with essential features like Cart and Wishlist. Effortlessly view and manage your selected products, track items you're interested in, and easily add or remove products."

function DashBoard() {
    useTitle("Dashboard")
  return (
    <>
        <section className="w-full py-7 flex flex-col justify-between">
            <SimpleBanner title={"Dashboard"} description={desc}/>
        </section>
        <Outlet/>
    </>
  )
}

export default DashBoard