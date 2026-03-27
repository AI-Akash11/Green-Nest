import React from "react";
import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-50/80 backdrop-blur-md z-9999">
      <div className="flex flex-col items-center gap-6">
        {/* Pulsing Leaf Logo */}
        <div className="relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ 
              scale: [0.8, 1.2, 0.8],
              opacity: [0.5, 1, 0.5],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-7xl text-green-600 relative z-10"
          >
            <FaLeaf />
          </motion.div>
          
          {/* Outer Ring */}
          <motion.div
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.3, 0, 0.3]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
            className="absolute inset-0 bg-green-200 rounded-full blur-xl"
          />
        </div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-2">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold text-gray-800 tracking-tight"
          >
            Green<span className="text-green-600">Nest</span>
          </motion.h3>
          <motion.p 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-sm font-medium text-gray-500 uppercase tracking-widest"
          >
            Nurturing your space...
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
