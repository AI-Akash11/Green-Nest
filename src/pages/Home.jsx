import React from 'react';
import Hero from '../components/Hero';
import TopRatedPlant from '../components/TopRatedPlant';
import Tips from '../components/Tips';
import Experts from '../components/Experts';
import DecorIdeas from '../components/DecorIdeas';
import PlantOf from '../components/PlantOf';

const Home = () => {
    return (
        <div>
            <h2 className='font-semibold text-6xl text-green-500 text-center mt-10'>Nature <span className='text-yellow-400'>Inside</span> Home</h2>
            <Hero></Hero>
            <TopRatedPlant></TopRatedPlant>
            <PlantOf></PlantOf>
            <Tips></Tips>
            <Experts></Experts>
            <DecorIdeas></DecorIdeas>
        </div>
    );
};

export default Home;