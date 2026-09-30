import CommonButton from "./CommonButton";

export default function PassionButtons() {
  // temporary array for all the suggested buttons
  const btnTexts = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing", "Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography", "Productivity", "Web Development", "Data Science", "Cooking"];

  // Rendering all the buttons using a simple map
  return (
    <div className="w-6/12 mx-auto text-center my-10">
      {
        btnTexts.map((btnText, idx) => <CommonButton key={idx} className="p-4 bg-[#F5F5F6] rounded-full mx-2 my-3" btnText={btnText}/>)
      }
    </div>
  )
}