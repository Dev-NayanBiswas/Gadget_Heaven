import { Outlet, useOutletContext} from "react-router-dom"
import useTitle from "../../../public/Scripts/useTitle"
import Banner from "../../Components/Banner"
import SideNavbar from "./SideNavbar"


function Home() {
    useTitle("Home")
    const [outletData] = useOutletContext() || [];
    const flatData = outletData.flatMap(data=>data.items)

  return (
    <>
        <section className="">
        <Banner/>
        </section>
        <section className="mt-10 min-h-screen">
            <h1 className="text-center text-[#0B0B0B] font-bold text-4xl my-10">Explore Cutting-Edge Gadgets</h1>
            <section className="flex gap-5">
                <section className="">
                <SideNavbar categories={outletData} />
                </section>
                <section className="flex-1 rounded-lg">
                    <Outlet context={[flatData]}/>
                </section>
            </section>
        </section>
    </>
  )
}

export default Home