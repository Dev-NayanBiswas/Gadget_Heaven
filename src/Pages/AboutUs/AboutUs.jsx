import useTitle from "../../Utils/Scripts/useTitle";
import SimpleBanner from "../../Components/SimpleBanner";
import imageURL from "../../Utils/Scripts/imageURL";



function AboutUs() {
  useTitle("About Us");

  const desc = "From smartphones to accessories, we offer a wide range of high-quality products designed to enhance your digital experience. Shop confidently with detailed product specs, reviews, and fast delivery options tailored to your needs."

  return (
    <>
      <section>
        <SimpleBanner title={"AboutUs"} description={desc}/>
        <section className='p-6 bg-gray-500/10 flex items-center justify-center rounded-xl'>
          <figure className=' h-[50vh] w-full overflow-hidden rounded-xl'>
            <img
              className='w-full h-full object-cover rounded-xl hover:scale-105 transition-all duration-150'
              src={imageURL("aboutus.jpg")}
              alt=''
            />
          </figure>
        </section>
        <section>
          <section>
            <h1 className='text-left my-5 text-3xl text-gray-700/45 font-bold'>
              Who We Are
            </h1>
            <div className='h-0.5 border-b w-10/12 my-4 mx-auto'></div>
            <p>
              We have been serving tech enthusiasts and businesses alike for
              over{" "}
              <span className='text-blue-600 font-bold text-xl'>15 years</span>.
              We are a passionate team dedicated to providing top-quality
              computers, gadgets, and accessories to our customers. With over a
              decade of experience in the industry, we pride ourselves on being
              a trusted partner for all your tech needs, to deliver exceptional
              products coupled with outstanding customer service. Whether you're
              a casual user looking for the latest gadget, a business in need of
              reliable computing solutions, or someone in search of specialized
              accessories, we’ve got you covered.
            </p>
          </section>
          <section>
            <h1 className='text-right my-5 text-3xl text-gray-700/45 font-bold'>
              Our Mission
            </h1>
            <div className='h-0.5 border-b w-10/12 my-4 mx-auto'></div>
            <p>
              We understand that technology is constantly evolving, and we
              strive to stay ahead of the curve by offering the most
              cutting-edge products on the market. Our commitment to customer
              satisfaction has earned us a reputation for excellence, and we are
              proud to have a loyal customer base that continues to grow year
              after year. From personalized recommendations to expert support,
              we are here to ensure that your experience with us is seamless and
              enjoyable. <br /> Join us today, and let’s explore the world of
              technology together!
            </p>
          </section>
        </section>
      </section>
    </>
  );
}

export default AboutUs;
