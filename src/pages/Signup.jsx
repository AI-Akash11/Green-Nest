import React from "react";
import { Link } from "react-router";

const Signup = () => {
  return (
    <div className="py-30 flex justify-center items-center bg-base-100">
      <div className="bg-base-200 p-8 rounded-2xl shadow-[9px_9px_16px_#a3b1c6,-9px_-9px_16px_#ffffff] w-[400px] md:w-[500px]">
        <h2 className="text-center text-4xl text-yellow-400 font-bold mb-10">Sign Up</h2>

        <form className="flex flex-col gap-1 relative">
          <label className="text-sm  mt-3 ml-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="px-3 py-2 rounded-xl bg-[#e0e5ec] shadow-inner shadow-[#a3b1c6]/70 outline-none"
          />

          <label className="text-sm  mt-3 ml-1">Photo URL</label>
          <input
            type="text"
            name="photo"
            placeholder="Enter a photo URL"
            className="px-3 py-2 rounded-xl bg-[#e0e5ec] shadow-inner shadow-[#a3b1c6]/70 outline-none"
          />

          <label className="text-sm  mt-3 ml-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="px-3 py-2 rounded-xl bg-[#e0e5ec] shadow-inner shadow-[#a3b1c6]/70 outline-none"
          />

          <label className="text-sm  mt-3 ml-1">Password</label>
          <input
            type="text"
            name="password"
            placeholder="Password"
            className="px-3 py-2 rounded-xl bg-[#e0e5ec] shadow-inner shadow-[#a3b1c6]/70 outline-none"
          />

          <button
            type="submit"
            className="mt-5 w-full py-3 rounded-xl bg-yellow-300 shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] font-bold hover:bg-yellow-500 transition text-xl text-white"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-4 text-gray-600 text-sm">
          Already have an account?{" "}
          <Link
            to={"/auth/login"}
            className="text-green-500 font-semibold underline underline-offset-4"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
