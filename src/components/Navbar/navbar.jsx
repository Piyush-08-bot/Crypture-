import React, { useState } from 'react';
import "./navbar.css";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Crypture</div>
       

      
      <ul className={isMobileMenuOpen ? 'nav-links mobile' : 'nav-links'}> {/* change css in mobile or desktop view*/}
        <li><a href="#markets">Markets</a></li>
        <li><a href="#converter">Converter</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#login" className="btn login">Login</a></li>
        <li><a href="#signup" className="btn signup">Sign Up</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
