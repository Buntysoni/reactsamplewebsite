import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleLogoClick = () => {
    navigate('/');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMobileNavClick = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleActionClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo" onClick={handleLogoClick}>
          <div className="logo-dot"></div>
          AETHERIA
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.path} style={{ display: 'inline-block' }}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                onClick={() => handleMobileNavClick(item.path)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          {/* Mobile CTA inside menu */}
          {mobileMenuOpen && (
            <li style={{ padding: '16px 24px', listStyle: 'none' }}>
              <button 
                className="btn btn-primary btn-sm" 
                style={{ width: '100%' }}
                onClick={() => handleMobileNavClick('/contact')}
              >
                Launch Console
              </button>
            </li>
          )}
        </ul>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <button 
            className="btn btn-secondary btn-sm"
            onClick={() => handleActionClick('/services')}
          >
            Pricing
          </button>
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => handleActionClick('/contact')}
          >
            Launch Console
          </button>
        </div>

        {/* Mobile Burger Menu Icon */}
        <button
          className={`burger-menu ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </button>
      </div>
    </nav>
  );
}
