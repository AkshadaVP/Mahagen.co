import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Header from './components/Header';
import AboutUs from './Pages/AboutUs';
import VandM from './Pages/VandM';
import BOD from './Pages/BOD';
import History from './Pages/History';
import ThermalProjects from './Pages/ThermalProjects';
import LoginSignup from './Pages/LoginSignup';
import SignUpPage from './Pages/SignUp'; // Custom SignUp page with background
import VerifyEmail from './Pages/VerifyEmail';

// Clerk helper for redirect
import { RedirectToSignIn } from '@clerk/clerk-react';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/vision-mission" element={<VandM />} />
          <Route path="/board-of-directors" element={<BOD />} />
          <Route path="/history" element={<History />} />
          <Route path="/thermal-projects" element={<ThermalProjects />} />
          <Route path="/login_signup" element={<LoginSignup />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          
          {/* Handle Clerk SSO callback route */}
          <Route path="/signup/sso-callback" element={<RedirectToSignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
