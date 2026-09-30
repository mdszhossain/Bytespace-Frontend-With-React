import mainImage from "../../assets/header-image.png";

export default function HeaderImage() {
  return (
    // Header image part
    <div>
      <div className="flex justify-center mt-5 mx-auto rounded-t-full h-100 w-200 bg-[#cbfc01]">
        <img
          className="w-150 ml-18 relative bottom-12"
          src={mainImage}
          alt=""
        />
      </div>
      <div className="bg-white p-5 h-30 rounded-xl relative w-50 bottom-90 left-265">
        <p>Learning Progress</p>
        <p className="text-5xl font-semibold w-50 mt-2">55%</p>
      </div>
      <div className="bg-white p-5 h-20 rounded-xl relative w-60 bottom-120 left-150">
        <p>UI/UX Design</p>
        <p className="text-sm mt-2">200 Course 1000+ students</p>
      </div>
    </div>
  );
}
