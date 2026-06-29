import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Linkedin, Github, Twitter, MapPin, MessageCircle, ExternalLink, Phone } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: <Linkedin size={24} />, 
      value: "in/surajpatidar", 
      url: "https://in.linkedin.com/in/surajpatidar",
      color: "#0077b5"
    },
    { 
      name: "GitHub", 
      icon: <Github size={24} />, 
      value: "iamsurajpatidar18", 
      url: "https://github.com/iamsurajpatidar18",
      color: "#333"
    },
    { 
      name: "Email", 
      icon: <Mail size={24} />, 
      value: "iamsurajpatidar@gmail.com", 
      url: "mailto:iamsurajpatidar@gmail.com",
      color: "#ea4335"
    }
  ];

  return (
    <section className="contact-page-v3">
      <Helmet>
        <title>Contact | Suraj Patidar | Let's Connect</title>
        <meta name="description" content="Get in touch with Suraj Patidar for collaborations, backend engineering consulting, or just a friendly chat. Available via WhatsApp, LinkedIn, and Email." />
      </Helmet>

      <header className="page-header">
        <h1 className="page-title">Get in Touch</h1>
        <div className="title-bar"></div>
      </header>

      <section className="contact-hero">
        <div className="hero-content">
          <h2 className="hero-title">Let's build something <span className="accent-text">extraordinary</span> together.</h2>
          <p className="hero-subtitle">
            I'm currently open to new opportunities, collaborations, or just a friendly chat about backend architecture. 
            Drop me a line or connect with me on social platforms.
          </p>
        </div>
      </section>

      <div className="contact-grid-v3">
        {socialLinks.map((link, i) => (
          <motion.a 
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card-v3 glass-card"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card-icon-v3" style={{ color: link.color, background: `${link.color}10` }}>
              {link.icon}
            </div>
            <div className="card-info-v3">
              <span className="card-label-v3">{link.name}</span>
              <p className="card-value-v3">{link.value}</p>
            </div>
            <div className="card-arrow-v3">
              <ExternalLink size={18} />
            </div>
          </motion.a>
        ))}
      </div>

      <section className="additional-info-v3 glass-card">
        <div className="info-item-v3">
          <MapPin className="info-icon-v3" />
          <div>
            <h4>Location</h4>
            <p>India</p>
          </div>
        </div>
        <div className="info-item-v3">
          <MessageCircle className="info-icon-v3" />
          <div>
            <h4>Response Time</h4>
            <p>Usually within 24 hours</p>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-page-v3 {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .contact-hero {
          padding: 40px 0;
          text-align: left;
        }

        .hero-title {
          font-size: 2.8rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 24px;
          color: var(--text-primary);
        }

        .accent-text {
          color: var(--accent-color);
          position: relative;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 700px;
          line-height: 1.6;
        }

        .contact-grid-v3 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .contact-card-v3 {
          display: flex;
          align-items: center;
          padding: 32px;
          gap: 24px;
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }

        .card-icon-v3 {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .card-info-v3 {
          flex: 1;
        }

        .card-label-v3 {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          display: block;
          margin-bottom: 4px;
        }

        .card-value-v3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .card-arrow-v3 {
          color: var(--text-muted);
          opacity: 0.3;
          transition: all 0.3s ease;
        }

        .contact-card-v3:hover .card-arrow-v3 {
          opacity: 1;
          color: var(--accent-color);
          transform: translateX(4px);
        }

        .additional-info-v3 {
          display: flex;
          justify-content: space-around;
          padding: 40px;
          gap: 32px;
        }

        .info-item-v3 {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .info-icon-v3 {
          color: var(--accent-color);
          width: 28px;
          height: 28px;
        }

        .info-item-v3 h4 {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .info-item-v3 p {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        @media (max-width: 900px) {
          .contact-grid-v3 {
            grid-template-columns: 1fr;
          }
          .hero-title {
            font-size: 2.2rem;
          }
          .additional-info-v3 {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      ` }} />
    </section>
  );
};

export default Contact;
