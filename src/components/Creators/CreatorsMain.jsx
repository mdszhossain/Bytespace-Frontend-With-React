import { CiFilter } from "react-icons/ci";
import CommonButton from "../Home/CommonButton";
import { FaLevelUpAlt } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { LuText } from "react-icons/lu";
import CourseCards from "../Home/CourseCards";
import Footer from "../Home/Footer";

export default function CreatorsMain() {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:my-10 items-center w-10/12 mx-auto my-5">
        <div className="flex gap-5">
          <CommonButton
            className="px-3 py-2 my-5 border-2 rounded-full border-[#D4D6D8]"
            btnText={
              <div className="flex items-center gap-2">
                <CiFilter /> Filter
              </div>
            }
          />
          <CommonButton
            className="px-3 py-2 my-5 border-2 rounded-full border-[#D4D6D8]"
            btnText={
              <div className="flex items-center gap-2">
                <FaLevelUpAlt /> Level
              </div>
            }
          />
          <CommonButton
            className="px-3 py-2 my-5 border-2 rounded-full border-[#D4D6D8]"
            btnText={
              <div className="flex items-center gap-2">
                <MdOutlineCategory /> Category
              </div>
            }
          />
        </div>
        <div className="flex gap-5">
          <CommonButton
            className="p-3 border-2 rounded-full border-[#D4D6D8]"
            btnText={
              <div className="flex items-center gap-2">
                <LuText /> Most Relevant
              </div>
            }
          />
        </div>
      </div>
      <CourseCards/>
      <Footer/>
    </div>
  );
}
