import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserEdit, FaCamera, FaEnvelope, FaUser, FaCheck, FaTimes } from "react-icons/fa";

const MyProfile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  useEffect(() => {
    setName(user?.displayName || "");
    setPhoto(user?.photoURL || "");
  }, [user]);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!name || !photo) {
      toast.error("Please fill in all fields!");
      return;
    }

    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile updated successfully!");
        setIsEditing(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update profile.");
      });
  };

  return (
    <div className="flex flex-col items-center py-6 md:py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row"
      >
        {/* Left Side - Profile Intro */}
        <div className="md:w-1/3 bg-green-950 p-8 flex flex-col items-center justify-center text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-400/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
            
            <div className="relative group mb-6">
                <div className="absolute inset-0 bg-green-400 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <img
                    src={user?.photoURL || "https://i.pravatar.cc/150"}
                    alt="User Avatar"
                    className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white/20 object-cover shadow-xl relative z-10 transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            
            <h3 className="text-xl font-black mb-1 tracking-tight truncate w-full px-2">
                {user?.displayName || "Member"}
            </h3>
            <span className="text-green-400/80 text-[10px] font-bold uppercase tracking-[0.2em]">Botanist Member</span>
        </div>

        {/* Right Side - Info & Actions */}
        <div className="flex-1 p-8 md:p-12 bg-white relative">
            <AnimatePresence mode="wait">
                {!isEditing ? (
                   <motion.div
                    key="view"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col h-full"
                   >
                        <div className="mb-10">
                            <h2 className="text-3xl font-black text-gray-900 mb-2">My Profile</h2>
                            <p className="text-gray-500 text-sm">Manage your account information and preferences.</p>
                        </div>

                        <div className="space-y-6 flex-1">
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                                    <FaUser size={14} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Name</p>
                                    <p className="text-gray-800 font-bold">{user?.displayName || "Not Set"}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                    <FaEnvelope size={14} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address</p>
                                    <p className="text-gray-800 font-bold">{user?.email}</p>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsEditing(true)}
                            className="mt-10 flex items-center justify-center gap-2 w-full py-4 bg-green-950 text-white font-bold rounded-2xl hover:bg-green-900 transition-all shadow-lg hover:shadow-green-900/20 group"
                        >
                            <FaUserEdit className="group-hover:rotate-12 transition-transform" />
                            Update Profile
                        </button>
                   </motion.div>
                ) : (
                    <motion.div
                        key="edit"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <div className="mb-8">
                            <h2 className="text-3xl font-black text-gray-900 mb-2">Update Info</h2>
                            <p className="text-gray-500 text-sm">Edit your display name and profile picture URL.</p>
                        </div>

                        <form onSubmit={handleUpdate} className="space-y-4">
                            <div className="space-y-1.5 px-1">
                                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Your Name</label>
                                <div className="relative">
                                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent focus:border-green-500 focus:bg-white rounded-2xl outline-none transition-all font-bold text-gray-800 text-sm"
                                        placeholder="Display Name"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5 px-1">
                                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Avatar URL</label>
                                <div className="relative">
                                    <FaCamera className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                                    <input
                                        type="text"
                                        value={photo}
                                        onChange={(e) => setPhoto(e.target.value)}
                                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent focus:border-green-500 focus:bg-white rounded-2xl outline-none transition-all font-bold text-gray-800 text-sm"
                                        placeholder="Photo URL"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-3 mt-8">
                                <button
                                    type="submit"
                                    className="flex-1 py-4 bg-green-500 text-white font-black rounded-2xl hover:bg-green-600 transition-all shadow-xl shadow-green-500/20 flex items-center justify-center gap-2"
                                >
                                    <FaCheck /> Save Changes
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="w-14 h-14 bg-gray-100 text-gray-400 flex items-center justify-center rounded-2xl hover:bg-red-50 hover:text-red-500 transition-all"
                                >
                                    <FaTimes />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default MyProfile;
