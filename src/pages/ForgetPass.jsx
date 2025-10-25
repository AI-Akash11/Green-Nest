import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router';

const ForgetPass = () => {
    const {resetPass} = useContext(AuthContext)

    const handleResetPass = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;

        resetPass(email)
        .then(()=>{
            toast.info('Chect Your Email for Link');
            e.target.reset();
        })
        .catch((err)=>{
            toast.error(err.message)
        })
    }
    return (
        <div className="py-10 md:py-20 lg:py-40 flex justify-center items-center bg-base-100">
      <div className="bg-base-200 p-8 rounded-2xl shadow-[9px_9px_16px_#a3b1c6,-9px_-9px_16px_#ffffff] w-[400px] md:w-[500px]">
        <h2 className="text-center text-green-400 text-4xl font-bold mb-10">
          Forget Password
        </h2>

        <form onSubmit={handleResetPass} className="flex flex-col gap-4">
          <label className="text-sm ml-1">Email</label>
          <input
          name='email'
            type="email"
            placeholder="Enter your email"
            className="px-3 py-2 rounded-xl bg-[#e0e5ec] shadow-inner shadow-[#a3b1c6]/70 outline-none"
          />

          <button
            type="submit"
            className="mt-2 w-full py-3 rounded-xl bg-green-400 shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] font-bold hover:bg-green-500 transition text-xl text-white"
          >
            Receive Password Reset Link
          </button>
        </form>

        <div className="text-center mt-4 text-gray-600 text-sm">
          Remember your password?{" "}
          <Link
            to={"/auth/login"}
            className="text-yellow-400 font-semibold underline underline-offset-4"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
    );
};

export default ForgetPass;