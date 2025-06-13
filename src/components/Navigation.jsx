// src/components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/programs">Programs</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/booking" className={styles.highlightedNav}>Book</Link></li>
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
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
            <li><Link to="/programs" onClick={handleLinkClick}>Programs</Link></li>
            <li><Link to="/schedule" onClick={handleLinkClick}>Schedule</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
            <li><Link to="/booking" onClick={handleLinkClick}>Book</Link></li>
          </ul>
          <div className={styles.authButtonsMobile} id="authContainerMobile">
            {isLoggedIn ? (
              <>
                <Link to={portalPath} onClick={handleLinkClick}><button>{portalName}</button></Link>
                <button onClick={handleMobileLogout}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/register" onClick={handleLinkClick}><button id="registerBtnMobile">Register</button></Link>
                <Link to="/login" onClick={handleLinkClick}><button id="loginBtnMobile">Login</button></Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
