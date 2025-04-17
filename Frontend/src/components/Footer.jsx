import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-12 pb-12 bg-cover bg-center bg-fixed relative z-10 pl-10">
      <div className="container px-5 mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Us Column */}
          <div className="footer-column">
            <h3 className="mb-4 text-xl">About Us</h3>
            <ul className="p-0 list-none">
              <li><a href="/about-us" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/our-history" className="text-gray-300 hover:text-white">Our History</a></li>
              <li><a href="/vision-mission" className="text-gray-300 hover:text-white">Vision & Mission</a></li>
              <li><a href="/board-of-directors" className="text-gray-300 hover:text-white">Board of Directors</a></li>
              <li><a href="/board-members" className="text-gray-300 hover:text-white">Board Members of MSEB Holding</a></li>
              <li><a href="/key-officials" className="text-gray-300 hover:text-white">Key Officials of MSPGCL</a></li>
              <li><a href="/organization-structure" className="text-gray-300 hover:text-white">Organization Structure</a></li>
            </ul>

            <h3 className="mt-8 mb-4 text-xl">Generation</h3>
            <ul className="p-0 list-none">
              <li><a href="/installed-capacity" className="text-gray-300 hover:text-white">Installed Capacity</a></li>
              <li><a href="/current-generation" className="text-gray-300 hover:text-white">Current Generation</a></li>
            </ul>

            <h3 className="mt-8 mb-4 text-xl">Important Links</h3>
            <ul className="p-0 list-none">
              <li><a href="/mseb-cpf-portal" className="text-gray-300 hover:text-white">MSEB CPF Portal</a></li>
            </ul>
          </div>

          {/* Subsidiaries Column */}
          <div className="footer-column">
            <h3 className="mb-4 text-xl">Subsidiaries</h3>
            <ul className="p-0 list-none">
              <li><a href="/mahagenco-renewable" className="text-gray-300 hover:text-white">Mahagenco Renewable Energy Ltd</a></li>
              <li><a href="/mahagenco-ntpc" className="text-gray-300 hover:text-white">Mahagenco NTPC Green Energy Ltd</a></li>
              <li><a href="/mahaguj-collieries" className="text-gray-300 hover:text-white">Mahaguj Collieries Ltd</a></li>
              <li><a href="/dhopave" className="text-gray-300 hover:text-white">Dhopave</a></li>
              <li><a href="/ucm-coal" className="text-gray-300 hover:text-white">UCM Coal Company Ltd</a></li>
            </ul>

            <h3 className="mt-8 mb-4 text-xl">Auction</h3>
            <ul className="p-0 list-none">
              <li><a href="/auction" className="text-gray-300 hover:text-white">Auction</a></li>
              <li><a href="/e-auction" className="text-gray-300 hover:text-white">List of e-Auction</a></li>
            </ul>

            <h3 className="mt-8 mb-4 text-xl">Career</h3>
            <ul className="p-0 list-none">
              <li><a href="/advertisement" className="text-gray-300 hover:text-white">Advertisement</a></li>
              <li><a href="/exam-process" className="text-gray-300 hover:text-white">Exam process related Notification</a></li>
              <li><a href="/result-select-list" className="text-gray-300 hover:text-white">Result-Select List/Wait List</a></li>
            </ul>

            <h3 className="mt-8 mb-4 text-xl">Projects</h3>
            <ul className="p-0 list-none">
              <li><a href="/projects" className="text-gray-300 hover:text-white">Projects</a></li>
            </ul>

            <h3 className="mt-8 mb-4 text-xl">RTI</h3>
            <ul className="p-0 list-none">
              <li><a href="/rti" className="text-gray-300 hover:text-white">RTI</a></li>
            </ul>
          </div>

          {/* Regulatory Column */}
          <div className="footer-column">
            <h3 className="mb-4 text-xl">Regulatory & Commercial</h3>
            <ul className="p-0 list-none">
              <li><a href="/regulatory-commercial" className="text-gray-300 hover:text-white">Regulatory & Commercial</a></li>
              <li><a href="/rules-regulations" className="text-gray-300 hover:text-white">Rules & Regulations</a></li>
              <li><a href="/regulatory-petitions" className="text-gray-300 hover:text-white">Regulatory Petitions</a></li>
              <li><a href="/approved-tariff" className="text-gray-300 hover:text-white">Approved Tariff</a></li>
              <li><a href="/approved-ppa" className="text-gray-300 hover:text-white">Approved PPA</a></li>
              <li><a href="/monthly-fuel-cost" className="text-gray-300 hover:text-white">Monthly Fuel cost and CV data</a></li>
              <li><a href="/fuel-utilisation-plan" className="text-gray-300 hover:text-white">Fuel Utilisation Plan</a></li>
            </ul>

            <h3 className="mt-8 mb-4 text-xl">Other Links</h3>
            <ul className="p-0 list-none">
              <li><a href="/award" className="text-gray-300 hover:text-white">Award</a></li>
              <li><a href="/notices" className="text-gray-300 hover:text-white">Notices</a></li>
              <li><a href="/mail" className="text-gray-300 hover:text-white">Mail</a></li>
              <li><a href="/links" className="text-gray-300 hover:text-white">Links</a></li>
              <li><a href="/contact-us" className="text-gray-300 hover:text-white">Contact Us</a></li>
              <li><a href="/sitemap" className="text-gray-300 hover:text-white">Sitemap</a></li>
              <li><a href="/help" className="text-gray-300 hover:text-white">Help</a></li>
              <li><a href="/feedback" className="text-gray-300 hover:text-white">Feedback</a></li>
              <li><a href="/disclaimer" className="text-gray-300 hover:text-white">Disclaimer</a></li>
              <li><a href="/policies" className="text-gray-300 hover:text-white">Policies</a></li>
            </ul>
          </div>

          {/* Menu Links Column */}
          <div className="footer-column">
            <h3 className="mb-4 text-xl">Menu Link</h3>
            <ul className="p-0 list-none">
              <li><a href="/csr" className="text-gray-300 hover:text-white">Corporate Social Responsibility (CSR)</a></li>
              <li><a href="/corporate-information" className="text-gray-300 hover:text-white">Corporate information</a></li>
              <li><a href="/fly-ash-utilization" className="text-gray-300 hover:text-white">Fly Ash Utilization</a></li>
              <li><a href="/standard-makes" className="text-gray-300 hover:text-white">List of Standard Makes</a></li>
              <li><a href="/training-portal" className="text-gray-300 hover:text-white">Training Portal</a></li>
              <li><a href="/financial-performance" className="text-gray-300 hover:text-white">Financial Performance</a></li>
            </ul>

            <h3 className="mt-8 mb-4 text-xl">Testing Laboratory</h3>
            <ul className="p-0 list-none">
              <li><a href="/testing-laboratory" className="text-gray-300 hover:text-white">Testing Laboratory</a></li>
            </ul>

            <h3 className="mt-8 mb-4 text-xl">E-procurement Portal</h3>
            <ul className="p-0 list-none">
              <li><a href="/e-procurement" className="text-gray-300 hover:text-white">E-procurement Portal</a></li>
            </ul>

            <h3 className="mt-8 mb-4 text-xl">SAP Dashboard</h3>
            <ul className="p-0 list-none">
              <li><a href="/sap-dashboard" className="text-gray-300 hover:text-white">SAP Dashboard</a></li>
            </ul>

            <h3 className="mt-8 mb-4 text-xl">Announcements</h3>
            <ul className="p-0 list-none">
              <li><a href="/announcements" className="text-gray-300 hover:text-white">Announcements</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom text-center mt-12 pt-4 border-t border-[#34495e]">
          <div className="flex items-center justify-center mb-4 views">
            <span>This page was viewed :</span>
            <div className="flex view-count">
              {[0, 0, 1, 4, 5, 3, 8, 4, 6].map((digit, index) => (
                <div key={index} className="view-digit bg-[#34495e] text-white p-2 mx-1 text-xl">{digit}</div>
              ))}
            </div>
          </div>
          <p className="text-gray-400">Last updated on 31/03/2025 06:12 PM</p>
          <p className="text-gray-400">&copy; 2025 Maharashtra State Power Generation Co. Ltd., All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
