// src/Pages/History.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SideLinks from '../components/SideLinks';
import OfficialsTable from '../components/officials-tables';
import Footer from '../components/Footer';
import aboutBanner from '../assets/about.jpg';

export default function History() {
  const [view, setView] = useState('head');

  const aboutLinks = [
    { label: 'About Us',                to: '/about-us'               },
    { label: 'Our History',             to: '/history'                },
    { label: 'Vision & Mission',        to: '/vision-mission'         },
    { label: 'Board of Directors',      to: '/board-of-directors'     },
    { label: 'Board Members of MSEB',   to: '/board-members'          },
    { label: 'Key Officials of MSPGCL', to: '/key-officials'          },
    { label: 'Organization Structure',  to: '/organization-structure' },
  ];

  const edDirectors = [
    {
      name: 'Shri. Pankaj Sapate',
      title:
        'Executive Director (O&M-II)',
      phone: '',
      office: '0712 – 2591234',
      fax: '',
      email: '@maha-genco.co.in',
    },
    {
      name: 'Shri. Vivek Rokde',
      title:
        'Executive Director (Project)Generation Construction Office, Koradi',
      phone: '07109 – 262126',
      office: '07109 – 262155 / 74 / 81',
      fax: '07109 – 262162',
      email: '@maha-genco.co.in',
    },
  ];

  const ceSections = [
    {
      header:
        'KORADI TPS (660 MW),(210 MW) URJA BHAVAN, TAL KAMATHI, NAGPUR – 441111',
      rows: [
        {
          name: 'Vilas Motghare',
          designation: 'CE. (Koradi TPS)',
          address:
            'KORADI TPS(660 MW),(210 MW) URJA BHAVAN, TAL KAMATHI, NAGPUR – 441111',
          office: '07109‑262141‑46\n262106/09\nExt:1001/6001',
          fax: '--',
          email: '@maha-genco.co.in',
        },
      ],
    },
    {
      header: 'KORADI COMPLEX, CHINDWARA ROAD, KORADI – 441111',
      rows: [
        {
          name: 'Vivek Rokade',
          designation: 'CE. (Koradi Proj.)',
          address: 'KORADI COMPLEX, CHINDWARA ROAD, KORADI – 441111',
          office: '07109‑264862/69\nExt:1504',
          fax: '-',
          email: '@maha-genco.co.in',
        },
        {
          name: 'Vivek Rokade',
          designation: 'CE. (Civil‑II Koradi) (Addl Work)',
          address: 'KORADI COMPLEX, CHINDWARA ROAD, KORADI – 441111',
          office: '07109‑262238168 / 262128',
          fax: '-',
          email: '@maha-genco.co.in',
        },
        {
          name: 'Sanjay Rahate',
          designation: 'CE. (Const. Koradi)',
          address: 'KORADI COMPLEX, CHINDWARA ROAD, KORADI – 441111',
          office: '07109‑295701/295703 Extn. 201',
          fax: '-',
          email: '@maha-genco.co.in',
        },
      ],
    },
    {
      header:
        'KORADI TRAINING CENTER KORADI TPS PREMISES NAGPUR – 441111',
      rows: [
        {
          name: 'Sunil Sonpethkar',
          designation: 'CE. (TRD) Koradi',
          address:
            'KORADI TRAINING CENTER KORADI TPS PREMISES NAGPUR – 441111',
          office: '07109‑263850/262737\nFax: 07109‑262167',
          fax: '',
          email: '@maha-genco.co.in',
        },
      ],
    },
    {
      header: 'CSTPS, CHANDRAPUR URJABHAVAN CHANDRAPUR – 442404',
      rows: [
        {
          name: 'Vijay Rathod',
          designation: 'CE. (Chandrapur STPS)',
          address: 'CSTPS, CHANDRAPUR URJABHAVAN CHANDRAPUR – 442404',
          office: '07172‑220014/220155‑59\nExt: 4801/4901',
          fax: 'Fax: 07172‑220203',
          email: 'cegenchandrapur@mahagenco.in',
        },
      ],
    },
    {
      header: 'KHARERKHEDA TPS, KAMATHI,NAGPUR – 441102',
      rows: [
        {
          name: 'V. K. Chaudhari',
          designation: 'CE. (Khaperkheda TPS) (Addl Charge)',
          address: 'KHARERKHEDA TPS, KAMATHI,NAGPUR – 441102',
          office: '07113‑268167‑72\nExt:6001/6501',
          fax: '-',
          email: 'cegenkpkd@mahagenco.in',
        },
      ],
    },
    {
      header:
        'BHUSAWAL TPS, DEEPNAGAR, TAL BHUSAWAL, DIST JALGAON – 425307',
      rows: [
        {
          name: 'Prafulla Bhadane',
          designation: 'CE. (Bhusawal TPS)',
          address:
            'BHUSAWAL TPS, DEEPNAGAR, TAL BHUSAWAL, DIST JALGAON – 425307',
          office: '02582‑250207/225007\nExt: 1001\nFax: 02582‑250308',
          fax: '',
          email: 'cegenbhusawal@mahagenco.in',
        },
      ],
    },
    {
      header:
        'BHUSAWAL EXPN. PROJ. VARANGAON ROAD, TAL BHUSAWAL, DIST JALGAON – 425307',
      rows: [
        {
          name: 'Shashank Chavan',
          designation: 'CE. (Bhusawal Proj.)',
          address:
            'BHUSAWAL EXPN. PROJ. VARANGAON ROAD, TAL BHUSAWAL, DIST JALGAON – 425307',
          office: '02582‑250268\nFax: 02582‑250379',
          fax: '',
          email: 'cebslproj660@mahagenco.in',
        },
      ],
    },
    {
      header:
        'PARAS TPS VIDYUT NAGAR, PARAS, TAL BALAPUR, DIST AKOLA – 441009',
      rows: [
        {
          name: 'Sharad Bhagat',
          designation: 'CE. (Paras TPS)',
          address:
            'PARAS TPS VIDYUT NAGAR, PARAS, TAL BALAPUR, DIST AKOLA – 441009',
          office: '07257‑234465/66\nExt:1201/1001\nFax: 07257‑234846',
          fax: '',
          email: 'cgmparas@mahagenco.in',
        },
      ],
    },
    {
      header:
        'PARALI, TPS., TAL PARALI‑VAIJNATH, DIST BEED – 431520',
      rows: [
        {
          name: 'Sunil Ingle',
          designation: 'CE. (Parli TPS)',
          address:
            'PARALI, TPS., TAL PARALI‑VAIJNATH, DIST BEED – 431520',
          office: '02446‑222026\nExt:2000\nFax: 02446‑222492',
          fax: '',
          email: 'cegenparli@mahagenco.in',
        },
      ],
    },
    // (…and so on for Nashik, Pophali, Uran, Pune, Nagpur…)
  ];

  return (
    <div className="relative">
      {/* 1) fixed Navbar */}
      <Navbar />

      {/* 2) banner + title */}
      <div className="relative h-[350px]">
        <img
          src={aboutBanner}
          alt="History Banner"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <h1 className="absolute text-4xl font-bold text-white bottom-4 left-8 drop-shadow-lg">
          History
        </h1>
      </div>

      {/* 3) layout: sidebar + main content */}
      <div className="flex gap-8 px-8 pb-20 mt-8">
        {/* 3a) fixed sidebar */}
        <aside className="sticky top-[calc(10px+1rem)] self-start w-60">
          <SideLinks title="About Us" links={aboutLinks} />
        </aside>

        {/* 3b) right column */}
        <main className="flex-1 space-y-8">
          {/* —— toggle buttons, left‑aligned —— */}
          <div className="flex justify-start gap-4 mb-6">
            {['head', 'field'].map((tab) => (
              <button
                key={tab}
                onClick={() => setView(tab)}
                className={`px-6 py-2 rounded-lg border transition ${
                  view === tab
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-blue-600 border-blue-600'
                }`}
              >
                {tab === 'head' ? 'Head Office' : 'Field Offices'}
              </button>
            ))}
          </div>

          {view === 'head' ? (
            /* —— your existing head‑office table component —— */
            <OfficialsTable />
          ) : (
            /* —— inline Field Offices section —— */
            <>
              <details open className="bg-gray-100 rounded-2xl">
                <summary className="px-4 py-2 font-medium cursor-pointer">
                  Mahagenco Field Offices – Executive Directors
                </summary>
                <div className="grid grid-cols-1 divide-y md:grid-cols-2 md:divide-y-0 md:divide-x">
                  {edDirectors.map((d) => (
                    <div key={d.name} className="p-4">
                      <h3 className="font-bold">{d.name}</h3>
                      <p className="italic">{d.title}</p>
                      <ul className="mt-2 space-y-1 text-sm whitespace-pre-line">
                        {d.phone && <li><strong>P:</strong> {d.phone}</li>}
                        {d.office && <li><strong>O:</strong> {d.office}</li>}
                        {d.fax    && <li><strong>F:</strong> {d.fax}</li>}
                        <li><strong>@:</strong> {d.email}</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </details>

              <details className="bg-gray-100 rounded-2xl">
                <summary className="px-4 py-2 font-medium cursor-pointer">
                  Mahagenco – Field Offices Chief Engineers (Gen O&M, Gen Const. & Civil)
                </summary>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="text-white bg-black">
                        {['Name','Designation','Address','Office Ph.No.','FAX','E-mail'].map((h) => (
                          <th key={h} className="px-2 py-1">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {ceSections.map((sec, sidx) => (
                        <React.Fragment key={sidx}>
                          <tr className="font-semibold bg-blue-100">
                            <td colSpan={6} className="px-2 py-1">
                              {sec.header}
                            </td>
                          </tr>
                          {sec.rows.map((r,i) => (
                            <tr
                              key={i}
                              className={i%2===0 ? 'bg-white' : 'bg-gray-50'}
                            >
                              <td className="px-2 py-1">{r.name}</td>
                              <td className="px-2 py-1">{r.designation}</td>
                              <td className="px-2 py-1">{r.address}</td>
                              <td className="px-2 py-1 whitespace-pre-line">
                                {r.office}
                              </td>
                              <td className="px-2 py-1">{r.fax}</td>
                              <td className="px-2 py-1">{r.email}</td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </details>
            </>
          )}
        </main>
      </div>

      {/* 4) footer */}
      <Footer />
    </div>
  );
}
