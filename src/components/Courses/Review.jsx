import { FaStar } from "react-icons/fa";

export default function Review({review}) {
  const {name, designation, photo, description, time} = review;
  return (
    <div className="card-hover-zoom p-5 shadow rounded-xl my-10">
      <div className="flex items-center gap-2">
        <img src={photo} alt="" />
        <div className="w-full">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-md">{name}</p>
            <p className="text-sm text-gray-600">{time}</p>
          </div>
          <p className="font-regular text-sm text-gray-600">{designation}</p>
        </div>
      </div>
      <div className="flex gap-2 items-center mt-10">
        <span><FaStar/></span>
        <span><FaStar/></span>
        <span><FaStar/></span>
        <span><FaStar/></span>
        <span><FaStar/></span>
      </div>

      <p className="mt-10">{description}</p>
    </div>
  );
}
