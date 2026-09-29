import CommonButton from "../Home/CommonButton";
import { useState } from "react";
import { CiShare2 } from "react-icons/ci";
import { VscGraph } from "react-icons/vsc";
import { FaStar } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";


import Nav from "../Home/Nav";
import Footer from "../Home/Footer";
import Preview from "./Preview";
import CourseInfo from "./CourseInfo";
import About from "./About";
import Lesson from "./Lesson";

export default function CourseDetails() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <>
    <div className="h-screen bg-[#003BE2] p-8 px-50">
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
    </div>

    <div className="flex items-center gap-5 pl-50 mt-10">
        <button
          type="button"
          onClick={() => setActiveSection("about")}
          className="px-5 py-2 bg-[#F5F5F6] rounded-full"
        >
          About
        </button>
        <button
          type="button"
          onClick={() => setActiveSection("lesson")}
          className="px-5 py-2 bg-[#F5F5F6] rounded-full"
        >
          Lesson
        </button>
        <CommonButton
          className="px-5 py-2 bg-[#F5F5F6] rounded-full"
          btnText="Reviews"
        />
      </div>
    {activeSection === "about" ? <About /> : <Lesson />}
    <Footer />
    </>
  );
}
