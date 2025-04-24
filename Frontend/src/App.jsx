// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';

// Public pages
import Header from './components/Header';
import AboutUs from './Pages/AboutUs';
import VandM from './Pages/VandM';
import Bod from './Pages/Bod';
import History from './Pages/History';
import ThermalProjects from './Pages/ThermalProjects';
import InstalledCapacity from './Pages/InstalledCapacity';
import BoardMembers from './Pages/BoardMembers';
import SolarProjects from './Pages/SolarProjects';
import GpIiCoalMine from './Pages/GpIiCoalMine';

// Auth pages
import UserSignUp from './Pages/UserSignUp';
import UserSignIn from './Pages/UserSignIn';
import UserDashboard from './Pages/UserDashboard';
import RedirectAfterLogin from './Pages/RedirectAfterLogin';

// Admin (protected)
import AdminDashboard from './Pages/AdminDashboard';
import ProtectedAdminRoute from './components/ProtectedAdminRoute';

export default function App() {


  return (
    <Router>


      {/* 3) All your normal routes */}
      <Routes>
        <Route path="/"                   element={<Header />} />
        <Route path="/about-us"           element={<AboutUs />} />
        <Route path="/vision-mission"     element={<VandM />} />
        <Route path="/board-of-directors" element={<Bod />} />
        <Route path="/history"            element={<History />} />
        <Route path="/thermal-projects"   element={<ThermalProjects />} />
        <Route path="/installed-capacity" element={<InstalledCapacity />} />
        <Route path="/board-members"      element={<BoardMembers />} />
        <Route path="/solar"              element={<SolarProjects />} />
        <Route path="/gp-ii"     element={<GpIiCoalMine />} />


        <Route path="/redirect-after-login" element={<RedirectAfterLogin />} />

        <Route path="/user-signup"        element={<UserSignUp />} />
        <Route path="/sign-in"            element={<UserSignIn />} />
        <Route path="/user-dashboard"     element={<UserDashboard />} />

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        />
      </Routes>
    </Router>
  );
}
