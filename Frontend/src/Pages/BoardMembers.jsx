// src/Pages/BoardMembers.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import SideLinks from '../components/SideLinks';
import BODcard from '../components/BODcard';
import Footer from '../components/Footer';

import aboutBanner from '../assets/about.jpg';
import devendraF from '../assets/devendraF.jpg';
import MeghnaSakore from '../assets/MeghnaSakore.jpg';
import abhashukla from '../assets/abha-shukla.jpg';
import Radhakrishnan from '../assets/Mahagenko-Member.jpg';
import SanjeevK from '../assets/SanjeevK.jpg';
import LokeshChandra from '../assets/LokeshChandra.jpg';
import AshishC from '../assets/AshishC.jpg';
import NeetaK from '../assets/NeetaK.jpg';
import VPphoto from '../assets/VP-photo.jpg';
import AparnaG from '../assets/AparnaG.jpg';
import anudeepDighe from '../assets/anudeepDighe.jpg';

export default function BoardMembers() {
  const aboutLinks = [
    { label: 'About Us',                to: '/about-us'               },
    { label: 'Our History',             to: '/history'                },
    { label: 'Vision & Mission',        to: '/vision-mission'         },
    { label: 'Board of Directors',      to: '/board-of-directors'     },
    { label: 'Board Members of MSEB',   to: '/board-members'          },
    { label: 'Key Officials of MSPGCL', to: '/key-officials'          },
    { label: 'Organization Structure',  to: '/organization-structure' },
  ];

  const members = [
    {
      name: 'Hon. Shri. Devendra Fadnavis',
      title: 'Chief Minister & Minister (Energy)\nChairman',
      image: devendraF,
    },
    {
      name: 'Hon. Smt. Meghna Deepak Sakore Bordikar',
      title: 'Minister of State (Energy)\nVice‑Chairman',
      image: MeghnaSakore,
    },
    {
      name: 'Smt. Abha Shukla, I.A.S.',
      title: 'Addl. Chief Secretary (Energy), GoM\nManaging Director',
      image: abhashukla,
    },
    {
      name: 'Shri. Radhakrishnan B., I.A.S.',
      title: 'Director',
      image: Radhakrishnan,
    },
    {
      name: 'Shri. Sanjeev Kumar, I.A.S.',
      title: 'Director',
      image: SanjeevK,
    },
    {
      name: 'Shri. Lokesh Chandra, I.A.S.',
      title: 'Director',
      image: LokeshChandra,
    },
    {
      name: 'Shri. Ashish Chandarana',
      title: 'Independent Director',
      image: AshishC,
    },
    {
      name: 'Smt. Neeta Kelkar',
      title: 'Independent Director',
      image: NeetaK,
    },
    {
      name: 'Shri. Vishwas Pathak',
      title: 'Independent Director',
      image: VPphoto,
    },
    {
      name: 'Smt. Aparna Sudhakar Gitay (SPS)',
      title: 'Director (Security & Vigilance) I/c',
      image: AparnaG,
    },
    {
      name: 'Shri. Anudeep Dighe',
      title: 'Director (Finance) I/c',
      image: anudeepDighe,
    },
  ];

  return (
    <div className="relative">
      {/* 1) fixed Navbar */}
      <Navbar />

      {/* 2) banner + page title */}
      <div className="relative h-[350px]">
        <img
          src={aboutBanner}
          alt="About Us Banner"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <h1 className="absolute text-4xl font-bold text-white bottom-4 left-8 drop-shadow-lg">
          Board Members of MSEB Holding Company Limited
        </h1>
      </div>

      {/* 3) content area: push down by banner height */}
      <div className="flex pb-20 mt-10 gap-15 px-30">
        {/* 3a) sidebar (sticky under banner) */}
        <aside className="sticky top-0 self-start w-60">
          <SideLinks title="About Us" links={aboutLinks} />
        </aside>

        {/* 3b) grid of cards */}
        <main className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m, i) => (
            <BODcard
              key={i}
              name={m.name}
              title={m.title}
              image={m.image}
            />
          ))}
        </main>
      </div>

      {/* last‑updated timestamp */}
      <div className="px-8 pb-4 text-xs text-right text-gray-500">
        Last updated on 24/01/2025 07:27 PM
      </div>

      {/* 4) footer */}
      <Footer />
    </div>
  );
}
