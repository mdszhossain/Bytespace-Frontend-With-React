import CommonButton from "../Home/CommonButton";
import Nav from "../Home/Nav";

export default function CoursesHeader() {
  return (
    <header className="blue-grid-background bg-[#003BE2]">
      <div className="py-10">
        <Nav/>
      </div>
      <h1 className="text-3xl lg:text-4xl font-bold text-center text-white">Find Your Next Course</h1>
      <div className="mx-auto flex flex-col md:flex-row items-center gap-5 py-10 w-10/12 xl:w-8/12">
        <input className="p-3 bg-white rounded-full w-full" type="text" placeholder="&#128270; search" />

        {/* Button */}
        <CommonButton className="bg-[#cbfc01] p-3 rounded-full w-30 ml-5" btnText="Courses"/>
      </div>
    </header>
  )
}