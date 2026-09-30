import logo1 from "../../assets/Home-Frame-1.png";
import logo2 from "../../assets/Home-Frame-2.png";
import logo3 from "../../assets/Home-Frame-3.png";
import logo4 from "../../assets/Home-Frame-4.png";
import logo5 from "../../assets/Home-Frame-5.png";
export default function ClientLogo() {
  return (
    <div className="h-40 bg-[#F5F5F6] flex items-center gap-20 justify-center">
      <img src={logo1} alt="" />
      <img src={logo2} alt="" />
      <img src={logo3} alt="" />
      <img src={logo4} alt="" />
      <img src={logo5} alt="" />
    </div>
  )
}