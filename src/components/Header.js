import React, { useState } from 'react'; // Removed 'useContext'
import ThemeToggleButton from './ThemeToggleButton';
// No longer need to import ThemeContext here

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const { theme } = useContext(ThemeContext); // This unused line is now removed

  const handleNavClick = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container header-container">
        <a href="#hero" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
          Portfolio
        </a>
        <nav className={`nav ${isNavOpen ? 'nav-open-mobile' : ''}`} aria-label="Primary Navigation">
          <ul className="nav-list">
            <li><span className="nav-link" onClick={() => handleNavClick('about')}>About</span></li>
            <li><span className="nav-link" onClick={() => handleNavClick('skills')}>Skills</span></li>
            <li><span className="nav-link" onClick={() => handleNavClick('projects')}>Projects</span></li>
            <li><span className="nav-link" onClick={() => handleNavClick('contact')}>Contact</span></li>
          </ul>
        </nav>
        
        <div className="flex items-center gap-4">
          <ThemeToggleButton />
          <button
            className={`nav-toggle ${isNavOpen ? 'nav-open' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span className="hamburger"></span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;