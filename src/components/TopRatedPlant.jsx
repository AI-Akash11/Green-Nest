import React, { use } from "react";
import { PlantContext } from "../contexts/PlantContext";
import PlantCard from "./PlantCard";

const TopRatedPlant = () => {
  const { plants } = use(PlantContext);

  const topRatedPlants = plants.filter((plant) => plant.topRated == "true");
  console.log(topRatedPlants);
  return (
    <div className="w-11/12 md:w-5/6 lg:max-w-[1400px] mx-auto my-30">
      <h2 className="font-semibold text-5xl text-center mb-10 text-yellow-600">Our Top Rated Plants</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 bg-base-200">
        {topRatedPlants.map((plant) => (
          <PlantCard plant={plant} key={plant.plantId}></PlantCard>
        ))}
      </div>
    </div>
  );
};

export default TopRatedPlant;
