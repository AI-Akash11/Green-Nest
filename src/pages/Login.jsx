import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Login = () => {
  const { googleLogin, setUser, logInUser } = useContext(AuthContext);
  const [eye, setEye] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleEmailLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logInUser(email, password)
      .then((res) => {
        setUser(res.user);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Login successful");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handleGoogleLogIn = () => {
    googleLogin()
      .then((res) => {
        setUser(res.user);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Google Login successful");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="flex min-h-screen bg-base-100">
      {/* Left Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-20 relative z-10 bg-white">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
              Welcome Back
            </h2>
            <p className="text-gray-500 font-medium">Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handleEmailLogin} className="flex flex-col gap-4 relative">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all outline-none"
                required
              />
            </div>

            <div className="flex flex-col gap-2 relative">
              <label className="text-sm font-semibold text-gray-700 ml-1">Password</label>
              <input
                type={eye ? "password" : "text"}
                name="password"
                placeholder="••••••••"
                className="px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all outline-none w-full"
                required
              />
              <div
                onClick={() => setEye(!eye)}
                className="absolute right-4 top-[42px] text-gray-400 hover:text-green-500 cursor-pointer text-xl transition-colors"
              >
                {eye ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <div className="flex justify-end">
              <Link to={'/auth/forget-pass'} className="text-sm font-semibold text-green-600 hover:text-green-700">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="mt-4 w-full py-4 rounded-xl bg-green-500 text-white font-bold text-lg shadow-lg shadow-green-500/30 hover:bg-green-600 hover:shadow-green-500/50 hover:-translate-y-0.5 transition-all"
            >
              Sign In
            </button>
          </form>

          <div className="flex items-center my-8">
            <hr className="grow border-t border-gray-200" />
            <span className="mx-4 text-gray-400 text-sm font-medium">or continue with</span>
            <hr className="grow border-t border-gray-200" />
          </div>

          <button 
            onClick={handleGoogleLogIn} 
            className="w-full flex items-center justify-center gap-3 py-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 font-semibold text-gray-700 transition-colors shadow-sm"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
              </g>
            </svg>
            Sign in with Google
          </button>

          <p className="text-center mt-10 text-gray-500 font-medium">
            Don't have an account?{" "}
            <Link to={"/auth/signup"} className="text-green-500 font-bold hover:underline">
              Sign up for free
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right Image Section */}
      <div className="hidden lg:flex w-1/2 relative bg-green-900 border-l border-green-800">
        <img 
          src="https://images.unsplash.com/photo-1416879598555-220b8ebed709?q=80&w=2670&auto=format&fit=crop" 
          alt="Lush green indoor plants" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900/90 via-gray-900/20 to-transparent z-10"></div>
        <div className="relative z-20 flex flex-col justify-end p-20 h-full text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-extrabold leading-tight mb-4"
          >
            Nature's Touch.<br/>Right at Home.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-emerald-100 max-w-md leading-relaxed"
          >
            Access your curated collection, track your botanical orders, and consult with our plant experts—all in one place.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Login;
