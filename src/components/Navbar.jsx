import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { DotLoader } from "react-spinners";

const Navbar = () => {
    const links = <>
    <NavLink className={'px-2 py-1 text-sm rounded-2xl font-semibold text-gray-600'} to={'/'}>Home</NavLink>
    <NavLink className={'px-2 py-1 text-sm rounded-2xl font-semibold text-gray-600'} to={'/plants'}>Plants</NavLink>
    <NavLink className={'px-2 py-1 text-sm rounded-2xl font-semibold text-gray-600'} to={'/myprofile'}>My Profile</NavLink>
    </>
    const {user,logOut,setUser,loading} = useContext(AuthContext)
    // console.log(user)
    const handleLogOut = () =>{
      logOut()
      .then(()=>{
        setUser(null)
        toast.success("user Logged Out successfully")
      })
      .catch(e=>{
        console.log(e)
      })
    }
  return (
    <div className="navbar bg-base-100 shadow-sm md:px-10 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <div
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {
              links
            }
          </div>
        </div>
        <div className="flex justify-start items-center">
          <img className="w-8" src="https://i.ibb.co.com/dyt4mZT/plant-logo.png" alt="" />
          <Link to={'/'} className="text-2xl ml-2 font-bold text-yellow-400"><span className="text-green-500">Green</span>Nest</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal space-x-4">
          {
            links
          }
        </div>
      </div>
      <div className="navbar-end">
        {
          loading
          ?
          <DotLoader></DotLoader>
          :
        user 
        ? 
        <details className="dropdown dropdown-end">
      <summary className="btn m-1 p-0 border-none bg-transparent">
        <img
          src={user.photoURL}
          className="w-10 h-10 rounded-full border border-gray-300"
        />
      </summary>

      <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-64 p-4 shadow-lg">
        <li className="flex flex-col gap-1">
          <p className="font-semibold text-gray-700">{user.displayName}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </li>

        <div className="divider my-1"></div>

        <li>
          <button
            onClick={handleLogOut}
            className="btn bg-yellow-400 text-white mt-1"
          >
            Logout
          </button>
        </li>
      </ul>
    </details> 
        :
        <div className="navbar-end">
        <Link to={'/auth/login'} className="btn btn-success text-white">Login</Link>
        <Link to={'/auth/signup'} className="btn btn-info ml-3 text-white">Register</Link>
      </div>
      }
      </div>
    </div>
  );
};

export default Navbar;
