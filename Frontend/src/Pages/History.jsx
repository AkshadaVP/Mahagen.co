import React, { useState } from "react";
import OfficialsTable from "../components/officials-tables";
import FieldOfficesTable from "../components/field-offices-table";  // Assuming this is the correct path
import aboutBanner from "../assets/about.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SideLinks from "../components/SideLinks";

const History = () => {
  const [isHeadOffice, setIsHeadOffice] = useState(true);

  const toggleTable = () => {
    setIsHeadOffice(!isHeadOffice);
  };

  return (
    <div className="relative">
      {/* Banner Image */}
      <Navbar />
      
      <img
        src={aboutBanner}
        alt="About Us Banner"
        className="absolute top-0 left-0 w-full h-[350px] object-cover z-[-1]"
      />

      {/* Section Title */}
      <div className="translate-y-20 translate-x-30">
        <span className="text-4xl font-bold text-white">History</span>
      </div>

      {/* Toggle for Head Office / Field Offices */}
      <div className="flex items-center justify-start px-80 space-x-4 ml-[110px] translate-y-40">
        {/* Button for Head Office */}
        <button
          onClick={toggleTable}
          className={`py-2 px-6 rounded-lg border transition-all duration-300 ease-in-out ${
            isHeadOffice
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500 border-blue-500"
          }`}
        >
          Head Office
        </button>
        
        {/* Button for Field Offices */}
        <button
          onClick={toggleTable}
          className={`py-2 px-6 rounded-lg border transition-all duration-300 ease-in-out ${
            !isHeadOffice
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500 border-blue-500"
          }`}
        >
          Field Offices
        </button>
      </div>

      {/* Content Section */}
      <div className="flex">
        <SideLinks />
      </div>

      {/* Table Display */}
      <div className="w-3/4 p-10 ml-auto space-y-10 overflow-hidden translate-y-35">
        {isHeadOffice ? (
          <OfficialsTable />
        ) : (
          <FieldOfficesTable />
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default History;
