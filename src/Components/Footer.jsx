import React from "react";

function Footer() {
  return (
    <>
      <section className='bg-gray-50/75 w-10/12 mx-auto'>
        <section className='text-center py-5'>
          <h2 className='text-2xl font-bold text-gray-800'>Gadget Heaven</h2>
          <p className='text-sm text-center'>
            Leading the way in cutting-edge technology and innovation.
          </p>
        </section>
        <div className='h-[1px] bg-gray-900/10 bg-opacity-25 my-4 w-10/12 mx-auto'></div>

        <div className='flex pb-10'>

          <div className='flex-1'>
            <nav className='flex flex-col justify-center items-center w-full'>
              <h6 className='text-lg'>Services</h6>
              <a className='link link-hover'>Product Supports</a>
              <a className='link link-hover'>Order Tracking</a>
              <a className='link link-hover'>Shipping & Delivery</a>
              <a className='link link-hover'>Returns</a>
            </nav>
          </div>

          <div className='flex-1'>
            <nav className='flex flex-col justify-center items-center w-full'>
              <h6 className=' text-lg'>Company</h6>
              <a className='link link-hover'>About Us</a>
              <a className='link link-hover'>Career</a>
              <a className='link link-hover'>Contacts</a>
            </nav>
          </div>

          <div className='flex-1'>
          <nav className='flex flex-col justify-center items-center w-full'>
              <h6 className=' text-lg'>Services</h6>
              <a className='link link-hover'>Product Supports</a>
              <a className='link link-hover'>Order Tracking</a>
              <a className='link link-hover'>Shipping & Delivery</a>
              <a className='link link-hover'>Returns</a>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
