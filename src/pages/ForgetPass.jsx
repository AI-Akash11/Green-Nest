import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const ForgetPass = () => {
    const {resetPass} = useContext(AuthContext)

    const handleResetPass = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;

        resetPass(email)
        .then(()=>{
            toast.info('Check Your Email for Link');
            e.target.reset();
        })
        .catch((err)=>{
            toast.error(err.message)
        })
    }
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
              Reset Password
            </h2>
            <p className="text-gray-500 font-medium">Enter your email and we'll send you a link to reset your password.</p>
          </div>

          <form onSubmit={handleResetPass} className="flex flex-col gap-4 relative">
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

            <button
              type="submit"
              className="mt-4 w-full py-4 rounded-xl bg-green-500 text-white font-bold text-lg shadow-lg shadow-green-500/30 hover:bg-green-600 hover:shadow-green-500/50 hover:-translate-y-0.5 transition-all"
            >
              Get Reset Link
            </button>
          </form>

          <p className="text-center mt-10 text-gray-500 font-medium">
            Remember your password?{" "}
            <Link to={"/auth/login"} className="text-green-500 font-bold hover:underline">
              Log in here
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right Image Section */}
      <div className="hidden lg:flex w-1/2 relative bg-green-900 border-l border-green-800">
        <img 
          src="https://images.unsplash.com/photo-1497349942732-c651eacb33fb?q=80&w=2670&auto=format&fit=crop" 
          alt="Tranquil botanical setup" 
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
            Find Your Roots.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-emerald-100 max-w-md leading-relaxed"
          >
            We all lose our way sometimes. Let us help you get back to your botanical journey with ease.
          </motion.p>
        </div>
      </div>
    </div>
    );
};

export default ForgetPass;