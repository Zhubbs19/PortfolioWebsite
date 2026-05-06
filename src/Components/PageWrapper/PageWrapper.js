import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarComponent from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import '../App.css';

function PageWrapper({ title, children, className = '' }) {
  const location = useLocation();

  useEffect(() => {
    document.title = title || 'Zach Hubbard | Portfolio';
  }, [title]);

  // Scroll-reveal: observe grid items and section headers inside content cards
  useEffect(() => {
    let io;
    const timer = setTimeout(() => {
      io = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('ao-vis');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
      );

      // Stagger grid items within each row
      document.querySelectorAll('.about-content .MuiGrid-container').forEach(row => {
        row.querySelectorAll(':scope > .MuiGrid-item').forEach((item, idx) => {
          item.style.setProperty('--ao-delay', `${idx * 90}ms`);
          item.classList.remove('ao-vis');
          item.classList.add('ao');
          io.observe(item);
        });
      });

      // Section headers fade up individually
      document.querySelectorAll('.about-content .subheader, .about-content .attribution-header').forEach(el => {
        el.style.setProperty('--ao-delay', '0ms');
        el.classList.remove('ao-vis');
        el.classList.add('ao');
        io.observe(el);
      });
    }, 60);

    return () => {
      clearTimeout(timer);
      if (io) io.disconnect();
    };
  }, [location.pathname]);

  return (
    <div className={`Global ${className}`}>
      <NavbarComponent />
      <div className="page-scroll">
        <div key={location.pathname} className="page-content">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default PageWrapper;