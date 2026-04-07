import React, { useState } from 'react';
import { FiMail, FiSend, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi';
import './Contact.css';
import emailjs from 'emailjs-com';
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
    "service_biyj1m7",      // un service id
    "template_lxqayol",      // un template id
    {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    },
    "KcyHRYwlCPmVhzb7i"         // un public key
  )
  .then(() => {
   
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(true)
  })
  .catch((error) => {
    console.log(error);
    alert("Error sending message ❌");
  });
  };

  const contactLinks = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'nmathankumar2005@gmail.com',
      href: 'mailto:nmathankumar2005@gmail.com',
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/mathankumar-n',
      href: 'https://www.linkedin.com/in/madhankumar-n-51460b3b8',
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      value: 'github.com/mathankumar',
      href: 'https://github.com/Mathankumar-N1403',
    },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: 'Tirunelveli, Tamil Nadu',
      href: null,
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="container contact-container">

        <div className="contact-left">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">
            Let's Build<br />Something Together
          </h2>
          <p className="contact-desc">
            I'm actively looking for my first professional opportunity as a
            Full Stack Developer. Whether it's a full-time role, internship,
            or freelance project — I'd love to connect.
          </p>

          <div className="contact-links">
            {contactLinks.map(({ icon, label, value, href }) => (
              <div className="contact-link-row" key={label}>
                <div className="contact-link-icon">{icon}</div>
                <div>
                  <p className="contact-link-label">{label}</p>
                  {href ? (
                    <a href={href} className="contact-link-value" target="_blank" rel="noopener noreferrer">
                      {value}
                    </a>
                  ) : (
                    <p className="contact-link-value plain">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-right">
          {submitted ? (
            <div className="success-card">
              <div className="success-icon">
                <FiSend />
              </div>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                <FiSend />
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;
