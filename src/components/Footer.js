import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>&copy; {new Date().getFullYear()} Siva Vinay. All rights reserved.</p>
        {/* <div className="social-links">
          <a href="https://github.com/vinayzxcvb" aria-label="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/_siva_vinay_07/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/in/siva-vinay/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;