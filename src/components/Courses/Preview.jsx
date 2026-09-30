import previewImg from "../../assets/course-preview.png";
import playBtn from "../../assets/play-btn.png";
export default function Preview() {
  return (
    <div>
      <img className="w-170" src={previewImg} alt="" />
      <div className="w-30 h-30 bg-[#917970] rounded-2xl opacity-95 flex items-center justify-center relative bottom-75 left-72"><img src={playBtn} alt="" /></div>
    </div>
  );
}
