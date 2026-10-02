import CourseCard from "./CourseCard";
import card1 from "../../assets/card1.jpg";
import person from "../../assets/header-image.png"

export default function Growth() {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center xl:w-10/12 xl:mx-auto 2xl:w-8/12">
      <div className="growth-text-part text-center xl:text-left w-10/12 mx-auto">
        {/* Growth Heading */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">Your Path to Professional <br /> Growth Starts Here!</h3>

        {/* Growth Description */}
        <p className="text-[#606164] xl:w-8/12">Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
        <div className="flex my-10 items-center gap-10 mt-5 justify-center xl:justify-start">
          <div>
            <p className="text-4xl font-semibold text-blue-600"><span>12</span>K</p>
            <p>Students</p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-blue-600"><span>70</span>+</p>
            <p>Courses</p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-blue-600"><span>16</span></p>
            <p>Creators</p>
          </div>
        </div>
      </div>

      {/* Growth Image Part */}
      <div className="growth-image-part w-10/12 mx-auto">
        <CourseCard className="rounded-2xl border-2 md:w-90 md:mx-auto border-[#E0E2E4] p-4" card={{id: 1, title: "Learn Figma from Basic", imgUrl: card1, instructor: "purepurl studio", rating: 4.5, level: "Beginner", lessons: "17 lessons", duration: "2 hour 16 mins", comments: "59 comments", price: 25, priceType: "lifetime", students: 26}}/>
        <img className="mx-auto md:w-120 md:absolute md:-translate-y-85 md:translate-x-45 lg:translate-x-80 xl:-translate-x-20 2xl:translate-x-80" src={person} alt="" />
      </div>
    </div>
  );
}
