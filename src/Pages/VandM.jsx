import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import aboutBanner from '../assets/about.jpg';
import vision from '../assets/vision.jpg';  // Ensure path is correct
import mission from '../assets/mission.jpg';  // Ensure path is correct
import Footer from '../components/Footer';
import SideLinks from '../components/SideLinks';

const VandM = () => {
  const [currentMissionIndex, setCurrentMissionIndex] = useState(0);
  const missions = [
    "Endeavour to fully meet the future energy needs of the State and also create sufficient spinning reserves through Organic Value enhancing growth initiatives",
    "Diversify the energy portfolio to include solar, wind, gas, hydro-electric and responsible fossil generation directed towards shrinking our carbon footprints",
    "Commit to affordable energy rates through cost minimization and consistent Operational excellence and energy efficiency",
    "Value enhancement to the stakeholders by being nimble and resourceful in the economic environment, increase our business scope and scale to succeed throughout the economic cycles and adapting our business and portfolio to the dynamic energy market place"
  ];

  const nextMission = () => {
    setCurrentMissionIndex((prevIndex) => (prevIndex + 1) % missions.length);
  };

  const prevMission = () => {
    setCurrentMissionIndex((prevIndex) => (prevIndex - 1 + missions.length) % missions.length);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar />

      {/* Banner image */}
      <img
        src={aboutBanner}
        alt="About Us Banner"
        className="absolute top-0 left-0 w-full h-[350px] object-cover z-[-1]"
      />
      
      {/* Section Title */}
      <div className="translate-y-20 translate-x-30">
        <span className="text-4xl font-bold text-white">Vision & Mission</span>
      </div>

      {/* Main Section with Fixed Sidebar */}
      <div className="flex">
        {/* Fixed Sidebar on the Left */}
        <SideLinks/>

        {/* Right Section with Content */}
        <div className="w-3/4 p-10 ml-auto space-y-10 overflow-y-auto px-50 mt-30">
          {/* Vision and Mission Section in 2x2 Grid Layout */}
          <div className="grid grid-cols-2 gap-0">
            {/* Vision Text Section */}
            <div className="flex items-center justify-center">
              <div>
                <h3 className="p-2 mb-4 text-2xl font-bold">Vision</h3>
                <p className="p-2 text-lg">
                  "Generating adequate power for Maharashtra on a sustainable basis at competitive rates in a socially responsible manner"
                </p>
              </div>
            </div>

            {/* Vision Image Section */}
            <div className="flex items-center justify-center">
              <img src={vision} alt="Vision Image" className="object-contain w-full h-full" />
            </div>

            {/* Mission Image Section */}
            <div className="flex items-center justify-center">
              <img src={mission} alt="Mission Image" className="object-contain w-full h-full" />
            </div>

            {/* Mission Text Section */}
            <div className="flex items-center justify-center">
              <div>
                <h3 className="pl-3 mb-4 text-2xl font-bold">Mission</h3>
                <p className="pl-3 mb-3 text-lg">{missions[currentMissionIndex]}</p>
                <div className="flex justify-between mt-4">
                  <button onClick={prevMission} className="p-2 text-white bg-gray-400 rounded-md">←</button>
                  <button onClick={nextMission} className="p-2 text-white bg-gray-400 rounded-md">→</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default VandM;
