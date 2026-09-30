import { useEffect, useState } from "react";
import Creator from "./Creator";

export default function Community() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    fetch("creator-data.json")
      .then((res) => res.json())
      .then((data) => setCreators(data));
  }, []);

  return (
    <div>
      <div className="flex items-center w-8/12 mx-auto -mt-60">

      {/* Community Heading */}
        <h1 className="text-4xl font-semibold w-6/12">
          Discover What Our <br /> Community Is Saying
        </h1>

        {/* Community Description */}
        <p className="text-md w-6/12">
          At ByteSpace, our vibrant community of learners and creators is at the
          heart of what we do. Hear directly from those who have experienced the
          transformative journey of learning and creating on our platform.
          Explore testimonials that reflect the diverse perspectives of
          enthusiastic learners and accomplished creators.
        </p>
      </div>

      {/* Community Cards */}
      <div className="w-8/12 mx-auto flex items-center gap-10 mt-20 mb-20">
        {creators.map((creator, idx) => (
          <Creator key={idx} creator={creator} />
        ))}
      </div>
    </div>
  );
}
