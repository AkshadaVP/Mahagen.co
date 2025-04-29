// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, Search, Volume2, User } from 'react-feather';
import { Link } from 'react-router-dom';
import { useUser, useClerk } from '@clerk/clerk-react';

// Images
import logo from '../assets/demo-hosting-logo-white.png';
import logoBlack from '../assets/logoblack.png';
import logoname from '../assets/logo_name_white2.png';
import logonameBlack from '../assets/logo_name_black.png';
import amritotstav from '../assets/amritmahotsav.jpg';
import flag from '../assets/flag.gif';
import menu from '../assets/menu.png';
import awards from '../assets/award-sidebar.png';
import contactUs from '../assets/contactUs-sidebar.png';
import linksIcon from '../assets/links-sidebar.png';
import mailIcon from '../assets/mail-sidebar.png';
import notices from '../assets/notices-sidebar.png';
import testing from '../assets/test-sidebar.png';

const Navbar = () => {
  const { user } = useUser();
  const { signOut } = useClerk();

  // dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEmployeeAreaOpen, setIsEmployeeAreaOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeout = useRef(null);

  // scroll state
  const [scrolled, setScrolled] = useState(false);

  // mobile sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(o => !o);
  const closeSidebar  = () => setIsSidebarOpen(false);

  const toggleEmployeeArea = () => {
    setIsEmployeeAreaOpen(prev => !prev); // Toggle the dropdown state
  };

  // on scroll, toggle header bg
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    setIsEmployeeAreaOpen(false); // Close the dropdown after sign-out
  };
  

  const openDropdown = label => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };
  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  function renderNavLink(label, to) {
    return (
      <Link to={to} className="py-1 hover:underline">
        {label}
      </Link>
    );
  }

  function renderDropdown(label, links) {
    return (
      <div
        className="relative"
        onMouseEnter={() => openDropdown(label)}
        onMouseLeave={closeDropdown}
      >
        <span className="py-1 cursor-pointer hover:underline">{label}</span>
        {activeDropdown === label && (
          <div className="absolute left-0 mt-2 w-[260px] bg-black bg-opacity-90 backdrop-blur-sm text-white rounded shadow-lg z-50">
            {links.map(([name, path]) => (
              <Link
                key={path}
                to={path}
                onMouseEnter={() => openDropdown(label)}
                className="block px-4 py-2 text-sm border-b border-gray-700 hover:bg-gray-700"
              >
                {name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Blue Bar */}
      <div className="px-4 py-2 text-white bg-blue-800">
  <div className="flex items-center justify-between">
    {/* Left side unchanged */}
    <div className="flex gap-5 ml-8 text-xs">
      <div className="flex items-center">
        <Phone className="w-4 h-4 mr-1" />
        <span>022-69425000</span>
      </div>
      <div className="flex items-center">
        <Mail className="w-4 h-4 mr-1" />
        <span>webposting@mahagenco.in</span>
      </div>
    </div>

    {/* Right side with Employee's Area dropdown */}
    <div className="flex items-center gap-3 mr-8 text-sm">
      <a href="#" className="hover:underline">SAP Dashboard</a>
      <span>|</span>

      {/* Employee's Area */}
      {!user ? (
    <div className="relative">
      <button onClick={toggleEmployeeArea} className="hover:underline">
        Employee's Area
      </button>
      {isEmployeeAreaOpen && (
        <div className="absolute right-0 z-50 w-40 mt-2 text-black bg-white rounded shadow-md">
          <Link to="/user-signup" className="block px-4 py-2 hover:bg-gray-100">
            Request Access
          </Link>
          <Link to="/sign-in" className="block px-4 py-2 hover:bg-gray-100">
            Login
          </Link>
        </div>
      )}
    </div>
  ) : (
    <div className="relative">
      <button onClick={toggleEmployeeArea} className="hover:underline">
        Employee's Area
      </button>
      {isEmployeeAreaOpen && (
        <div className="absolute right-0 z-50 w-40 mt-2 text-black bg-white rounded shadow-md">
          <button onClick={handleSignOut} className="w-full px-4 py-2 text-left hover:bg-gray-100">
            Sign Out
          </button>
        </div>
      )}
    </div>
  )}

  {/* Profile Circle */}
  {user && (
    <Link to="/profile">
      <div className="flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full hover:opacity-80">
      {(
        user?.firstName?.[0] ||
        user?.primaryEmailAddress?.emailAddress?.[0] ||
        'U'
        ).toUpperCase()}
        </div>
    </Link>
  )}

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
    </div>
  </div>
</div>



      {/* Logo Bar */}
      <div
        className={`flex justify-between items-center p-2 transition-colors ${
          scrolled ? 'bg-white' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-5 ml-8">
          <img
            src={scrolled ? logoBlack : logo}
            alt="logo"
            className="object-contain h-20"
          />
          <img
            src={scrolled ? logonameBlack : logoname}
            alt="logo name"
            className="object-contain h-20"
          />
        </div>
        <div className="flex items-center gap-5 mr-8">
          <img src={amritotstav} alt="amrit mahotsav" className="h-20" />
          <img src={flag} alt="flag" className="h-20" />
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`relative flex items-center p-2 text-sm font-medium pl-14 gap-7 transition-colors ${
          scrolled ? 'bg-white text-black' : 'bg-transparent text-white'
        }`}
      >
        {renderNavLink('Home', '/')}
        {renderDropdown('About Us', [
          ['About Us', '/about-us'],
          ['Our History', '/history'],
          ['Vision & Mission', '/vision-mission'],
          ['Board of Directors of MSPGCL', '/board-of-directors'],
          ['Board Members of MSEB Holding', '/board-mseb'],
          ['Key Officials of MSPGCL', '/history'],
          ['Organization Structure', '/organization-structure'],
        ])}
        {renderDropdown('Generation', [
          ['Installed Capacity', '/installed-capacity'],
          ['Current Generation', '/current-generation'],
        ])}
        {renderDropdown('Projects', [
          ['Thermal Projects', '/thermal-projects'],
          ['Solar Projects', '/solar'],
          ['GP-II Coal Mine', '/gp-ii'],
        ])}
        {renderDropdown('Subsidiaries', [
          ['Mahagenco Renewable Energy Ltd', '/subsidiaries/mahagenco-renewable'],
          ['Mahagenco NTPC Green Energy Ltd', '/subsidiaries/mahagenco-ntpc-green'],
          ['Mahaguj Collieries Ltd', '/subsidiaries/mahaguj-collieries'],
          ['Dhopave', '/subsidiaries/dhopave'],
          ['UCM Coal Company Ltd', '/subsidiaries/ucm-coal'],
        ])}
        {renderDropdown('Auction', [
          ['Auction', '/auction'],
          ['List of e-Auction', '/list-of-eauction'],
        ])}
        {renderNavLink('Financial Performance', '/financial-performance')}
        {renderNavLink('E-procurement Portal', '/e-procurement')}
        {renderDropdown('Regulatory & Commercial', [
          ['Regulatory & Commercial', '/regulatory'],
          ['Rules & Regulations', '/rules-regulations'],
          ['Regulatory Petitions', '/regulatory-petitions'],
          ['Approved Tariff', '/approved-tariff'],
          ['Approved PPA', '/approved-ppa'],
          ['Monthly Fuel Cost and CV Data', '/monthly-fuel'],
          ['Fuel Utilisation Plan', '/fuel-utilisation'],
        ])}
        {renderDropdown('Media', [
          ['Photo Gallery', '/photo-gallery'],
          ['Video Gallery', '/video-gallery'],
          ['New Project CSR', '/new-project-csr'],
          ['Awards/Recognition', '/awards-recognition'],
          ['Press Release', '/press-release'],
          ['Srujan Magazine', '/srujan-magazine'],
        ])}
        {renderDropdown('Career', [
          ['Advertisement', '/advertisement'],
          ['Exam Process Related Notification', '/exam-process'],
          ['Result-Select List/Wait List', '/result-select'],
        ])}

        {/* Mobile sidebar toggle */}
        <button
          onClick={toggleSidebar}
          aria-label="Open sidebar"
          className={`p-2 rounded hover:bg-white/10 ${
            scrolled ? 'text-black' : 'text-white'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg"
               className="w-5 h-5"
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile sliding sidebar */}
      <aside
        className={`
          fixed top-0 right-0 h-full w-64 bg-[#1f2a44] text-white z-50
          flex flex-col justify-between
          transform transition-transform duration-300
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button onClick={closeSidebar} aria-label="Close sidebar"
                  className="p-1 rounded hover:bg-white/10">
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="w-6 h-6"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Logo at top */}
        <div className="px-6 mt-8 mb-10">
          <img src={logoname} alt="logo name" className="object-contain w-full" />
        </div>

        {/* Sidebar links */}
        <nav className="flex-1 px-8 mt-6">
          <ul className="space-y-6">
            <li>
              <Link to="/testing-laboratory" className="flex items-center gap-3 hover:text-blue-300">
                <img src={testing} alt="" className="sidebar-css" />
                <span>Testing Laboratory</span>
              </Link>
            </li>
            <li>
              <Link to="/notices" className="flex items-center gap-3 hover:text-blue-300">
                <img src={notices} alt="" className="sidebar-css" />
                <span>Notices</span>
              </Link>
            </li>
            <li>
              <Link to="/award" className="flex items-center gap-3 hover:text-blue-300">
                <img src={awards} alt="" className="sidebar-css" />
                <span>Award</span>
              </Link>
            </li>
            <li>
              <Link to="/mail" className="flex items-center gap-3 hover:text-blue-300">
                <img src={mailIcon} alt="" className="sidebar-css" />
                <span>Mail</span>
              </Link>
            </li>
            <li>
              <Link to="/links" className="flex items-center gap-3 hover:text-blue-300">
                <img src={linksIcon} alt="" className="sidebar-css" />
                <span>Links</span>
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="flex items-center gap-3 hover:text-blue-300">
                <img src={contactUs} alt="" className="sidebar-css" />
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer contact info */}
        <footer className="px-6 py-8 space-y-1 text-xs text-gray-300 border-t border-white/20">
          <p className="text-lg">022-69425000</p>
          <p>Maharashtra State Power Generation Co. Ltd.</p>
          <p>PRAKASHGAD, Plot No. G-9, Bandra (East)</p>
          <p>Mumbai-400 051.</p>
        </footer>
      </aside>
    </div>
  );
};

export default Navbar;