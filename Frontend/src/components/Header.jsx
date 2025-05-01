// src/components/Header.jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CountUp from 'react-countup';
import BannerSlider from './BannerSlider';
import MapSection from './MapSection';
import Footer from './Footer';
import Navbar from './Navbar';

import emp from '../assets/employee.png';
import esm from '../assets/ESM.png';
import announcement from '../assets/announcement.png';
import rti from '../assets/RTI.png';
import tender from '../assets/tenders.png';
import mediclaim from '../assets/mediclaim.png';
import color from '../assets/color.jpg';
import bandw from '../assets/bandw.jpg';
import thermal from '../assets/thermal.png';
import hydro from '../assets/hydro.png';
import solar from '../assets/solar.png';
import gas from '../assets/gas.png';
import bgvideo from '../assets/bgvideo.mp4';
import NoticeSection from './NoticeSection';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const imageVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
};

const Header = () => {
  // subtle parallax effect for the image block
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 300], [0, -30]);

  return (
    <>
      {/* Full-screen header with video background and Navbar */}
      <header className="relative w-full h-screen">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <video className="object-cover w-full h-full" autoPlay loop muted>
            <source src={bgvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Navbar />
      </header>

      {/* 1) Fade‑up cards section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative flex items-center justify-center mt-10 bg-white"
        style={{ zIndex: 20 }}
      >
        <div className="grid grid-cols-6 gap-20 px-8 md:px-16">
          {[emp, esm, announcement, rti, tender, mediclaim].map((src, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center shadow-2xl h-35 w-35 rounded-xl"
            >
              <img src={src} alt="" className="mb-2" />
              <p className="text-center">
                {['Employee','ESM','Announcements','RTI','Tenders','Mediclaim'][i]}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 2) Text fade‑left, images fade‑right with parallax */}
      <section
        className="relative flex items-center justify-center px-8 mt-5 bg-white md:px-16"
        style={{ zIndex: 20 }}
      >
        <div className="grid grid-cols-1 gap-8 p-8 m-10 md:grid-cols-2">
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <h2 className="mb-4 text-4xl font-bold text-blue-900">
              WELCOME TO MAHAGENCO
            </h2>
            <p className="mb-4 text-lg text-gray-600">
              The Mahanirmitee or Mahagenco (Maharashtra State Power Generation Company Limited - MSPGCL)
              formerly known as MSEB is a major power generating company in Maharashtra.
            </p>
            <p className="mb-4 text-lg text-gray-600">
              With total generation of 13880.55 MW, it is India’s largest state‑owned power producer.
            </p>
            <div className="border-[#0097D8] border-2 w-30 h-8 flex items-center justify-center">
              <button className="text-blue-500 hover:underline">
                Explore more
              </button>
            </div>
          </motion.div>

          <motion.div
            style={{ y: yOffset }}
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex items-center justify-center space-x-4"
          >
            <img
              src={color}
              alt="Color"
              className="absolute left-0 object-cover rounded-lg shadow-md bottom-10 w-90 h-85"
            />
            <div className="absolute left-0 top-20">
              <p>STARTED IN</p>
              <p className="text-6xl">1960</p>
            </div>
            <img
              src={bandw}
              alt="Black & White"
              className="object-cover rounded-lg shadow-md h-140 w-100"
            />
          </motion.div>
        </div>
      </section>

      {/* 3) Count‑up numbers section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-10 mt-20 mx-8 bg-[#BFE5FD] rounded-3xl border-2 border-[#0097D8]"
        style={{ zIndex: 20 }}
      >
        <div className="max-w-screen-xl px-6 mx-auto">
          <h2 className="text-xl font-semibold text-center text-white bg-[#0097D8] rounded-full p-2 w-max mx-auto -translate-y-16">
            Power Generation Capacity In MW
          </h2>
          <div className="grid grid-cols-2 gap-8 -translate-y-8 sm:grid-cols-4">
            {[
              { src: thermal, label: 'Thermal', end: 10200 },
              { src: hydro,   label: 'Hydro',   end: 2580  },
              { src: solar,   label: 'Solar',   end: 428   },
              { src: gas,     label: 'Gas',     end: 672   },
            ].map(({ src, label, end }) => (
              <div
                key={label}
                className="flex flex-col items-center px-3 py-1 bg-[#BFE5FD] rounded-xl"
              >
                <img src={src} alt={label} className="mb-2 h-15 w-15" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="text-5xl font-semibold text-[#181B31]"
                >
                  <CountUp end={end} duration={2} separator="," />
                </motion.div>
                <p className="text-2xl text-[#181B31]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 4) MapSection fade‑up */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
      <MapSection />
      </motion.div>
      <BannerSlider />
      <NoticeSection/>
      <Footer />
    </>
  );
};

export default Header;
