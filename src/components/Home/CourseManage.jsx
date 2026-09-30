import personImg from "../../assets/Course-Manage-Image.png";
export default function CourseManage() {
  return (
    <div className="w-8/12 mx-auto flex items-center justify-between relative bottom-110">
      {/* Image part of Course Manage Section */}
      <div className="image-part relative top-45">
        {/* image lady */}
        <img className="relative z-10 left-15" src={personImg} alt="" />

        {/* blue bg card 1 */}
        <div className="bg-[#003BE2] w-60 text-white p-5 rounded-xl relative bottom-150 z-0">
          <div className="">
            <p className="font-medium">Total Revenue</p>
            <p><small>july 1-28</small></p>
            <p className="text-3xl font-semibold">$120.29</p>
          </div>
        </div>
        
        {/* Blue bg card 2 */}
        <div className="bg-[#003BE2] w-40 text-white p-5 rounded-xl relative bottom-150 z-0 mt-5">
          <div className="">
            <p className="font-medium">Year to Date</p>
            <p><small>2023</small></p>
            <p className="text-3xl font-semibold">$1200.38</p>
          </div>
        </div>
      </div>

      {/* Text part of Course Manage Section */}
      <div className="text-part w-4/12">
      {/* Text heading */}
        <h3 className="text-3xl font-semibold mb-3">Create & Manage <br /> Courses Easily.</h3>

        {/* text description */}
        <p className="mb-3"><strong>ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses. </p>

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