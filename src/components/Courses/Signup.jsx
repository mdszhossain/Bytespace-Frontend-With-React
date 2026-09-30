import CourseCard from "../Home/CourseCard";
import Form from "./Form";
import { Link } from "react-router-dom";
import logo from "/logo-icon.png";

export default function Signup({ mode = "signup" }) {
  const isSignIn = mode === "signin";
  const cardInfo = [
    {
      id: 1,
      title: "Learn Figma from Basic",
      imgUrl: "/card1.jpg",
      instructor: "purepurl studio",
      rating: 4.5,
      level: "Beginner",
      lessons: "17 lessons",
      duration: "2 hours 16 mins",
      comments: "59 comments",
      price: 25,
      priceType: "lifetime",
      students: 26,
    },
    {
      id: 2,
      title: "Build Digital Asset",
      imgUrl: "/card2.jpg",
      instructor: "design academy",
      rating: 4.8,
      level: "Beginner",
      lessons: "24 lessons",
      duration: "3 hours 45 mins",
      comments: "82 comments",
      price: 30,
      priceType: "lifetime",
      students: 42,
    },
  ];

  return (
    <div className="h-screen bg-[#003BE2] blue-grid-background">
      <div className="w-10/12 mx-auto relative text-white top-20">
        <Link to="/" aria-label="ByteSpace home" className="absolute -top-14 left-0">
          <img src={logo} alt="ByteSpace" className="h-8 w-8 object-contain" />
        </Link>

        {/* Heading and Description part */}
        <h3 className="text-xl font-semibold mb-5">
          {isSignIn ? "Sign in with ease" : "Sign up and come in"}
        </h3>
        <p className="w-5/12">
          {isSignIn
            ? "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
            : "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"}
        </p>
      </div>

      {/* Cards Part */}
      <div className="w-10/12 mx-auto flex">
        <div className="ml-50 relative bottom-35">
          <CourseCard className="w-80 p-2 rounded-xl relative z-10 top-80 left-20 bg-white shadow" card={cardInfo[0]}/>
          <CourseCard className="w-80 p-2 rounded-xl bg-white shadow" card={cardInfo[1]}/>
        </div>

        {/* Rendering Form Signup and Signin */}
        <Form mode={mode} />
      </div>
    </div>
  );
}
