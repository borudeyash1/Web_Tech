import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import './App.css';
import { useState } from 'react';

const Home = () => (
  <section className="content-area">
    <h1>Welcome to MyApp!</h1>
    <p>This is a sample page with Navbar, Sidebar, and Footer components.</p>
  </section>
);

const About = () => (
  <section className="content-area">
    <h1>About</h1>
    <p>This is the About page. Here you can add information about your app or team.</p>
  </section>
);

const Contact = () => (
  <section className="content-area">
    <h1>Contact</h1>
    <p>This is the Contact page. Add your contact details or a form here.</p>
  </section>
);

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <Router>
      <div className="app-layout">
        <Navbar onToggleSidebar={() => setSidebarOpen((open) => !open)} sidebarOpen={sidebarOpen} />
        <div className="main-content">
          {sidebarOpen && <Sidebar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
// Dashboard, Profile, Settings, NotFound pages
const Dashboard = () => (
  <section className="content-area">
    <h1>Dashboard</h1>
    <p>Welcome to your dashboard. Here you can see an overview of your activity.</p>
  </section>
);

const Profile = () => (
  <section className="content-area">
    <h1>Profile</h1>
    <p>Manage your profile information here.</p>
  </section>
);

const Settings = () => (
  <section className="content-area">
    <h1>Settings</h1>
    <p>Adjust your preferences and settings here.</p>
  </section>
);

const NotFound = () => (
  <section className="content-area">
    <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </section>
);

export default App;
