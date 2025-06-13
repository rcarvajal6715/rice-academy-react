import React from 'react'; // useState might be moved to a parent controlling the menu
import styles from './Navigation.module.css';

const Navigation = ({
  isLoggedIn,
  portalPath,
  portalName,
  onLogout,
  isMobileMenuOpen,
  onCloseMobileMenu // Function to close the mobile menu
}) => {
  return (
    <nav className={`${styles.mainNavigation} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`} id="mainNavigation">
      <div className={styles.navWrapperDesktop}>
        <ul className={styles.navLinksDesktop}>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="programs.html" className={styles.currentPage}>Programs</a></li>
          <li><a href="schedule.html">Schedule</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="booking.html" className={styles.highlightedNav}>Book</a></li>
        </ul>
      </div>
      {isMobileMenuOpen && (
        <div className={styles.mobileMenuContainer}>
          <button 
            className={styles.mobileMenuClose} 
            aria-label="Close navigation menu"
            onClick={onCloseMobileMenu} // Use the prop to close
          >
            &times;
          </button>
          <ul className={styles.navLinksMobile}>
            <li><a href="index.html" onClick={onCloseMobileMenu}>Home</a></li>
            <li><a href="about.html" onClick={onCloseMobileMenu}>About</a></li>
            <li><a href="programs.html" onClick={onCloseMobileMenu}>Programs</a></li>
            <li><a href="schedule.html" onClick={onCloseMobileMenu}>Schedule</a></li>
            <li><a href="contact.html" onClick={onCloseMobileMenu}>Contact</a></li>
            <li><a href="booking.html" onClick={onCloseMobileMenu}>Book</a></li>
          </ul>
          <div className={styles.authButtonsMobile} id="authContainerMobile">
            {isLoggedIn ? (
              <>
                <a href={portalPath}><button>{portalName}</button></a>
                <button onClick={() => { onLogout(); onCloseMobileMenu(); }}>Logout</button>
              </>
            ) : (
              <>
                <a href="register.html"><button id="registerBtnMobile">Register</button></a>
                <a href="login.html"><button id="loginBtnMobile">Login</button></a>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
