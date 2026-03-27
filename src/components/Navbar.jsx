import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { DotLoader } from "react-spinners";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaLeaf } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinkStyle = ({isActive}) => 
        `px-4 py-2 text-sm md:text-base rounded-full font-semibold transition-all duration-300 ${isActive ? 'bg-green-500 text-white shadow-md' : 'text-gray-600 hover:bg-green-100'}`;
        
    const sidebarLinkStyle = ({isActive}) => 
        `flex items-center gap-3 px-6 py-4 text-lg font-bold transition-all duration-300 rounded-2xl ${isActive ? 'bg-green-500 text-white shadow-lg translate-x-2' : 'text-gray-600 hover:bg-green-50 hover:translate-x-1'}`;

    const links = (isSidebar = false) => (
      <>
        <NavLink onClick={() => isSidebar && setIsMenuOpen(false)} className={isSidebar ? sidebarLinkStyle : navLinkStyle} to={'/'}>Home</NavLink>
        <NavLink onClick={() => isSidebar && setIsMenuOpen(false)} className={isSidebar ? sidebarLinkStyle : navLinkStyle} to={'/plants'}>Plants</NavLink>
        <NavLink onClick={() => isSidebar && setIsMenuOpen(false)} className={isSidebar ? sidebarLinkStyle : navLinkStyle} to={'/myprofile'}>My Profile</NavLink>
      </>
    );

    const {user,logOut,setUser,loading} = useContext(AuthContext)
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    
    const handleLogOut = () =>{
      logOut()
      .then(()=>{
        setUser(null)
        setIsProfileOpen(false);
        toast.success("User logged out successfully")
      })
      .catch(e=>{
        console.log(e)
      })
    }

    // Close dropdown on outside click
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (isProfileOpen && !event.target.closest('.profile-dropdown-container')) {
                setIsProfileOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isProfileOpen]);
    
  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100"
      >
        <div className="navbar w-full max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="navbar-start">
            {/* Mobile Hamburger Button */}
            <button 
                onClick={() => setIsMenuOpen(true)}
                className="btn btn-ghost lg:hidden rounded-2xl hover:bg-green-50 px-2 mr-2"
            >
              <div className="flex flex-col gap-1.5 items-start p-1">
                <span className="w-6 h-0.5 bg-gray-600 rounded-full"></span>
                <span className="w-4 h-0.5 bg-green-500 rounded-full"></span>
                <span className="w-6 h-0.5 bg-gray-600 rounded-full"></span>
              </div>
            </button>

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
              {links()}
            </div>
          </div>
          
          <div className="navbar-end gap-3 z-20">
            {loading ? (
              <DotLoader color="#22c55e" size={30} />
            ) : user ? (
              <div className="relative profile-dropdown-container">
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className={`flex items-center gap-2 p-1 pr-3 rounded-full transition-all border ${isProfileOpen ? 'bg-green-50 border-green-200 shadow-sm' : 'border-transparent hover:bg-green-50 hover:border-green-100'}`}
                >
                  <div className="w-10 h-10 rounded-full border-2 border-green-500 p-0.5">
                    <img
                      src={user.photoURL || "https://i.pravatar.cc/150"}
                      alt="user profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="hidden md:block text-left">
                     <p className="text-xs font-black text-gray-800 leading-tight truncate max-w-[100px]">{user.displayName || "Member"}</p>
                     <p className="text-[10px] font-bold text-green-500 uppercase tracking-tighter">Verified</p>
                  </div>
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                    {isProfileOpen && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-0 mt-3 w-64 origin-top-right rounded-3xl bg-white shadow-2xl border border-gray-100 z-[60] p-6"
                        >
                            <div className="flex flex-col items-center text-center mb-6">
                                <div className="relative mb-3">
                                    <img
                                        src={user.photoURL || "https://i.pravatar.cc/150"}
                                        alt="profile avatar"
                                        className="w-16 h-16 rounded-full border-4 border-green-50 object-cover"
                                    />
                                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                                </div>
                                <h4 className="font-black text-gray-900 text-lg leading-tight">{user.displayName || "Botanist"}</h4>
                                <p className="text-xs text-gray-400 font-medium truncate w-full px-4">{user.email}</p>
                            </div>

                            <div className="space-y-1">
                                <Link 
                                    to="/myprofile" 
                                    onClick={() => setIsProfileOpen(false)}
                                    className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-2xl transition-all group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-green-100 group-hover:text-green-500 transition-colors">
                                        <FaLeaf size={12} />
                                    </div>
                                    Account Settings
                                </Link>
                                
                                <button
                                    onClick={handleLogOut}
                                    className="flex items-center gap-3 w-full px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-2xl transition-all group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-400 group-hover:bg-red-100 transition-colors">
                                        <span className="text-lg">↩</span>
                                    </div>
                                    Logout Session
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link to={'/auth/login'} className="btn btn-success text-white rounded-full px-6 font-semibold shadow-md border-none">Login</Link>
                <Link to={'/auth/signup'} className="btn btn-info text-white rounded-full px-6 shadow-md border-none">Register</Link>
              </div>
            )}
          </div>
        </div>
      </motion.header>

      {/* Sidebar Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden"
            />
            
            {/* Sidebar content */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-[80%] max-w-sm bg-white z-[100] lg:hidden shadow-2xl flex flex-col p-6"
            >
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center group cursor-pointer">
                    <img 
                        className="w-10 h-10 object-contain drop-shadow-md" 
                        src="https://i.ibb.co.com/dyt4mZT/plant-logo.png" 
                        alt="GreenNest Logo" 
                    />
                    <Link to={'/'} className="text-2xl ml-3 font-extrabold tracking-tight text-yellow-400">
                        <span className="text-green-500">Green</span>Nest
                    </Link>
                </div>
                <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-3 rounded-full bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors"
                >
                    <FaTimes />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                <div className="px-6 py-2 mb-2">
                    <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Main Navigation</span>
                </div>
                {links(true)}
              </nav>

              <div className="mt-auto pt-8 border-t border-gray-100">
                <p className="text-gray-400 text-xs px-6">© {new Date().getFullYear()} Green Nest Botanical</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
