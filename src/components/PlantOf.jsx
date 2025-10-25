import React from 'react';

const PlantOf = () => {

    const plant={
    plantName: "Peace Lily",
    slogan: "Air Purifier & Easy Care",
    description: "Beautiful white blooms that help remove toxins and improve air quality.",
    image: "https://i.ibb.co/SX42qT6f/peace-lily.jpg",
  }
    return (
        <section className="bg-green-50 py-10 md:py-20 px-4 md:px-10 lg:px-20 rounded-xl shadow-inner shadow-gray-200 mb-10 max-w-[1300px] mx-8 lg:mx-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg border-4 border-green-200"
          />
        </div>

        
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
            {plant.plantName}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            {plant.slogan || "Your perfect indoor companion!"}
          </p>
          <p className="text-gray-600 mb-6">{plant.description}</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
    );
};

export default PlantOf;