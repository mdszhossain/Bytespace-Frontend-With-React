import logoIcon from "../../assets/logo-icon.png";
import CommonButton from "./CommonButton";
import "./CSS/Nav.css";
export default function Footer() {
  return (
    <div className=" border-t-2 border-[#E6E7E9] mt-15 py-10"> 
      <div className="flex items-center flex-col xl:flex-row justify-between w-10/12 mx-auto">
        <div className="text-center lg:text-left">
          {/* logo */}
          <div className="flex items-end gap-2 justify-center lg:justify-start">
            <img src={logoIcon} alt="" />
            <p className="logo-text">ByteSpace</p>
          </div>
          {/* description */}
          <p className="text-sm mt-5 text-center xl:text-left xl:w-8/12">Stay Up to date with our latest features and releases by joining our newsletter.</p>
          {/* search bar and button */}
          <div className="mt-10">
            <input className="p-3 border-2 rounded-full border-[#DADCDE]" type="text" placeholder="Enter your email" />
            <CommonButton className="bg-[#D4FB20] p-3 rounded-full ml-5" btnText="Search"/>
          </div>
          {/* small description */}
          <p className="mt-5 xl:text-left xl:w-8/12"><small>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</small></p>
        </div>

        {/* Hyper links */}
        <div className="flex flex-col gap-5 mt-5 text-sm text-center lg:flex-row lg:justify-between lg:w-10/12 xl:text-left">
          <div>
            <ul>
              <li className="mt-3">Featured Courses</li>
              <li className="mt-3">Featured Categories</li>
              <li className="mt-3">Business</li>
              <li className="mt-3">IT</li>
              <li className="mt-3">Design</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mt-3">Development</li>
              <li className="mt-3">Marketing</li>
              <li className="mt-3">Photography</li>
              <li className="mt-3">Finance</li>
              <li className="mt-3">Sport</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mt-3">Become a Creator</li>
              <li className="mt-3">Affiliate Program</li>
              <li className="mt-3">Contact</li>
              <li className="mt-3">Help</li>
              <li className="mt-3">About</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="mt-20" />
      <div className="flex flex-col xl:flex-row xl:w-10/12 xl:mx-auto justify-between mt-5 text-center">
        <p className="mb-5">@ 2023 ByteSpace. All rights reserved.</p>
        <div className="flex items-center gap-3 text-center justify-center">
          <p><small>Privacy Policy</small></p>
          <p><small>Terms and Service</small></p>
          <p><small>Cookie Settings</small></p>
        </div>
      </div>
    </div>
  );
}
