import logoIcon from "../../assets/logo-icon.png";
import CommonButton from "./CommonButton";
import "./CSS/Nav.css";
export default function Footer() {
  return (
    <div className="h-100 border-t-2 border-[#E6E7E9] px-40 py-10"> 
      <div className="flex items-center justify-between">
        <div>
          {/* logo */}
          <div className="flex items-end gap-2">
            <img src={logoIcon} alt="" />
            <p className="logo-text">ByteSpace</p>
          </div>
          {/* description */}
          <p className="text-sm mt-5">Stay Up to date with our latest features and releases by joining our newsletter.</p>
          {/* search bar and button */}
          <div className="mt-10">
            <input className="p-3 w-100 border-2 rounded-full border-[#DADCDE]" type="text" placeholder="Enter your email" />
            <CommonButton className="bg-[#D4FB20] p-3 rounded-full ml-5" btnText="Search"/>
          </div>
          {/* small description */}
          <p className="mt-5"><small>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</small></p>
        </div>

        {/* Hyper links */}
        <div className="flex gap-20 text-sm">
          <div>
            <ul>
              <li className="mt-6">Featured Courses</li>
              <li className="mt-6">Featured Categories</li>
              <li className="mt-6">Business</li>
              <li className="mt-6">IT</li>
              <li className="mt-6">Design</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mt-6">Development</li>
              <li className="mt-6">Marketing</li>
              <li className="mt-6">Photography</li>
              <li className="mt-6">Finance</li>
              <li className="mt-6">Sport</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mt-6">Become a Creator</li>
              <li className="mt-6">Affiliate Program</li>
              <li className="mt-6">Contact</li>
              <li className="mt-6">Help</li>
              <li className="mt-6">About</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="mt-20" />
      <div className="flex justify-between mt-5">
        <p>@ 2023 ByteSpace. All rights reserved.</p>
        <div className="flex items-center gap-10">
          <p><small>Privacy Policy</small></p>
          <p><small>Terms and Service</small></p>
          <p><small>Cookie Settings</small></p>
        </div>
      </div>
    </div>
  );
}
