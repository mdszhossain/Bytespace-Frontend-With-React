import CommonButton from "./CommonButton"
export default function HeaderText() {
  return (
    <div>
      {/* Header Headline */}
      <h1 className="text-3xl text-center font-bold text-white  my-10 md:text-5xl lg:text-6xl xl:text-7xl">Get Access to Hundreds <br /> Courses Available</h1>

      {/* Header Description */}
      <p className="text-center my-8 w-10/12 lg:w-6/12 xl:w-4/12 mx-auto text-white">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>

      {/* Search box and button */}
      <div className="w-10/12 md:w-6/12 mx-auto flex items-center flex-col gap-5 md:flex-row">
        <input className="bg-white p-3 rounded-full w-full" type="text" placeholder="&#128270; Course, topic, creator" />

        <CommonButton className="bg-[#cbfc01] px-4 py-2 rounded-full w-30" btnText="Search"/>
      </div>
    </div>
  )
}