import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  const [eye, setEye] = useState(true);
  return (
    <div className="py-40 flex justify-center items-center bg-base-100">
      <div className="bg-base-200 p-8 rounded-2xl shadow-[9px_9px_16px_#a3b1c6,-9px_-9px_16px_#ffffff] w-[400px] md:w-[500px]">
        <h2 className="text-center text-green-400 text-4xl font-bold mb-10">Login</h2>

        <form className="flex flex-col gap-1 relative">

          <label className="text-sm  mt-3 ml-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="px-3 py-2 rounded-xl bg-[#e0e5ec] shadow-inner shadow-[#a3b1c6]/70 outline-none"
          />

          <label className="text-sm  mt-3 ml-1">Password</label>
          <input
            type={eye ? "password" : "text"}
            name="password"
            placeholder="Password"
            className="px-3 py-2 rounded-xl bg-[#e0e5ec] shadow-inner shadow-[#a3b1c6]/70 outline-none"
          />

          <div
            onClick={() => {
              setEye(!eye);
            }}
            className="absolute right-4 top-[125px] text-xl cursor-pointer"
          >
            {eye ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
          </div>

          <div className="text-center mt-4 text-gray-600 text-sm">
          Forgot your password?
        </div>

          <button 
          type="submit"
          className="mt-2 w-full py-3 rounded-xl bg-green-400 shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] font-bold hover:bg-green-500 transition text-xl text-white">
            Login
          </button>
        </form>

        <div className="text-center mt-4 text-gray-600 text-sm">
          Dont have an account? <Link 
          to={'/auth/signup'}
          className="text-yellow-400 font-semibold underline underline-offset-4">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
