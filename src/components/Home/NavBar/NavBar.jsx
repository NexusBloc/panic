import React, { useState } from 'react';
import './NavBar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
        {/* <a href="#" className="navbar-logo">Logo</a> */}
      <div className="navbar-container">
        <div className={`navbar-buttons ${menuOpen ? 'open' : ''}`}>
          <a href="#" className="navbar-button">Marketplace</a>
          <a href="#" className="navbar-button">Collection</a>
          <a href="#" className="navbar-button">Mint Now</a>
          <a href="#" className="navbar-button">Connect</a>
        </div>
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
