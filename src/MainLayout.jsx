import React, { useState } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function MainLayout() {
  const allData = useLoaderData();
  const [outletData] = useState(allData);
  return (
    <>
        <section className="w-10/12 mx-auto min-h-screen">
        <Navbar/>
        <section className="">
        <Outlet context={[outletData]}/>
        </section>
        </section>
        <Footer/>
    </>
  )
}

export default MainLayout