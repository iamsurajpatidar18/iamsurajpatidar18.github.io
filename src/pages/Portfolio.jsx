import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Eye, Code, Layers, Server, Database, Shield } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Marinapy",
      category: "SaaS Platform",
      desc: "Multi-portal SaaS platform for marina & boating management. Designed and implemented REST APIs for booking management, user roles, and admin workflows.",
      tech: ["Python", "Django", "DRF", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      highlight: "Marina Management"
    },
    {
      title: "Upstrm",
      category: "Fintech",
      desc: "Developed Flask-based backend services and integrated Stripe payment gateway for digital asset purchases and server-side optimizations.",
      tech: ["Python", "Flask", "Stripe", "JS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      highlight: "Stripe Integration"
    },
    {
      title: "Sharelyze",
      category: "Analytics",
      desc: "Backend services for file upload, sharing, and analytics. Implemented APIs to track file views and downloads in real-time.",
      tech: ["Python", "Django", "DRF", "React"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      highlight: "File Analytics"
    },
    {
      title: "Feltiv",
      category: "Media Processing",
      desc: "Backend modules for voice automation, subtitling, and accessibility tools. Contributed to media processing workflows and API logic.",
      tech: ["Python", "Django", "DRF"],
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
      highlight: "Media Automation"
    }
  ];

  return (
    <section className="portfolio-page">
      <Helmet>
        <title>Portfolio | Suraj Patidar | Backend Projects & Case Studies</title>
        <meta name="description" content="Explore the technical portfolio of Suraj Patidar, featuring scalable SaaS platforms, payment integrations (Stripe), and analytics engines built with Python and Django." />
      </Helmet>

      <header className="page-header">
        <h1 className="page-title">Portfolio</h1>
        <div className="title-bar"></div>
      </header>

      <div className="projects-container">
        {projects.map((project, i) => (
          <article 
            key={i} 
            className="project-card-premium glass-card"
          >
            <div className="project-preview">
              <img src={project.image} alt={`${project.title} - ${project.highlight}`} className="project-thumbnail" loading="lazy" />
              <div className="project-badge">{project.highlight}</div>
              <div className="project-actions">
                <div className="action-icon" aria-label="View Project"><Eye size={20} /></div>
                <div className="action-icon" aria-label="View Code"><Code size={20} /></div>
              </div>
            </div>
            
            <div className="project-details">
              <div className="project-meta">
                <p className="project-cat">{project.category}</p>
                <h3 className="project-name">{project.title}</h3>
              </div>
              <p className="project-description">{project.desc}</p>
              <div className="project-tags">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="p-tag">{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .projects-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        .project-card-premium {
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .project-preview {
          position: relative;
          width: 100%;
          aspect-ratio: 16/10;
          overflow: hidden;
        }

        .project-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card-premium:hover .project-thumbnail {
          transform: scale(1.08);
        }

        .project-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: #ffffff;
          color: var(--accent-color);
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border: 1px solid var(--border-color);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .project-actions {
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card-premium:hover .project-actions {
          opacity: 1;
        }

        .action-icon {
          width: 48px;
          height: 48px;
          background: #ffffff;
          color: var(--text-primary);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
        }

        .action-icon:hover {
          color: var(--accent-color);
          border-color: var(--accent-color);
          transform: translateY(-4px);
        }

        .project-details {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .project-cat {
          font-size: 0.8rem;
          color: var(--accent-color);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 4px;
        }

        .project-name {
          font-size: 1.4rem;
          font-weight: 700;
        }

        .project-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .project-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .p-tag {
          font-size: 0.75rem;
          background: #f1f5f9;
          color: var(--text-secondary);
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid var(--border-color);
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .projects-container {
            grid-template-columns: 1fr;
          }
        }
      ` }} />
    </section>
  );
};

export default Portfolio;
