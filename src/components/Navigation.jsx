// src/components/Navigation.jsx
import React from 'react';
import styles from './Navigation.module.css'; // To be created

const Navigation = ({
  isMobileMenuOpen,
  closeMobileMenu,
  isLoggedIn,
  portalPath,
  portalName,
  handleLogout
}) => {
  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    }
  };

  const handleMobileLogout = () => {
    handleLogout();
    closeMobileMenu();
  };

  return (
    <nav
      className={`${styles.mainNavigation} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}
      id="mainNavigation" // For aria-controls
    >
      {/* Desktop Navigation */}
      <div className={styles.navWrapperDesktop}>
        <ul className={styles.navLinksDesktop}>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="programs.html">Programs</a></li>
          <li><a href="schedule.html">Schedule</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="booking.html" className={styles.highlightedNav}>Book</a></li>
        </ul>
      </div>

      {/* Mobile Menu Container - conditionally rendered or hidden via CSS */}
      {isMobileMenuOpen && ( // Or use CSS to hide: className={`${styles.mobileMenuContainer} ${isMobileMenuOpen ? styles.mobileMenuVisible : ''}`}
        <div className={styles.mobileMenuContainer}>
          <button
            className={styles.mobileMenuClose}
            aria-label="Close navigation menu"
            onClick={closeMobileMenu}
          >
            &times; {/* Close icon */}
          </button>
          <ul className={styles.navLinksMobile}>
            <li><a href="index.html" onClick={handleLinkClick}>Home</a></li>
            <li><a href="about.html" onClick={handleLinkClick}>About</a></li>
            <li><a href="programs.html" onClick={handleLinkClick}>Programs</a></li>
            <li><a href="schedule.html" onClick={handleLinkClick}>Schedule</a></li>
            <li><a href="contact.html" onClick={handleLinkClick}>Contact</a></li>
            <li><a href="booking.html" onClick={handleLinkClick}>Book</a></li>
          </ul>
          <div className={styles.authButtonsMobile} id="authContainerMobile">
            {isLoggedIn ? (
              <>
                <a href={portalPath} onClick={handleLinkClick}><button>{portalName}</button></a>
                <button onClick={handleMobileLogout}>Logout</button>
              </>
            ) : (
              <>
                <a href="register.html" onClick={handleLinkClick}><button id="registerBtnMobile">Register</button></a>
                <a href="login.html" onClick={handleLinkClick}><button id="loginBtnMobile">Login</button></a>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
