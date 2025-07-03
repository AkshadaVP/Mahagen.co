// src/pages/GpIiCoalMine.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import SideLinks from '../components/SideLinks';
import Footer from '../components/Footer';
import projectsBanner from '../assets/projects.jpg';

export default function GpIiCoalMine() {
  const projectLinks = [
    { label: 'Thermal Projects', to: '/thermal-projects' },
    { label: 'Solar Projects',   to: '/projects/solar'   },
    { label: 'GP‑II Coal Mine',  to: '/projects/gp-ii'   },
  ];

  const bullets = [
    'Ministry of Coal (MoC) allotted GP‑II Coal Mine to MAHAGENCO vide letter dated 24.03.2015.',
    'Location: Mand Raigarh Coalfield, Tahasil‑Tamnar, District Raigarh, Chhattisgarh State.',
    'Mahagenco signed “Allotment Agreement” with MoC on 30.03.2015.',
    'MoC, GoI issued “Allotment Order” on 31.08.2015.',
    'As per the Allotment Agreement: Chandrapur Unit 8 & 9 (2×500 MW), Koradi Unit 8, 9 & 10 (3×660 MW) and Parli Unit 8 (1×250 MW) are linked to GP‑II as “End Use Plants” (EUP).',
    'Total Extractable Reserves: 655.152 MMT (Open‑cast 553.177 MMT & underground 101.975 MMT).',
    '“Mine Developer and Operator” finalised via International Competitive Bidding followed by “Reverse Bidding.”',
    'Mahagenco executed “Coal Mining Agreement” with M/s Adani Enterprises Ltd (AEL) and Gare Palma II Collieries Pvt. Ltd (SPV of AEL) on 31.03.2021.',
    'Approvals received to date: Mine Plan & Mine Closure Plan, Previous Approval, R&R Plan, Forest Clearance, Environment Clearance, Opening of Escrow Account, Grant of Mining Lease & Consent to Establish.',
    'Further development activities of the mine are in progress.',
  ];

  return (
    <div className="relative">
      {/* 1) Navbar */}
      <Navbar />

      {/* 2) Banner + Title */}
      <div className="relative h-[350px]">
        <img
          src={projectsBanner}
          alt="GP-II Coal Mine Banner"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <h1 className="absolute text-4xl font-bold text-white bottom-4 left-8 drop-shadow-lg">
          Mahagenco Coal Mine GP‑II
        </h1>
      </div>

      {/* 3) Sidebar + Content */}
      <section className="flex mt-[10px] px-8 pb-20 gap-8">
        {/* 3a) Sidebar */}
        <aside className="sticky top-[calc(350px+10px)] self-start w-60">
          <SideLinks title="Projects" links={projectLinks} />
        </aside>

        {/* 3b) Main content */}
        <main className="flex-1 space-y-6">
          {/* Tab header (only one) */}
          <div className="border-b">
            <button className="pb-2 text-lg font-semibold border-b-2 border-blue-600">
              Ongoing project
            </button>
          </div>

          {/* Content card */}
          <div className="p-6 space-y-3 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold">
              Gare Palma Sector II Coal Mine
            </h2>
            {bullets.map((line, idx) => (
              <p key={idx} className="flex items-start gap-2 text-sm">
                <span>✔</span>
                <span>{line}</span>
              </p>
            ))}
          </div>
        </main>
      </section>

      {/* 4) Footer */}
      <Footer />
    </div>
  );
}
