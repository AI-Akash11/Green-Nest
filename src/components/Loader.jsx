import React from 'react';
import { HashLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-green-50">
      <HashLoader color="#16a34a" size={80} />
    </div>
    );
};

export default Loader;