import useTitle from '../../../public/Scripts/useTitle'

function Statics() {
    useTitle("Statistics")
  return (
    <>
      <section className="h-[30vh] w-full bg-[var(--primary-color)] py-7 flex flex-col justify-center items-center gap-6">
            <h1 className="text-white text-center text-3xl font-semibold">Statistics</h1>
            <p className="w-5/12 mx-auto text-sm text-center my-3 text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        </section>
    </>
  )
}

export default Statics