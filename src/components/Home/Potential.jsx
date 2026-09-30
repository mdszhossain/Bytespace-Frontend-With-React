import CommonButton from "./CommonButton";

export default function Potential() {
  return (
    <div className="blue-grid-background h-100 w-full bg-[#003BE2] relative bottom-100 flex items-center justify-center">
      <div>
        {/* potential heading */}
        <h1 className="text-4xl font-semibold text-center text-white">
          Unlock Your Potential as a <br /> Creator with ByteSpace
        </h1>

        {/* potential description */}
        <p className="text-center w-6/12 mx-auto mt-5 text-white">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        {/* potential join button */}
        <CommonButton
          className="bg-[#D4FB20] p-2 rounded-full block mx-auto mt-5"
          btnText="Join as Creator"
        />
      </div>
    </div>
  );
}
