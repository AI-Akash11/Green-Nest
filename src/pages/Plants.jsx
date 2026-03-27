import React, { use } from "react";
import { PlantContext } from "../contexts/PlantContext";
import PlantCard from "../components/PlantCard";
import { motion } from "framer-motion";
import Loader from "../components/Loader";

const Plants = () => {
  const { plants } = use(PlantContext);
  
  if (!plants || plants.length === 0) return <Loader />;

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Page Header */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-16 md:py-24 rounded-4xl bg-linear-to-b from-green-50 to-white mb-12 relative overflow-hidden mt-8 border border-green-100/50 shadow-sm"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-300 opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-300 opacity-10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
            
            <motion.h1 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.2, duration: 0.6 }}
               className="font-extrabold text-5xl md:text-6xl lg:text-7xl text-gray-900 tracking-tight"
            >
                Our <span className="text-green-600">Botanical</span> Collection
            </motion.h1>
            <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.4, duration: 0.6 }}
               className="text-gray-500 mt-6 text-lg md:text-xl max-w-2xl mx-auto px-4"
            >
               Browse our carefully curated selection of premium indoor greens, designed to breathe life into your living spaces.
            </motion.p>
        </motion.div>

        {/* Toolbar (Count) */}
        <div className="flex justify-between items-center mb-10 pb-4 border-b border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800">All Plants</h3>
            <div className="flex items-center gap-3 bg-green-50 px-4 py-2 rounded-full border border-green-100 shadow-inner">
                <span className="text-sm font-semibold text-green-800 uppercase tracking-widest hidden sm:inline-block">Available</span>
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white font-bold text-sm shadow-md">
                    {plants.length}
                </span>
            </div>
        </div>

        {/* Plant Grid */}
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
            {plants.map((plant) => (
                <motion.div
                    key={plant.plantId}
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
                    }}
                >
                    <PlantCard plant={plant} />
                </motion.div>
            ))}
        </motion.div>
    </div>
  );
};

export default Plants;
