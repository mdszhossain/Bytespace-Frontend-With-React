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
      <div className="flex justify-between w-10/12 mx-auto mt-5">
        <div className="flex gap-5">
          <CommonButton className="p-3 border-2 rounded-full border-[#D4D6D8]" btnText={<div className="flex items-center gap-2"><CiFilter/> Filter</div>}/>
          <CommonButton className="p-3 border-2 rounded-full border-[#D4D6D8]" btnText={<div className="flex items-center gap-2"><FaLevelUpAlt /> Level</div>}/>
          <CommonButton className="p-3 border-2 rounded-full border-[#D4D6D8]" btnText={<div className="flex items-center gap-2"><MdOutlineCategory /> Category</div>}/>
        </div>
        <div className="flex gap-5">
          <CommonButton className="p-3 border-2 rounded-full border-[#D4D6D8]" btnText={<div className="flex items-center gap-2"><LuText /> Most Relevant</div>}/>
        </div>
      </div>
      <div className="flex w-10/12 mx-auto justify-between mt-5">
        {
          categoryButtons.map((category, idx) => <CommonButton key={idx} className={category === "Featured" ? "p-3 bg-[#D4FB20] rounded-full" : "p-3 bg-[#F5F5F6] rounded-full"} btnText={category}/>)
        }
      </div>

      <div className="mb-30">
        <CourseCards/>
        <CourseCards/>
        <CourseCards/>
      </div>
    </div>
  );
}
