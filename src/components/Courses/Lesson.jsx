import { useEffect, useState } from "react";
import Module from "./Module";

export default function Lesson() {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    fetch("/module-data.json")
      .then((res) => res.json())
      .then((data) => setModules(data));
  }, []);


  return (
    <div>
      <div className="pl-50 w-6/12">
        <h3 className="text-xl font-bold mt-10">Explore the Modules</h3>
        <p className="text-gray-600 mt-5">
          Immerse yourself in the course content as we break down each module
          into comprehensive lessons, providing practical insights and hands-on
          experiences.
        </p>
      </div>

      <div className="pl-50 w-6/12">
        <h3 className="text-xl font-bold mt-10">Lesson List</h3>
        {
          modules.map((modulee, idx) => <Module key={idx} modulee={modulee}/>)
        }
      </div>

      <div className="pl-50 w-6/12">
        <h3 className="text-xl font-bold mt-10">Lesson Content</h3>
        <p className="text-gray-600 mt-5">Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.</p>
      </div>

      <div className="pl-50 w-6/12">
        <h3 className="text-xl font-bold mt-10">Lesson Progress Tracking</h3>
        <p className="text-gray-600 mt-5">Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.</p>
      </div>
      <div className="pl-50 w-6/12 my-10">
        <div className="shadow p-5 rounded-xl">
          <h5 className="text-sm font-bold mb-2">Learning Progress</h5>
          <p className="text-5xl font-bold">55%</p>
        </div>
      </div>
    </div>
  );
}
