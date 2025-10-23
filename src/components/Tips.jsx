import React, { use } from 'react';
import { PlantContext } from '../contexts/PlantContext';
import TipsCard from './TipsCard';

const Tips = () => {
    const {tips} = use(PlantContext)
    return (
        <div className="max-w-[1400px] mx-auto mb-20 mt-15">
            <h2 className="font-semibold text-5xl text-center mb-10 text-green-800">Plant care Tips</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-8'>
                {
                tips.map(tip=>(
                    <TipsCard key={tip.id} tip={tip}></TipsCard>
                ))
            }
            </div>
        </div>
    );
};

export default Tips;