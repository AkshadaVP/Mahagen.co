// src/components/SideLinks.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../assets/arrowright.png';

const SideLinks = ({ title, links }) => {
  return (
    <div id="left-side" className=''>
      <div
        id="projects-sidelink"
        className="sticky flex flex-col h-auto p-5 mt-40 bg-white shadow-xl top-24 w-60"
      >
        <span className="mb-4 text-lg font-bold">{title}</span>
        <ul className="flex flex-col gap-4 text-sm font-semibold">
          {links.map(({ label, to }) => (
            <li key={to} className="flex items-center justify-between">
              <Link
                to={to}
                className="text-[#181B31] hover:text-blue-600"
              >
                {label}
              </Link>
              <img src={arrow} alt="" className="h-6" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideLinks;
