import logo from "../../assets/logo-icon.png";
import { CiShoppingCart } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import "./CSS/Nav.css";
export default function Nav() {
  return (
    <nav className="flex flex-col md:flex-row md:w-10/12 md:mx-auto items-center justify-between">
      {/* nav first part */}
      <Link to="/" aria-label="ByteSpace home" className="flex items-end gap-2">
        <img src={logo} alt="Bytespace-Logo" />
        <p className="logo-text text-white text-2xl relative top-1.5">ByteSpace</p>
      </Link>

      {/* nav second part */}
      <div>
        <ul className="nav-links text-white font-xl text-center flex mt-5 gap-5">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/courses">Courses</NavLink></li>
          <li><NavLink to="/creator">Creator</NavLink></li>
        </ul>
      </div>

      {/* nav third part */}
      <div>
        <ul className="text-white flex mt-5 gap-5 items-center">
          <li><NavLink to="/signin">Signin</NavLink></li>
          <li><NavLink to="/signup">Join Us</NavLink></li>
          <li><a href=""><CiShoppingCart className="text-xl"/></a></li>
        </ul>
      </div>
    </nav>
  )
}