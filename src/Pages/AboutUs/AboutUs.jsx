import useTitle from "../../../public/Scripts/useTitle"
import SimpleBanner from "../../Components/SimpleBanner"

function AboutUs() {
    useTitle("About Us")
  return (
    <>
      <section>
        <SimpleBanner title={"AboutUs"}/>
      </section>
    </>
  )
}

export default AboutUs