import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PlantContext } from "../contexts/PlantContext";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { FaLeaf, FaStar, FaDollarSign, FaWarehouse } from "react-icons/fa";

const PlantDetails = () => {
  const [pla, setPla] = useState({});
  const { plants } = useContext(PlantContext);
  const { id } = useParams();

  useEffect(() => {
    const foundPlant = plants.find((plant) => plant.plantId == id);
    setPla(foundPlant);
  }, [id, plants]);

  const handleBookConsultation = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Consultation booked successfully!");
  };

  if (!pla) return null;

  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <Navbar />

      <div className="flex-1 container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          <div className="flex justify-center">
            <img
              src={pla.image}
              alt={pla.plantName}
              className="rounded-2xl w-full max-w-md object-cover shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-2 flex items-center gap-2">
                <FaLeaf className="text-green-500" /> {pla.plantName}
              </h1>
              <p className="text-gray-600 italic mb-4">{pla.slogan}</p>
              <p className="text-gray-700 leading-relaxed mb-6">
                {pla.description}
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
                <div className="flex items-center gap-2 text-gray-700">
                  <FaDollarSign className="text-green-500" />
                  <span className="font-semibold">{pla.price}</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-500">
                  <FaStar />
                  <span>{pla.rating} / 5</span>
                </div>
                <div className="flex items-center gap-2 text-blue-500">
                  <FaWarehouse />
                  <span>{pla.availableStock} in stock</span>
                </div>
                <div className="text-gray-500">
                  Provider:{" "}
                  <span className="font-medium">{pla.providerName}</span>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-base-200 rounded-2xl shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Book a Consultation
              </h2>

              <form
                onSubmit={handleBookConsultation}
                className="flex flex-col gap-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="input input-bordered w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="input input-bordered w-full"
                />

                <button
                  type="submit"
                  className="btn bg-green-500 hover:bg-green-600 text-white font-semibold mt-2"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PlantDetails;
