import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Header from './components/Header';
import AboutUs from './Pages/AboutUs';
import VandM from './Pages/VandM';
import BOD from './Pages/BOD';
import History from './Pages/History';
import ThermalProjects from './Pages/ThermalProjects';
import VerifyEmail from './Pages/VerifyEmail';
import SignIn from './Pages/SignIn';

// Clerk helper for redirect
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Header />} />
          <Route path="/SignIn" element={<SignIn />} />

          {/* <Route path="/signup" element={<SignUpPage />} /> */}
          <Route path="/verify-email" element={<VerifyEmail />} />

          {/* Protected Routes */}
          <Route
            path="/about-us"
            element={
              <SignedIn>
                <AboutUs />
              </SignedIn>
            }
          />
          <Route
            path="/vision-mission"
            element={
              <SignedIn>
                <VandM />
              </SignedIn>
            }
          />
          <Route
            path="/board-of-directors"
            element={
              <SignedIn>
                <BOD />
              </SignedIn>
            }
          />
          <Route
            path="/history"
            element={
              <SignedIn>
                <History />
              </SignedIn>
            }
          />
          <Route
            path="/thermal-projects"
            element={
              <SignedIn>
                <ThermalProjects />
              </SignedIn>
            }
          />

          {/* Handle Clerk SSO callback route */}
          <Route path="/signup/sso-callback" element={<RedirectToSignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
