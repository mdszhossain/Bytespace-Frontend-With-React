import CommonButton from "../Home/CommonButton";
import { CiShare2 } from "react-icons/ci";
import { VscGraph } from "react-icons/vsc";
import { FaStar } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";

import Nav from "../Home/Nav";
import Preview from "./Preview";
import CourseInfo from "./CourseInfo";

export default function CourseDetails() {
  return (
    <header className="h-screen bg-[#003BE2] p-8 px-60">
        <Nav/>
        <div className="flex justify-between mt-30">
          <h1 className="text-white text-3xl font-bold">Build Digital Asset: A Comprehensive Guide</h1>
          <CommonButton className="bg-[#D4FB20] p-3 rounded-full" btnText={<div className="flex items-center gap-2"><CiShare2/> Share</div>}/>
        </div>
        <p className="text-white">Unlock the Power of Digital Creation with Expert Guidance</p>
        <p className="text-white py-5"><small>by <span className="text-[#D4FB20]">purepearl studio</span></small></p>

        <div className="flex gap-5">
          <CommonButton className="bg-[#FFFFFF] px-5 py-2 rounded-full" btnText={<div className="flex items-center gap-2"><VscGraph /> Intermediate</div>}/>
          <CommonButton className="bg-[#FFFFFF] px-5 py-2 rounded-full" btnText={<div className="flex items-center gap-2"><FaStar /> 4.8 172 reviews</div>}/>
          <CommonButton className="bg-[#FFFFFF] px-5 py-2 rounded-full" btnText={<div className="flex items-center gap-2"><IoMdContacts /> 199 students</div>}/>
        </div>

        <div className="flex justify-between mt-12">
          <Preview/>
          <CourseInfo/>
        </div>
    </header>
  );
}
