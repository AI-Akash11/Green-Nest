import React from "react";

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
    <section className="max-w-[1400px] mx-auto py-16 px-8 text-center">
      <h2 className="text-3xl font-bold text-green-800 mb-3">
        Eco Decor Ideas
      </h2>
      <p className="text-gray-600 mb-10">
        Style your space naturally with indoor greenery
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ideas.map((idea) => (
          <div
            key={idea.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all overflow-hidden"
          >
            <img
              src={idea.image}
              alt={idea.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                {idea.title}
              </h3>
              <p className="text-gray-500 text-sm">{idea.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DecorIdeas;
