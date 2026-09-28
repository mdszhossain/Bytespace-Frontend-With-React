import CommonButton from "./CommonButton"
export default function HeaderText() {
  return (
    <div>
      {/* Header Headline */}
      <h1 className="text-7xl text-center font-bold text-white leading-20 mt-15">Get Access to Hundreds <br /> Courses Available</h1>

      {/* Header Description */}
      <p className="text-center mt-8 text-white">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>

      {/* Search box and button */}
      <div className="w-4/12 mt-8 m-auto flex gap-5">
        <input className="bg-white p-3 rounded-full w-120" type="text" placeholder="&#128270; Course, topic, creator" />

        <CommonButton className="bg-[#cbfc01] p-3 rounded-full w-30" btnText="Search"/>
      </div>
    </div>
  )
}