import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

const PlantCard = ({ plant }) => {
  const { plantName, category, price, rating, image, availableStock } = plant;
  return (
    <div className="bg-white p-5 rounded-lg">
      <div className="rounded-2xl overflow-hidden">
        <img
          className="max-w-30 md:max-w-45 lg:max-w-60 object-cover mx-auto"
          src={image}
          alt={plantName}
        />
      </div>
      <div>
        <h2 className="text-center text-xl font-semibold my-2">{plantName}</h2>
        <div className="flex justify-between">
            <p className="bg-green-200 px-2 rounded-2xl">
            <span className="text-sm text-yellow-500 font-semibold">
              {category}
            </span>
          </p>

          <div className="flex gap-2 items-center text-lg text-yellow-500 font-semibold">
            
            <p className="flex">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStarHalf></FaStarHalf>
            </p>
            <p className="">{rating}</p>
          </div>
          
        </div>
        <div className="my-2 flex justify-between items-center">
            <p className="text-xs">
                ({availableStock} available in stock)
            </p>
            <p>
                Price: <span className="font-semibold text-xl pl-1">{price}$</span> 
            </p>
            
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
