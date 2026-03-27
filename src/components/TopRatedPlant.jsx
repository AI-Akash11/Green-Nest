import React, { use } from "react";
import { PlantContext } from "../contexts/PlantContext";
import PlantCard from "./PlantCard";
import { motion } from "framer-motion";

const TopRatedPlant = () => {
  const { plants } = use(PlantContext);
  const topRatedPlants = plants.filter((plant) => plant.topRated == "true");

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 mb-24 lg:mb-32">
      <div className="text-center mb-12 md:mb-16">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight"
          >
            Our <span className="text-green-500">Top Rated</span> Plants
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2, duration: 0.6 }}
             className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto"
          >
            Discover the most loved greenery chosen by our vibrant community of plant enthusiasts.
          </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        {topRatedPlants.map((plant) => (
          <PlantCard plant={plant} key={plant.plantId}></PlantCard>
        ))}
      </motion.div>
    </div>
  );
};

export default TopRatedPlant;
