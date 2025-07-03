// src/pages/ThermalProjects.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import projectsBanner from '../assets/projects.jpg';
import arrow from '../assets/arrowright.png';

const ongoingProjectsData = [
  {
    title: 'Bhusawal Thermal Power Station Unit 6 (1 x 660 MW)',
    details: [
      'The project has been approved by Government of Maharashtra (GoM) on 05.10.2010.',
      'Letter of Award (LoA) had been issued to M/s BHEL on dt. 17.01.2018.',
      'After getting MERC permission and making technological changes to meet the new Environment standards i.e with Flue Gas Desulphurization (FGD) & Selective Catalytic Reduction (SCR), final LOA is issued on 31.12.2018.',
      'Coal firing and synchronization of the unit was carried out on 02.01.2025. Unit was run on full load on 20.01.2025. Trial operation of the unit completed in the month of February 2025.',
      'Declaration of Commercial Operation (CoD) of the project is declared on 21.02.2025.'
    ]
  },
  {
    title: 'Koradi Thermal Power Project (2x660 MW)',
    details: [
      'MSPGCL has taken up implementation of 2x660 MW coal based super-critical power project, on available land in the premises of Koradi TPS.',
      'MERC also has accorded in-principle approval to the proposal.',
      'Environmental Clearance received on 19.09.2024.',
      'GoM vide GR dtd. 01.12.2023 has accorded approval for implementation of project.',
      'Letter of Award (LoAs) for Boiler Turbine Generator (BTG) are placed on 07.02.2025.',
      'Tendering of Balance of Plant (BoP) package is in process.',
      'Expected completion of project is in FY 2029-30.'
    ]
  },
  {
    title: 'Pipe Conveyor Scheme - Koradi & Khaparkheda TPS',
    details: [
      'MSPGCL has undertaken the pipe conveyor scheme for coal transportation from Gondegaon, Bhanegaon & Singori coal mines to Khaparkheda & Koradi TPS. Length of the pipe conveyor is about 16 KM.',
      'Coal pipe conveyor system from Bhanegaon & Singhori mines to Khaperkheda is completed and coal transportation is in progress from February 2023 & August 2023 respectively.',
      'Coal pipe conveyor system up to Koradi TPS is commissioned in the month of November-2023.',
      'Erection work of the coal pipe conveyor system from Gondegaon mines to Bhanegaon Intermediate Point (IP) bunker is in progress. Its expected completion is by April 2025.'
    ]
  },
  {
    title: 'Pollution Control Equipment Installation Projects',
    details: [
      'As per the notification of Ministry of Environment, Forest and Climate Change (MOEF&CC), Government of India dated 07.12.2015, Mahagenco has taken up the work of installation of Pollution Control Equipment viz. installation of Flue Gas Desulphurization (FGD) equipment and Electrostatic Precipitator Upgradation at various Coal Based Units.',
      'Installation of FGD at Khaperkheda 2 x 210 MW Unit 3 and 4 is completed & put into operation from 01.10.2024.',
      'Installation of FGD at Koradi 210 MW Unit 6 is completed & Unit handed over to O&M on 31.12.2024.',
      'LoA issued for installation of FGD at Chandrapur 2 x 210 MW Unit 3 & 4 and Khaparkheda 2X210 MW Unit 1 and 2, Paras 2 x 250 MW Unit 3 & 4 and Parli 3 x 250 MW Unit 6,7 & 8. Work is under progress.',
      'Mahagenco’s has proposed to float separate new tenders for installation of WET FGD System at Khaperkheda 500 MW Unit 5, Chandrapur 5x500 MW Unit 5, 6, 7, 8 & 9, Bhusawal 2x500 MW Unit 4 & 5. Accordingly, tenders will be floated shortly.',
      'LoA issued for installation of FGD at 3x660 MW Koradi Unit 8,9 & 10.',
      'LoA for ESP upgradation at Khaperkheda 2x210 MW Unit 1 and 2 and Chandrapur 2x500 MW Unit 5 and 6 is issued and work is in progress.'
    ]
  }
];

const ThermalProjects = () => {
  const [activeToggle, setActiveToggle] = useState('ongoing');

  return (
    <>
      <Navbar />
      <img
        src={projectsBanner}
        alt="Projects Banner"
        className="absolute top-0 left-0 w-full h-[450px] object-cover z-[-1]"
      />
      <p className="absolute mt-20 text-4xl font-bold text-white shadow-lg ml-50 font-poppins font-inter-tight">
        Projects
      </p>

      <div className="flex justify-center pt-10 translate-y-40 mt-70 pl-30 pr-30">
        {/* Left Sidebar */}
        <div id="left-side bg-[#181B31]">
          <div
            id="projects-sidelink"
            className="sticky flex flex-col p-5 mt-10 bg-white shadow-xl top-24 h-50 w-60"
          >
            <span className="mb-4 text-lg font-bold">Projects</span>
            <ul className="flex flex-col justify-between gap-4 text-sm font-semibold">
              <li className="flex justify-between text-[#181B31]">
                Projects Thermal / (PSP) <img src={arrow} alt="" className="h-6"/>
              </li>
              <li className="flex justify-between">
                Projects Solar <img src={arrow} alt="" className="h-6"/>
              </li>
              <li className="flex justify-between">
                Project GP-II Coal Mine <img src={arrow} alt="" className="h-6"/>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Content */}
        <div id="right-side" className="w-3/4 pl-10 mt-10">
          <h2 className="text-2xl font-bold text-black">
            Mahagenco Thermal Projects
          </h2>

          <div className="flex mt-6 space-x-4">
            <button
              onClick={() => setActiveToggle('ongoing')}
              className={`py-2 px-4 rounded-md ${
                activeToggle === 'ongoing'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-black'
              }`}
            >
              Ongoing Projects
            </button>
            <button
              onClick={() => setActiveToggle('proposed')}
              className={`py-2 px-4 rounded-md ${
                activeToggle === 'proposed'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-black'
              }`}
            >
              Proposed Projects
            </button>
            <button
              onClick={() => setActiveToggle('rm_scheme')}
              className={`py-2 px-4 rounded-md ${
                activeToggle === 'rm_scheme'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-black'
              }`}
            >
              R&M Scheme
            </button>
          </div>

          <div className="mt-6 space-y-6">
            {/* Ongoing */}
            {activeToggle === 'ongoing' &&
              ongoingProjectsData.map((p, i) => (
                <div
                  key={i}
                  className="p-6 space-y-3 text-sm bg-gray-100 rounded-lg"
                >
                  <strong>
                    {i + 1}. {p.title}
                  </strong>
                  {p.details.map((d, j) => (
                    <p key={j} className="flex items-start gap-2">
                      <span>✔</span>
                      <span>{d}</span>
                    </p>
                  ))}
                </div>
              ))}

            {/* Proposed */}
            {activeToggle === 'proposed' && (
              <div className="px-8 py-10 mb-40 bg-white rounded-lg shadow">
                <h3 className="mb-4 text-xl font-semibold">
                  Mahagenco’s Proposed projects:
                </h3>
                <p className="mb-6 font-medium">
                  Mahagenco’s projects under consideration:
                </p>

                {/* A. Thermal Power Project */}
                <div className="mb-8">
                  <h4 className="font-semibold">A. Thermal Power Project:</h4>

                  <h5 className="mt-4 font-medium">
                    Chandrapur Thermal Power Project (800 MW):
                  </h5>
                  <ul className="mt-2 ml-4 space-y-1 text-sm text-gray-800 list-disc list-inside">
                    <li>
                      Mahagenco is exploring the possibility of installation of
                      1×800 MW unit at Chandrapur TPS.
                    </li>
                    <li>
                      Consultant appointed for techno-economic study &amp; DPR
                      preparation for exploring possibility of installation of
                      1×800 MW unit at Chandrapur STPS premises.
                      Techno-economic feasibility is completed.
                    </li>
                    <li>DPR preparation is in progress.</li>
                  </ul>

                  <h5 className="mt-4 font-medium">
                    Paras Thermal Power Project (800 MW):
                  </h5>
                  <ul className="mt-2 ml-4 space-y-1 text-sm text-gray-800 list-disc list-inside">
                    <li>
                      Mahagenco is exploring the possibility of installation of
                      1×800 MW unit at Paras TPS.
                    </li>
                    <li>
                      Consultant appointed for carrying out techno-economic
                      feasibility study for 1×800 MW unit at Paras TPS.
                    </li>
                    <li>Activities of TEFR are in progress.</li>
                  </ul>

                  <h5 className="mt-4 font-medium">
                    Bhusawal Thermal Power Project (800 MW):
                  </h5>
                  <ul className="mt-2 ml-4 space-y-1 text-sm text-gray-800 list-disc list-inside">
                    <li>
                      Mahagenco has planned to explore the possibility of
                      installation of 1×800 MW unit at Bhusawal TPS.
                    </li>
                    <li>
                      Tendering process for appointing consultant for carrying
                      out techno-economic feasibility study is in progress.
                    </li>
                  </ul>
                </div>

                {/* B. Pumped Storage Projects */}
                <div>
                  <h4 className="font-semibold">
                    B. Mahagenco’s Pumped Storage Projects:
                  </h4>
                  <p className="mt-2 mb-4 text-sm text-gray-800">
                    In accordance to the policy for development of PSP by
                    Government of Maharashtra vide G.R. dtd 20.12.2023, Mahagenco
                    has proposed to develop PSP projects having comprehensive
                    capacity of 3225 MW in the State of Maharashtra. These PSP
                    projects are proposed to be implemented in joint partnership
                    with Maharashtra Krishna Valley Development Corporation
                    (MKVDC), Water Resources Department, GoM and M/s. S.J.V.N. Ltd.
                    Details of these projects are as under:
                  </p>

                  <div className="overflow-x-auto">
                  <table className="min-w-full text-sm border-collapse table-auto">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 text-left border">Sr.No.</th>
        <th className="px-4 py-2 text-left border">PSP Site</th>
        <th className="px-4 py-2 text-left border">Capacity (MW)</th>
        <th className="px-4 py-2 text-left border">Total Capacity (MW)</th>
        <th className="px-4 py-2 text-left border">Proposed JV</th>
        <th className="px-4 py-2 text-left border">Present Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-4 py-2 border">1</td>
        <td className="px-4 py-2 border">Koyna Dam Foot Left Bank</td>
        <td className="px-4 py-2 border">2 × 40</td>
        <td className="px-4 py-2 border">80</td>
        <td className="px-4 py-2 border">MKVDC, WRD &amp; MSPGCL</td>
        <td className="px-4 py-2 border">
          MoU is signed between Mahagenco and MKVDC, WRD, GoM on 12.08.2024. Activities related to formation of JV Company are in progress. This project is partially completed by WRD and after JV formation the remaining implementation work will be carried out.
        </td>
      </tr>
      <tr>
        <td className="px-4 py-2 border">2</td>
        <td className="px-4 py-2 border">Ghatghar St‑II</td>
        <td className="px-4 py-2 border">1 × 125</td>
        <td className="px-4 py-2 border">125</td>
        <td rowSpan={4} className="px-4 py-2 border">
          SJVN &amp; MSPGCL
        </td>
        <td rowSpan={4} className="px-4 py-2 border">
          MoU is signed with M/s SJVN &amp; activities related to signing of MoU with WRD, GoM &amp; JV formation with SJVN are in progress. Consultancy agency has been appointed. Appointment of consultant for Kodali PSP, Varasgaon PSP &amp; Panshet PSP is in progress.
        </td>
      </tr>
      <tr>
        <td className="px-4 py-2 border">3</td>
        <td className="px-4 py-2 border">Kodali</td>
        <td className="px-4 py-2 border">2 × 110</td>
        <td className="px-4 py-2 border">220</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border">4</td>
        <td className="px-4 py-2 border">Varasgaon</td>
        <td className="px-4 py-2 border">4 × 300</td>
        <td className="px-4 py-2 border">1200</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border">5</td>
        <td className="px-4 py-2 border">Panshet</td>
        <td className="px-4 py-2 border">4 × 400</td>
        <td className="px-4 py-2 border">1600</td>
      </tr>
      <tr className="font-semibold bg-gray-50">
        <td colSpan={3} className="px-4 py-2 border">Total</td>
        <td className="px-4 py-2 border">3225</td>
        <td className="px-4 py-2 border"></td>
        <td className="px-4 py-2 border"></td>
      </tr>
    </tbody>
  </table>  
                  </div>  
                </div>  
              </div>  
            )}  

            {/* R&M Scheme */}
            {activeToggle === 'rm_scheme' && (
              <div className="px-8 py-10 mb-40 bg-white rounded-lg shadow">
                <h3 className="mb-4 text-xl font-semibold text-blue-700">
                  A. Proposed R&amp;M Project:
                </h3>
                <p className="mb-6 text-gray-800">
                  As per CEA guidelines, Mahagenco has decided implementation of
                  R&amp;M/LE of old Units of Mahagenco i.e. 17 Units (4600 MW) in
                  a phased manner. Out of this, presently, Mahagenco has proposed
                  implementation of R&amp;M/LE work of six nos. of old thermal Units
                  mentioned in Phase I &amp; II as below:
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse table-auto">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="px-4 py-2 text-left border">SR.NO.</th>
                        <th className="px-4 py-2 text-left border">
                          Phase &amp; Timeline
                        </th>
                        <th className="px-4 py-2 text-left border">Name of TPS</th>
                        <th className="px-4 py-2 text-left border">Unit</th>
                        <th className="px-4 py-2 text-left border">
                          Capacity (MW)
                        </th>
                        <th className="px-4 py-2 text-left border">Total (MW)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowSpan={4} className="px-4 py-2 align-top border">
                          1
                        </td>
                        <td rowSpan={4} className="px-4 py-2 align-top border">
                          Phase – I<br />
                          (01.12.2024 to 30.06.2026)
                        </td>
                        <td className="px-4 py-2 border">Chandrapur</td>
                        <td className="px-4 py-2 border">3</td>
                        <td className="px-4 py-2 border">210</td>
                        <td rowSpan={4} className="px-4 py-2 align-top border">
                          1050
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Nashik</td>
                        <td className="px-4 py-2 border">3 &amp; 4</td>
                        <td className="px-4 py-2 border">2×210</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Nashik</td>
                        <td className="px-4 py-2 border">5</td>
                        <td className="px-4 py-2 border">210</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Bhusawal</td>
                        <td className="px-4 py-2 border">3</td>
                        <td className="px-4 py-2 border">210</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">2</td>
                        <td className="px-4 py-2 border">
                          Phase – II<br />
                          (01.06.2026 to 30.12.2028)
                        </td>
                        <td className="px-4 py-2 border">Chandrapur</td>
                        <td className="px-4 py-2 border">4</td>
                        <td className="px-4 py-2 border">210</td>
                        <td className="px-4 py-2 border">210</td>
                      </tr>
                      <tr className="font-semibold bg-gray-50">
                        <td className="px-4 py-2 border" colSpan={2}>
                          Total
                        </td>
                        <td className="px-4 py-2 border">6 units</td>
                        <td className="px-4 py-2 border"></td>
                        <td className="px-4 py-2 border">1260</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 text-gray-700">
                  Condition Assessment of above 6 × 210 MW Units is completed
                  and approval of final DPR is in process.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ThermalProjects;
