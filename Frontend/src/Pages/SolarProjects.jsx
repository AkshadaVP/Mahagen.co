// src/pages/SolarProjects.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SideLinks from '../components/SideLinks';
import Footer from '../components/Footer';
import projectsBanner from '../assets/projects.jpg';

export default function SolarProjects() {
  const [activeTab, setActiveTab] = useState('ongoing');

  const projectLinks = [
    { label: 'Thermal Projects', to: '/thermal-projects' },
    { label: 'Solar Projects',   to: '/projects/solar'   },
    { label: 'GP‑II Coal Mine',   to: '/projects/gp-ii'    },
  ];

  const ongoing = [
    {
      title: 'CMAGF Scheme (MSKVY 2.0) – 1071 MW',
      bullets: [
        'Mahagenco bidded for 500 MW & 800 MW under “MSKVY 2.0” KUSUM; LoA issued on 07.03.2024.',
        'Tenders published for 1071 MW cumulative solar under MSKVY‑2.0.',
        'EPC contractors selected for 1062 MW; 44 sites (584 MW) land handed over; work in progress.',
      ],
    },
    {
      title: 'EPC with land by bidder (Phase I & II) – 1200 MW',
      bullets: [
        'MoP, GoI letter F.No.09/11/2021‑RCM dtd 26.05.2022 for RE roadmap by 2025‑26.',
        'Tender published 11.10.2023 for 1200 MW EPC + land basis solar.',
        'LoAs issued 28.06.2024 to four bidders (100 MW each) for Phase I.',
        'Phase II (600 MW): LoA issued 09.10.2024 for 500 MW; remaining 300 MW tendered 10.01.2025.',
      ],
    },
    {
      title: 'Solar Park at Dondaicha, Dist Dhule – 250 MW',
      bullets: [
        'MNRE letter 05.12.2023 approved 250 MW under UMREPP; MERC 13.08.2024 directed TPSL to start.',
        'Land‑lease process underway; Mahagenco provided site map & coords.',
        'TPSL accepted 497.61 Ha of 499.27 Ha on 24.09.2024; lease agreement imminent.',
      ],
    },
    {
      title: 'On MSPGCL land – 127 MW (Paras 62 MW & Lakhmapur 65 MW)',
      bullets: [
        'A. Paras (62 MW): EPC under RE‑Bundling; LoA 19.10.2023; land handed 15.11.2023; design in progress; COD 30.08.2025.',
        'B. Lakhmapur (65 MW): EPC under RE‑Bundling + bundle with Chandrapur units 3–7; B.R. 15.12.2023; grid connect 30.08.2024; land handed 25.11.2024.',
      ],
    },
    {
      title: 'Solar Power projects at Yavatmal 50 MW & Washim II 40 MW',
      bullets: [
        'LoAs issued 09.10.2024 for 50 MW Yavatmal (Malkhed 25 MW, Mangladevi 25 MW) & 40 MW Washim II (Babhulgaon 20 MW, Saykheda 20 MW).',
      ],
    },
    {
      title: 'EPC Solar Projects – 112 MW',
      bullets: [
        'A. Latur 60 MW: held up by local opposition; exploring Old Parli TPS land; reconciliation in progress.',
        'B. TPS‑land Solar 52 MW: LoAs awarded for Nashik, Parli, Koradi & Sakri; execution in progress.',
      ],
    },
    {
      title: 'MSKVY‑1 (179 MW Scheme) – 16.1 MW',
      bullets: [
        '21.02 MW commissioned of 179 MW; 16.1 MW (Dari‑Kannur, Songaon, Sambhora) in advanced stage; COD by June 2025.',
      ],
    },
    {
      title: 'EOI 600 MW under CMAGF – 100 MW',
      bullets: [
        'EOI published 29.08.2022 for 600 MW cumulative solar PV in six regions.',
        'MERC approval received; LoA for 100 MW Aurangabad region on 13.03.2024.',
      ],
    },
    {
      title: 'Green Hydrogen 20 Nm³/hr from 500 kW at BTPS Bhusawal – 0.5 MW',
      bullets: [
        'Piloted under Hon. CM’s 100‑Day Energy Programme; trial run 12.03.2025; hydrogen gen from 18.03.2025.',
      ],
    },
  ];

  const proposed = [
    {
      title: 'UMREPP under JV with NTPC Green Energy Ltd. (NTPCGEL): 1250 MW',
      bullets: [
        'GoM G.R. 01.06.2022 approved JV with NTPC/Subsidiary for 2500 MW UMREPP (50:50).',
        'JV formed on 28.02.2024 at Delhi for 2500 MW RE projects in Maharashtra.',
      ],
    },
    {
      title: 'Floating Solar Project at Lower Wardha – 500 MW',
      bullets: [
        'Pre‑feasibility & bathymetric surveys completed on 08.11.2023.',
        'Site report indicates 500 MW FSPV feasible.',
        'MoU initiated with SJVNL (51:49 equity).',
      ],
    },
    {
      title: 'Green Hydrogen projects at various TPS – 1.5 MW',
      bullets: [
        '1.5 MW solar‑powered hydrogen plants to be installed by 2025‑26.',
      ],
    },
    {
      title: 'Solar Power project of 300 MW – Washim‑I (130 MW), Kachrala (145 MW), Yavatmal (25 MW)',
      bullets: [
        'Final land possession orders received for Washim & Yavatmal districts.',
        'Kachrala 145 MW land JMR work in progress.',
      ],
    },
    {
      title: 'Solar Power Project on Rahuri Agricultural University Land – 102 MW',
      bullets: [
        'MoU signed 14.06.2023 for 102 MW on 400 acres at MPKV Rahuri.',
      ],
    },
    {
      title: 'MEDA Hybrid Chalkewadi – 26 MW',
      bullets: [
        '26 MW solar + wind hybrid plant planned at Chalkewadi, Satara.',
      ],
    },
    {
      title: 'Floating Solar (Ph‑I) Erai Dam – 105 MW',
      bullets: [
        'Consent for power purchase pending; options: re‑tender or JV with SJVNL for RE bundling.',
      ],
    },
  ];

  const underConsideration = [
    {
      title: 'RE Projects under consideration:',
      bullets: [
        'Battery Energy Storage System (BESS): 100 MW – techno‑commercial feasibility underway.',
        'Green Hydrogen blending with natural gas: 100 MW – feasibility at GTPS Uran.',
        'Solar Plants on Govt. Lands (MIDC, WRD etc.): 265 MW planned.',
      ],
    },
  ];

  return (
    <div className="relative">
      {/* 1) Navbar */}
      <Navbar />

      {/* 2) Banner + Title */}
      <div className="relative h-[350px]">
        <img
          src={projectsBanner}
          alt="Solar Projects Banner"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <h1 className="absolute text-4xl font-bold text-white bottom-4 left-8 drop-shadow-lg">
          Solar Projects
        </h1>
      </div>

      {/* 3) Sidebar + Content */}
      <section className="flex mt-[10px] px-8 pb-20 gap-8">
        {/* Sidebar */}
        <aside className="sticky top-[calc(350px+10px)] self-start w-60">
          <SideLinks title="Projects" links={projectLinks} />
        </aside>

        {/* Main */}
        <main className="flex-1 space-y-6">
          {/* Tab Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('ongoing')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'ongoing'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-black'
              }`}
            >
              Ongoing Projects
            </button>
            <button
              onClick={() => setActiveTab('proposed')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'proposed'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-black'
              }`}
            >
              Proposed Projects
            </button>
          </div>

          {/* Ongoing Projects */}
          {activeTab === 'ongoing' && (
            <div className="space-y-6">
              {ongoing.map((proj, i) => (
                <div
                  key={i}
                  className="p-6 space-y-3 bg-gray-100 rounded-lg"
                >
                  <strong className="block">
                    {i + 1}. {proj.title}
                  </strong>
                  {proj.bullets.map((b, j) => (
                    <p key={j} className="flex items-start gap-2 text-sm">
                      <span>✔</span>
                      <span>{b}</span>
                    </p>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Proposed Projects */}
          {activeTab === 'proposed' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Proposed RE Projects :</h3>

              {/* A–G */}
              {proposed.map((proj, idx) => (
                <div
                  key={idx}
                  className="p-6 space-y-3 bg-gray-100 rounded-lg"
                >
                  <strong className="block">
                    {String.fromCharCode(65 + idx)}. {proj.title}
                  </strong>
                  {proj.bullets.map((b, j) => (
                    <p key={j} className="flex items-start gap-2 text-sm">
                      <span>✔</span>
                      <span>{b}</span>
                    </p>
                  ))}
                </div>
              ))}

              {/* Under consideration */}
              {underConsideration.map((sec, k) => (
                <div
                  key={k}
                  className="p-6 space-y-3 bg-gray-100 rounded-lg"
                >
                  <strong className="block">{sec.title}</strong>
                  {sec.bullets.map((b, j) => (
                    <p key={j} className="flex items-start gap-2 text-sm">
                      <span>✔</span>
                      <span>{b}</span>
                    </p>
                  ))}
                </div>
              ))}
            </div>
          )}
        </main>
      </section>

      {/* 4) Footer */}
      <Footer />
    </div>
  );
}
