import {Outlet} from 'react-router-dom'
import useTitle from '../../../public/Scripts/useTitle'
import SimpleBanner from '../../Components/SimpleBanner'

function DashBoard() {
    useTitle("Dashboard")
  return (
    <>
        <section className="w-full py-7 flex flex-col justify-between">
            <SimpleBanner title={"Dashboard"}/>
        </section>
        <Outlet/>
    </>
  )
}

export default DashBoard