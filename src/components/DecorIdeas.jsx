import React from "react";
import { motion } from "framer-motion";

const DecorIdeas = () => {
  const ideas = [
    {
      id: 1,
      title: "Green Corners",
      description:
        "Transform unused corners with tall indoor plants and woven baskets for a cozy, organic vibe.",
      image: "https://i.ibb.co.com/JRQ1cr8s/corner.jpg",
    },
    {
      id: 2,
      title: "Hanging Serenity",
      description:
        "Use macramé hangers and ceiling hooks to create a floating garden effect in small spaces.",
      image: "https://i.ibb.co.com/kVLLG4P6/hanging.jpg",
    },
    {
      id: 3,
      title: "Shelf Jungle",
      description:
        "Decorate open shelves with cascading vines, succulents, and terracotta pots for a natural touch.",
      image: "https://i.ibb.co.com/fV955J8R/shelf.jpg",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-8">
      <div className="text-center mb-12 md:mb-16">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight"
          >
            Eco Decor <span className="text-green-500">Ideas</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2, duration: 0.6 }}
             className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto"
          >
            Style your space naturally with indoor greenery and mindful placement.
          </motion.p>
      </div>

      <motion.div 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, margin: "-100px" }}
         variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
         }}
         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
      >
        {ideas.map((idea) => (
          <motion.div
            key={idea.id}
            variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
            }}
            className="group relative bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
          >
            <div className="relative h-72 md:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={idea.image}
                  alt={idea.title}
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
            </div>
            <div className="p-8 relative bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                {idea.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">{idea.description}</p>
              
              <div className="mt-6 flex items-center text-green-600 font-bold text-sm tracking-wide group-hover:translate-x-2 transition-transform">
                READ MORE 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default DecorIdeas;
