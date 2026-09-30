import { useEffect, useState } from "react";
import CommonButton from "../Home/CommonButton";
import { FaStar } from "react-icons/fa";
import Review from "./Review";

export default function ReviewSection() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/review-data.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);


  return (
    <div>
      {/* Heading part */}
      <div className="pl-50 mt-10 w-6/12">
        <h3 className="text-xl font-bold">What Learners Are Saying</h3>
        <p className="text-gray-600 mt-5">
          Discover what our learners have to say about their experience with
          'Build Digital Assets: A Comprehensive Guide.' Read reviews and
          ratings from individuals who have embarked on the transformative
          journey of mastering digital asset creation.
        </p>
      </div>

      {/* Individual Review Part */}
      <div className="pl-50 mt-10 w-6/12">
        <h3 className="text-xl font-bold">Individual Review</h3>
        <div className="mt-5 flex items-center gap-5">
          <CommonButton
            className="px-5 py-2 bg-[#D4FB20] rounded-full"
            btnText="All rating"
          />
          <CommonButton
            className="px-5 py-2 bg-[#F5F5F6] rounded-full"
            btnText={
              <div className="flex items-center gap-2">
                <FaStar className="text-[#4B4C53]" /> 5
              </div>
            }
          />
          <CommonButton
            className="px-5 py-2 bg-[#F5F5F6] rounded-full"
            btnText={
              <div className="flex items-center gap-2">
                <FaStar className="text-[#4B4C53]" /> 4
              </div>
            }
          />
          <CommonButton
            className="px-5 py-2 bg-[#F5F5F6] rounded-full"
            btnText={
              <div className="flex items-center gap-2">
                <FaStar className="text-[#4B4C53]" /> 3
              </div>
            }
          />
          <CommonButton
            className="px-5 py-2 bg-[#F5F5F6] rounded-full"
            btnText={
              <div className="flex items-center gap-2">
                <FaStar className="text-[#4B4C53]" /> 2
              </div>
            }
          />
          <CommonButton
            className="px-5 py-2 bg-[#F5F5F6] rounded-full"
            btnText={
              <div className="flex items-center gap-2">
                <FaStar className="text-[#4B4C53]" /> 1
              </div>
            }
          />
        </div>
      </div>

      <div className="pl-50 mt-10 w-6/12">
        {
          reviews.map((review, idx) => <Review key={idx} review={review}/>)
        }
      </div>
    </div>
  );
}
