import React from 'react';
import Navbar from '../Components/NavBar';

const NavBar = () => (
  <nav className="flex items-center justify-between bg-gray-800 p-4 text-white">
    <div className="text-xl font-bold">Logo</div>
    <div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-2 rounded-md text-gray-800"
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded-md">Search</button>
      <button className="bg-gray-700 px-4 py-2 rounded-md">Login</button>
    </div>
  </nav>
);

export default NavBar;
