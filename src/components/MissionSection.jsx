// src/components/MissionSection.jsx
import React from 'react';
import styles from './MissionSection.module.css';

const MissionSection = () => {
  return (
    <section className={styles.missionSection}> {/* Changed from combination */}
      <div className={styles.missionText}>
        <p>
          At C2 Tennis Academy, we believe that tennis is more than just a sport—it’s a path to physical wellness, mental resilience, and community connection. Our certified coaches tailor lessons to each student’s skill level, whether you’re picking up a racquet for the first time or competing at a collegiate level. By blending cutting-edge video analysis, AI-driven performance feedback, and compassionate mentorship, we ensure every player sees real, measurable progress.
        </p>
        <p>
          But our commitment goes beyond the court: we’re passionate about giving back. That’s why we partner with local schools and nonprofits to support underprivileged children. We provide free or low-cost clinics, supply racquets and equipment to those who can’t afford them, and offer scholarships to promising young athletes who need financial assistance. Because everyone—regardless of age or income—deserves the chance to experience the joy and lifelong benefits of tennis.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
