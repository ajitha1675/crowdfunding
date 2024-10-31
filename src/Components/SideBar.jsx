import React from 'react';

const Sidebar = () => (
  <aside className="bg-gray-900 text-white w-1/5 p-4 space-y-4">
    <h2 className="text-lg font-bold">Categories</h2>
    <ul className="space-y-2">
      <li>All Categories</li>
      <li>Children</li>
      <li>Education</li>
      <li>Medical</li>
      <li>Business</li>
      <li>Animals</li>
      <li>Health</li>
    </ul>
    <button className="w-full mt-4 bg-green-500 text-white px-4 py-2 rounded-md">Start a Fundraise</button>
  </aside>
);

export default Sidebar;
