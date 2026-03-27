import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PlantContext } from "../contexts/PlantContext";
import { useParams, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaLeaf, FaStar, FaDollarSign, FaWarehouse, FaShieldAlt, FaTruck, FaUndo, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const PlantDetails = () => {
  const [pla, setPla] = useState({});
  const { plants } = useContext(PlantContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0,0);
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

      <div className="flex-1 container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-[1400px]">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-green-600 font-bold mb-8 transition-colors group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Go Back
        </motion.button>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative">

          {/* Left Column - Sticky Image */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-36 z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group rounded-4xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow border border-gray-100 bg-slate-50 p-8 md:p-16 aspect-square md:aspect-4/5 flex items-center justify-center"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                src={pla.image}
                alt={pla.plantName}
                className="w-full max-h-full object-contain relative z-10 drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-green-100 opacity-50 rounded-full blur-3xl scale-150"></div>
            </motion.div>
          </div>

          {/* Right Column - Details */}
          <div className="w-full lg:w-[55%] space-y-8 lg:pb-20">
            {/* Header Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-4xl p-8 md:p-10 shadow-xl border border-gray-100"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 font-bold text-xs uppercase tracking-widest mb-4">
                {pla.category || 'Premium Plant'}
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
                {pla.plantName}
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 italic mb-6 font-medium">
                "{pla.slogan}"
              </p>
              
              <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-100">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">Price</span>
                  <div className="flex items-center text-3xl font-black text-gray-900">
                    <span className="text-green-500 mr-1">$</span>{pla.price}
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">Rating</span>
                  <div className="flex items-center gap-1.5 text-xl font-bold text-gray-800">
                    <FaStar className="text-yellow-400 text-2xl" /> {pla.rating}
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">Status</span>
                  <div className="flex items-center gap-2 text-lg font-bold">
                     <span className={`w-3 h-3 rounded-full ${pla.availableStock > 0 ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
                     {pla.availableStock > 0 ? <span className="text-green-600">In Stock</span> : <span className="text-red-500">Out of Stock</span>}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800">About this plant</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {pla.description}
                </p>
              </div>
            </motion.div>

            {/* Feature Marquee / Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center gap-2">
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-500 text-xl mb-1">
                        <FaShieldAlt />
                    </div>
                    <h4 className="font-bold text-gray-800 text-sm">Secure Packaging</h4>
                </div>
                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center gap-2">
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-500 text-xl mb-1">
                        <FaTruck />
                    </div>
                    <h4 className="font-bold text-gray-800 text-sm">Fast Delivery</h4>
                </div>
                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center gap-2">
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-500 text-xl mb-1">
                        <FaUndo />
                    </div>
                    <h4 className="font-bold text-gray-800 text-sm">30-Day Returns</h4>
                </div>
            </motion.div>

            {/* Consultation Booking Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 p-8 md:p-10 bg-linear-to-br from-green-500 to-emerald-600 rounded-4xl shadow-2xl text-white relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-extrabold mb-2">Need Expert Advice?</h2>
                <p className="text-green-50 mb-8 max-w-md">Book a free 15-minute diagnostic call with our botanical specialists to learn how to care for your {pla.plantName}.</p>
                
                <form
                  onSubmit={handleBookConsultation}
                  className="flex flex-col gap-4"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    required
                    className="input w-full bg-white/10 border-white/20 text-white placeholder:text-green-100 focus:bg-white/20 focus:border-white transition-all rounded-xl py-6"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    required
                    className="input w-full bg-white/10 border-white/20 text-white placeholder:text-green-100 focus:bg-white/20 focus:border-white transition-all rounded-xl py-6"
                  />

                  <button
                    type="submit"
                    className="btn bg-white hover:bg-gray-50 text-green-600 border-none font-bold mt-2 shadow-xl rounded-xl py-4 h-auto text-lg transition-transform hover:-translate-y-1"
                  >
                    Book Consultation Now
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PlantDetails;
