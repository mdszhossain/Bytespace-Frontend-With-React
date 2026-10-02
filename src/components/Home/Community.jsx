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
      <div className="flex flex-col items-center w-10/12 text-center mx-auto my-10">

      {/* Community Heading */}
        <h1 className="text-3xl lg:text-4xl font-bold">
          Discover What Our <br /> Community Is Saying
        </h1>

        {/* Community Description */}
        <p className="text-md my-5 2xl:w-8/12">
          At ByteSpace, our vibrant community of learners and creators is at the
          heart of what we do. Hear directly from those who have experienced the
          transformative journey of learning and creating on our platform.
          Explore testimonials that reflect the diverse perspectives of
          enthusiastic learners and accomplished creators.
        </p>
      </div>

      {/* Community Cards */}
      <div className="mx-auto flex flex-col lg:flex-row lg:gap-5 items-center gap-10 w-10/12 xl:gap-10 2xl:w-8/12">
        {creators.map((creator, idx) => (
          <Creator key={idx} creator={creator} />
        ))}
      </div>
    </div>
  );
}
