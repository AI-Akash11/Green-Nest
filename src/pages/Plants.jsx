import React, { use } from "react";
import { PlantContext } from "../contexts/PlantContext";
import PlantCard from "../components/PlantCard";
const Plants = () => {
  const { plants } = use(PlantContext);
  return (
    <div className="w-11/12 md:w-5/6 lg:max-w-[1400px] mx-auto">
      <h2 className="text-center font-bold text-4xl md:text-5xl mt-5 md:mt-8 lg:mt-10 mb-1 md:mb-2 text-green-600">
        All Plants
      </h2>
      <h4 className="text-center text-yellow-500 mb-10">
        Bring nature home with our carefully curated indoor greens.
      </h4>
      <p className="font-semibold text-2xl text-green-600 ml-2 mb-4 md:mb-8">
        Total Plants Availavle{" "}
        <span className="border-2 rounded-full px-2 py-1 border-green-500 bg-green-400 text-white">
          {plants.length}
        </span>
      </p>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-5 p-5 bg-base-200">
        {plants.map((plant) => (
        <PlantCard plant={plant} key={plant.plantId}></PlantCard>
      ))}
      </div>
    </div>
  );
};

export default Plants;
