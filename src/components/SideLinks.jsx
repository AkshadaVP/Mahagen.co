import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link

const SideLinks = () => {
  return (
    <div>
      <div className="fixed w-1/4 ml-10 bg-white border-r border-gray-300 rounded-md shadow-2xl h-1/2 top-1/2 p-9">
        {/* About Us Box */}
        <div className="mb-4">
          <h2 className="mb-3 text-xl font-bold">About Us</h2>
          <div className="space-y-4">
            <div>
              <Link to="/about-us" className="text-blue-500 hover:underline">About Us</Link>
              <hr className="mt-2 border-t border-gray-300"/>
            </div>
            <div>
              <Link to="/our-history" className="text-blue-500 hover:underline">Our History</Link>
              <hr className="mt-2 border-t border-gray-300"/>
            </div>
            <div>
              <Link to="/vision-mission" className="text-blue-500 hover:underline">Vision & Mission</Link>
              <hr className="mt-2 border-t border-gray-300"/>
            </div>
            <div>
              <Link to="/board-of-directors" className="text-blue-500 hover:underline">Board of Directors of MSPGCL</Link>
              <hr className="mt-2 border-t border-gray-300"/>
            </div>
            <div>
              <Link to="/board-members" className="text-blue-500 hover:underline">Board Members of MSEB Holding</Link>
              <hr className="mt-2 border-t border-gray-300"/>
            </div>
            <div>
              <Link to="/history" className="text-blue-500 hover:underline">Key Officials of MSPGCL</Link> {/* Linked to History.jsx */}
              <hr className="mt-2 border-t border-gray-300"/>
            </div>
            <div>
              <Link to="/organization-structure" className="text-blue-500 hover:underline">Organization Structure</Link>
              <hr className="mt-2 border-t border-gray-300"/>
            </div>
          </div>
        </div>
        {/* End of About Us Box */}
      </div>
    </div>
  );
};

export default SideLinks;
