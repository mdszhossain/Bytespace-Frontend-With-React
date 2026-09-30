import CommonButton from "../Home/CommonButton";
import { Link } from "react-router-dom";

export default function Form({ mode = "signup" }) {
  const isSignIn = mode === "signin";

  return (
    <div className="relative left-100 top-10">
      <form className="bg-white w-130 p-10 rounded-xl">
        <h3 className="text-xl font-semibold">
          {isSignIn ? "Sign In" : "Create an Account"}
        </h3>
        <p className="text-5xl font-bold my-10">
          {isSignIn ? "Welcome back" : "Welcome to ByteSpace"}
        </p>

        <div className="mt-5">
          {!isSignIn && (
            <div className="mt-5">
              <label htmlFor="fullname">Full Name</label><br />
              <input id="fullname" name="fullname" type="text" autoComplete="name" placeholder="James Davis" className="border-2 px-4 py-3 w-full rounded-xl" />
            </div>
          )}
          <div className="mt-5">
            <label htmlFor="email">Email</label><br />
            <input id="email" name="email" type="email" autoComplete="email" placeholder="designer@gmail.com" className="border-2 px-4 py-3 w-full rounded-xl" />
          </div>
          <div className="mt-5">
            <label htmlFor="password">Password</label><br />
            <input id="password" name="password" type="password" autoComplete={isSignIn ? "current-password" : "new-password"} placeholder="********" className="border-2 px-4 py-3 w-full rounded-xl" />
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <CommonButton className="px-5 py-3 bg-[#D4FB20] rounded-full" btnText={isSignIn ? "Sign in" : "Join"}/>
        </div>
        <p className="text-center mt-20">
          {isSignIn ? "Don't have an account? " : "Already have an account? "}
          <Link className="text-[#003BE2]" to={isSignIn ? "/signup" : "/signin"}>
            {isSignIn ? "Join us" : "Sign in"}
          </Link>
        </p>
      </form>
    </div>
  )
}