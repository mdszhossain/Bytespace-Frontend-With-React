export default function LearningIcon({path}) {
  const {icon, text} = path;
  return (
    <div className="card-hover-zoom w-40 h-40 rounded-xl border-2 border-[#E0E1E4] flex justify-center items-center">
      <div className="text-center flex flex-col items-center gap-5">
          <div className="h-15 w-15 rounded-full bg-[#D4FB20] flex items-center justify-center">
            <img src={icon} alt="" />
          </div>
          <p>{text}</p>
      </div>
    </div>
  )
}