import React from 'react';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaRobot,
} from "react-icons/fa";

import {
  SiMysql,
  SiPostman,
  SiOpenai,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import './Skills.css';
  const techData = [
    // Core
    { name: "HTML", icon: <FaHtml5 />, color: "#e34c26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
    { name: "JavaScript", icon: <FaJs />, color: "#f0db4f" },
    { name: "React.js", icon: <FaReact />, color: "#61DBFB" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#68a063" },
    { name: "MySQL", icon: <SiMysql />, color: "#00758f" },

    // Tools
   
  ];

const tools=[
   { name: "GitHub", icon: <FaGithub />, color: "#000" },
{ name: "VS Code", icon: <VscVscode />, color: "#007acc" },
    { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },

    // AI Tools
    { name: "ChatGPT", icon: <SiOpenai />, color: "#10a37f" },
    { name: "Claude AI", icon: <FaRobot />, color: "#8e44ad" },
    { name: "GitHub Copilot", icon: <FaGithub />, color: "#24292e" }]
const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-header">
    
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-desc">
            Technologies and tools I work with to bring ideas to life — from
            pixel-perfect UIs to robust server-side logic.
          </p>
       </div>
     </div>

     <div className="tech-wrapper">
    
            <p className="section-label" style={{color:"brown",textAlign:"center",marginBottom:"15px"}}>Programming / Development</p>
      <div className="tech-container">
        {techData.map((tech, index) => (
          <div className="tech-card" key={index}>
            <div
              className="tech-icon"
              style={{ color: tech.color }}
            >
              {tech.icon}
            </div>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
     </div>
     <div className="tech-wrapper">
    
      <p className="section-label" style={{color:"brown",textAlign:"center",marginBottom:"15px"}}>Tools & Ai</p>
      <div className="tech-container">
        {tools.map((tech, index) => (
          <div className="tech-card" key={index}>
            <div
              className="tech-icon"
              style={{ color: tech.color }}
            >
              {tech.icon}
            </div>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
     </div>
  
    </section>
  );
};

export default Skills;
