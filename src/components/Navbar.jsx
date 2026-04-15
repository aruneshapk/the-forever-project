import React from 'react';
import './Navbar.css';
import { useTheme } from '../context/ThemeContext';


const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <button  onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? ' ☀️ ' : ' 🌙 '}
          </button>
        </div>
        
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          {/* <li><a href="#about">About</a></li> */}
          <li><a href="#experience">Experience</a></li>
          {/* <li><a href="#contact">Contact</a></li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;