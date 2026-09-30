import CourseDetails from "./components/Courses/CourseDetails";
import Courses from "./components/Courses/Courses";
import Creator from "./components/Creators/Creators";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/details" element={<CourseDetails />} />
        <Route path="/creator" element={<Creator/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}
