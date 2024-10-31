import React from 'react';

const FundraiserCard = () => (
  <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
    <div className="bg-gray-300 h-32 w-full rounded-md mb-4">Image</div>
    <h3 className="font-semibold text-lg">Title</h3>
    <p className="text-sm text-gray-500 mb-4">Fundraiser name</p>
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
    </div>
    <div className="flex justify-between w-full text-sm text-gray-500">
      <span>Days</span>
      <span>Supporters</span>
    </div>
  </div>
);

export default FundraiserCard;
