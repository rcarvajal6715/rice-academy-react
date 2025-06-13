import { useState } from 'react';
import React from 'react'

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header>
        <div className="header-content">
          <div className="site-title">
            <h1>C2 Tennis Academy</h1>
            <p>Developing Champions On and Off the Court</p>
          </div>
          <button className="mobile-menu-toggle" aria-label="Open navigation menu" aria-expanded={isMobileMenuOpen} aria-controls="mainNavigation" onClick={toggleMobileMenu}>
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
        <div className="auth-buttons-desktop" id="authContainerDesktop">
          <a href="register.html"><button id="registerBtnDesktop">Register</button></a>
          <a href="login.html"><button id="loginBtnDesktop">Login</button></a>
        </div>
      </header>

      <nav className={`main-navigation ${isMobileMenuOpen ? 'mobile-menu--open' : ''}`} id="mainNavigation">
        <div className="nav-wrapper-desktop">
          <ul className="nav-links-desktop">
            <li><a href="/index.html">Home</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/programs.html">Programs</a></li>
            <li><a href="/schedule.html">Schedule</a></li>
            <li><a href="/contact.html">Contact</a></li>
            <li><a href="booking.html" className="highlighted-nav">Book</a></li>
          </ul>
          {/* Auth buttons desktop div removed from here */}
        </div>

        <div className="mobile-menu-container">
          <button className="mobile-menu-close" aria-label="Close navigation menu" onClick={toggleMobileMenu}>&times;</button>
          <ul className="nav-links-mobile">
            <li><a href="/index.html" onClick={() => { if (isMobileMenuOpen) { toggleMobileMenu(); } }}>Home</a></li>
            <li><a href="/about.html" onClick={() => { if (isMobileMenuOpen) { toggleMobileMenu(); } }}>About</a></li>
            <li><a href="/programs.html" onClick={() => { if (isMobileMenuOpen) { toggleMobileMenu(); } }}>Programs</a></li>
            <li><a href="/schedule.html" onClick={() => { if (isMobileMenuOpen) { toggleMobileMenu(); } }}>Schedule</a></li>
            <li><a href="/contact.html" onClick={() => { if (isMobileMenuOpen) { toggleMobileMenu(); } }}>Contact</a></li>
            <li><a href="booking.html" onClick={() => { if (isMobileMenuOpen) { toggleMobileMenu(); } }}>Book</a></li>
          </ul>
          <div className="auth-buttons-mobile" id="authContainerMobile">
            <a href="register.html"><button id="registerBtnMobile">Register</button></a>
            <a href="login.html"><button id="loginBtnMobile">Login</button></a>
          </div>
        </div>
      </nav>

      <main>
        {/* === Hero Section === */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">WELCOME TO</h1>
            <img
              src="/images/C2white.png"
              alt="C2 Tennis Academy logo"
              className="hero-logo"
            />
            <a href="/mission" className="hero-cta">Our Mission</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-wrapper">
          {/* Contact Details */}
          <div className="footer-col">
            <img src="/images/C2white.png" alt="C2 Tennis Academy logo" className="footer-logo" />
            <h4>Contact Us</h4>

            <p className="contact-item">
              {/* Phone icon (Heroicon phone) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="contact-icon" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l.82 2.464a1 1 0 01-.161.995l-2.16 2.16a16.025 16.025 0 006.586 6.586l2.16-2.16a1 1 0 01.995-.161l2.464.82a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.715 21 3 14.285 3 6V5z" />
              </svg>
              <a href="tel:6827022027">682-702-2027</a>
            </p>

            <p className="contact-item">
              {/* Mail icon (Material Design envelope) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="contact-icon" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16
             c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <a href="mailto:c2tennisacademy@gmail.com">c2tennisacademy@gmail.com</a>
            </p>
          </div>

          {/* Newsletter Signup Form */}
          <div className="footer-col newsletter-signup">
            <h4>Subscribe to our Newsletter</h4>
            <form id="newsletterForm">
              <input type="email" id="newsletterEmail" name="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
            <div id="newsletterMessage" className="newsletter-message" style={{ display: 'none' }}></div>
          </div>

          {/* Social Icons */}
          <div className="footer-col social">
            <h4>Follow Us</h4>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" className="social-icon" />
            </a>
          </div>

          {/* Branding */}
          <div className="footer-col">
            <p>© 2025 C2 Tennis Academy. All Rights Reserved.<br />
            Developing Champions On &amp; Off the Court</p>
          </div>
        </div>
      </footer>

      {/* Script tags will be handled separately, probably in _app.js or specific components */}
    </>
  );
}
