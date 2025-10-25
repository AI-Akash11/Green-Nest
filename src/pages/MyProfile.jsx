import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

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
      e.target.reset();
  };

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

        <p className="text-gray-500 text-sm md:text-base mb-6">{user?.email}</p>

        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="btn bg-yellow-400 text-white font-semibold text-base md:text-lg px-4 md:px-6 py-2 md:py-3 rounded-xl shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] hover:bg-yellow-600 transition"
          >
            Update Profile
          </button>
        ) : (
          <form
            onSubmit={handleUpdate}
            className="flex flex-col gap-3 mt-4 text-left"
          >
            <label className="text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-3 py-2 rounded-xl bg-[#e0e5ec] shadow-inner shadow-[#a3b1c6]/70 outline-none"
              placeholder="Enter your Name"
            />

            <label className="text-sm font-medium text-gray-600">
              Photo URL
            </label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="px-3 py-2 rounded-xl bg-[#e0e5ec] shadow-inner shadow-[#a3b1c6]/70 outline-none"
              placeholder="Enter Photo URL"
            />

            <div className="flex justify-center gap-3 mt-4">
              <button
                type="submit"
                className="btn bg-green-400 text-white font-semibold px-4 py-2 rounded-xl hover:bg-green-500 transition"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="btn bg-gray-400 text-white font-semibold px-4 py-2 rounded-xl hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
