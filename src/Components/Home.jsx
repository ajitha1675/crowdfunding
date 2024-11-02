import React from 'react';
import Navbar from './NavBar';
import HeroSection from './HeroSection';
import Sidebar from './SideBar';
import FundraiserCard from '../components/FundraiserCard';
import Footer from './Footer';

function HomePage() {
  const fundraisers = [
    { title: "Title 1", fundraiserName: "Fundraiser 1", days: 10, supporters: 20, imageUrl: "C:\Users\Amaradeevan\crowdfunding\src\Imagess\child.jpg" },
    { title: "Title 1", fundraiserName: "Fundraiser 34", days: 10, supporters: 20, imageUrl: "C:\Users\Amaradeevan\crowdfunding\src\Imagess\ch2.jpg" },
    { title: "Title 1", fundraiserName: "Fundraiser 89", days: 10, supporters: 20, imageUrl: "C:\Users\Amaradeevan\crowdfunding\src\Imagess\ch3.jpg" },
    { title: "Title 1", fundraiserName: "Fundraiser 82", days: 10, supporters: 20, imageUrl: "C:\Users\Amaradeevan\crowdfunding\src\Imagess\ch4.jpg" },
    { title: "Title 1", fundraiserName: "Fundraiser 12", days: 10, supporters: 20, imageUrl: "C:\Users\Amaradeevan\crowdfunding\src\Imagess\ch5.jpg" },
    { title: "Title 1", fundraiserName: "Fundraiser 17", days: 10, supporters: 20, imageUrl: "C:\Users\Amaradeevan\crowdfunding\src\Imagess\ch6.jpg" },
    // Add more sample fundraiser data
  ];

  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <div className="container mx-auto p-8 flex">
        <Sidebar />
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-4">
          {fundraisers.map((fundraiser, index) => (
            <FundraiserCard key={index} {...fundraiser} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;

