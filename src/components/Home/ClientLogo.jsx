import logo1 from "../../assets/Home-Frame-1.png";
import logo2 from "../../assets/Home-Frame-2.png";
import logo3 from "../../assets/Home-Frame-3.png";
import logo4 from "../../assets/Home-Frame-4.png";
import logo5 from "../../assets/Home-Frame-5.png";
export default function ClientLogo() {
  return (
    <div className="bg-[#F5F5F6] flex flex-col items-center gap-10 py-10 justify-center md:flex-row xl:gap-15 2xl:gap-20">
      <img className="md:w-25 lg:w-35 xl:w-45 2xl:w-60" src={logo1} alt="" />
      <img className="md:w-25 lg:w-35 xl:w-45 2xl:w-60" src={logo2} alt="" />
      <img className="md:w-25 lg:w-35 xl:w-45 2xl:w-60" src={logo3} alt="" />
      <img className="md:w-25 lg:w-35 xl:w-45 2xl:w-60" src={logo4} alt="" />
      <img className="md:w-25 lg:w-35 xl:w-45 2xl:w-60" src={logo5} alt="" />
    </div>
  )
}