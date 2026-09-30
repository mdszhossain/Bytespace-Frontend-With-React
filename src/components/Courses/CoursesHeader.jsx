import CommonButton from "../Home/CommonButton";
import Nav from "../Home/Nav";

export default function CoursesHeader() {
  return (
    <header className="h-100 bg-[#003BE2] p-8">
      <Nav/>
      <h1 className="text-3xl font-bold text-center text-white mt-25">Find Your Next Course</h1>
      <div className="w-4/12 mt-8 m-auto flex gap-5">
        <input className="p-3 bg-white rounded-full w-120" type="text" placeholder="&#128270; search" />

        {/* Button */}
        <CommonButton className="bg-[#cbfc01] p-3 rounded-full w-30 ml-5" btnText="Courses"/>
      </div>
    </header>
  )
}