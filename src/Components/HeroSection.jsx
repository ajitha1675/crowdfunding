import React from 'react';

function HeroSection() {
  return (
    <div className="hero bg-cover bg-center text-center p-16" style={{ backgroundImage: 'url(C:\Users\Amaradeevan\crowdfunding\src\Imagess\child1.jpg)' }}>
      <h1 className="text-4xl font-bold text-white mb-4">Save a Child Every Month</h1>
      <button className="bg-green-500 text-white px-6 py-3 rounded-full">Start Giving Monthly</button>
    </div>
  );
}

export default HeroSection;
