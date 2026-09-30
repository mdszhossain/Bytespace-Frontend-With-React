import Nav from "./Nav";
import HeaderText from "./HeaderText";
import HeaderImage from "./HeaderImage";

export default function Header() {
  return (
    <header className="blue-grid-background h-210 bg-[#003BE2]">
      {/* navbar */}
      <div className="px-50 py-10">
        <Nav/>
      </div>

      {/* header text section */}
      <HeaderText/>

      {/* Header Image Section */}
      <HeaderImage/>
    </header>
  )
}