import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <div className="navbar-logo">
              <span>A</span>
            </div>
            <div className="navbar-title">ABZENO</div>
          </div>
          
          <div className="navbar-nav">
            <a href="#about">About Us</a>
            <a href="#products">Products & Services</a>
            <a href="#contact" className="active">Contact</a>
          </div>
          
          <div className="navbar-actions">
            <button className="btn-primary">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;