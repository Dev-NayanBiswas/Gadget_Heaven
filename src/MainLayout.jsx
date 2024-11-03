import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function MainLayout() {
  return (
    <>
        <section className="w-10/12 mx-auto min-h-screen">
        <Navbar/>
        <section className="">
        <Outlet/>
        </section>
        </section>
        <Footer/>
    </>
  )
}

export default MainLayout