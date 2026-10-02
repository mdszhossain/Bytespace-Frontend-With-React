import CommonButton from "../Home/CommonButton";
import { FaLevelUpAlt } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { LuText } from "react-icons/lu";
import { CiFilter } from "react-icons/ci";
import CourseCards from "../Home/CourseCards";


export default function CategorySection() {
  const categoryButtons = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing", "Cooking"];
  return (
    <div className="">
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-5 w-10/12 mx-auto mt-5">
        <div className="flex gap-1">
          <CommonButton className="px-3 py-2 border-2 rounded-full border-[#D4D6D8]" btnText={<div className="flex items-center gap-2"><CiFilter/> Filter</div>}/>
          <CommonButton className="px-3 py-2 border-2 rounded-full border-[#D4D6D8]" btnText={<div className="flex items-center gap-2"><FaLevelUpAlt /> Level</div>}/>
          <CommonButton className="px-3 py-2 border-2 rounded-full border-[#D4D6D8]" btnText={<div className="flex items-center gap-2"><MdOutlineCategory /> Category</div>}/>
        </div>
        <div className="flex gap-5">
          <CommonButton className="px-3 py-2 border-2 rounded-full border-[#D4D6D8]" btnText={<div className="flex items-center gap-2"><LuText /> Most Relevant</div>}/>
        </div>
      </div>
      <div className="w-10/12 mx-auto text-center mt-5">
        {
          categoryButtons.map((category, idx) => <CommonButton key={idx} className={category === "Featured" ? "p-3 bg-[#D4FB20] rounded-full" : "px-3 py-2 my-3 mx-3 bg-[#F5F5F6] rounded-full"} btnText={category}/>)
        }
      </div>

      <div className="mb-30 mt-5 grid grid-cols-1 gap-5">
        <CourseCards/>
        <CourseCards/>
        <CourseCards/>
      </div>
    </div>
  );
}
