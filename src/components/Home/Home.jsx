import ClientLogo from "./ClientLogo";
import CourseCards from "./CourseCards";
import "./CSS/Home.css";
import Header from "./Header";
import LearningPath from "./LearningPath";
import PassionSection from "./PassionSection";

export default function Home() {
  // All the home page components
  return (
    <div>
      <Header/>
      <ClientLogo/>
      <PassionSection/>
      <CourseCards/>
      <LearningPath/>
    </div>
  );
}
