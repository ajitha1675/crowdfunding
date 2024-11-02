// src/pages/FundraiserPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function FundraiserPage() {
  const { fundraiserId } = useParams();

  return (
    <div className="container mx-auto p-8 text-white">
      <h1>Fundraiser Details</h1>
      <p>Details for fundraiser ID: {fundraiserId}</p>
    </div>
  );
}

export default FundraiserPage;
