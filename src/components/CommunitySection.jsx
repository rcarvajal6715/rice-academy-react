// src/components/CommunitySection.jsx
import React from 'react';
import styles from './CommunitySection.module.css';

const CommunitySection = () => {
  return (
    <section className={styles.communitySection}>
      <h3>Community Outreach</h3>
      <div className={styles.communityGrid}>
        {/* Card 1 */}
        <div className={styles.communityCard}>
          <h4>Equipment Donation Drive</h4>
          <p>
            Throughout the year, we organize donation events where players and families can drop off gently used racquets, tennis shoes, and balls. Every item collected is refurbished and distributed to local youth centers in underserved neighborhoods.
          </p>
        </div>
        {/* Card 2 */}
        <div className={styles.communityCard}>
          <h4>Free Youth Clinics</h4>
          <p>
            Once a month, our coaches run free clinics for kids who otherwise wouldn’t have access to tennis lessons. These clinics cover basic techniques, sportsmanship, and healthy habits—giving each child a solid foundation.
          </p>
        </div>
        {/* Card 3 */}
        <div className={styles.communityCard}>
          <h4>Scholarship Program</h4>
          <p>
            Talented young athletes often face financial barriers. We award partial tuition scholarships to students who demonstrate dedication and athletic promise, covering up to 50% of coaching fees.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
