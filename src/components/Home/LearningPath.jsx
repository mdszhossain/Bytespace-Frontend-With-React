import { useEffect, useState } from "react";
import LearningIcon from "./LearningIcon";

export default function LearningPath() {
  // setting state for icons [not essential, but iccha korse]
  const [paths, setPaths] = useState([]);

  // fetching icon info from json file
  useEffect(() => {
    fetch("learning-path.json")
      .then((res) => res.json())
      .then((data) => setPaths(data));
  }, []);


  return (
    <div className="w-10/12 mx-auto">
      {/* Learning Path Heading */}
      <h3 className="text-3xl font-bold mt-15 text-center">
        Explore Diverse Learning Paths at Bytespace
      </h3>

      {/* Learning Path Description */}
      <p className="text-md text-center w-6/12 mx-auto my-5 text-[#4d4d4d]">
        At Bytespace, we believe in empowering individuals through knowledge.
        Our diverse range of courses spans various fields, ensuring there's
        something for everyone. Unleash your potential and explore our carefully
        curated categories.
      </p>

      {/* Learning Paths Icons */}
      <div className="flex justify-between my-20">
        {
          paths.map((path, idx) => <LearningIcon key={idx} path={path}/>)
        }
      </div>
    </div>
  );
}
