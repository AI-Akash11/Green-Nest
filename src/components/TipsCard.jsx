import React from 'react';

const TipsCard = ({ tip }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col justify-between text-center border border-green-100">
      <h3 className="text-xl font-bold text-green-700 mb-3">
        {tip.category}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {tip.tip}
      </p>
      <div className="mt-4 h-1 w-16 bg-green-400 mx-auto rounded-full"></div>
    </div>
  );
};

export default TipsCard;
