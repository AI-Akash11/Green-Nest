import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { DotLoader } from "react-spinners";
import { motion } from "framer-motion";

const Navbar = () => {
    const navLinkStyle = ({isActive}) => 
        `px-4 py-2 text-sm md:text-base rounded-full font-semibold transition-all duration-300 ${isActive ? 'bg-green-500 text-white shadow-md' : 'text-gray-600 hover:bg-green-100'}`;
        
    const links = <>
      <NavLink className={navLinkStyle} to={'/'}>Home</NavLink>
      <NavLink className={navLinkStyle} to={'/plants'}>Plants</NavLink>
      <NavLink className={navLinkStyle} to={'/myprofile'}>My Profile</NavLink>
    </>

    const {user,logOut,setUser,loading} = useContext(AuthContext)
    
    const handleLogOut = () =>{
      logOut()
      .then(()=>{
        setUser(null)
        toast.success("User logged out successfully")
      })
      .catch(e=>{
        console.log(e)
      })
    }
    
  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="navbar sticky top-0 z-50 bg-white/70 backdrop-blur-xl shadow-md border-b border-gray-100 md:px-10 lg:px-20"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden rounded-full hover:bg-green-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100/95 backdrop-blur-md rounded-2xl z-20 mt-4 w-52 p-4 shadow-xl border border-gray-100 gap-2 flex flex-col"
          >
            {links}
          </div>
        </div>
        <div className="flex justify-start items-center group cursor-pointer">
          <motion.img 
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.6 }}
            className="w-10 h-10 object-contain drop-shadow-md" 
            src="https://i.ibb.co.com/dyt4mZT/plant-logo.png" 
            alt="GreenNest Logo" 
          />
          <Link to={'/'} className="text-2xl md:text-3xl ml-3 font-extrabold tracking-tight text-yellow-400">
            <span className="text-green-500">Green</span>Nest
          </Link>
        </div>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal space-x-2">
          {links}
        </div>
      </div>
      
      <div className="navbar-end gap-3 z-20">
        {loading ? (
          <DotLoader color="#22c55e" size={30} />
        ) : user ? (
          <details className="dropdown dropdown-end relative">
            <summary className="btn btn-ghost btn-circle avatar m-1 p-0 border-2 border-transparent hover:border-green-500 transition-all rounded-full overflow-hidden shadow-sm">
              <img
                src={user.photoURL || "https://i.pravatar.cc/150"}
                alt="user profile"
                className="w-10 h-10 object-cover"
              />
            </summary>

            <ul className="menu dropdown-content bg-base-100 rounded-2xl w-64 p-5 shadow-2xl border border-gray-100 mt-4 origin-top-right">
              <li className="flex flex-col gap-1 items-start w-full px-2 py-1 pointer-events-none">
                <p className="font-bold text-gray-800 text-lg truncate w-full">{user.displayName || "User"}</p>
                <p className="text-xs text-gray-500 truncate w-full">{user.email}</p>
              </li>

              <div className="divider my-2 opacity-50 hidden md:flex"></div>

              <li className="w-full">
                <button
                  onClick={handleLogOut}
                  className="w-full btn bg-yellow-400 hover:bg-yellow-500 text-white border-none rounded-xl mt-2 transition-all shadow-sm"
                >
                  Logout
                </button>
              </li>
            </ul>
          </details> 
        ) : (
          <div className="flex gap-2">
            <Link to={'/auth/login'} className="btn btn-success text-white rounded-full px-6 font-semibold shadow-md border-none">Login</Link>
            <Link to={'/auth/signup'} className="btn btn-info text-white rounded-full px-6 shadow-md border-none">Register</Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
