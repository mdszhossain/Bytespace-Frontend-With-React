// import cardImg from "../../assets/card1.jpg";
import { FaStar } from "react-icons/fa";
import CommonButton from "./CommonButton";
export default function CourseCard({className, card}) {
  const {title, imgUrl, instructor, rating, level, lessons, duration, comments, price, priceType} = card;
  return (
    <div className={`${className ?? ""} card-hover-zoom`}>
      {/* card image */}
      <div className="">
        <img className="rounded-xl" src={imgUrl} alt="" />
        <div className="p-2 flex items-center justify-between">
          <CommonButton className="p-2 rounded-full relative bottom-15 bg-[#f8f8f8] text-[#575858] text-xs opacity-80" btnText={lessons}/>
          <CommonButton className="p-2 rounded-full relative bottom-15 bg-[#f8f8f8] text-[#575858] text-xs opacity-80" btnText={duration}/>
          <CommonButton className="p-2 rounded-full relative bottom-15 bg-[#f8f8f8] text-[#575858] text-xs opacity-80" btnText={comments}/>
        </div>
      </div>
      
      {/* card title */}
      <div className="flex items-center justify-between relative bottom-8">
        <h3 className="font-medium">{title}</h3>
        <div className="flex items-center gap-2">
          <span>{rating}</span> <FaStar />
        </div>
      </div>
      <p className="text-xs relative bottom-8">by <span className="text-blue-600">{instructor}</span></p>

      {/* card level and price section */}
      <div className="relative bottom-2">
        <CommonButton className="p-2 text-sm bg-[#F5F5F6] rounded-full" btnText={level}/>
        <p className="mt-2"><span className="text-blue-600 font-bold text-xl">${price}</span> / <span className="text-sm">{priceType}</span></p>
      </div>
    </div>
  );
}
