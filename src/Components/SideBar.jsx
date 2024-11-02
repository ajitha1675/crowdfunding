import React from 'react';

function Sidebar() {
  const categories = ["All categories", "Childrens", "Education", "Medical", "Business", "Animals", "Health"];

  return (
    <div className="bg-gray-800 p-4 rounded-md text-white w-1/4">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index} className="hover:text-gray-400 cursor-pointer">{category}</li>
        ))}
      </ul>
      <button className="mt-4 bg-green-500 px-4 py-2 rounded-md w-full">Start a Fundraiser</button>
    </div>
  );
}

export default Sidebar;

