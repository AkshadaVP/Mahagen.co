import React from 'react';
import Navbar from '../components/Navbar';
import SideLinks from '../components/SideLinks';
import aboutBanner from '../assets/about.jpg';
import BODcard from '../components/BODcard'; // Import the BOD card component
import Radhakrishnan from '../assets/Mahagenko-Member.jpg'
import abhashukla from '../assets/abha-shukla.jpg'
import balasahebthite from '../assets/balasaheb-thite.jpg'
import smmarudkar from '../assets/s-m-marudkar.jpg'
import harne from '../assets/harne.jpg'
import VPphoto from '../assets/VP-photo.jpg'
import Footer from '../components/Footer';



const bodMembers = [
  {
    name: "Shri. Radhakrishnan B., I.A.S.",
    title: "Chairman & Managing Director",
    image: Radhakrishnan, // Replace with actual image path
  },
  {
    name: "Smt. Abha Shukla, I.A.S.",
    title: "Addl. Chief Secretary (Energy), GoM , Director",
    image: abhashukla, // Replace with actual image path
  },
  {
    name: "Shri. Balasaheb B. Thite",
    title: "Director (Finance)",
    image: balasahebthite, // Replace with actual image path
  },
  {
    name: "Shri. Sanjay Marudkar",
    title: "Director (Operations)",
    image: smmarudkar, // Replace with actual image path
  },
  {
    name: "Shri. Abhay Harne",
    title: "Director(Projects)",
    image: harne, // Replace with actual image path
  },
  {
    name: "Shri. Abhay Harne",
    title: "Director (Fuel) (Addl. Charge)",
    image: harne, // Replace with actual image path
  },
  {
    name: "Shri Vishwas Pathak",
    title: "Independent Director",
    image: VPphoto, // Replace with actual image path
  },
  // Add more members here
];

const BOD = () => {
  return (
    <div className="relative">
      <Navbar />

      {/* Banner image */}
      <img
        src={aboutBanner}
        alt="About Us Banner"
        className="absolute top-0 left-0 w-full h-[350px] object-cover z-[-1]"
      />

      {/* Section Title */}
      <div className="translate-y-20 translate-x-30">
        <span className="text-3xl font-bold text-white">Board of Directors of MSPGCL</span>
      </div>

      {/* Layout with SideLinks and BOD cards */}
      <div className="flex px-10 mt-20">
        {/* Sidebar Links */}
        <SideLinks />

        {/* Board of Directors Section */}
        <div className="grid w-1/2 grid-cols-1 gap-4 p-5 ml-[600px] sm:grid-cols-2 lg:grid-cols-3 right-0 translate-y-[-50px]">
        {bodMembers.map((member, index) => (
    <BODcard
      key={index}
      name={member.name}
      title={member.title}
      image={member.image}
    />
    ))}
    </div>

      </div>
      <Footer></Footer>
    </div>
  );
};

export default BOD;
