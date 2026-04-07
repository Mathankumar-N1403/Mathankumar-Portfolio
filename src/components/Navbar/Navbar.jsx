import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="nav-container container">
        <a href="#home" className="nav-logo">
          <span className="logo-mk">Mathan-Dev</span>
        
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:mathankumarn2005@gmail.com"
              className="nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
