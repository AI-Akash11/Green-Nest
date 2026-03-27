import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { PlantContext } from "../contexts/PlantContext";
import { motion } from "framer-motion";

const Hero = () => {
  const { plants } = useContext(PlantContext);
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-[1400px] mx-auto mb-20 mt-10 px-4 md:px-8"
    >
      <div className="relative rounded-3xl overflow-hidden shadow-2xl drop-shadow-lg border border-gray-100">
        <Swiper
          className="rounded-3xl overflow-hidden h-full w-full"
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          navigation
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
        >
          {plants.slice(0, 5).map((plant) => (
            <SwiperSlide key={plant.plantId}>
              <div className="relative h-[60vh] md:h-[70vh] bg-cover bg-center overflow-hidden flex flex-col justify-end p-8 md:p-16 lg:px-24 group">
                {/* Background image with hover zoom */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out group-hover:scale-105" 
                  style={{ backgroundImage: `url(${plant.image})` }} 
                ></div>
                
                {/* Gradient overlays for contrast */}
                <div className="absolute inset-0 bg-black/40"></div>
                
                {/* Content Container */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="relative z-10 text-white text-left max-w-2xl"
                >
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="inline-block px-4 py-1.5 mb-5 rounded-full bg-green-500/80 backdrop-blur-md text-xs font-bold tracking-[0.2em] uppercase text-white shadow-sm"
                  >
                    Featured Collection
                  </motion.div>
                  
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 leading-tight drop-shadow-xl text-yellow-100"
                  >
                    {plant.slogan}
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="text-gray-200 text-base md:text-xl md:font-semibold mb-8 drop-shadow-md max-w-xl"
                  >
                    Enhance your living space with our premium {plant.category.toLowerCase()} — {plant.plantName}.
                  </motion.p>
                  
                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="btn btn-success text-white rounded-full px-8 py-3 shadow-xl transform hover:-translate-y-1 transition-all border-none"
                  >
                    Explore Now
                  </motion.button>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Hero;
