import CommonButton from "../Home/CommonButton";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import profile4 from "../../assets/profile4.png";

export default function CourseInfo() {
  return (
    <div className="bg-white w-100 px-10 py-10 rounded-2xl shadow">
      <h2 className="text-xl font-bold">112 Lessons (24 Hours)</h2>
      {/* Course Information Top Part */}
      <div>
        <div className="flex text-md justify-between mt-5">
          <p>01</p>
          <p className="w-7/12">Introduction to Digital Assets</p>
          <p>12 mins</p>
        </div>
        <div className="flex text-md justify-between mt-5">
          <p>02</p>
          <p className="w-7/12">Digital Principles for Impacts</p>
          <p>21 mins</p>
        </div>
        <div className="flex text-md justify-between mt-5">
          <p>03</p>
          <p className="w-7/12">Advanced Techniques in Digital Creation</p>
          <p>16 mins</p>
        </div>

        <p className="mt-5 text-gray-600">99 more videos</p>

        <p className="text-gray-600 mt-2">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>

        <p className="text-3xl font-bold text-[#003BE2] mt-2">$25<span className="text-sm font-regular">/lifetime</span></p>

        <CommonButton className="px-5 py-2 bg-[#D4FB20] font-bold rounded-full w-full mt-5" btnText="Enroll Now"/>

        {/* Course Information Lower part */}
        <h4 className="font-bold text-xl mt-5">This Course Include</h4>

        <div className="mt-3">
          <div className="flex items-center gap-5 mt-2">
            <img src={icon1} alt="" />
            <p>Learning Resources</p>
          </div>
          <div className="flex items-center gap-5 mt-2">
            <img src={icon2} alt="" />
            <p>Quality Lesson Videos</p>
          </div>
          <div className="flex items-center gap-5 mt-2">
            <img src={icon3} alt="" />
            <p>Certificate of Completion</p>
          </div>
          <div className="flex items-center gap-5 mt-2">
            <img src={icon4} alt="" />
            <p>Private Consultation</p>
          </div>
        </div>

        <hr className="mt-10" />

        <div className="flex items-center gap-5 mt-5">
          <img src={profile4} alt="" />
          <div>
            <p className="text-xl font-bold">PurePearl Studio</p>
            <p className="text-sm">Professional Creator</p>
          </div>
        </div>

        <p className="mt-5">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
        
        <CommonButton className="px-5 py-2 border-2 border-[#CED0D3] rounded-full mt-5" btnText="See Full Profile"/>
      </div>
    </div>
  )
}