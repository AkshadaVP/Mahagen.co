// src/Pages/InstalledCapacity.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import SideLinks from '../components/SideLinks';
import Footer from '../components/Footer';
import generationBanner from '../assets/generationBanner.jpg';

export default function InstalledCapacity() {
  const generationLinks = [
    { label: 'Installed Capacity', to: '/installed-capacity' },
    { label: 'Current Generation',  to: '/current-generation' },
  ];

  const thermalRows = [
    { sr: 'A', station: 'THERMAL POWER STATIONS', units: '', cap: '', isHeader: true },
    { sr: 1, station: 'Koradi', units: '1×210 + 3×660', cap: 2190 },
    { sr: 2, station: 'Nashik', units: '3×210', cap: 630 },
    { sr: 3, station: 'Bhusawal', units: '1×210 + 2×500 + 1×660', cap: 1870 },
    { sr: 4, station: 'Paras', units: '2×250', cap: 500 },
    { sr: 5, station: 'Parli', units: '3×250', cap: 750 },
    { sr: 6, station: 'Khaperkheda', units: '4×210 + 1×500', cap: 1340 },
    { sr: 7, station: 'Chandrapur', units: '2×210 + 5×500', cap: 2920 },
    { sr: ' ', station: 'MAHAGENCO THERMAL', units: '', cap: 10200, isBold: true },
  ];

  const gasRows = [
    { sr: 'B', station: 'GAS TURBINE POWER STATION', units: '', cap: '', isHeader: true },
    { sr: 1, station: 'Uran G.T.', units: '4×108', cap: 432 },
    { sr: 2, station: 'W.H.R.', units: '2×120', cap: 240 },
    { sr: ' ', station: 'MAHAGENCO GAS', units: '', cap: 672, isBold: true },
  ];

  const hydroRows = [
    { sr: 'C', station: 'HYDRO POWER STATIONS', units: '', cap: '', isHeader: true },
    {
      sr: 1,
      station: 'Koyna Hydro',
      units: 'St I & II‑4×70 + 4×80, St III‑4×80, St IV‑4×250 & Dam foot‑2×18',
      cap: 1956,
    },
    { sr: 2, station: 'Other Hydro', units: '', cap: 374.2 },
    { sr: 3, station: 'Ghatghar Pump Storage', units: '2×125', cap: 250 },
    { sr: ' ', station: 'MAHAGENCO HYDRO', units: '', cap: 2580.2, isBold: true },
  ];

  const solarRows = [
    { sr: 'D', station: 'SOLAR POWER STATIONS', units: '', cap: '', isHeader: true },
    {
      sr: 1,
      station: 'Solar',
      units:
        'Chandrapur [1×1]+[2×2], Shivajinagar, Sakri [5×25 + 2×25], Shirsufal, Baramati [36.33 + 14], Kaudgoan [2×25]',
      cap: 280.33,
    },
    {
      sr: 2,
      station: 'Solar Projects (CMAGF Scheme)',
      units:
        'Ralegan Siddhi [1×2], Kolambi Manjarda [1×2], Gavhankund [1×16], Degloor [1×7], Kok.Dist.Parbhani [1×10], …',
      cap: 148.02,
    },
    {
      sr: ' ',
      station: 'Installed capacity of solar projects will be –',
      units: '',
      cap: 428.35,
      isBold: true,
    },
  ];

  const allRows = [
    ...thermalRows,
    ...gasRows,
    ...hydroRows,
    ...solarRows,
  ];

  return (
    <div className="relative">
      {/* 1) fixed navbar */}
      <Navbar />

      {/* 2) banner + title */}
      <div className="relative h-[350px]">
        <img
          src={generationBanner}
          alt="Generation Banner"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <h1 className="absolute text-4xl font-bold text-white bottom-4 left-8 drop-shadow-lg">
          Installed Capacity
        </h1>
      </div>

      {/* 3) content: push down by banner height */}
      <div className="pt-[70px] flex px-8 pb-20 gap-8">
        {/* 3a) sidebar (sticky under banner) */}
        <aside className="sticky top-0 self-start w-60">
          <SideLinks title="Generation" links={generationLinks} />
        </aside>

        {/* 3b) main content */}
        <main className="flex-1 space-y-5">
          <p>
            <strong>MAHAGENCO</strong> has an installed capacity of{' '}
            <strong>13,880.55 MW</strong>. This comprises of Thermal (nearly 73.5%,
            i.e. <strong>10,200 MW</strong>) and a gas based generating station at
            Uran, having an installed capacity of <strong>672 MW</strong>. The Hydro
            Electric Projects in the State of Maharashtra were designed, erected and
            commissioned through the Water Resource Department (WRD) of GoM. After
            commissioning, the hydro projects were handed over on long term lease to
            Mahagenco for Operation and Maintenance. Presently there are 25 hydel
            projects, having capacity of <strong>2,580.2 MW</strong>.
          </p>
          <p>
            <strong>MAHAGENCO</strong> is aware of next green power scenario of power
            generation from non-conventional energy resources and have clear vision
            for Green Power for the consumers of Maharashtra. Accordingly to fulfil
            Renewable Power obligation of distribution companies in Maharashtra,
            <strong> MAHAGENCO</strong> has commissioned{' '}
            <strong>428.35 MWp</strong> Solar Power Projects till date.
          </p>

          <h2 className="text-xl font-semibold">
            INSTALLED CAPACITY OF MAHAGENCO: (As on 01‑03‑2025)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse table-auto">
              <thead>
                <tr className="text-white bg-black">
                  <th className="px-4 py-2">SR.NO.</th>
                  <th className="px-4 py-2">Power Station</th>
                  <th className="px-4 py-2">Units &amp; Capacity (MW)</th>
                  <th className="px-4 py-2">Installed Cap. (MW)</th>
                </tr>
              </thead>
              <tbody>
                {allRows.map((r, i) => (
                  <tr
                    key={i}
                    className={
                      r.isHeader
                        ? 'bg-blue-300 font-bold'
                        : r.isBold
                        ? 'bg-gray-100 font-semibold'
                        : i % 2
                        ? 'bg-gray-200'
                        : 'bg-gray-100'
                    }
                  >
                    <td className="px-4 py-2 align-top">{r.sr}</td>
                    <td className="px-4 py-2">{r.station}</td>
                    <td className="px-4 py-2">{r.units}</td>
                    <td className="px-4 py-2">{r.cap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      {/* 4) footer */}
      <Footer />
    </div>
  );
}
