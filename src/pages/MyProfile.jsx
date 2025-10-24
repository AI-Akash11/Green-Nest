import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="min-h-[75vh] bg-base-100 flex justify-center items-center py-10 px-4">
      <div className="bg-base-200 p-6 md:p-8 rounded-2xl shadow-[9px_9px_16px_#a3b1c6,-9px_-9px_16px_#ffffff] w-full max-w-sm md:max-w-md lg:max-w-lg text-center">

        <div className="flex justify-center">
          <img
            src={user?.photoURL || "https://i.pravatar.cc/150"}
            alt="User Avatar"
            className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-4 border-yellow-400 shadow-md mb-4"
          />
        </div>

        
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 mb-1">
          {user?.displayName || "Anonymous User"}
        </h2>

        
        <p className="text-gray-500 text-sm md:text-base mb-6">
          {user?.email}
        </p>

        
        <button className="btn bg-yellow-400 text-white font-semibold text-base md:text-lg px-4 md:px-6 py-2 md:py-3 rounded-xl shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] hover:bg-yellow-600 transition">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
