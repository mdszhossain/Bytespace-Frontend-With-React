import CourseDetails from "./components/Courses/CourseDetails";
import Courses from "./components/Courses/Courses";
import Signup from "./components/Courses/Signup";
import Creator from "./components/Creators/Creators";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="page-enter" key={location.pathname}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/details" element={<CourseDetails />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/signup" element={<Signup mode="signup" />} />
        <Route path="/signin" element={<Signup mode="signin" />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
