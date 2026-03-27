import React from 'react';
import { motion } from "framer-motion";

const PlantOf = () => {
    const plant = {
      plantName: "Peace Lily",
      slogan: "Air Purifier & Easy Care",
      description: "Beautiful white blooms that help remove toxins and improve air quality. A must-have for any indoor sanctuary.",
      image: "https://i.ibb.co/SX42qT6f/peace-lily.jpg",
    };

    return (
        <section className="px-4 md:px-8 max-w-[1400px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-linear-to-r from-green-800 to-emerald-600 rounded-4xl shadow-2xl overflow-hidden relative"
            >
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300 opacity-5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

              <div className="flex flex-col md:flex-row items-center relative z-10 px-8 py-12 md:p-16 lg:p-20 gap-10 md:gap-16">
                  
                  {/* Text Content */}
                  <div className="flex-1 text-center md:text-left text-white order-2 md:order-1">
                      <motion.span 
                         initial={{ opacity: 0, y: 10 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.2 }}
                         className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-green-50 font-bold text-xs uppercase tracking-widest mb-6 backdrop-blur-sm"
                      >
                         Plant of the Month
                      </motion.span>
                      <motion.h2 
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.3 }}
                         className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
                      >
                        {plant.plantName}
                      </motion.h2>
                      <motion.p 
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.4 }}
                         className="text-xl md:text-2xl text-emerald-100 mb-6 font-medium italic"
                      >
                        {plant.slogan}
                      </motion.p>
                      <motion.p 
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.5 }}
                         className="text-gray-100 text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto md:mx-0"
                      >
                        {plant.description}
                      </motion.p>
                      
                      <motion.div 
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.6 }}
                      >
                           <button className="bg-white text-green-700 hover:bg-yellow-400 hover:text-green-900 font-bold px-8 py-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(250,204,21,0.3)] text-lg">
                             Discover More
                           </button>
                      </motion.div>
                  </div>

                  {/* Image */}
                  <div className="flex-1 w-full max-w-sm md:max-w-none order-1 md:order-2 flex justify-center perspective-[1000px]">
                      <motion.div
                         initial={{ opacity: 0, rotateY: 15, scale: 0.9 }}
                         whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                         whileHover={{ scale: 1.05, rotateY: -5 }}
                         viewport={{ once: true }}
                         transition={{ duration: 1, type: "spring" }}
                         className="relative"
                      >
                          <img
                             src={plant.image}
                             alt={plant.plantName}
                             className="w-full aspect-square object-cover rounded-full shadow-2xl border-8 border-white/20 drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                          />
                      </motion.div>
                  </div>

              </div>
            </motion.div>
        </section>
    );
};

export default PlantOf;