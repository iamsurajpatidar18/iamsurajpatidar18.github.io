import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Briefcase, Building, Download, Copy, Check, Twitter, MessageCircle } from 'lucide-react';
import avatar from '../assets/avatar.png';

const Sidebar = () => {
  const [copied, setCopied] = useState(false);

  const contactInfo = [
    {
      icon: <Mail size={16} />,
      label: 'Email',
      value: 'iamsurajpatidar@gmail.com',
      isCopyable: true
    },
    {
      icon: <MapPin size={16} />,
      label: 'Location',
      value: 'India'
    },
    {
      icon: <Briefcase size={16} />,
      label: 'Focus',
      value: 'SaaS Architecture'
    },
    {
      icon: <Building size={16} />,
      label: 'Current Organisation',
      value: 'PySquad',
      link: 'https://www.pysquad.com'
    },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('iamsurajpatidar@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside className="glass-card sidebar">
      <div className="profile-container">
        <div className="avatar-wrapper">
          <img src={avatar} alt="Suraj Patidar" className="profile-img" />
          <div className="online-indicator"></div>
        </div>
        <div className="profile-info">
          <h1 className="profile-name">Suraj Patidar</h1>
          <div className="profile-badge-container">
            <span className="tech-badge">Software Engineer</span>
            <span className="tech-badge">Python Expert</span>
          </div>
        </div>
      </div>

      <div className="separator"></div>

      <div className="contact-list">
        {contactInfo.map((info, index) => (
          <div key={index} className="contact-item">
            <div className="contact-icon">{info.icon}</div>
            <div className="contact-text">
              <p className="contact-label">{info.label}</p>
              <div className="contact-value-wrapper">
                {info.link ? (
                  <a href={info.link} target="_blank" rel="noopener noreferrer" className="contact-link-sidebar">
                    {info.value}
                  </a>
                ) : (
                  <p className="contact-value">{info.value}</p>
                )}
                {info.isCopyable && (
                  <button className="small-copy-btn" onClick={handleCopyEmail} title="Copy Email">
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sidebar-actions">
        <a href="/Suraj-Patidar-Resume.pdf" download="Suraj-Patidar-Resume.pdf" className="btn btn-primary download-btn">
          <Download size={16} />
          Download CV
        </a>
      </div>

      <div className="separator"></div>

      <div className="social-links">
        <a href="https://github.com/iamsurajpatidar18" target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={18} /></a>
        <a href="https://in.linkedin.com/in/surajpatidar" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={18} /></a>
        <a href="#" className="social-icon"><Twitter size={18} /></a>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .sidebar {
          padding: 24px;
          width: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .profile-container {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .avatar-wrapper {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 20px;
          overflow: hidden;
          background: #f1f5f9;
          border: 1px solid var(--border-color);
          flex-shrink: 0;
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .online-indicator {
          position: absolute;
          bottom: 6px;
          right: 6px;
          width: 12px;
          height: 12px;
          background: var(--success-color);
          border-radius: 50%;
          border: 2px solid #ffffff;
        }

        .profile-info {
          text-align: left;
        }

        .profile-name {
          font-size: 1.25rem;
          margin-bottom: 8px;
        }

        .profile-badge-container {
          display: flex;
          gap: 6px;
          justify-content: flex-start;
          flex-wrap: wrap;
        }

        .tech-badge {
          background: #f1f5f9;
          color: var(--accent-color);
          padding: 3px 8px;
          border-radius: 6px;
          font-size: 0.65rem;
          font-weight: 600;
          border: 1px solid var(--border-color);
        }

        .separator {
          height: 1px;
          background: #f1f5f9;
          width: 100%;
        }

        .contact-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .contact-item {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .contact-icon {
          width: 32px;
          height: 32px;
          background: #f8fafc;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          border: 1px solid #f1f5f9;
        }

        .contact-label {
          font-size: 0.6rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .contact-value-wrapper {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .contact-value, .contact-link-sidebar {
          font-size: 0.8rem;
          color: var(--text-primary);
          font-weight: 500;
          text-decoration: none;
          word-break: break-all;
        }

        .sidebar-actions .btn {
          width: 100%;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .social-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          border: 1px solid #f1f5f9;
        }

        /* Desktop Overrides */
        @media (min-width: 1025px) {
          .sidebar {
            padding: 32px;
            width: var(--sidebar-width);
            position: sticky;
            top: 40px;
            gap: 24px;
          }
          .profile-container {
            flex-direction: column;
            text-align: center;
            gap: 0;
          }
          .avatar-wrapper {
            width: 160px;
            height: 160px;
            border-radius: 32px;
            margin-bottom: 20px;
          }
          .profile-info {
            text-align: center;
          }
          .profile-name {
            font-size: 1.6rem;
            margin-bottom: 12px;
          }
          .profile-badge-container {
            justify-content: center;
            gap: 8px;
          }
          .tech-badge {
            padding: 4px 12px;
            font-size: 0.75rem;
          }
          .contact-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .contact-icon {
            width: 36px;
            height: 36px;
          }
          .contact-value, .contact-link-sidebar {
            font-size: 0.85rem;
          }
        }
      ` }} />
    </aside>
  );
};

export default Sidebar;
