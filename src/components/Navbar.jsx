import React, { useState } from 'react';
import { Phone, Mail, Search, Volume2, User } from 'react-feather';
import { Link } from 'react-router-dom';
import { useUser, useClerk } from '@clerk/clerk-react';

// Images
import logo from '../assets/demo-hosting-logo-white.png';
import logoname from '../assets/logo_name_white2.png';
import amritotstav from '../assets/amritmahotsav.jpg';
import flag from '../assets/flag.gif';
import menu from '../assets/menu.png';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Clerk
  const { user } = useUser();
  const { signOut } = useClerk();

  // Toggle sidebar (mobile)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sign out user
  const handleSignOut = async () => {
    await signOut();
    // afterSignOutUrl="/" by default from your main.jsx
  };

  return (
    <div className="relative">
      {/* Top Blue Bar */}
      <div className="bg-[#2a3990] text-white py-2 px-4 fixed w-full" style={{ zIndex: 100 }}>
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          {/* Left side: phone + mail */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              <span className="text-sm">022-69425000</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              <span className="text-sm">webposting@mahagenco.in</span>
            </div>
          </div>

          {/* Right side: top nav controls */}
          <div className="flex items-center space-x-4 text-sm">
            <a href="#" className="hover:underline">SAP Dashboard</a>
            <span>|</span>
            <a href="#" className="hover:underline">Employee's Area</a>
            <span>|</span>
            <a href="#" className="hover:underline">Mail</a>
            <span>|</span>
            <Search className="w-4 h-4" />
            <span>|</span>
            <div className="flex items-center space-x-1">
              <span className="text-xs">A-</span>
              <span>A</span>
              <span className="text-lg">A+</span>
            </div>
            <span>|</span>
            <span>मराठी</span>
            <span>|</span>
            <Volume2 className="w-4 h-4" />
            <span>|</span>
            <span>screen-reader</span>

            {/* Auth Section: shows user icon or Login button */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center px-2 py-1 space-x-2 text-black bg-white rounded hover:bg-gray-100"
                >
                  {/* Fallback to icon if no user.profileImageUrl */}
                  {user.profileImageUrl ? (
                    <img
                      src={user.profileImageUrl}
                      alt="profile"
                      className="w-6 h-6 rounded-full"
                    />
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                  <span className="text-xs font-medium">
                    {user.primaryEmailAddress?.emailAddress}
                  </span>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 z-50 w-40 mt-2 text-black bg-white rounded shadow-md">
                    <ul className="text-sm">
                      <li>
                        <button
                          onClick={handleSignOut}
                          className="w-full px-4 py-2 text-left hover:bg-gray-100"
                        >
                          Sign Out
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <button className="bg-gray-200 p-[2px] rounded-sm pl-1 pr-1 text-black font-semibold">
                <Link to="/login_signup">Login</Link>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Logo + top spacing */}
      <div className="relative w-full pt-12 bg-transparent border-b" style={{ zIndex: 80 }}>
        <div className="container flex items-center justify-between pt-4 pb-4 pl-8 pr-8 mx-auto">
          {/* Left: Logo + Name */}
          <div className="flex items-center space-x-4">
            <div className="relative w-40 h-16">
              <img className="w-full h-full" src={logo} alt="logo" />
            </div>
            <div className="flex flex-col">
              <img src={logoname} alt="logo name" />
            </div>
          </div>

          {/* Right: images */}
          <div className="flex items-center space-x-2">
            <div>
              <img className="h-20" src={amritotstav} alt="amrit mahotsav" />
            </div>
            <div>
              <img className="h-20 ml-5" src={flag} alt="flag" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="relative bg-transparent h-30" style={{ zIndex: 80 }}>
        <div className="container mx-auto">
          <div className="flex justify-between">
            {/* Desktop nav with submenus */}
            <div className="hidden w-full space-x-1 overflow-x-auto text-sm font-semibold text-white h-80 md:flex">
              {/* Home */}
              <Link to="/" className="h-12 px-4 py-3 text-white transition-colors">
                Home
              </Link>

              {/* About Us Section with Dropdown */}
              <div className="relative group">
                <Link to="/about-us" className="inline-block h-12 px-4 py-3 transition-colors">
                  About Us
                </Link>
                <div
                  className="absolute left-0 hidden bg-black opacity-50 text-white group-hover:block max-h-[300px] w-[300px] overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ zIndex: 200 }}
                >
                  <ul>
                    <li>
                      <Link
                        to="/about-us"
                        className="inline-block px-4 py-3 text-white transition-colors border-b hover:bg-gray-100"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/our-history" className="block px-4 py-2 border-b hover:bg-gray-200">
                        Our History
                      </Link>
                    </li>
                    <li>
                      <Link to="/vision-mission" className="block px-4 py-2 border-b hover:bg-gray-200">
                        Vision &amp; Mission
                      </Link>
                    </li>
                    <li>
                      <Link to="/board-of-directors" className="block px-4 py-2 border-b hover:bg-gray-200">
                        Board of Directors of MSPGCL
                      </Link>
                    </li>
                    <li>
                      <Link to="/board-members" className="block px-4 py-2 border-b hover:bg-gray-200">
                        Board Members of MSEB Holding
                      </Link>
                    </li>
                    <li>
                      <Link to="/history" className="block px-4 py-2 border-b hover:bg-gray-200">
                        Key Officials of MSPGCL
                      </Link>
                    </li>
                    <li>
                      <Link to="/organization-structure" className="block px-4 py-2 border-b hover:bg-gray-200">
                        Organization Structure
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Generation Section with Dropdown */}
              <div className="relative group">
                <Link to="/generation" className="inline-block px-4 py-3 transition-colors">
                  Generation
                </Link>
                <div
                  className="absolute left-0 hidden bg-black opacity-50 text-white group-hover:block max-h-[300px] w-[300px] overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ zIndex: 200 }}
                >
                  <ul>
                    <li>
                      <Link to="/installed-capacity" className="block px-4 py-2 border-b">
                        Installed Capacity
                      </Link>
                    </li>
                    <li>
                      <Link to="/current-generation" className="block px-4 py-2 border-b">
                        Current Generation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Projects Section with Dropdown */}
              <div className="relative group">
                <Link to="/projects" className="inline-block px-4 py-3 transition-colors">
                  Projects
                </Link>
                <div
                  className="absolute left-0 hidden bg-black opacity-50 text-white group-hover:block max-h-[300px] w-[300px] overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ zIndex: 200 }}
                >
                  <ul>
                    <li>
                      <Link to="/thermal-projects" className="block px-4 py-2 border-b">
                        Thermal Projects
                      </Link>
                    </li>
                    <li>
                      <Link to="/projects/solar" className="block px-4 py-2 border-b">
                        Solar Projects
                      </Link>
                    </li>
                    <li>
                      <Link to="/projects/gp-ii" className="block px-4 py-2 border-b">
                        GP-II Coal Mine
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Subsidiaries Section with Dropdown */}
              <div className="relative group">
                <Link to="/subsidiaries" className="inline-block px-4 py-3 transition-colors">
                  Subsidiaries
                </Link>
                <div
                  className="absolute left-0 hidden bg-black opacity-50 text-white group-hover:block max-h-[300px] w-[300px] overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ zIndex: 200 }}
                >
                  <ul>
                    <li>
                      <Link to="/subsidiaries/mahagenco-renewable" className="block px-4 py-2 border-b">
                        Mahagenco Renewable Energy Ltd
                      </Link>
                    </li>
                    <li>
                      <Link to="/subsidiaries/mahagenco-ntpc-green" className="block px-4 py-2 border-b">
                        Mahagenco NTPC Green Energy Ltd
                      </Link>
                    </li>
                    <li>
                      <Link to="/subsidiaries/mahaguj-collieries" className="block px-4 py-2 border-b">
                        Mahaguj Collieries Ltd
                      </Link>
                    </li>
                    <li>
                      <Link to="/subsidiaries/dhopave" className="block px-4 py-2 border-b">
                        Dhopave
                      </Link>
                    </li>
                    <li>
                      <Link to="/subsidiaries/ucm-coal" className="block px-4 py-2 border-b">
                        UCM Coal Company Ltd
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Auction Section with Dropdown */}
              <div className="relative group">
                <Link to="/auction" className="inline-block px-4 py-3 transition-colors">
                  Auction
                </Link>
                <div
                  className="absolute left-0 hidden bg-black opacity-50 text-white group-hover:block max-h-[300px] w-[300px] overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ zIndex: 200 }}
                >
                  <ul>
                    <li>
                      <Link to="/auction" className="block px-4 py-2 border-b">
                        Auction
                      </Link>
                    </li>
                    <li>
                      <Link to="/list-of-eauction" className="block px-4 py-2 border-b">
                        List of e-Auction
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Financial Performance Section */}
              <Link
                to="/financial-performance"
                className="inline-block h-12 px-4 py-3 transition-colors"
              >
                Financial Performance
              </Link>

              {/* E-procurement Portal Section */}
              <Link
                to="/e-procurement"
                className="inline-block h-12 px-4 py-3 transition-colors"
              >
                E-procurement Portal
              </Link>

              {/* Regulatory & Commercial Section with Dropdown */}
              <div className="relative group">
                <Link to="/regulatory" className="inline-block px-4 py-3 transition-colors">
                  Regulatory &amp; Commercial
                </Link>
                <div
                  className="absolute left-0 hidden bg-black opacity-50 text-white group-hover:block max-h-[300px] w-[300px] overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ zIndex: 200 }}
                >
                  <ul>
                    <li>
                      <Link to="/regulatory" className="block px-4 py-2 border-b">
                        Regulatory &amp; Commercial
                      </Link>
                    </li>
                    <li>
                      <Link to="/rules-regulations" className="block px-4 py-2 border-b">
                        Rules &amp; Regulations
                      </Link>
                    </li>
                    <li>
                      <Link to="/regulatory-petitions" className="block px-4 py-2 border-b">
                        Regulatory Petitions
                      </Link>
                    </li>
                    <li>
                      <Link to="/approved-tariff" className="block px-4 py-2 border-b">
                        Approved Tariff
                      </Link>
                    </li>
                    <li>
                      <Link to="/approved-ppa" className="block px-4 py-2 border-b">
                        Approved PPA
                      </Link>
                    </li>
                    <li>
                      <Link to="/monthly-fuel" className="block px-4 py-2 border-b">
                        Monthly Fuel Cost and CV Data
                      </Link>
                    </li>
                    <li>
                      <Link to="/fuel-utilisation" className="block px-4 py-2 border-b">
                        Fuel Utilisation Plan
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Media Section with Dropdown */}
              <div className="relative group">
                <Link to="/media" className="inline-block px-4 py-3 transition-colors">
                  Media
                </Link>
                <div
                  className="absolute left-0 hidden bg-black opacity-50 text-white group-hover:block max-h-[300px] w-[300px] overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ zIndex: 200 }}
                >
                  <ul>
                    <li>
                      <Link to="/photo-gallery" className="block px-4 py-2 border-b">
                        Photo Gallery
                      </Link>
                    </li>
                    <li>
                      <Link to="/video-gallery" className="block px-4 py-2 border-b">
                        Video Gallery
                      </Link>
                    </li>
                    <li>
                      <Link to="/new-project-csr" className="block px-4 py-2 border-b">
                        New Project CSR
                      </Link>
                    </li>
                    <li>
                      <Link to="/awards-recognition" className="block px-4 py-2 border-b">
                        Awards/Recognition
                      </Link>
                    </li>
                    <li>
                      <Link to="/press-release" className="block px-4 py-2 border-b">
                        Press Release
                      </Link>
                    </li>
                    <li>
                      <Link to="/srujan-magazine" className="block px-4 py-2 border-b">
                        Srujan Magazine
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Career Section with Dropdown */}
              <div className="relative group">
                <Link to="/career" className="inline-block px-3 py-3 transition-colors">
                  Career
                </Link>
                <div
                  className="absolute left-0 hidden bg-black opacity-50 text-white group-hover:block max-h-[300px] w-[200px] overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ zIndex: 200 }}
                >
                  <ul>
                    <li>
                      <Link to="/advertisement" className="block px-4 py-2 border-b">
                        Advertisement
                      </Link>
                    </li>
                    <li>
                      <Link to="/exam-process" className="block px-4 py-2 border-b">
                        Exam Process Related Notification
                      </Link>
                    </li>
                    <li>
                      <Link to="/result-select" className="block px-4 py-2 border-b">
                        Result-Select List/Wait List
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hamburger menu button (mobile) */}
            <button className="p-3 ml-auto md:hidden" onClick={toggleSidebar}>
              <img src={menu} alt="Menu" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0" style={{ zIndex: 300 }}>
          <div className="h-full bg-black bg-opacity-50">
            <div className="flex justify-end p-4">
              <button onClick={toggleSidebar} className="text-white">
                <img src={menu} alt="Close Menu" />
              </button>
            </div>
            <div className="flex items-center justify-center h-full">
              <div className="p-8 bg-white rounded-lg w-80">
                <h2 className="mb-4 text-2xl font-bold">Menu</h2>
                <ul className="space-y-4">
                  {/* Same links as main nav, but simpler side version */}
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about-us">About Us</Link></li>
                  <li><Link to="/generation">Generation</Link></li>
                  <li><Link to="/projects">Projects</Link></li>
                  <li><Link to="/subsidiaries">Subsidiaries</Link></li>
                  <li><Link to="/auction">Auction</Link></li>
                  <li><Link to="/financial-performance">Financial Performance</Link></li>
                  <li><Link to="/e-procurement">E-procurement Portal</Link></li>
                  <li><Link to="/regulatory">Regulatory</Link></li>
                  <li><Link to="/media">Media</Link></li>
                  <li><Link to="/career">Career</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
