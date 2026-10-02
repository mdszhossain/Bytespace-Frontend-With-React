import Nav from "../Home/Nav";
import mainCreator from "../../assets/main-creator.png";
import CommonButton from "../Home/CommonButton";

export default function CreatorsHero() {
  return (
    <header className="blue-grid-background bg-[#003BE2]">
      <div className="py-10">
        <Nav/>
      </div>

      <div className="flex flex-col md:flex-row w-10/12 mx-auto items-center gap-5">
        <img src={mainCreator} alt="" />
        <div className="w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <h3 className="text-3xl text-center font-semibold text-white">PurePearl Studio</h3>
            <CommonButton className="bg-[#D4FB20] px-3 py-2 rounded-full" btnText="Creator"/>
          </div>
          <p className="text-md text-center mt-2 text-white font-regular md:text-left">Passionate UI/UX, Web designer</p>
        </div>
      </div>

      <div className="py-10 text-white w-10/12 mx-auto">
        <p className="mb-5 text-center md:text-left 2xl:w-6/12">Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!</p>
        <p className="mb-5 text-center md:text-left 2xl:w-6/12">ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.</p>
      </div>

      <div className="flex items-center justify-between py-10 w-11/12 mx-auto">
        <div className="flex items-center gap-2">
          <CommonButton className="px-3 py-2 bg-white rounded-full" btnText="3 Products"/>
          <CommonButton className="px-3 py-2 bg-white rounded-full" btnText="12 Followers"/>
        </div>
        <CommonButton className="px-3 py-2 bg-[#D4FB20] rounded-full" btnText="Follow"/>
      </div>
    </header>
  )
}