import Nav from "./Nav";
import HeaderText from "./HeaderText";
import HeaderImage from "./HeaderImage";
import shape1 from "../../assets/shape1.png";
import shape2 from "../../assets/shape2.png";
import shape3 from "../../assets/shape3.png";
import shape4 from "../../assets/shape4.png";
import shape5 from "../../assets/shape5.png";
import shape6 from "../../assets/shape6.png";

export default function Header() {
  return (
    <header className="blue-grid-background h-210 bg-[#003BE2]">
      {/* navbar */}
      <div className="px-50 py-10">
        <Nav />
      </div>

      {/* header text section */}
      <HeaderText />

      <div className="flex absolute">
        <img className="relative left-425 bottom-100" src={shape1} alt="" />
        <img className="relative right-55 bottom-100" src={shape2} alt="" />
        <img className="z-10 w-80 h-80 left-230 relative" src={shape3} alt="" />
        <img className="w-40 h-40 z-11 relative bottom-40 right-100" src={shape4} alt="" />
        <img className="z-30 relative right-180" src={shape5} alt="" />
        <img className="w-40 h-40 relative bottom-40 left-30" src={shape6} alt="" />
      </div>

      {/* Header Image Section */}
      <HeaderImage />
    </header>
  );
}
