export default function LearningIcon({path}) {
  const {icon, text} = path;
  return (
    <div className="card-hover-zoom w-30 h-30 mx-auto rounded-xl border-2 border-[#E0E1E4] flex justify-center items-center">
      <div className="text-center flex flex-col items-center gap-5">
          <div className="h-10 w-10 rounded-full bg-[#D4FB20] flex items-center justify-center">
            <img className="w-7" src={icon} alt="" />
          </div>
          <p>{text}</p>
      </div>
    </div>
  )
}