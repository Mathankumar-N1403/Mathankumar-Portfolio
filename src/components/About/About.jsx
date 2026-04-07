import React from 'react';
import { FiUser, FiMapPin, FiMail, FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import './About.css';

const About = () => {
  const details = [
    { icon: <FiUser />,  value: 'Mathankumar N' },
    { icon: <FiMapPin />,  value: 'Tirunelveli, Tamil Nadu' },
    { icon: <FiMail />,  value: 'nmathankumar2005@gmail.com', href: 'mailto:nmathankumar2005@gmail.com' },
    { icon: <FaLinkedinIn />,  value: 'linkedin.com/in/mathankumar-n', href: 'https://www.linkedin.com/in/madhankumar-n-51460b3b8' },
    { icon: <FiGithub />,  value: 'github.com/in/mathankumar', href: 'https://github.com/Mathankumar-N1403' },

  ];

  return (
    <section className="about" id="about" >
      <div className="container about-container">

        <div className="about-left">
          <p className="section-label" style={{fontSize:"18px",color:"brown",marginTop:"20px0"}}>About Me</p>
          <h2 className="section-title" style={{marginTop:"30px"}}>Crafting Digital<br />Experiences</h2>
          <p className="about-text" style={{marginTop:"30px"}}>
            I am a Full Stack Developer with a strong foundation in modern web technologies.
            I completed my B.Sc in Computer Science from Thiruvalluvar College and am
            currently pursuing intensive MERN Stack training at CloudSpace Design.
          </p>
          <p className="about-text">
            My passion lies in building intuitive, responsive web applications — from
            designing clean user interfaces to architecting efficient backend systems.
            I enjoy turning complex problems into elegant, user-friendly solutions.
          </p>

           
        </div>

        <div className="about-right">
          <div className="about-card">
            <div className="about-avatar">
              <span className="avatar-initials">MK</span>
              <div className="avatar-ring"></div>
            </div>

            <div className="about-details">
              {details.map(({ icon, label, value, href }) => (
                <div className="detail-row" key={label}>
                  <span className="detail-icon">{icon}</span>
                  <div className="detail-info">
                    <span className="detail-label">{label}</span>
                    {href ? (
                      <a href={href} className="detail-value link" target="_blank" rel="noopener noreferrer">
                        {value} <FiExternalLink size={11} />
                      </a>
                    ) : (
                      <span className="detail-value">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="about-stat-row">
              <div className="stat-box">
                <p className="stat-number">2+</p>
                <p className="stat-label">Projects Built</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-box">
                <p className="stat-number">6+</p>
                <p className="stat-label">Technologies</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-box">
                <p className="stat-number">1</p>
                <p className="stat-label">Year Training</p>
              </div>
            </div>
          </div>
        </div>
          <p className="section-label" style={{fontSize:"18px",color:"brown",marginTop:"-70px"}}>Education</p>

      </div>
          <div className="education-cards" >
          
            
            <div className="edu-card">
              
              <span className="edu-year">2022 – 2025</span>
              <p className="edu-degree">B.Sc Computer Science</p>
              <p className="edu-school">Thiruvalluvar College,Papanasam - Tirunelveli</p>
            </div>
            <div className="edu-card accent">
              <span className="edu-year">Jun 2025 – Dec 2025</span>
              <p className="edu-degree">MERN Stack Development</p>
              <p className="edu-school">CloudSpace Design,vickramasingapuram - Tirunelveli</p>
            </div>
          </div>
    </section>
  );
};

export default About;
