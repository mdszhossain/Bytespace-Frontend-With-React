import CommonButton from "./CommonButton";

export default function Potential() {
  return (
    <div className="blue-grid-background w-full bg-[#003BE2] flex items-center justify-center">
      <div className="w-10/12 mx-auto">
        {/* potential heading */}
        <h1 className="text-3xl lg:text-4xl lg:w-8/12 mx-auto xl:w-6/12 font-semibold text-center my-5 text-white">
          Unlock Your Potential as a Creator with ByteSpace
        </h1>

        {/* potential description */}
        <p className="text-center mx-auto mt-5 text-white xl:w-8/12">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        {/* potential join button */}
        <CommonButton
          className="bg-[#D4FB20] p-2 rounded-full block mx-auto my-5"
          btnText="Join as Creator"
        />
      </div>
    </div>
  );
}
