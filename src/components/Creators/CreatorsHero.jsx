import Nav from "../Home/Nav";
import mainCreator from "../../assets/main-creator.png";
import CommonButton from "../Home/CommonButton";

export default function CreatorsHero() {
  return (
    <header className="bg-[#003BE2]">
      <div className="px-50 py-10">
        <Nav/>
      </div>

      <div className="px-50 flex items-center gap-5">
        <img src={mainCreator} alt="" />
        <div>
          <div className="flex items-center gap-5">
            <h3 className="text-4xl font-semibold text-white">PurePearl Studio</h3>
            <CommonButton className="bg-[#D4FB20] px-3 py-2 rounded-full" btnText="Creator"/>
          </div>
          <p className="text-md text-white font-regular">Passionate UI/UX, Web designer</p>
        </div>
      </div>

      <div className="px-50 py-10 text-white w-10/12">
        <p className="mb-5">Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!</p>
        <p className="mb-5">ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.</p>
      </div>

      <div className="flex items-center justify-between px-50 py-10">
        <div className="flex items-center gap-5">
          <CommonButton className="px-5 py-2 bg-white rounded-full" btnText="3 Products"/>
          <CommonButton className="px-5 py-2 bg-white rounded-full" btnText="12 Followers"/>
        </div>
        <CommonButton className="px-5 py-2 bg-[#D4FB20] rounded-full" btnText="Follow"/>
      </div>
    </header>
  )
}