import logo from "../../assets/logo-icon.png";
import { CiShoppingCart } from "react-icons/ci";
import "./CSS/Nav.css";
export default function Nav() {
  return (
    <nav className="flex items-center justify-between">
      {/* nav first part */}
      <div className="flex items-end gap-2">
        <img src={logo} alt="Bytespace-Logo" />
        <p className="logo-text text-white text-2xl">ByteSpace</p>
      </div>

      {/* nav second part */}
      <div>
        <ul className="text-white font-xl text-center flex gap-5">
          <li><a href="#">Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Creators</a></li>
        </ul>
      </div>

      {/* nav third part */}
      <div>
        <ul className="text-white flex gap-5 items-center">
          <li><a href="">Signin</a></li>
          <li><a href="">Join Us</a></li>
          <li><a href=""><CiShoppingCart className="text-xl"/></a></li>
        </ul>
      </div>
    </nav>
  )
}