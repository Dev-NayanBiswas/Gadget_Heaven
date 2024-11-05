import useTitle from '../../Utils/Scripts/useTitle'
import MyBarChart from '../../Components/BarChart'
import SimpleBanner from '../../Components/SimpleBanner'

function Statics() {
    useTitle("Statistics")
  return (
    <>
      <section className="w-full py-7">
            <SimpleBanner title={"Statics"}/>
        </section>
        <section className="flex justify-center items-center">
          <MyBarChart/>
        </section>
    </>
  )
}

export default Statics