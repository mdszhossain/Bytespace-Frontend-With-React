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
    <header className="blue-grid-background bg-[#003BE2]">
      {/* navbar */}
      <div className="py-10">
        <Nav />
      </div>

      {/* header text section */}
      <HeaderText />

      {/* <div className="flex absolute w-15 h-15">
        <img className="translate-x-79" src={shape1} alt="" />
        <img className="-translate-x-8" src={shape2} alt="" />
        <img className="-translate" src={shape3} alt="" />
        <img className="" src={shape4} alt="" />
        <img className="" src={shape5} alt="" />
        <img className="" src={shape6} alt="" />
      </div> */}

      {/* Header Image Section */}
      <HeaderImage />
    </header>
  );
}
