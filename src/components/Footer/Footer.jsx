import React from 'react';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <a href="#home" className="footer-logo">
            Mathan-Dev
          </a>
          <p className="footer-tagline">Full Stack Developer — Tirunelveli, IN</p>
          <p></p>
        </div>

        <div className="footer-center">
          <nav className="footer-nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer-right">
          <div className="footer-socials">
            <a href="mailto:mathankumarn2005@gmail.com" aria-label="Email" className="footer-social">
              <FiMail />
            </a>
            <a href="https://www.linkedin.com/in/madhankumar-n-51460b3b8" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social">
              <FiLinkedin />
            </a>
            <a href="https://github.com/Mathankumar-N1403" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-social">
              <FiGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copy">
            &copy; {currentYear} Mathankumar N. Designed and built with React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
