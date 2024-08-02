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
          <a href="#" className="navbar-buttona"></a>
          <a href="#" className="navbar-buttonb"></a>
          <a href="#" className="navbar-buttonc"></a>
          <a href="#" className="navbar-buttond"></a>
        </div>
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
