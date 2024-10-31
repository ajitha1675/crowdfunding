import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Components/SideBar';
import FundraiserCard from './FundRaiser';
import Footer from '../Components/Footer';

const Home = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <div className="bg-cover bg-center h-48 flex items-center justify-center text-white text-3xl font-bold mb-6" style={{ backgroundImage: 'url("https://via.placeholder.com/800x200")' }}>
          Save a Child Every Month
          <button className="ml-4 bg-green-500 text-white px-6 py-2 rounded-md">Start Giving Monthly</button>
        </div>
        <div className="flex space-x-4 mb-6">
          <input type="text" placeholder="Search for fundraisers" className="px-4 py-2 w-full rounded-md border border-gray-300" />
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">All categories</button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Trending</button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">All locations</button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <FundraiserCard />
          <FundraiserCard />
          <FundraiserCard />
          <FundraiserCard />
          <FundraiserCard />
          <FundraiserCard />
        </div>
      </main>
    </div>
    <Footer />
  </div>
);

export default Home;
