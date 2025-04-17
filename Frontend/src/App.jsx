import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Header from './components/Header';
import AboutUs from './Pages/AboutUs';
import VandM from './Pages/VandM';
import Bod from './Pages/Bod';
import History from './Pages/History';
import ThermalProjects from './Pages/ThermalProjects';
import UserSignUp from './Pages/UserSignUp'; // ✅ User Request Access Page
import AdminDashboard from './Pages/AdminDashboard'; // ✅ Admin Page
import UserSignIn from './Pages/UserSignIn'; // ✅ Clerk Sign-In Page

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Header />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/vision-mission" element={<VandM />} />
          <Route path="/board-of-directors" element={<Bod />} />
          <Route path="/history" element={<History />} />
          <Route path="/thermal-projects" element={<ThermalProjects />} />

          {/* Auth-related */}
          <Route path="/user-signup" element={<UserSignUp />} />
          <Route path="/sign-in" element={<UserSignIn />} /> {/* ✅ Clerk Sign-in */}

          {/* Admin */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
