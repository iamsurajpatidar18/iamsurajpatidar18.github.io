import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Server, Database, Shield, Zap, Code, Terminal, Cpu, Globe, Calendar, Briefcase, Bot, Layers } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Years Exp", value: "4+", icon: <Calendar size={18} /> },
    { label: "Projects", value: "10+", icon: <Briefcase size={18} /> },
    { label: "API Systems", value: "15+", icon: <Terminal size={18} /> },
    { label: "Reliability", value: "99.9%", icon: <Shield size={18} /> }
  ];

  const services = [
    {
      icon: <Server size={24} />,
      title: "Backend Development",
      desc: "Designing and maintaining scalable backend systems using Python, Django, Flask, and FastAPI."
    },
    {
      icon: <Database size={24} />,
      title: "Data Engineering",
      desc: "Expertise in PostgreSQL and MySQL for high-performance data modeling and optimization."
    },
    {
      icon: <Shield size={24} />,
      title: "API Integration",
      desc: "Building and consuming RESTful APIs with secure authentication and third-party integrations like Stripe."
    },
    {
      icon: <Cpu size={24} />,
      title: "Core Concepts",
      desc: "Strong foundation in OOPs, Data Structures, Algorithms, and API security best practices."
    },
    {
      icon: <Bot size={24} />,
      title: "AI & LLMs",
      desc: "Integrating Large Language Models and building AI-powered applications."
    },
    {
      icon: <Layers size={24} />,
      title: "Odoo ERP",
      desc: "Customizing and developing scalable modules for Odoo ERP."
    }
  ];

  return (
    <section className="about-page">
      <Helmet>
        <title>About | Suraj Patidar | Software Engineer & Python Expert</title>
        <meta name="description" content="Learn more about Suraj Patidar, a result-oriented Software Engineer at PySquad Informatics LLP specializing in Python backend development and scalable architecture." />
      </Helmet>

      <header className="page-header">
        <h1 className="page-title">About Me</h1>
        <div className="title-bar"></div>
      </header>

      <section className="intro-text">
        <p>
          I am a <strong>Software Engineer</strong> at <strong>PySquad Informatics LLP</strong> since 2022. I am a result-oriented Python Backend Developer with hands-on experience designing, developing, and maintaining scalable backend systems.
        </p>
        <p>
          My expertise lies in the Python ecosystem, specifically <strong>Django, Flask, and FastAPI</strong>. I thrive in Agile environments, writing clean and efficient code using OOP principles, and collaborating closely with cross-functional teams to deliver high-quality software solutions.
        </p>
      </section>

      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card glass-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="services-section">
        <h3 className="section-subtitle">Technical Expertise</h3>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card glass-card">
              <div className="service-icon-wrapper">{s.icon}</div>
              <div className="service-body">
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .page-header {
          margin-bottom: 24px;
        }

        .page-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .title-bar {
          width: 50px;
          height: 5px;
          background: var(--accent-color);
          border-radius: 10px;
          box-shadow: 0 0 10px var(--accent-glow);
        }

        .intro-text {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.7;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 40px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 40px;
        }

        .stat-card {
          padding: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
        }

        .stat-icon {
          color: var(--accent-color);
          background: #f1f5f9;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-color);
        }

        .stat-value {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .section-subtitle {
          font-size: 1.5rem;
          margin-bottom: 24px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .service-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .service-icon-wrapper {
          color: var(--accent-color);
          flex-shrink: 0;
        }

        .service-body h4 {
          margin-bottom: 8px;
          font-size: 1.1rem;
        }

        .service-body p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* Desktop Overrides */
        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }
          .stat-card {
            flex-direction: row;
            text-align: left;
            padding: 24px;
          }
          .services-grid {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }
          .service-card {
            flex-direction: row;
            padding: 32px;
          }
          .page-title {
            font-size: 2.5rem;
          }
          .intro-text {
            font-size: 1.1rem;
          }
        }
      ` }} />
    </section>
  );
};

export default About;
