import React from 'react';
import './navbar.css';


const Navbar = ({ onToggleSidebar, sidebarOpen }) => (
  <nav className="navbar">
    <button className="sidebar-toggle" onClick={onToggleSidebar} aria-label="Toggle sidebar">
      {sidebarOpen ? '☰' : '☰'}
    </button>
    <div className="navbar-logo">Sanjivani</div>
    <ul className="navbar-links">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
