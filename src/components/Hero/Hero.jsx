import React, { useEffect, useRef } from 'react';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMysql } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    const lines = terminalRef.current?.querySelectorAll('.t-line');
    lines?.forEach((line, i) => {
      line.style.animationDelay = `${0.8 + i * 0.18}s`;
    });
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg-grid"></div>
      <div className="container hero-container">

        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for Opportunities
          </div>

          <h1 className="hero-name">
            Mathankumar
            <span className="hero-name-italic">.N</span>
          </h1>

          <p className="hero-role">Full Stack Developer</p>

          <p className="hero-desc">
            Building responsive, user-friendly web applications with React,
            Node.js and MySQL. Fresh perspective, solid foundations, and
            a passion for clean code.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View My Work <FiArrowRight />
            </a>
           <a
  href="/Mathankumar-cv-1.pdf"
  download
  className="btn-secondary"
>
  <FiDownload />
  Download CV
</a>
          </div>

          
        </div>

        <div className="hero-right">
          <div className="terminal-card" ref={terminalRef}>
            <div className="terminal-header">
              <div className="t-dot red"></div>
              <div className="t-dot yellow"></div>
              <div className="t-dot green"></div>
              <span className="t-title">developer.js</span>
            </div>
            <div className="terminal-body">
              <div className="t-line"><span className="t-kw">const</span> <span className="t-var">developer</span> <span className="t-op">=</span> {'{'}</div>
              <div className="t-line indent"><span className="t-key">name</span><span className="t-op">:</span> <span className="t-str">"Mathankumar N"</span>,</div>
              <div className="t-line indent"><span className="t-key">role</span><span className="t-op">:</span> <span className="t-str">"Full Stack Dev"</span>,</div>
              <div className="t-line indent"><span className="t-key">stack</span><span className="t-op">:</span> [</div>
              <div className="t-line indent2"><span className="t-str">"React.js"</span>,</div>
              <div className="t-line indent2"><span className="t-str">"Node.js"</span>,</div>
              <div className="t-line indent2"><span className="t-str">"MySQL"</span></div>
              <div className="t-line indent">],</div>
              <div className="t-line indent"><span className="t-key">status</span><span className="t-op">:</span> <span className="t-str">"Fresher - Open to Work"</span>,</div>
              <div className="t-line indent"><span className="t-key">location</span><span className="t-op">:</span> <span className="t-str">"Tirunelveli, IN"</span></div>
              <div className="t-line">{'}'}</div>
              <div className="t-line t-cursor-line">
                <span className="t-comment">// Ready to build something great</span>
                <span className="t-cursor"></span>
              </div>
            </div>
          </div>

          
        </div>

      </div>
    </section>
  );
};

export default Hero;
