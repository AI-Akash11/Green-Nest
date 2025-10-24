import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const Signup = () => {
  const [nameError, setNameError] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { createUser, updateUser, setUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    let hasError = false;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more then 5 character");
      hasError = true;
    } else {
      setNameError("");
    }

    const photo = form.photo.value;
    if (!/^https?:\/\/.+/.test(photo)) {
      setPhotoError(
        "Please enter a valid photo URL starting with http or https"
      );
      hasError = true;
    } else {
      setPhotoError("");
    }

    const email = form.email.value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    } else {
      setEmailError("");
    }

    const password = form.password.value;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 chars long, include uppercase, lowercase, number, and special character"
      );
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (hasError) return;

    console.log({ name, photo, email, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success('Account Created Successfully')
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            Navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode);
      });
  };
  return (
    <div className="py-30 flex justify-center items-center bg-base-100">
      <div className="bg-base-200 p-8 rounded-2xl shadow-[9px_9px_16px_#a3b1c6,-9px_-9px_16px_#ffffff] w-[400px] md:w-[500px]">
        <h2 className="text-center text-4xl text-yellow-400 font-bold mb-10">
          Sign Up
        </h2>

        <form onSubmit={handleSignIn} className="flex flex-col gap-1 relative">
          <label className="text-sm  mt-3 ml-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="px-3 py-2 rounded-xl bg-[#e0e5ec] shadow-inner shadow-[#a3b1c6]/70 outline-none"
          />

          {nameError && <p className="text-xs text-error">{nameError}</p>}

          <label className="text-sm  mt-3 ml-1">Photo URL</label>
          <input
            type="text"
            name="photo"
            placeholder="Enter a photo URL"
            className="px-3 py-2 rounded-xl bg-[#e0e5ec] shadow-inner shadow-[#a3b1c6]/70 outline-none"
          />
          {photoError && <p className="text-xs text-error">{photoError}</p>}

          <label className="text-sm  mt-3 ml-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="px-3 py-2 rounded-xl bg-[#e0e5ec] shadow-inner shadow-[#a3b1c6]/70 outline-none"
          />
          {emailError && <p className="text-xs text-error">{emailError}</p>}

          <label className="text-sm  mt-3 ml-1">Password</label>
          <input
            type="text"
            name="password"
            placeholder="Password"
            className="px-3 py-2 rounded-xl bg-[#e0e5ec] shadow-inner shadow-[#a3b1c6]/70 outline-none"
          />
          {passwordError && (
            <p className="text-xs text-error">{passwordError}</p>
          )}

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
