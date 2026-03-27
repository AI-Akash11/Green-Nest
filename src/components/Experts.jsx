import React from 'react';
import { motion } from "framer-motion";

const Experts = () => {
  const experts = [
    {
      id: 1,
      name: "Ferdous Zihad",
      role: "Indoor Plant Specialist",
      image: "https://i.ibb.co.com/7J5sx4wn/ferdous-Zihad.jpg",
    },
    {
      id: 2,
      name: "Jhankar Mahbub",
      role: "Succulent Expert",
      image: "https://i.ibb.co.com/G4vHqLCX/jhankar-Mahbub.webp",
    },
    {
      id: 3,
      name: "Ahsan Habib Uthso",
      role: "Soil & Growth Advisor",
      image: "https://i.ibb.co.com/Q3PKyCBN/ahsan-Habib-Uthso.jpg",
    },
    {
      id: 4,
      name: "John Smith",
      role: "Plant Health Consultant",
      image: "https://i.ibb.co.com/nMjRcVVY/John-smith.jpg",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-8 mb-24 lg:mb-32">
      <div className="text-center mb-12 md:mb-16">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight"
          >
            Meet Our <span className="text-green-500">Experts</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2, duration: 0.6 }}
             className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto"
          >
            The dedicated botanists and caretakers behind your thriving plants.
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
              transition: { staggerChildren: 0.1 }
            }
         }}
         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        {experts.map((expert) => (
          <motion.div
            key={expert.id}
            variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
            }}
            className="group relative bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 text-center border border-gray-100 overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 inset-x-0 h-32 bg-green-50 z-0 transition-transform group-hover:scale-105"></div>
            
            <div className="relative z-10">
                <div className="w-32 h-32 mx-auto rounded-full p-1.5 bg-white shadow-md mb-6">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                  {expert.name}
                </h3>
                <p className="text-green-600 font-medium text-sm">{expert.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experts;
