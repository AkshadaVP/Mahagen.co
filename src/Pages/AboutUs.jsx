import React, { useState } from 'react';
import { ChevronDown, ArrowUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import aboutBanner from '../assets/about.jpg';
import Footer from '../components/Footer';
import SideLinks from '../components/SideLinks';

export default function AboutUs() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      <div className="relative">
        {/* Navbar is in front */}
        <Navbar />

        {/* Banner image positioned behind the Navbar */}
        <img
          src={aboutBanner}
          alt="About Us Banner"
          className="absolute top-0 left-0 w-full h-[350px] object-cover z-[-1]" // Adjust the height of the banner
        />
        <div className='translate-y-20 translate-x-30'>
        <span className='text-4xl font-bold text-white '>About Us</span>
        </div>
        {/* Main content starts after the banner image */}
        <div className="pt-[150px] ml-40"> {/* Padding-top ensures content starts after the image */}
          <div className="flex">
            {/* Left Section - Fixed Sidebar */}
            {/* Left Section - Fixed Sidebar */}
<SideLinks/>

{/* Right Section - Scrollable Content */}
<div className="w-2/4 h-screen p-8 overflow-auto ml-1/4">
  {/* Your content here */}
</div>


            {/* Right Section - Scrollable Content */}
            <div className="w-3/4 p-8 overflow-auto">
              <h1 className="mb-8 text-4xl font-semibold text-left">A Power Generating Utility</h1>
              <p className="mb-6 text-lg">
                <strong>MAHAGENCO</strong> has the highest overall generation capacity and the highest Thermal installed capacity amongst all the State Power Generation utilities in India. In terms of installed capacity, it is the second highest State owned Generation Company after NTPC. It was established by the government of Maharashtra under the central electricity act-2003 with the principal objective of engaging in the business of generation of electricity, & <strong>MAHAGENCO</strong> produces the cheapest power for consumers in the state.
              </p>
              <p>
                MAHAGENCO has an installed capacity of 13880.55 MW. This comprises of Thermal (nearly 73.5%, i.e. 10200 MW) and a gas-based generating station at Uran, having an installed capacity of 672 MW. The Hydro Electric Projects in the State of Maharashtra were designed, erected, and commissioned through the Water Resource Department (WRD) of GoM. After commissioning, the hydro projects were handed over on a long-term lease to Mahagenco for Operation and Maintenance. Presently there are 25 hydel projects, having a capacity of 2580.2 MW.
              </p>
              <p>
                MAHAGENCO is aware of the next green power scenario of power generation from non-conventional energy resources and has a clear vision for Green Power for the consumers of Maharashtra. Accordingly, to fulfill Renewable Power obligation of distribution companies in Maharashtra, MAHAGENCO has commissioned 428.35 MWp Solar Power Projects till date.
              </p>
              <p>
                MAHAGENCO is committed to expanding the generation capacity to meet the ever-growing power supply need of Maharashtra. The company is implementing a huge capacity addition programme.
                <br /><br />
                MAHAGENCO generates power for more than 1,50,00,000 end consumers in Maharashtra at economical and affordable rates.
                <br /><br />
                MAHAGENCO believes in quality management. All major thermal, hydel, and gas turbine power stations have adopted the ISO 9001:2000 certification.
                <br /><br />
                MAHAGENCO is an eco-friendly power generating company and has received certification under ISO:14001 and ISO:18001 for its major power stations at Chandrapur, Koradi, Khaperkheda, Nasik, Paras, Parli, and at Koyna and Uran power stations also.
                <br /><br />
                MAHAGENCO has a gross fixed asset base of Rs. 47843.81 Cr. as on 31.03.2023 with an Annual turnover of Rs. 33,323.06 Cr. for FY 2022-23.
                <br /><br />
                MAHAGENCO is powered by a dedicated and committed highly skilled workforce of more than 14000.
              </p>

              {/* INSTALLED CAPACITY OF MAHAGENCO */}
              <div className="mt-5 space-y-8 shadow-2xs">
                <div className="space-y-4">
                  <h2 className="flex items-center justify-between text-xl font-bold" onClick={() => toggleSection('thermal')}>
                    <span className=''>INSTALLED CAPACITY OF MAHAGENCO: (As on 01-03-2025)</span>
                    <ChevronDown className={`w-5 h-5 transform transition-all ${expandedSections['thermal'] ? 'rotate-180' : ''}`} />
                  </h2>
                  {expandedSections['thermal'] && (
                    <table className="min-w-full text-left border-collapse table-auto">
  <thead>
    <tr className="text-white bg-black">
      <th className="px-4 py-2 border-b">SR.NO.</th>
      <th className="px-4 py-2 border-b">Power Station</th>
      <th className="px-4 py-2 border-b">Units & Capacity (MW)</th>
      <th className="px-4 py-2 border-b">Installed Capacity (MW)</th>
    </tr>
  </thead>

  {/* Thermal Power Stations */}
  <thead className="bg-blue-300">
    <tr>
      <td colSpan="4" className="px-4 py-2 font-bold">A. THERMAL POWER STATIONS</td>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-gray-100">
      <td className="px-4 py-2">1</td>
      <td className="px-4 py-2">Koradi</td>
      <td className="px-4 py-2">1×210 + 3×660</td>
      <td className="px-4 py-2">2190</td>
    </tr>
    <tr className="bg-gray-200">
      <td className="px-4 py-2">2</td>
      <td className="px-4 py-2">Nashik</td>
      <td className="px-4 py-2">3×210</td>
      <td className="px-4 py-2">630</td>
    </tr>
    <tr className="bg-gray-100">
      <td className="px-4 py-2">3</td>
      <td className="px-4 py-2">Bhusawal</td>
      <td className="px-4 py-2">1×210 + 2×500 + 1×660</td>
      <td className="px-4 py-2">1870</td>
    </tr>
    <tr className="bg-gray-200">
      <td className="px-4 py-2">4</td>
      <td className="px-4 py-2">Paras</td>
      <td className="px-4 py-2">2×250</td>
      <td className="px-4 py-2">500</td>
    </tr>
    <tr className="bg-gray-100">
      <td className="px-4 py-2">5</td>
      <td className="px-4 py-2">Parli</td>
      <td className="px-4 py-2">3×250</td>
      <td className="px-4 py-2">750</td>
    </tr>
    <tr className="bg-gray-200">
      <td className="px-4 py-2">6</td>
      <td className="px-4 py-2">Khaperkheda</td>
      <td className="px-4 py-2">4×210 + 1×500</td>
      <td className="px-4 py-2">1340</td>
    </tr>
    <tr className="bg-gray-100">
      <td className="px-4 py-2">7</td>
      <td className="px-4 py-2">Chandrapur</td>
      <td className="px-4 py-2">2×210 + 5×500</td>
      <td className="px-4 py-2">2920</td>
    </tr>
    <tr className="bg-gray-200">
      <td className="px-4 py-2 font-bold" colSpan="3">MAHAGENCO THERMAL</td>
      <td className="px-4 py-2 font-bold">10200</td>
    </tr>
  </tbody>

  {/* Gas Turbine Power Station */}
  <thead className="bg-blue-300">
    <tr>
      <td colSpan="4" className="px-4 py-2 font-bold">B. GAS TURBINE POWER STATION</td>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-gray-100">
      <td className="w-1/4 px-3 py-2" colSpan="3">URAN G.T.</td>
      <td className="w-1/4 px-3 py-2">4×108</td>
      <td className="w-1/4 px-3 py-2">432</td>
    </tr>
    <tr className="bg-gray-100">
      <td className="w-1/4 px-3 py-2" colSpan="3">W.H.R.</td>
      <td className="w-1/4 px-3 py-2">2×120</td>
      <td className="w-1/4 px-3 py-2">240</td>
    </tr>
    <tr className="bg-gray-100">
      <td className="w-1/4 px-3 py-2 font-bold" colSpan="3">MAHAGENCO GAS</td>
      <td className="w-1/4 px-3 py-2 font-bold">672</td>
    </tr>
  </tbody>

  {/* Hydro Power Stations */}
  <thead className="bg-blue-300">
    <tr>
      <td colSpan="4" className="px-4 py-2 font-bold">C. HYDRO POWER STATIONS</td>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-gray-100">
      <td className="px-4 py-2">KOYNA HYDRO</td>
      <td className="px-4 py-2">St I & II- 4×70 + 4×80, St III- 4×80, St. IV-4×250 & Koyna Dam foot- 2×18</td>
      <td className="px-4 py-2">1956</td>
    </tr>
    <tr className="bg-gray-200">
      <td className="px-4 py-2">OTHER HYDRO</td>
      <td className="px-4 py-2"></td>
      <td className="px-4 py-2">374.2</td>
    </tr>
    <tr className="bg-gray-100">
      <td className="px-4 py-2">GHATGHAR PUMP STORAGE</td>
      <td className="px-4 py-2">2×125</td>
      <td className="px-4 py-2">250</td>
    </tr>
    <tr className="bg-gray-200">
      <td className="px-4 py-2 font-bold" colSpan="2">MAHAGENCO HYDRO</td>
      <td className="px-4 py-2 font-bold">2580.2</td>
    </tr>
  </tbody>

  {/* Solar Power Stations */}
  <thead className="bg-blue-300">
    <tr>
      <td colSpan="4" className="px-4 py-2 font-bold">D. SOLAR POWER STATIONS</td>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-gray-100">
      <td className="px-4 py-2">SOLAR</td>
      <td className="px-4 py-2">Chandrapur [1*1]+[2*2] Shivajinagar,Sakri[5 * 25 + 2x25] Shirsufal,Baramati [36.33 + 14] Kaudgoan [2 * 25 MW]</td>
      <td className="px-4 py-2">280.33</td>
    </tr>
    <tr className="bg-gray-200">
      <td className="px-4 py-2">Solar Projects [CMAGF Scheme]</td>
      <td className="px-4 py-2">Ralegan Siddhi [1 * 2] Kolambi Manjarda[1*2] Gavhankund [CMAG] [1*16]</td>
      <td className="px-4 py-2">148.02</td>
    </tr>
    <tr className="bg-gray-100">
      <td className="px-4 py-2 font-bold" colSpan="2">Installed capacity of solar projects will be -</td>
      <td className="px-4 py-2 font-bold">428.35</td>
    </tr>
  </tbody>
</table>


                  )}
                </div>

                {/* INSTALLED HYDRO CAPACITY */}
                <div className="space-y-4">
                  <h2 className="flex items-center justify-between text-xl font-bold" onClick={() => toggleSection('hydro')}>
                    <span>INSTALLED HYDRO CAPACITY OF MAHAGENCO: (As on 01-03-2025)</span>
                    <ChevronDown className={`w-5 h-5 transform transition-all ${expandedSections['hydro'] ? 'rotate-180' : ''}`} />
                  </h2>
                  {expandedSections['hydro'] && (
                    <table className="min-w-full text-left table-auto">
                    <thead className="text-white bg-black">
                      <tr>
                        <th className="px-4 py-2 border-b">SR.NO.</th>
                        <th className="px-4 py-2 border-b">Power Station</th>
                        <th className="px-4 py-2 border-b">Units & Capacity (MW)</th>
                        <th className="px-4 py-2 border-b">Installed Capacity (MW)</th>
                      </tr>
                    </thead>
                  
                    <tbody>
                      {/* Section C: Hydro Power Stations */}
                      <tr className="text-white bg-blue-600">
                        <td className="px-4 py-2" colSpan="4">C - HYDRO POWER STATIONS</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">1</td>
                        <td className="px-4 py-2">Koyna ST. I & II</td>
                        <td className="px-4 py-2">4 x 70 + 4 x 80</td>
                        <td className="px-4 py-2">600</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">2</td>
                        <td className="px-4 py-2">Koyna ST. III</td>
                        <td className="px-4 py-2">4 x 80</td>
                        <td className="px-4 py-2">320</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">3</td>
                        <td className="px-4 py-2">Koyna ST. IV</td>
                        <td className="px-4 py-2">4 x 250</td>
                        <td className="px-4 py-2">1000</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">4</td>
                        <td className="px-4 py-2">KDPH</td>
                        <td className="px-4 py-2">2 x 18</td>
                        <td className="px-4 py-2">36</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">5</td>
                        <td className="px-4 py-2">Ghathgar</td>
                        <td className="px-4 py-2">2 x 125</td>
                        <td className="px-4 py-2">250</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">6</td>
                        <td className="px-4 py-2">Vaitarna</td>
                        <td className="px-4 py-2">1 x 60</td>
                        <td className="px-4 py-2">60</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">7</td>
                        <td className="px-4 py-2">Vaitarna D. T.</td>
                        <td className="px-4 py-2">1 x 1.5</td>
                        <td className="px-4 py-2">1.5</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">8</td>
                        <td className="px-4 py-2">Bhatgar</td>
                        <td className="px-4 py-2">1 x 16</td>
                        <td className="px-4 py-2">16</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">9</td>
                        <td className="px-4 py-2">Tillari</td>
                        <td className="px-4 py-2">1 x 66</td>
                        <td className="px-4 py-2">66</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">Bhira T.R.</td>
                        <td className="px-4 py-2">2 x 40</td>
                        <td className="px-4 py-2">80</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">11</td>
                        <td className="px-4 py-2">Yeldari</td>
                        <td className="px-4 py-2">3 x 7.5</td>
                        <td className="px-4 py-2">22.5</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">12</td>
                        <td className="px-4 py-2">Paithan</td>
                        <td className="px-4 py-2">1 x 12</td>
                        <td className="px-4 py-2">12</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">13</td>
                        <td className="px-4 py-2">Pawna</td>
                        <td className="px-4 py-2">1 x 10</td>
                        <td className="px-4 py-2">10</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">14</td>
                        <td className="px-4 py-2">Panshet</td>
                        <td className="px-4 py-2">1 x 8</td>
                        <td className="px-4 py-2">8</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">15</td>
                        <td className="px-4 py-2">Kanher</td>
                        <td className="px-4 py-2">1 x 4</td>
                        <td className="px-4 py-2">4</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">16</td>
                        <td className="px-4 py-2">Varasgaon</td>
                        <td className="px-4 py-2">1 x 8</td>
                        <td className="px-4 py-2">8</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">17</td>
                        <td className="px-4 py-2">Bhatsa</td>
                        <td className="px-4 py-2">1 x 15</td>
                        <td className="px-4 py-2">15</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">18</td>
                        <td className="px-4 py-2">Dhom</td>
                        <td className="px-4 py-2">2 x 1</td>
                        <td className="px-4 py-2">2</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">19</td>
                        <td className="px-4 py-2">Ujani</td>
                        <td className="px-4 py-2">1 x 12</td>
                        <td className="px-4 py-2">12</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">20</td>
                        <td className="px-4 py-2">Manikdoh</td>
                        <td className="px-4 py-2">1 x 6</td>
                        <td className="px-4 py-2">6</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">21</td>
                        <td className="px-4 py-2">Dimbhe</td>
                        <td className="px-4 py-2">1 x 5</td>
                        <td className="px-4 py-2">5</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">22</td>
                        <td className="px-4 py-2">Surya</td>
                        <td className="px-4 py-2">1 x 6</td>
                        <td className="px-4 py-2">6</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">23</td>
                        <td className="px-4 py-2">Warna</td>
                        <td className="px-4 py-2">2 x 8</td>
                        <td className="px-4 py-2">16</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">24</td>
                        <td className="px-4 py-2">Dudhganga</td>
                        <td className="px-4 py-2">2 x 12</td>
                        <td className="px-4 py-2">24</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">25</td>
                        <td className="px-4 py-2">Terwanmedhe</td>
                        <td className="px-4 py-2">1 x 0.2</td>
                        <td className="px-4 py-2">0.2</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2 font-bold" colSpan="3">MAHAGENCO HYDRO</td>
                        <td className="px-4 py-2 font-bold">2580.2</td>
                      </tr>
                    </tbody>
                  </table>
                  
                  )}
                </div>

                {/* INSTALLED SOLAR CAPACITY */}
                <div className="space-y-4">
                  <h2 className="flex items-center justify-between text-xl font-bold" onClick={() => toggleSection('solar')}>
                    <span>INSTALLED SOLAR CAPACITY OF MAHAGENCO: (As on 01-03-2025)</span>
                    <ChevronDown className={`w-5 h-5 transform transition-all ${expandedSections['solar'] ? 'rotate-180' : ''}`} />
                  </h2>
                  {expandedSections['solar'] && (
                    <table className="min-w-full text-left table-auto">
                    <thead className="text-white bg-black">
                      <tr>
                        <th className="px-4 py-2 border-b">SR.NO.</th>
                        <th className="px-4 py-2 border-b">Power Plant</th>
                        <th className="px-4 py-2 border-b">Unit</th>
                        <th className="px-4 py-2 border-b">Unit Capacity (MW)</th>
                        <th className="px-4 py-2 border-b">Comm. Date</th>
                        <th className="px-4 py-2 border-b">Age in Years</th>
                      </tr>
                    </thead>
                  
                    <tbody>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">1</td>
                        <td className="px-4 py-2">NASIK</td>
                        <td className="px-4 py-2">3</td>
                        <td className="px-4 py-2">210</td>
                        <td className="px-4 py-2">26-Apr-1979</td>
                        <td className="px-4 py-2">45</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">2</td>
                        <td className="px-4 py-2">NASIK</td>
                        <td className="px-4 py-2">4</td>
                        <td className="px-4 py-2">210</td>
                        <td className="px-4 py-2">10-Jul-1980</td>
                        <td className="px-4 py-2">44</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">3</td>
                        <td className="px-4 py-2">NASIK</td>
                        <td className="px-4 py-2">5</td>
                        <td className="px-4 py-2">210</td>
                        <td className="px-4 py-2">30-Jan-1981</td>
                        <td className="px-4 py-2">44</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">4</td>
                        <td className="px-4 py-2">KORADI</td>
                        <td className="px-4 py-2">6</td>
                        <td className="px-4 py-2">210</td>
                        <td className="px-4 py-2">30-Mar-1982</td>
                        <td className="px-4 py-2">42</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">5</td>
                        <td className="px-4 py-2">BHUSAWAL</td>
                        <td className="px-4 py-2">3</td>
                        <td className="px-4 py-2">210</td>
                        <td className="px-4 py-2">04-May-1982</td>
                        <td className="px-4 py-2">42</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">6</td>
                        <td className="px-4 py-2">CHANDRAPUR</td>
                        <td className="px-4 py-2">3</td>
                        <td className="px-4 py-2">210</td>
                        <td className="px-4 py-2">03-May-1985</td>
                        <td className="px-4 py-2">39</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">7</td>
                        <td className="px-4 py-2">CHANDRAPUR</td>
                        <td className="px-4 py-2">4</td>
                        <td className="px-4 py-2">210</td>
                        <td className="px-4 py-2">08-Mar-1986</td>
                        <td className="px-4 py-2">38</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">8</td>
                        <td className="px-4 py-2">KHAPERKHEDA</td>
                        <td className="px-4 py-2">1</td>
                        <td className="px-4 py-2">210</td>
                        <td className="px-4 py-2">26-Mar-1989</td>
                        <td className="px-4 py-2">35</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">9</td>
                        <td className="px-4 py-2">KHAPERKHEDA</td>
                        <td className="px-4 py-2">2</td>
                        <td className="px-4 py-2">210</td>
                        <td className="px-4 py-2">08-Jan-1990</td>
                        <td className="px-4 py-2">35</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">CHANDRAPUR</td>
                        <td className="px-4 py-2">5</td>
                        <td className="px-4 py-2">500</td>
                        <td className="px-4 py-2">22-Mar-1991</td>
                        <td className="px-4 py-2">33</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">11</td>
                        <td className="px-4 py-2">CHANDRAPUR</td>
                        <td className="px-4 py-2">6</td>
                        <td className="px-4 py-2">500</td>
                        <td className="px-4 py-2">11-Mar-1992</td>
                        <td className="px-4 py-2">32</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">12</td>
                        <td className="px-4 py-2">CHANDRAPUR</td>
                        <td className="px-4 py-2">7</td>
                        <td className="px-4 py-2">500</td>
                        <td className="px-4 py-2">01-Oct-1997</td>
                        <td className="px-4 py-2">27</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">13</td>
                        <td className="px-4 py-2">KHAPERKHEDA</td>
                        <td className="px-4 py-2">3</td>
                        <td className="px-4 py-2">210</td>
                        <td className="px-4 py-2">31-May-2000</td>
                        <td className="px-4 py-2">24</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">14</td>
                        <td className="px-4 py-2">KHAPERKHEDA</td>
                        <td className="px-4 py-2">4</td>
                        <td className="px-4 py-2">210</td>
                        <td className="px-4 py-2">07-Jan-2001</td>
                        <td className="px-4 py-2">24</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">15</td>
                        <td className="px-4 py-2">PARLI</td>
                        <td className="px-4 py-2">6</td>
                        <td className="px-4 py-2">250</td>
                        <td className="px-4 py-2">01-Nov-2007</td>
                        <td className="px-4 py-2">17</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">16</td>
                        <td className="px-4 py-2">PARAS</td>
                        <td className="px-4 py-2">3</td>
                        <td className="px-4 py-2">250</td>
                        <td className="px-4 py-2">31-Mar-2008</td>
                        <td className="px-4 py-2">16</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">17</td>
                        <td className="px-4 py-2">PARLI</td>
                        <td className="px-4 py-2">7</td>
                        <td className="px-4 py-2">250</td>
                        <td className="px-4 py-2">31-Jul-2010</td>
                        <td className="px-4 py-2">14</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">18</td>
                        <td className="px-4 py-2">PARAS</td>
                        <td className="px-4 py-2">4</td>
                        <td className="px-4 py-2">250</td>
                        <td className="px-4 py-2">31-Aug-2010</td>
                        <td className="px-4 py-2">14</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">19</td>
                        <td className="px-4 py-2">KHAPERKHEDA</td>
                        <td className="px-4 py-2">5</td>
                        <td className="px-4 py-2">500</td>
                        <td className="px-4 py-2">16-Apr-2012</td>
                        <td className="px-4 py-2">12</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">20</td>
                        <td className="px-4 py-2">BHUSAWAL</td>
                        <td className="px-4 py-2">4</td>
                        <td className="px-4 py-2">500</td>
                        <td className="px-4 py-2">16-Nov-2012</td>
                        <td className="px-4 py-2">12</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">21</td>
                        <td className="px-4 py-2">BHUSAWAL</td>
                        <td className="px-4 py-2">5</td>
                        <td className="px-4 py-2">500</td>
                        <td className="px-4 py-2">03-Jan-2014</td>
                        <td className="px-4 py-2">11</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">22</td>
                        <td className="px-4 py-2">KORADI</td>
                        <td className="px-4 py-2">8</td>
                        <td className="px-4 py-2">660</td>
                        <td className="px-4 py-2">16-Dec-2015</td>
                        <td className="px-4 py-2">9</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">23</td>
                        <td className="px-4 py-2">CHANDRAPUR</td>
                        <td className="px-4 py-2">8</td>
                        <td className="px-4 py-2">500</td>
                        <td className="px-4 py-2">04-Jun-2016</td>
                        <td className="px-4 py-2">8</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">24</td>
                        <td className="px-4 py-2">PARLI</td>
                        <td className="px-4 py-2">8</td>
                        <td className="px-4 py-2">250</td>
                        <td className="px-4 py-2">19-Nov-2016</td>
                        <td className="px-4 py-2">8</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">25</td>
                        <td className="px-4 py-2">KORADI</td>
                        <td className="px-4 py-2">9</td>
                        <td className="px-4 py-2">660</td>
                        <td className="px-4 py-2">22-Nov-2016</td>
                        <td className="px-4 py-2">8</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">26</td>
                        <td className="px-4 py-2">CHANDRAPUR</td>
                        <td className="px-4 py-2">9</td>
                        <td className="px-4 py-2">500</td>
                        <td className="px-4 py-2">24-Nov-2016</td>
                        <td className="px-4 py-2">8</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="px-4 py-2">27</td>
                        <td className="px-4 py-2">KORADI</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">660</td>
                        <td className="px-4 py-2">17-Jan-2017</td>
                        <td className="px-4 py-2">8</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-2">28</td>
                        <td className="px-4 py-2">BHUSAWAL</td>
                        <td className="px-4 py-2">6</td>
                        <td className="px-4 py-2">660</td>
                        <td className="px-4 py-2">21-Feb-2025</td>
                        <td className="px-4 py-2">--</td>
                      </tr>
                    </tbody>
                  </table>
                  
                  )}
                </div>
              </div>

              {/* Scroll to top button */}
              <div className="fixed bottom-4 right-4">
                <button className="p-3 text-white bg-blue-500 rounded-full">
                  <ArrowUp className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
