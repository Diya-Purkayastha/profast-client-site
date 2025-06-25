import React from 'react';
import CoverageMap from '../components/CoverageMap';

const Coverage = () => {
    return (
         <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">We are available in 64 districts</h1>
      
      {/* Map */}
      <CoverageMap />

      {/* Search box will be added below */}
    </div>
    );
};

export default Coverage;