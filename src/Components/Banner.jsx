import imageURL from "../Utils/Scripts/imageURL"

function Banner() {
  return (
    <>
        <section className="banner_container w-full mx-auto rounded-br-2xl rounded-bl-2xl bg-[var(--primary-color)] relative">
            <section className="pt-4 text-center space-y-7 h-[70vh]">
            <h1 className="text-5xl font-bold text-gray-200 w-7/12 mx-auto text-center my-3">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="text-sm text-center w-5/12 mx-auto text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <button className="btn_primary bg-white text-[var(--primary-color)] text-center">Shop Now</button>
            <section className="relative h-[60vh] bg-white/45 w-8/12 mx-auto rounded-2xl p-4 border-2 scale-y-95 translate-y-[10%]">
                <section className="w-full h-full rounded-xl">
                        <img src={imageURL("banner.jpg")} alt="vision pro" className="object-cover h-full w-full rounded-xl" />
                </section>
            </section>
            </section>
        </section>
            <div className="h-[27vh]"></div>
    </>
  )
}

export default Banner