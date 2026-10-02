import personImg from "../../assets/Course-Manage-Image.png";
export default function CourseManage() {
  return (
    <div className="w-10/12 mx-auto flex flex-col xl:flex-row items-center justify-between 2xl:w-8/12">
      {/* Image part of Course Manage Section */}
      <div className="image-part relative">
        {/* image lady */}
        <img className="w-70 md:w-120 ml-4 relative md:z-10" src={personImg} alt="" />

        {/* blue bg card 1 */}
        <div className="bg-[#003BE2] text-white p-5 rounded-xl text-center relative md:absolute md:z-11 md:-translate-y-90">
          <div className="">
            <p className="font-medium">Total Revenue</p>
            <p><small>july 1-28</small></p>
            <p className="text-3xl font-semibold">$120.29</p>
          </div>
        </div>
        
        {/* Blue bg card 2 */}
        <div className="bg-[#003BE2] text-white p-5 rounded-xl mt-5 text-center relative md:absolute md:-translate-y-130 md:z-5">
          <div className="">
            <p className="font-medium">Year to Date</p>
            <p><small>2023</small></p>
            <p className="text-3xl font-semibold">$1200.38</p>
          </div>
        </div>
      </div>

      {/* Text part of Course Manage Section */}
      <div className="text-part text-center my-10 xl:text-left xl:w-5/12">
      {/* Text heading */}
        <h3 className="text-3xl lg:text-4xl font-semibold mb-3 xl:w-10/12">Create & Manage Courses Easily.</h3>

        {/* text description */}
        <p className="mb-3 xl:w-10/12"><strong>ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses. </p>

        {/* text listing */}
        <ul>
          <li>Share Your Expertise</li>
          <li>Monetize Your Passion</li>
          <li>Flexibility and Autonomy</li>
          <li>Build a Community</li>
        </ul>
      </div>
    </div>
  )
}