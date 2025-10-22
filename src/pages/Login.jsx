import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  const [eye, setEye] = useState(true);
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#e0e5ec]">
      <div className="bg-[#e0e5ec] p-8 rounded-2xl shadow-[9px_9px_16px_#a3b1c6,-9px_-9px_16px_#ffffff] w-[400px] md:w-[500px]">
        <h2 className="text-center text-4xl font-semibold mb-15">Login</h2>

        <form className="flex flex-col gap-4 relative">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="px-3 py-2 rounded-xl bg-[#e0e5ec] shadow-inner shadow-[#a3b1c6]/70 outline-none"
          />
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
            className="absolute right-4 top-17 text-xl cursor-pointer"
          >
            {eye ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
          </div>

          <button 
          type="submit"
          className="mt-8 w-full py-3 rounded-xl bg-[#e0e5ec] shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] font-semibold hover:bg-[#d1d9e6] transition">
            Login
          </button>
        </form>

        <div className="text-center mt-4 text-gray-600 text-sm">
          Forgot your password?
        </div>
      </div>
    </div>
  );
};

export default Login;
