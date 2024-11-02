import React from 'react';

function FundraiserCard({ title, fundraiserName, days, supporters, imageUrl }) {
  return (
    <div className="bg-white text-gray-800 p-4 rounded-md shadow-md">
      <img src={imageUrl} alt={title} className="rounded-md mb-4 w-full h-48 object-cover" />
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm">Fundraiser: {fundraiserName}</p>
      <div className="flex justify-between text-sm mt-2">
        <span>{days} Days</span>
        <span>{supporters} Supporters</span>
      </div>
    </div>
  );
}

export default FundraiserCard;
