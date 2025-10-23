import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { PlantContext } from "../contexts/PlantContext";

const Hero = () => {
  const { plants } = useContext(PlantContext);
  return (
    <Swiper
      className="max-w-[1400px] mx-auto my-20"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        320: { slidesPerView: 1 }, // 👶 Mobile
        640: { slidesPerView: 2 }, // 📱 Small tablets
        1024: { slidesPerView: 3 }, // 💻 Desktops
      }}
    >
      {plants.map((plant) => (
        <SwiperSlide key={plant.plantId}>
          <div
            style={{ backgroundImage: `url(${plant.image})` }}
            className="relative h-[50vh] rounded-xl text-center shadow-md bg-cover bg-center overflow-hidden flex flex-col justify-end p-6"
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/25"></div>

            {/* Text (kept bright) */}
            <div className="relative z-10 text-yellow-100">
              <h1 className="text-3xl">{plant.slogan}</h1>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
