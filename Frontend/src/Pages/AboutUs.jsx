// src/Pages/AboutUs.jsx
import React, { useState } from 'react';
import { ChevronDown, ArrowUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import SideLinks from '../components/SideLinks';
import Footer from '../components/Footer';
import aboutBanner from '../assets/about.jpg';

export default function AboutUs() {
  const [expanded, setExpanded] = useState({});

  const toggle = (key) =>
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  const aboutLinks = [
    { label: 'About Us', to: '/about-us' },
    { label: 'Our History', to: '/history' },
    { label: 'Vision & Mission', to: '/vision-mission' },
    { label: 'Board of Directors', to: '/board-of-directors' },
    { label: 'Board Members of MSEB', to: '/board-members' },
    { label: 'Key Officials of MSPGCL', to: '/key-officials' },
    { label: 'Organization Structure', to: '/organization-structure' },
  ];

  const thermalRows = [
    { sr: 1, station: 'Koradi', units: '1×210 + 3×660', cap: 2190 },
    { sr: 2, station: 'Nashik', units: '3×210', cap: 630 },
    { sr: 3, station: 'Bhusawal', units: '1×210 + 2×500 + 1×660', cap: 1870 },
    { sr: 4, station: 'Paras', units: '2×250', cap: 500 },
    { sr: 5, station: 'Parli', units: '3×250', cap: 750 },
    { sr: 6, station: 'Khaperkheda', units: '4×210 + 1×500', cap: 1340 },
    { sr: 7, station: 'Chandrapur', units: '2×210 + 5×500', cap: 2920 },
    { sr: '—', station: 'MAHAGENCO THERMAL', units: '', cap: 10200, isBold: true },
  ];

  const hydroRows = [
    { sr: 1, station: 'Koyna ST I & II', units: '4×70 + 4×80', cap: 600 },
    { sr: 2, station: 'Koyna ST III', units: '4×80', cap: 320 },
    { sr: 3, station: 'Koyna ST IV', units: '4×250', cap: 1000 },
    { sr: 4, station: 'KDPH', units: '2×18', cap: 36 },
    { sr: 5, station: 'Ghathgar', units: '2×125', cap: 250 },
    { sr: 6, station: 'Vaitarna', units: '1×60', cap: 60 },
    { sr: 7, station: 'Vaitarna D.T.', units: '1×1.5', cap: 1.5 },
    { sr: 8, station: 'Bhatgar', units: '1×16', cap: 16 },
    { sr: 9, station: 'Tillari', units: '1×66', cap: 66 },
    { sr: 10, station: 'Bhira T.R.', units: '2×40', cap: 80 },
    { sr: 11, station: 'Yeldari', units: '3×7.5', cap: 22.5 },
    { sr: 12, station: 'Paithan', units: '1×12', cap: 12 },
    { sr: 13, station: 'Pawna', units: '1×10', cap: 10 },
    { sr: 14, station: 'Panshet', units: '1×8', cap: 8 },
    { sr: 15, station: 'Kanher', units: '1×4', cap: 4 },
    { sr: 16, station: 'Varasgaon', units: '1×8', cap: 8 },
    { sr: 17, station: 'Bhatsa', units: '1×15', cap: 15 },
    { sr: 18, station: 'Dhom', units: '2×1', cap: 2 },
    { sr: 19, station: 'Ujani', units: '1×12', cap: 12 },
    { sr: 20, station: 'Manikdoh', units: '1×6', cap: 6 },
    { sr: 21, station: 'Dimbhe', units: '1×5', cap: 5 },
    { sr: 22, station: 'Surya', units: '1×6', cap: 6 },
    { sr: 23, station: 'Warna', units: '2×8', cap: 16 },
    { sr: 24, station: 'Dudhganga', units: '2×12', cap: 24 },
    { sr: 25, station: 'Terwanmedhe', units: '1×0.2', cap: 0.2 },
    { sr: '—', station: 'MAHAGENCO HYDRO', units: '', cap: 2580.2, isBold: true },
  ];

  const solarRows = [
    {
      sr: 1,
      station: 'SOLAR',
      details:
        'Chandrapur [1*1]+[2*2] Shivajinagar, Sakri [5*25 + 2×25], Shirsufal, Baramati [36.33 + 14], Kaudgoan [2×25 MW]',
      cap: 280.33,
    },
    {
      sr: 2,
      station: 'Solar Projects [CMAGF Scheme]',
      details: 'Ralegan Siddhi [1×2], Kolambi Manjarda [1×2], Gavhankund [1×16]',
      cap: 148.02,
    },
    {
      sr: '—',
      station: 'Installed capacity of solar projects will be -',
      details: '',
      cap: 428.35,
      isBold: true,
    },
  ];

  return (
    <div className="relative">
      {/* 1) Fixed Navbar */}
      <Navbar />

      {/* 2) Banner + Title */}
      <div className="relative h-[350px]">
        <img
          src={aboutBanner}
          alt="About Us Banner"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <h1 className="absolute text-4xl font-bold text-white bottom-4 left-8 drop-shadow-lg">
          About Us
        </h1>
      </div>

      {/* 3) Main content: sidebar + scrolling right column */}
      <section className="flex gap-8 px-8 pt-8 pb-20">
        {/* 3a) Sidebar, sticky under banner */}
        <aside className="sticky top-[calc(350px+1rem)] w-1/4">
          <SideLinks title="About Us" links={aboutLinks} />
        </aside>

        {/* 3b) Right column */}
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl font-semibold">A Power Generating Utility</h2>

          <p>
            <strong>MAHAGENCO</strong> has the highest overall generation capacity and the highest Thermal
            installed capacity amongst all the State Power Generation utilities in India. In terms of installed
            capacity, it is the second highest State owned Generation Company after NTPC. It was established by
            the government of Maharashtra under the central electricity act‑2003 with the principal objective of
            engaging in the business of generation of electricity, & <strong>MAHAGENCO</strong> produces the
            cheapest power for consumers in the state.
          </p>

          <p>
            MAHAGENCO has an installed capacity of 13880.55 MW. This comprises of Thermal (nearly 73.5%, i.e.
            10200 MW) and a gas‑based generating station at Uran, having an installed capacity of 672 MW. The
            Hydro Electric Projects in the State of Maharashtra were designed, erected, and commissioned through
            the Water Resource Department (WRD) of GoM. After commissioning, the hydro projects were handed over
            on a long‑term lease to Mahagenco for Operation and Maintenance. Presently there are 25 hydel
            projects, having a capacity of 2580.2 MW.
          </p>

          <p>
            MAHAGENCO is aware of the next green power scenario of power generation from non‑conventional energy
            resources and has a clear vision for Green Power for the consumers of Maharashtra. Accordingly, to
            fulfill Renewable Power obligation of distribution companies in Maharashtra, MAHAGENCO has
            commissioned 428.35 MWp Solar Power Projects till date.
          </p>

          <p>
            MAHAGENCO is committed to expanding the generation capacity to meet the ever‑growing power supply need
            of Maharashtra. The company is implementing a huge capacity addition programme.
            <br />
            <br />
            MAHAGENCO generates power for more than 1,50,00,000 end consumers in Maharashtra at economical and
            affordable rates.
            <br />
            <br />
            MAHAGENCO believes in quality management. All major thermal, hydel, and gas turbine power stations
            have adopted the ISO 9001:2000 certification.
            <br />
            <br />
            MAHAGENCO is an eco‑friendly power generating company and has received certification under ISO:14001
            and ISO:18001 for its major power stations at Chandrapur, Koradi, Khaperkheda, Nasik, Paras, Parli,
            and at Koyna and Uran power stations also.
            <br />
            <br />
            MAHAGENCO has a gross fixed asset base of Rs. 47843.81 Cr. as on 31.03.2023 with an Annual turnover of
            Rs. 33,323.06 Cr. for FY 2022‑23.
            <br />
            <br />
            MAHAGENCO is powered by a dedicated and committed highly skilled workforce of more than 14000.
          </p>

          {/* 4) Animated collapsible tables */}
          {[
            {
              key: 'thermal',
              title: 'INSTALLED CAPACITY OF MAHAGENCO (As on 01-03-2025)',
              columns: [
                'SR.NO.',
                'Power Station',
                'Units & Capacity (MW)',
                'Installed Capacity (MW)',
              ],
              rows: thermalRows,
            },
            {
              key: 'hydro',
              title: 'INSTALLED HYDRO CAPACITY (As on 01-03-2025)',
              columns: [
                'SR.NO.',
                'Power Station',
                'Units & Capacity (MW)',
                'Installed Capacity (MW)',
              ],
              rows: hydroRows,
            },
            {
              key: 'solar',
              title: 'INSTALLED SOLAR CAPACITY (As on 01-03-2025)',
              columns: ['SR.NO.', 'Power Plant', 'Details', 'Installed Capacity (MW)'],
              rows: solarRows,
            },
          ].map(({ key, title, columns, rows }) => (
            <div key={key} className="space-y-4">
              <h3
                className="flex items-center justify-between text-xl font-bold cursor-pointer"
                onClick={() => toggle(key)}
              >
                {title}
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    expanded[key] ? 'rotate-180' : ''
                  }`}
                />
              </h3>
              {expanded[key] && (
                <table className="w-full text-sm border-collapse table-auto">
                  <thead className="text-white bg-black">
                    <tr>
                      {columns.map((col) => (
                        <th key={col} className="px-4 py-2">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r, i) => (
                      <tr
                        key={i}
                        className={
                          r.isBold
                            ? 'font-semibold bg-gray-50'
                            : i % 2
                            ? 'bg-gray-200'
                            : 'bg-gray-100'
                        }
                      >
                        <td className="px-4 py-2">{r.sr}</td>
                        <td className="px-4 py-2">{r.station}</td>
                        <td className="px-4 py-2">{r.units ?? r.details}</td>
                        <td className="px-4 py-2">{r.cap}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          ))}

          {/* 5) Scroll‑to‑top */}
          <div className="fixed bottom-4 right-4">
            <button className="p-3 text-white bg-blue-500 rounded-full hover:bg-blue-600">
              <ArrowUp className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* 6) Footer */}
      <Footer />
    </div>
  );
}
