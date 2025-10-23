import React from 'react';
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-green-100 text-center px-6">
      <img
        src="https://i.ibb.co.com/0ythqdy3/error-404.png"
        alt="404 Error"
        className="w-72 md:w-96 mb-8"
      />
      <h1 className="text-5xl font-extrabold text-green-800 mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Looks like the page you’re trying to visit doesn’t exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300"
      >
        Go Back Home
      </button>
    </div>
    );
};

export default Error;