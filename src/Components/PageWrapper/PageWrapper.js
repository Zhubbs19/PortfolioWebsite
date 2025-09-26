import React, { useEffect } from 'react';
import NavbarComponent from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import '../App.css';

/**
 * PageWrapper - Consistent layout wrapper for all pages
 * Handles document title, navbar, content area, and footer
 */
function PageWrapper({ title, children, className = '' }) {
  useEffect(() => {
    document.title = title || 'Zach Hubbard | Portfolio';
  }, [title]);

  return (
    <div className={`Global ${className}`}>
      <NavbarComponent />
      {children}
      <Footer />
    </div>
  );
}

export default PageWrapper;