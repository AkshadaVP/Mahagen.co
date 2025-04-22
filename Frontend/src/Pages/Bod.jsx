// src/Pages/Bod.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import SideLinks from '../components/SideLinks';
import BODcard from '../components/BODcard';
import Footer from '../components/Footer';

import aboutBanner from '../assets/about.jpg';
import Radhakrishnan from '../assets/Mahagenko-Member.jpg';
import abhashukla from '../assets/abha-shukla.jpg';
import balasahebthite from '../assets/balasaheb-thite.jpg';
import smmarudkar from '../assets/s-m-marudkar.jpg';
import harne from '../assets/harne.jpg';
import VPphoto from '../assets/VP-photo.jpg';

export default function Bod() {
  const aboutLinks = [
    { label: 'About Us',                to: '/about-us'               },
    { label: 'Our History',             to: '/history'                },
    { label: 'Vision & Mission',        to: '/vision-mission'         },
    { label: 'Board of Directors',      to: '/board-of-directors'     },
    { label: 'Board Members of MSEB',   to: '/board-members'          },
    { label: 'Key Officials of MSPGCL', to: '/key-officials'          },
    { label: 'Organization Structure',  to: '/organization-structure' },
  ];

  const bodMembers = [
    {
      name: "Shri. Radhakrishnan B., I.A.S.",
      title: "Chairman & Managing Director",
      image: Radhakrishnan,
    },
    {
      name: "Smt. Abha Shukla, I.A.S.",
      title: "Addl. Chief Secretary (Energy), GoM, Director",
      image: abhashukla,
    },
    {
      name: "Shri. Balasaheb B. Thite",
      title: "Director (Finance)",
      image: balasahebthite,
    },
    {
      name: "Shri. Sanjay Marudkar",
      title: "Director (Operations)",
      image: smmarudkar,
    },
    {
      name: "Shri. Abhay Harne",
      title: "Director (Projects)",
      image: harne,
    },
    {
      name: "Shri. Abhay Harne",
      title: "Director (Fuel) (Addl. Charge)",
      image: harne,
    },
    {
      name: "Shri. Vishwas Pathak",
      title: "Independent Director",
      image: VPphoto,
    },
  ];

  return (
    <div className="relative">
      {/* 1) fixed Navbar */}
      <Navbar />

      {/* 2) banner + title */}
      <div className="relative h-[350px]">
        <img
          src={aboutBanner}
          alt="About Us Banner"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <h1 className="absolute text-4xl font-bold text-white bottom-4 left-8 drop-shadow-lg">
          Board of Directors of MSPGCL
        </h1>
      </div>

      {/* 3) main content; push it down by the banner height */}
      <section className="flex gap-20 px-8 pt-8 pb-20">
        {/* 3a) sidebar: sticky so it scrolls with you */}
        <aside className="sticky self-start flex-shrink-0 w-60 top-10">
          <SideLinks title="About Us" links={aboutLinks} />
        </aside>

        {/* 3b) cards grid */}
        <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bodMembers.map((member, idx) => (
            <BODcard
              key={idx}
              name={member.name}
              title={member.title}
              image={member.image}
            />
          ))}
        </div>
      </section>

      {/* 4) footer */}
      <Footer />
    </div>
  );
}
