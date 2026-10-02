import PassionButtons from "./PassionButtons";

export default function PassionSection() {
  return (
    <div>
      {/* Passion Subjects Heading */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center mt-5 font-bold">Discover Your Passion, <br /> Build Your Skills</h1>

      {/* Passion Description */}
      <p className="text-center w-10/12 mx-auto mt-5 lg:w-8/12 xl:w-6/12 2xl:w-4/12">At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>

      {/* Rendering all the buttons here */}
      <PassionButtons/>
    </div>
  )
}