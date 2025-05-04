// src/App.jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  ClerkLoaded,
} from '@clerk/clerk-react';

// your shared top-level nav (conditionally rendered)
import Navbar from './components/Navbar';

// Public pages…
import Header  from './components/Header';
import AboutUs from './Pages/AboutUs';
import VandM   from './Pages/VandM';
import Bod     from './Pages/Bod';
import History from './Pages/History';
import ThermalProjects   from './Pages/ThermalProjects';
import InstalledCapacity from './Pages/InstalledCapacity';
import BoardMembers      from './Pages/BoardMembers';
import SolarProjects     from './Pages/SolarProjects';
import GpIiCoalMine      from './Pages/GpIiCoalMine';
import ApplyFormPage     from './Pages/ApplyFormPage';
import ViewApplication   from './Pages/ViewApplication';
import ReadOnlyApplicationForm from './Pages/ReadOnlyApplicationForm';

// Auth flows
import UserSignIn    from './Pages/UserSignIn';
import CreateAccount from './Pages/CreateAccount';

// Post-login pages
import Profile            from './Pages/Profile';
import RedirectAfterLogin from './Pages/RedirectAfterLogin';
import UserDashboard      from './Pages/UserDashboard';

// Admin
import AdminDashboard      from './Pages/AdminDashboard';
import ProtectedAdminRoute from './components/ProtectedAdminRoute';

function AppRoutes() {
  const { pathname } = useLocation();

  // hide the Navbar on sign-in, create-account, and apply-form
  const hideNav =
    pathname.startsWith('/sign-in') ||
    pathname === '/create-account' ||
    pathname === '/apply-form' || 
    pathname === '/profile' || 
    pathname === '/view-application';

  return (
    <>
      {!hideNav && <Navbar />}

      <ClerkLoaded>
        <Routes>
          {/** PUBLIC **/}
          <Route path="/"                   element={<Header />} />
          <Route path="/about-us"           element={<AboutUs />} />
          <Route path="/vision-mission"     element={<VandM />} />
          <Route path="/board-of-directors" element={<Bod />} />
          <Route path="/history"            element={<History />} />
          <Route path="/thermal-projects"   element={<ThermalProjects />} />
          <Route path="/installed-capacity" element={<InstalledCapacity />} />
          <Route path="/board-members"      element={<BoardMembers />} />
          <Route path="/solar"              element={<SolarProjects />} />
          <Route path="/gp-ii"              element={<GpIiCoalMine />} />
          <Route path="/apply-form"         element={<ApplyFormPage />} />
          <Route path="/view-application"   element={<ViewApplication />} />
          <Route
            path="/view-application/:email"
            element={<ReadOnlyApplicationForm />}
          />

          {/** AUTH (signed-out only) **/}
          <Route
            path="/sign-in/*"
            element={
              <SignedOut>
                <UserSignIn />
              </SignedOut>
            }
          />
          <Route
            path="/create-account"
            element={
              <SignedOut>
                <CreateAccount />
              </SignedOut>
            }
          />

          {/** PROTECTED (signed-in only) **/}
          <Route
            path="/profile"
            element={
              <SignedIn>
                <Profile />
              </SignedIn>
            }
          />
          <Route
            path="/redirect-after-login"
            element={
              <SignedIn>
                <RedirectAfterLogin />
              </SignedIn>
            }
          />
          <Route
            path="/user-dashboard"
            element={
              <SignedIn>
                <UserDashboard />
              </SignedIn>
            }
          />

          {/** ADMIN **/}
          <Route
            path="/admin-dashboard"
            element={
              <SignedIn>
                <ProtectedAdminRoute>
                  <AdminDashboard />
                </ProtectedAdminRoute>
              </SignedIn>
            }
          />

          {/** FALLBACK → sign-in **/}
          <Route path="*" element={<Navigate to="/sign-in" replace />} />
        </Routes>
      </ClerkLoaded>
    </>
  );
}

export default function App() {
  return (
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      <Router>
        <AppRoutes />
      </Router>
    </ClerkProvider>
  );
}
