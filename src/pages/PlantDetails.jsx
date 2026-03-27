import React, { useContext, useEffect, useState } from "react";
import { PlantContext } from "../contexts/PlantContext";
import { useParams, useNavigate } from "react-router";
import { FaLeaf, FaStar, FaWarehouse, FaShieldAlt, FaTruck, FaUndo, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const PlantDetails = () => {
  const [pla, setPla] = useState({});
  const { plants } = useContext(PlantContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundPlant = plants.find((plant) => plant.plantId == id);
    setPla(foundPlant);
  }, [id, plants]);

  if (!pla || !pla.plantName) return (
    <div className="min-h-[60vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-green-500"></span>
    </div>
  );

  return (
    <div className="container mx-auto px-4 md:px-8 max-w-[1400px] mt-8 md:mt-12">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={(e) => {
          e.stopPropagation();
          navigate(-1);
        }}
        className="relative z-30 flex items-center gap-2 text-gray-500 hover:text-green-600 font-bold mb-8 transition-colors group cursor-pointer"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Go Back
      </motion.button>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative">
        {/* Left Column - Sticky Image */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-32 h-fit">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group border border-gray-100"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-400/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              src={pla.image}
              className="w-full h-[300px] md:h-[450px] object-contain relative z-10 drop-shadow-2xl"
              alt={pla.plantName}
            />
          </motion.div>

          {/* Price Card overlay for mobile */}
          <div className="lg:hidden mt-6 bg-green-950 p-6 rounded-3xl text-white flex justify-between items-center shadow-xl">
            <div>
              <p className="text-xs text-green-400 font-bold uppercase tracking-wider">Current Price</p>
              <p className="text-3xl font-black">${pla.price}</p>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <FaStar className="text-yellow-400" />
              <span className="font-bold">{pla.rating}</span>
            </div>
          </div>
        </div>

        {/* Right Column - Product Info */}
        <div className="w-full lg:w-1/2 space-y-10">
          {/* Header info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="px-5 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-black uppercase tracking-[0.2em]">
                {pla.category}
              </span>
              {pla.availableStock > 0 ? (
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-green-500 bg-green-500/10 px-3 py-1 rounded-full">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  IN STOCK
                </span>
              ) : (
                <span className="text-[10px] font-bold text-red-500 bg-red-500/10 px-3 py-1 rounded-full">OUT OF STOCK</span>
              )}
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none mb-6">
              {pla.plantName}
            </h1>
            <div className="hidden lg:flex items-baseline gap-4 mb-4">
              <span className="text-6xl font-black text-green-600 tracking-tighter">${pla.price}</span>
              <div className="flex items-center gap-1 text-yellow-500 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">
                <FaStar className="text-xs" />
                <span className="text-sm font-black text-yellow-700">{pla.rating}</span>
              </div>
            </div>
          </div>

          {/* Description card */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
            <h3 className="text-lg font-black text-gray-800 mb-4 flex items-center gap-2">
              <FaLeaf className="text-green-500" /> About this plant
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {pla.description || "Discover the beauty and serenity of this exquisite botanical specimen. Perfectly curated to bring a touch of natural luxury to your living space while purifying your air and calming your mind."}
            </p>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <FaWarehouse />, label: "Origin", val: "Tropical" },
              { icon: <FaShieldAlt />, label: "Warranty", val: "1 Year" },
              { icon: <FaTruck />, label: "Delivery", val: "Free" },
              { icon: <FaUndo />, label: "Returns", val: "30 Days" }
            ].map((item, idx) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={idx}
                className="bg-slate-50 p-6 rounded-3xl border border-gray-100 flex flex-col gap-2 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="text-green-600 text-xl">{item.icon}</div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{item.label}</p>
                  <p className="text-gray-800 font-bold">{item.val}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="pt-6">
            <button 
              onClick={() => {
                import('sweetalert2').then((Swal) => {
                  Swal.default.fire({
                    title: 'Botanical Success! 🪴',
                    text: `${pla.plantName} has been added to your collection.`,
                    icon: 'success',
                    confirmButtonColor: '#052c22',
                    borderRadius: '32px',
                    timer: 3000,
                    showConfirmButton: false
                  });
                });
              }}
              className="w-full py-6 bg-green-950 text-white text-xl font-black rounded-[2rem] hover:bg-green-900 transition-all shadow-2xl hover:shadow-green-900/40 flex items-center justify-center gap-4 group"
            >
              Add To Collection
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                →
              </motion.span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
