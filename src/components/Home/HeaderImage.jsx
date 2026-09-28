import mainImage from "../../assets/header-image.png";

export default function HeaderImage() {
  return (
    <div className="flex justify-center mt-5 mx-auto rounded-t-full h-100 w-200 bg-[#cbfc01]">
      <img className="w-150" src={mainImage} alt="" />
    </div>
  )
}
