import React, { use } from 'react';
import { PlantContext } from '../contexts/PlantContext';
import TipsCard from './TipsCard';
import { motion } from "framer-motion";

const Tips = () => {
    const {tips} = use(PlantContext);
    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
            <div className="text-center mb-12 md:mb-16">
                <motion.h2 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6 }}
                   className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight"
                >
                   Plant Care <span className="text-green-500">Tips</span>
                </motion.h2>
                <motion.p 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2, duration: 0.6 }}
                   className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto"
                >
                   Essential advice from our experts to keep your indoor garden thriving year-round.
                </motion.p>
            </div>
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.5 }}
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
                {tips.map((tip)=>(
                    <TipsCard key={tip.id} tip={tip}></TipsCard>
                ))}
            </motion.div>
        </div>
    );
};

export default Tips;