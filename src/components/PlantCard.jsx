import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

const PlantCard = ({ plant }) => {
  const { plantName, category, price, rating, image, availableStock, plantId } = plant;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-3 md:p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 group relative flex flex-col h-full"
    >
      {/* Image Container with floating effect */}
      <div className="rounded-2xl overflow-hidden bg-slate-50 relative aspect-square md:aspect-auto md:h-56 lg:h-64 flex items-center justify-center mb-3 md:mb-5">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-full object-contain p-4 md:p-6 drop-shadow-md z-10 relative"
          src={image}
          alt={plantName}
        />
        {/* Soft background glow */}
        <div className="absolute inset-0 bg-green-100 opacity-40 rounded-full blur-2xl scale-150 group-hover:scale-125 transition-transform duration-700"></div>
        
        {/* Quick View Overlay Button */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center backdrop-blur-[2px]">
            <Link to={`/plantDetails/${plantId}`} className="btn btn-accent btn-sm md:btn-md px-4 md:px-8 font-bold rounded-full shadow-lg transform translate-y-6 group-hover:translate-y-0 text-white transition-all duration-300 border-none">
                Quick View
            </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="grow flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-start mb-2 gap-1 md:gap-2">
            <div className="flex-1 w-full min-w-0">
                <span className="text-[9px] md:text-sm text-yellow-600 font-bold tracking-widest uppercase bg-green-200 px-2 py-0.5 md:px-3 md:py-1 rounded-full inline-block mb-1 md:mb-3">
                {category}
                </span>
                <Link to={`/plantDetails/${plantId}`} className="block">
                  <h2 className="text-sm md:text-xl lg:text-2xl font-bold text-gray-800 leading-tight hover:text-green-500 transition-colors truncate">
                  {plantName}
                  </h2>
                </Link>
            </div>
            
            <div className="flex flex-col items-start md:items-end transform group-hover:scale-110 transition-transform origin-left md:origin-right mt-1 md:mt-0">
                <span className="font-extrabold text-lg md:text-2xl text-gray-900">${price}</span>
            </div>
        </div>

        {/* Footer info area */}
        <div className="mt-auto pt-2 md:pt-4 flex flex-col xl:flex-row justify-between items-start xl:items-center border-t border-gray-100 gap-1.5 md:gap-0">
          <div className="flex items-center gap-1 md:gap-1.5 text-yellow-500 text-[10px] md:text-sm font-semibold">
            <FaStar />
            <span className="text-gray-700 font-bold text-[10px] md:text-xs">{rating}</span>
          </div>
          
          <div className="flex items-center gap-1.5 md:gap-2">
            <span className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${availableStock > 0 ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></span>
            <p className="text-[9px] md:text-xs text-gray-500 font-medium font-mono">
              {availableStock} in stock
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PlantCard;
