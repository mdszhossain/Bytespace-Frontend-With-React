import Nav from "./Nav";
import HeaderText from "./HeaderText";
import HeaderImage from "./HeaderImage";

export default function Header() {
  return (
    <header className="h-210 bg-[#003BE2] p-8">
      {/* navbar */}
      <Nav/>

      {/* header text section */}
      <HeaderText/>

      {/* Header Image Section */}
      <HeaderImage/>
    </header>
  )
}