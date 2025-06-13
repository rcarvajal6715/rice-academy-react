import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import ProgramCard from '../components/ProgramCard';
import Footer from '../components/Footer';
import styles from './ProgramsPage.module.css';

// Mock program data
const programsData = [
  {
    id: 1,
    imageSrc: '/images/programs/kids_camp_optimized.jpg', // Assumes images are in public/images/programs
    altText: 'Kids participating in a tennis camp',
    title: 'Kids Camp (Ages 6-10)',
    description: 'Our Kids Camp is designed to introduce young players to the fundamentals of tennis in a fun and engaging environment. We focus on developing hand-eye coordination, basic strokes, and a love for the game.',
    schedule: [
      '<strong>Dates:</strong> June 10th - August 9th (Weekly Sessions)',
      '<strong>Time:</strong> Monday - Friday, 9:00 AM - 12:00 PM'
    ]
  },
  {
    id: 2,
    imageSrc: '/images/programs/junior_development_optimized.jpg',
    altText: 'Junior players practicing tennis drills',
    title: 'Junior Development (Ages 11-16)',
    description: 'This program is for aspiring junior players looking to improve their technique, strategy, and match play. Our experienced coaches provide personalized instruction to help players reach their full potential.',
    schedule: [
      '<strong>Skill Levels:</strong> Beginner, Intermediate, Advanced',
      '<strong>Time:</strong> Monday - Thursday, 4:00 PM - 6:00 PM (Grouped by skill)'
    ]
  },
  {
    id: 3,
    imageSrc: '/images/programs/adult_clinics_optimized.jpg',
    altText: 'Adults in a tennis clinic',
    title: 'Adult Clinics (Ages 17+)',
    description: 'Whether you\'re new to tennis or looking to refine your skills, our adult clinics offer something for everyone. We cover stroke mechanics, drills, and match play in a supportive group setting.',
    schedule: [
      '<strong>NTRP Levels:</strong> 2.5 - 4.0+',
      '<strong>Evenings:</strong> Monday & Wednesday, 6:30 PM - 8:00 PM',
      '<strong>Mornings:</strong> Saturday, 9:00 AM - 10:30 AM'
    ]
  },
  {
    id: 4,
    imageSrc: '/images/programs/private_lessons_optimized.jpg',
    altText: 'Coach giving a private tennis lesson',
    title: 'Private Lessons (All Ages)',
    description: 'Get one-on-one instruction tailored to your specific needs and goals. Private lessons are the fastest way to improve your game, focusing on technique, strategy, and mental toughness.',
    schedule: [
      '<strong>Availability:</strong> By appointment',
      '<strong>Instructors:</strong> Certified C2 Tennis Academy Coaches'
    ]
  }
];


const ProgramsPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check session on component mount
  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = () => {
    const session = JSON.parse(localStorage.getItem('c2ActiveSession'));
    if (session && session.isLoggedIn) {
      setIsLoggedIn(true);
      setUserName(session.userName);
      setUserRole(session.role);
    } else {
      setIsLoggedIn(false);
      setUserName('');
      setUserRole('');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('c2ActiveSession');
    setIsLoggedIn(false);
    setUserName('');
    setUserRole('');
    // Optionally redirect to login page or home page
    // window.location.href = '/login.html'; // or router.push('/login') in Next.js
    closeMobileMenu(); // Close menu on logout
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  const portalPath = userRole === 'admin' ? '/admin-portal.html' : '/member-portal.html';
  const portalName = userRole === 'admin' ? 'Admin Portal' : 'Member Portal';

  return (
    <>
      <Head>
        <title>Our Programs - C2 Tennis Academy</title>
        <meta name="description" content="Explore the various tennis programs offered at C2 Tennis Academy, including Kids Camps, Junior Development, Adult Clinics, and Private Lessons." />
        <link rel="icon" href="/C2Favicon.png" />
      </Head>

      <Header 
        isLoggedIn={isLoggedIn}
        userName={userName}
        portalPath={portalPath}
        portalName={portalName}
        onLogout={handleLogout}
        onToggleMobileMenu={toggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <Navigation 
        isLoggedIn={isLoggedIn}
        portalPath={portalPath}
        portalName={portalName}
        onLogout={handleLogout}
        isMobileMenuOpen={isMobileMenuOpen}
        onCloseMobileMenu={closeMobileMenu}
      />

      <main className={styles.mainContent}>
        <section className={styles.welcomeSection}>
          <div className={styles.welcomeTextContainer}>
            <h1>Our Programs</h1>
            <p>
              At C2 Tennis Academy, we offer a comprehensive range of programs tailored to players of all ages and skill levels. 
              Our goal is to provide top-tier coaching that helps each player develop their game, build confidence, and foster a lifelong passion for tennis.
            </p>
          </div>
        </section>

        <section className={styles.programsDisplay}>
          <h2>Explore Our Offerings</h2>
          <div className={styles.programList}>
            {programsData.map(program => (
              <ProgramCard
                key={program.id}
                imageSrc={program.imageSrc}
                altText={program.altText}
                title={program.title}
                description={program.description}
                schedule={program.schedule}
              />
            ))}
          </div>
        </section>

        <section className={styles.locationSection}>
          <h2>Visit Us</h2>
          <p>All programs are held at our state-of-the-art facilities located at Southlake Carroll High School courts.</p>
          <p><strong>Address:</strong> 1085 S Kimball Ave, Southlake, TX 76092</p>
          {/* Simple map embed - replace with a more interactive component if needed */}
          <div className={styles.mapContainer}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.GGMapsLocation!2d-97.1580178848137!3d32.9280059809305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dd325e0000001%3A0x1f32c7e10350d3ab!2sSouthlake%20Carroll%20Senior%20High%20School%20Tennis%20Center!5e0!3m2!1sen!2sus!4v1620856989781!5m2!1sen!2sus" 
              width="600" 
              height="450" 
              className={styles.mapIframe}
              allowFullScreen="" 
              loading="lazy"
              title="Location of C2 Tennis Academy at Southlake Carroll High School courts"
            ></iframe>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProgramsPage;
