import mainImage from "../../assets/header-image.png";

export default function HeaderImage() {
  return (
    // Header image part
    <div>
      <div className="rounded-t-full mx-auto mt-5 w-85 h-50 md:w-150 md:h-80 lg:w-180 lg:h-100 xl:w-210 xl:h-120 flex justify-center bg-[#cbfc01]">
        <img
          className="ml-9 md:ml-13 lg:ml-15 xl:ml-17"
          src={mainImage}
          alt=""
        />
      </div>
      {/* <div className="bg-white p-5 h-30 rounded-xl relative w-50 bottom-90 left-265">
        <p>Learning Progress</p>
        <p className="text-5xl font-semibold w-50 mt-2">55%</p>
      </div> */}
      {/* <div className="bg-white p-5 h-20 rounded-xl relative w-60 bottom-120 left-150">
        <p>UI/UX Design</p>
        <p className="text-sm mt-2">200 Course 1000+ students</p>
      </div> */}
    </div>
  );
}
