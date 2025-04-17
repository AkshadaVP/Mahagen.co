import React from 'react';
import mapImage from '../assets/map.png'; // Importing the map image
import thermal from '../assets/thermal.png';
import hydro from '../assets/hydro.png';
import solar from '../assets/solar.png';
import gas from '../assets/gas.png';
import powerGen from '../assets/powerGeneration.png'

const MapSection = () => {
  return (
    <section className="py-10 mt-20 bg-white mb-15">
      <div className="container px-6 mx-auto text-center">
        
        
        <div className="relative flex justify-center">
          {/* Map Image with shadow and hover effect */}
          <img
            src={mapImage}
            alt="Maharashtra Power Plants"
            className="flex w-auto transition-all duration-500 transform h-200 rounded-3xl hover:scale-105"
          />

          {/* Power Generation Capacity Table - Positioned at the bottom right of the map */}
          <div className="absolute bottom-[-80px] p-6 bg-white right-40 rounded-xl">
          <h2 className="text-2xl font-semibold text-[#0097d8] text-left pl-4">OUR FOOTPRINT</h2>
          <div className='flex flex-row'>
          <img src={powerGen} alt="" className='w-10 m-2 mr-3 h-13'/>
          <h3 className="pl-3 text-xl font-semibold text-left text-black text-wrap">Power Generation Capacity <br /> 13,880 MW</h3>
          </div>
          <div className="">
          <table className="min-w-full border-collapse">
  <thead></thead>
  <tbody>
    {/* Thermal Power Plants */}
    <tr>
      <td className="p-2 border-b border-r border-gray-300">
        <div className="flex items-center gap-4">
          <img src={thermal} alt="Thermal" className="w-10 h-10" />
        </div>
      </td>
      <td className="p-2 border-b border-r border-gray-300">
        <p className="text-sm font-semibold">Thermal Power Plants</p>
      </td>
      <td className="p-2 border-b border-gray-300">
        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
      </td>
    </tr>

    {/* Gas Turbine Power Plants */}
    <tr>
      <td className="p-2 border-b border-r border-gray-300">
        <div className="flex items-center gap-4">
          <img src={gas} alt="Gas" className="w-10 h-10" />
        </div>
      </td>
      <td className="p-2 border-b border-r border-gray-300">
        <p className="text-sm font-semibold">Gas Turbine Power Plants</p>
      </td>
      <td className="p-2 border-b border-gray-300">
        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
      </td>
    </tr>

    {/* Hydro Power Plants */}
    <tr>
      <td className="p-2 border-b border-r border-gray-300">
        <div className="flex items-center gap-4">
          <img src={hydro} alt="Hydro" className="w-10 h-10" />
        </div>
      </td>
      <td className="p-2 border-b border-r border-gray-300">
        <p className="text-sm font-semibold">Hydro Power Plants</p>
      </td>
      <td className="p-2 border-b border-gray-300">
        <div className="w-4 h-4 bg-blue-300 rounded-full"></div>
      </td>
    </tr>

    {/* Solar Power Plants */}
    <tr>
      <td className="p-2 border-b border-r border-gray-300">
        <div className="flex items-center gap-4">
          <img src={solar} alt="Solar" className="w-10 h-10" />
        </div>
      </td>
      <td className="p-2 border-b border-r border-gray-300">
        <p className="text-sm font-semibold">Solar Power Plants</p>
      </td>
      <td className="p-2 border-b border-gray-300">
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
      </td>
    </tr>
  </tbody>
</table>

</div>
    
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
