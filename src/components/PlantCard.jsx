import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  const { plantName, category, price, rating, image, availableStock, plantId } = plant;
  return (
    <Link to={`/plantDetails/${plantId}`} className="bg-white p-5 rounded-lg hover:scale-105 transition-all">
      <div className="rounded-2xl overflow-hidden">
        <img
          className="max-w-30 md:max-w-45 lg:max-w-60 object-cover mx-auto"
          src={image}
          alt={plantName}
        />
      </div>
      <div>
        <h2 className="text-center md:text-xl font-semibold my-2">
          {plantName}
        </h2>
        <div className="flex flex-col lg:flex-row justify-between">
          <p className="bg-green-200 px-2 rounded-2xl">
            <span className="text-sm text-yellow-500 font-semibold hidden lg:block">
              {category}
            </span>
          </p>

          <div className="flex gap-2 items-center text-sm md:text-lg text-yellow-500 font-semibold">
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
        <div className="my-2 flex flex-col gap-2 lg:flex-row justify-between items-center">
          <p className="text-xs">({availableStock} available in stock)</p>
          <p>
            Price:{" "}
            <span className="font-semibold md:text-xl pl-1">{price}$</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PlantCard;
