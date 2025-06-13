import React, { useState } from 'react'; // Added useState
import Header from './Header';
import Navigation from './Navigation'; // Import Navigation
import Footer from './Footer'; // Import Footer
import AddEditLessonForm from './AddEditLessonForm'; // New import

const AdminPortal = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="admin-portal">
      <Header isMobileMenuOpen={isMobileMenuOpen} onToggleMobileMenu={toggleMobileMenu} />
      <Navigation isMobileMenuOpen={isMobileMenuOpen} closeMobileMenu={closeMobileMenu} />
      <main>
        <AddEditLessonForm />
        {/* Other main content like scheduled lessons will go here later */}
      </main>
      <Footer />
    </div>
  );
};

export default AdminPortal;
