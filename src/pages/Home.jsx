import React from 'react';
import Hero from '../components/Hero';
import TopRatedPlant from '../components/TopRatedPlant';
import Tips from '../components/Tips';
import Experts from '../components/Experts';
import DecorIdeas from '../components/DecorIdeas';
import PlantOf from '../components/PlantOf';
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div>
            <motion.div 
               initial={{ opacity: 0, scale: 0.95, y: -10 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="text-center mt-6 md:mt-10 mb-4 px-4 md:px-8 max-w-[1400px] mx-auto"
            >
                <h2 className='font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-tight text-green-500 drop-shadow-sm'>
                    Nature <span className='text-yellow-400'>Inside</span> Home
                </h2>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mt-4 text-base md:text-xl text-gray-500 font-medium max-w-2xl mx-auto"
                >
                    Breathe life into your space with our expertly curated collection of indoor greens.
                </motion.p>
            </motion.div>
            
            <Hero></Hero>
            <div className="space-y-20 lg:space-y-32">
                <TopRatedPlant></TopRatedPlant>
                <PlantOf></PlantOf>
                <Tips></Tips>
                <Experts></Experts>
                <DecorIdeas></DecorIdeas>
            </div>
        </div>
    );
};

export default Home;