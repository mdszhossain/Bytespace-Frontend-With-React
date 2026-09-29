import camera from "../../assets/camera.png";
export default function Module({modulee}) {
  const {moduleTitle, description} = modulee;
  return (
    <div className="flex items-center gap-5 mt-5">
      <div className="rounded-xl flex items-center justify-center p-5 bg-[#D4FB20]">
        <img className="w-15" src={camera} alt="" />
      </div>
      <div>
        <p className="font-semibold">{moduleTitle}</p>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  )
}