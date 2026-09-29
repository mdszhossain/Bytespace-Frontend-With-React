import ClientLogo from "./ClientLogo";
import Community from "./Community";
import CourseCards from "./CourseCards";
import CourseManage from "./CourseManage";
import "./CSS/Home.css";
import Growth from "./Growth";
import Header from "./Header";
import LearningPath from "./LearningPath";
import PassionSection from "./PassionSection";
import Potential from "./Potential";

export default function Home() {
  // All the home page components
  return (
    <div>
      <Header/>
      <ClientLogo/>
      <PassionSection/>
      <CourseCards/>
      <LearningPath/>
      <Growth/>
      <CourseManage/>
      <Potential/>
      <Community/>
    </div>
  );
}
