import React from 'react';

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
    <section className="max-w-[1400px] mx-auto py-16 text-center px-8">
      <h2 className="text-3xl font-bold text-green-800 mb-3">
        Meet Our Green Experts
      </h2>
      <p className="text-gray-600 mb-10">
        Caring hands behind your thriving plants
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {experts.map((expert) => (
          <div
            key={expert.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all p-6"
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-green-700">
              {expert.name}
            </h3>
            <p className="text-gray-500 text-sm">{expert.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experts;
