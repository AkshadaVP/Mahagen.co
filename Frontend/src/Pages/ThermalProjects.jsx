import React, { useState } from 'react';
import Navbar from '../components/Navbar';
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
      'LoA issued for installation of FGD at Chandrapur 2 x 210 MW Unit 3 & 4 and Khaperkheda 2X210 MW Unit 1 and 2, Paras 2 x 250 MW Unit 3 & 4 and Parli 3 x 250 MW Unit 6,7 & 8. Work is under progress.',
      'Mahagenco’s has proposed to float separate new tenders for installation of WET FGD System at Khaperkheda 500 MW Unit 5, Chandrapur 5x500 MW Unit 5, 6, 7, 8 & 9, Bhusawal 2x500 MW Unit 4 & 5. Accordingly, tenders will be floated shortly.',
      'LoA issued for installation of FGD at 3x660 MW Koradi Unit 8,9 & 10.',
      'LoA for ESP upgradation at Khaperkheda 2x210 MW Unit 1 and 2 and Chandrapur 2x500 MW Unit 5 and 6 is issued and work is in progress.'
    ]
  }
];

const proposedProjectsData = [
  {
    title: 'Thermal Power Project',
    details: [
      'Chandrapur Thermal Power Project (800 MW): Mahagenco is exploring the possibility of installation of 1x800 MW unit at Chandrapur TPS. Consultant appointed for techno-economic study & DPR preparation for exploring possibility of installation of 1 X 800 MW unit at Chandrapur STPS premises. Techno-economic feasibility is completed. DPR preparation is in progress.',
      'Paras Thermal Power Project (800 MW): Mahagenco is exploring the possibility of installation of 1x800 MW unit at Paras TPS. Consultant appointed for carrying out Techno-economic feasibility study for 1X800 MW unit at Paras TPS. Activities of TEFR are in progress.',
      'Bhusawal Thermal Power Project (800 MW): Mahagenco has planned to explore the possibility of installation of 1x800 MW unit at Bhusawal TPS. Tendering process for appointing consultant for carrying out Techno-economic feasibility study is in progress.'
    ]
  },
  {
    title: "Mahagenco's Pumped Storage Projects",
    details: [
      'In accordance to the policy for development of PSP by Government of Maharashtra vide G.R. dtd 20.12.2023, Mahagenco has proposed to develop PSP projects having comprehensive capacity of 3225 MW in the State of Maharashtra. These PSP projects are proposed to be implemented in joint partnership with Maharashtra Krishna Valley Development Corporation (MKVDC), Water Resources Department, GoM and M/s. S.J.V.N. Ltd.'
    ]
  }
];

const ThermalProjects = () => {
  const [activeToggle, setActiveToggle] = useState('ongoing');

  const handleToggleChange = (toggle) => {
    setActiveToggle(toggle);
  };

  return (
    <>
      <div>
        <Navbar />
        <img
          src={projectsBanner}
          alt="Projects Banner"
          className="absolute top-0 left-0 w-full h-[450px] object-cover z-[-1]"
        />
        <p className="mt-20 text-4xl font-bold text-white shadow-lg ml-50 font-poppins font-inter-tight">
          Projects
        </p>
      </div>

      <div className="flex justify-center pt-10 pl-30 pr-30">
        {/* Left Side */}
        <div id="left-side bg-[#181B31]">
          <div id="projects-sidelink" className="flex flex-col p-5 mt-10 bg-white shadow-xl h-50 w-60">
            <span className="mb-4 text-lg font-bold">Projects</span>
            <ul className="flex flex-col justify-between gap-4 text-sm font-semibold">
              <span className="flex justify-between text-[#181B31]">
                <li>Projects Thermal / (PSP)</li>
                <img src={arrow} alt="" className="h-6" />
              </span>
              <span className="flex justify-between">
                <li>Projects Solar</li>
                <img src={arrow} alt="" className="h-6" />
              </span>
              <span className="flex justify-between">
                <li>Project GP-II Coal Mine</li>
                <img src={arrow} alt="" className="h-6" />
              </span>
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div id="right-side" className="pl-10 mt-10">
          <p className="text-2xl font-bold text-left text-black">Mahagenco Thermal Projects</p>

          <div className="flex mt-6 space-x-4">
            <button
              className={`${activeToggle === 'ongoing' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} py-2 px-4 rounded-md`}
              onClick={() => handleToggleChange('ongoing')}
            >
              Ongoing Projects
            </button>
            <button
              className={`${activeToggle === 'proposed' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} py-2 px-4 rounded-md`}
              onClick={() => handleToggleChange('proposed')}
            >
              Proposed Projects
            </button>
            <button
              className={`${activeToggle === 'rm_scheme' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} py-2 px-4 rounded-md`}
              onClick={() => handleToggleChange('rm_scheme')}
            >
              R&M Scheme
            </button>
          </div>

          <div className="mt-6">
            {/* Ongoing Projects */}
            {activeToggle === 'ongoing' &&
              ongoingProjectsData.map((project, index) => (
                <div key={index} className="flex flex-col justify-between w-3/4 gap-3 p-10 mt-6 text-sm bg-gray-100 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span>
                      <strong>{index + 1}. {project.title}:</strong>
                    </span>
                  </div>
                  {project.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-2">
                      <span className="text-black">✔</span>
                      <span>{detail}</span>
                      <hr className="my-2 border-t border-gray-300" />
                    </div>
                  ))}
                </div>
              ))}

            {/* Proposed Projects */}
            {activeToggle === 'proposed' &&
              proposedProjectsData.map((project, index) => (
                <div key={index} className="flex flex-col justify-between w-3/4 gap-3 p-10 mt-6 text-sm bg-gray-100 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span>
                      <strong>{project.title}:</strong>
                    </span>
                  </div>
                  {project.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-2">
                      <span className="text-black">✔</span>
                      <span>{detail}</span>
                      <hr className="my-2 border-t border-gray-300" />
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ThermalProjects;
