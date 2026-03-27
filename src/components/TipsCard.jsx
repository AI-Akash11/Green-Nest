import React from 'react';
import { FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

const TipsCard = ({ tip }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between border border-gray-100 relative overflow-hidden group hover:border-green-300"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
      
      <div>
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
              <FaLeaf />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {tip.category}
          </h3>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {tip.tip}
          </p>
      </div>
      
      <div className="mt-auto h-1.5 w-16 bg-linear-to-r from-green-400 to-emerald-500 rounded-full group-hover:w-full transition-all duration-500"></div>
    </motion.div>
  );
};

export default TipsCard;
