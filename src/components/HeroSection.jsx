// src/components/HeroSection.jsx
import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const handleProgramsClick = () => {
    window.location.href = 'programs.html';
  };

  return (
    <section className={`${styles.hero} ${styles.stickySection}`}>
      <div className={styles.heroContent}>
        <h2>Our Mission</h2>
        <p>
          We are a tennis academy dedicated to helping people—no matter their age or background—improve at tennis so they can live longer, healthier, and happier lives.
        </p>
        <button className={styles.ctaButton} onClick={handleProgramsClick}>
          See Our Programs
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
