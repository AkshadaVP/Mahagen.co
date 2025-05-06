// src/pages/History.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import aboutBanner from '../assets/about.jpg';
import Footer from '../components/Footer';
import SideLinks from '../components/SideLinks';

const History = () => {
  const aboutLinks = [
    { label: 'About Us',                to: '/about-us'               },
    { label: 'Our History',             to: '/history'                },
    { label: 'Vision & Mission',        to: '/vision-mission'         },
    { label: 'Board of Directors',      to: '/board-of-directors'     },
    { label: 'Board Members of MSEB',   to: '/board-members'          },
    { label: 'Key Officials of MSPGCL', to: '/key-officials'          },
    { label: 'Organization Structure',  to: '/organization-structure' },
  ];

  return (
    <div className="relative">
      <Navbar />
      {/* Banner */}
      <img
        src={aboutBanner}
        alt="About Us Banner"
        className="absolute top-0 left-0 w-full h-[350px] object-cover z-[-1]"
      />
      <div className="translate-y-70 translate-x-30">
        <span className="text-4xl font-bold text-white">Our History</span>
      </div>

      {/* Main Content */}
      <div className="flex mt-20 mb-40 ml-20 translate-y-30">
        <SideLinks title="About Us" links={aboutLinks} />
        <div className="w-3/4 p-10 ml-auto space-y-8 overflow-y-auto px-50 mt-30">
          {/* Paragraphs */}
          <h2 className="text-3xl font-semibold">Company History</h2>
          <div className="space-y-4 text-justify">
            <p>
              <b>
                Maharashtra State Power Generation Co Ltd. (herein after referred to as “The Company”) has been
                incorporated under Indian Companies Act 1956 pursuant to decision of Govt. of Maharashtra to
                reorganize Erstwhile Maharashtra State Electricity Board (herein after referred to as “MSEB”).
              </b>
            </p>
            <p>
              The said reorganization of the MSEB has been done by Govt. of Maharashtra pursuant to Part XIII read
              with section 131 of The Electricity Act 2003. Mahagenco was incorporated on 31.5.2005 with The
              Registrar of Companies, Maharashtra, Mumbai and obtained Certificate of Commencement of Business on
              15.09.2005. Mahagenco is engaged in the business of generation and supply of Electricity and has been
              vested with generation assets, interest in property, rights and liabilities of MSEB as per Gazette
              Notification dated 4th June 2005 issued by Industry, Energy and Labour Dept of Govt of Maharashtra
              pursuant to section 131 of Electricity Act 2003.
            </p>
          </div>

          {/* Board of Directors */}
          <div className="p-6 bg-gray-100 rounded">
            <h3 className="pl-6 mb-4 text-2xl font-semibold">
              Following is a Composition of the Current Board of Directors of the Company
            </h3>
            <ul className="pl-6 space-y-2 list-none">
              {[
                "Shri. Radhakrishnan B., I.A.S., Chairman & Managing Director",
                "Smt. Abha Shukla, I.A.S., Addl. Chief Secretary (Energy), GoM.",
                "Shri. Balasaheb B. Thite, Director (Finance)",
                "Shri. Sanjay Marudkar, Director (Operations)",
                "Shri. Abhay Harne, Director (Projects)",
                "Shri. Abhay Harne, Director (Fuel) (Addl. Charge)",
                "Shri. Vishwas Pathak, Independent Director",
              ].map((text, idx, arr) => (
                <li
                  key={idx}
                  className={`flex items-center pb-2 ${
                    idx < arr.length - 1 ? "border-b border-gray-300" : ""
                  }`}
                >
                  <span className="mr-2 text-black">✓</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Final Note */}
          <p className="text-justify">
            As per Articles 75 & 77 of Articles of Association of the Company, Chairman, Managing Director and
            other Directors of the Company shall be nominated by MSEB Holding Company Ltd. The desired
            qualifications and experience of the Directors of the Company has been prescribed in Article 78 of the
            Articles of Association of the Company.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default History;
