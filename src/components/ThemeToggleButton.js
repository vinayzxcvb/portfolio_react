import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './ThemeToggleButton.css'; // We'll create this CSS file next

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-toggle-button" aria-label="Toggle theme">
      <i className={theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'}></i>
    </button>
  );
};

export default ThemeToggleButton;