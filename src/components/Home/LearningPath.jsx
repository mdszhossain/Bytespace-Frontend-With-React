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
      <h3 className="text-2xl font-bold my-10 text-center md:text-3xl xl:text-4xl xl:w-6/12 mx-auto">
        Explore Diverse Learning Paths at Bytespace
      </h3>

      {/* Learning Path Description */}
      <p className="text-md text-center w-full mx-auto my-5 text-[#4d4d4d] xl:w-6/12">
        At Bytespace, we believe in empowering individuals through knowledge.
        Our diverse range of courses spans various fields, ensuring there's
        something for everyone. Unleash your potential and explore our carefully
        curated categories.
      </p>

      {/* Learning Paths Icons */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 2xl:w-10/12 mx-auto justify-between items-center gap-5 my-20 flex-col">
        {
          paths.map((path, idx) => <LearningIcon key={idx} path={path}/>)
        }
      </div>
    </div>
  );
}
