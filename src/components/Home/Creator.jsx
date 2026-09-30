export default function Creator({creator}) {
  const {name, designation, photo, description} = creator;
  return (
    <div className="card-hover-zoom shadow p-6 rounded-xl">
      {/* Card image */}
      <img src={photo} alt="" />

      {/* Name and Designation */}
      <p className="text-xl font-semibold mt-5">{name}</p>
      <p className="text-sm font-regular text-[#003BE2]">{designation}</p>

      {/* Description */}
      <p className="mt-10">{description}</p>
    </div>
  );
}
