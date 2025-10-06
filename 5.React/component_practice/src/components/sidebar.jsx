
import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => (
  <aside className="sidebar">
    <ul>
      <li><NavLink to="/dashboard" activeclassname="active">Dashboard</NavLink></li>
      <li><NavLink to="/profile" activeclassname="active">Profile</NavLink></li>
      <li><NavLink to="/settings" activeclassname="active">Settings</NavLink></li>
    </ul>
  </aside>
);

export default Sidebar;
