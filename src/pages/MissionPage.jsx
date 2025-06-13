// src/pages/MissionPage.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import CommunitySection from '../components/CommunitySection';
import Footer from '../components/Footer';
// import { Helmet } from 'react-helmet'; // Placeholder for next step

const MissionPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sessionInfo, setSessionInfo] = useState({
    isLoggedIn: false,
    firstName: '',
    portalPath: '',
    portalName: '',
    // isAdmin: false, // Store these if needed for other logic, or just use in checkSession
    // isCoach: false,
  });

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const checkSession = async () => {
    try {
      const res = await fetch('/api/check-session', { credentials: 'include' });
      if (!res.ok) {
        // If response is not OK (e.g., 401, 500), treat as logged out or handle error
        console.error('Session check failed with status:', res.status);
        setSessionInfo({
          isLoggedIn: false,
          firstName: '',
          portalPath: 'login.html', // Default to login
          portalName: 'Login',
        });
        return;
      }
      const data = await res.json();

      let portalPath = 'parent_portal.html'; // Default parent portal
      let portalName = 'Parent Portal';

      if (data.loggedIn) {
        if (data.isAdmin) {
          portalPath = 'admin.html';
          portalName = 'Admin Portal';
        } else if (data.isCoach) {
          portalPath = 'instructor_portal.html';
          portalName = 'Instructor Portal';
        }
        // If there was a welcome greeting, it's handled by Header component directly via firstName prop
      }

      setSessionInfo({
        isLoggedIn: data.loggedIn,
        firstName: data.firstName || '',
        portalPath: data.loggedIn ? portalPath : 'login.html',
        portalName: data.loggedIn ? portalName : 'Login',
      });

    } catch (err) {
      console.error('Session error:', err.message);
      setSessionInfo({ // Fallback to logged-out state
        isLoggedIn: false,
        firstName: '',
        portalPath: 'login.html',
        portalName: 'Login',
      });
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST', credentials: 'include' });
      // Original script does: document.cookie = "userFirstName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      // This might not be necessary if backend handles session termination and cookie removal (HttpOnly).
      // Clearing frontend state and reloading is key.
      setSessionInfo({
        isLoggedIn: false,
        firstName: '',
        portalPath: 'login.html',
        portalName: 'Login',
      });
      location.reload(); // Reload to ensure clean state from server
    } catch (err) {
      console.error('Logout error:', err.message);
      // Optionally, still attempt to force a logged-out state on error
      setSessionInfo({
        isLoggedIn: false,
        firstName: '',
        portalPath: 'login.html',
        portalName: 'Login',
      });
      location.reload(); // Still try to reload
    }
  };

  useEffect(() => {
    checkSession();
  }, []); // Run once on mount

  return (
    <>
      {/* <Helmet> will be added in the next step </Helmet> */}
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        isLoggedIn={sessionInfo.isLoggedIn}
        portalPath={sessionInfo.portalPath}
        portalName={sessionInfo.portalName}
        handleLogout={handleLogout}
        firstName={sessionInfo.firstName}
      />
      <Navigation
        isMobileMenuOpen={isMobileMenuOpen}
        closeMobileMenu={closeMobileMenu}
        isLoggedIn={sessionInfo.isLoggedIn}
        portalPath={sessionInfo.portalPath}
        portalName={sessionInfo.portalName}
        handleLogout={handleLogout}
      />
      <main>
        <HeroSection />
        <MissionSection />
        <CommunitySection />
      </main>
      <Footer />
    </>
  );
};

export default MissionPage;
