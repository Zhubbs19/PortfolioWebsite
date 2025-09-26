import React from 'react';
import './Footer.css';

// Footer component present on all pages
function FooterComponent() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © 2025 by Zach Hubbard. This website was created using React.js with development support using Claude AI (Anthropic).
        </p>
        <div className="footer-links">
          <a 
            href="mailto:Zhubbs19@gmail.com" 
            className="footer-link"
            aria-label="Email"
          >
            Contact
          </a>
          <a 
            href="https://www.linkedin.com/in/zachary-hubbard-39645b204/" 
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;