import CourseCard from "./CourseCard";
import card1 from "../../assets/card1.jpg";
import person from "../../assets/header-image.png"

export default function Growth() {
  return (
    <div className="flex w-8/12 mx-auto mt-50">
      <div className="growth-text-part">
        {/* Growth Heading */}
        <h3 className="text-3xl font-semibold mb-2">Your Path to Professional <br /> Growth Starts Here!</h3>

        {/* Growth Description */}
        <p className="w-6/12 text-[#606164]">Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
        <div className="flex items-center gap-10 mt-5">
          <div>
            <p className="text-5xl font-semibold text-blue-600"><span>12</span>K</p>
            <p>Students</p>
          </div>
          <div>
            <p className="text-5xl font-semibold text-blue-600"><span>70</span>+</p>
            <p>Courses</p>
          </div>
          <div>
            <p className="text-5xl font-semibold text-blue-600"><span>16</span></p>
            <p>Creators</p>
          </div>
        </div>
      </div>

      {/* Growth Image Part */}
      <div className="growth-image-part">
        <CourseCard className="rounded-2xl border-2 border-[#E0E2E4] p-4 w-80 h-100" card={{id: 1, title: "Learn Figma from Basic", imgUrl: card1, instructor: "purepurl studio", rating: 4.5, level: "Beginner", lessons: "17 lessons", duration: "2 hour 16 mins", comments: "59 comments", price: 25, priceType: "lifetime", students: 26}}/>
        <img className="relative w-500 bottom-90 left-10 ml-20" src={person} alt="" />
      </div>
    </div>
  );
}
