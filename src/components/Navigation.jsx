import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const tabs = [
    { path: '/about/', label: 'About' },
    { path: '/resume/', label: 'Resume' },
    { path: '/portfolio/', label: 'Portfolio' },
    { path: '/blogs/', label: 'Blogs' },
    { path: '/contact/', label: 'Contact' },
  ];

  return (
    <nav className="navigation-container">
      <div className="nav-pill glass-card">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) => `nav-tab ${isActive ? 'active' : ''}`}
          >
            {tab.label}
          </NavLink>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .navigation-container {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }

        .nav-pill {
          display: flex;
          padding: 6px;
          gap: 4px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-md);
        }

        .nav-tab {
          padding: 10px 24px;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
        }

        .nav-tab:hover {
          color: var(--text-primary);
          background: #f1f5f9;
        }

        .nav-tab.active {
          color: white;
          background: var(--accent-color);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        @media (max-width: 1024px) {
          .navigation-container {
            position: sticky;
            top: 10px;
            left: 0;
            z-index: 1000;
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 0 12px;
            margin-bottom: 10px;
          }

          .nav-pill {
            padding: 4px;
            gap: 2px;
            border-radius: 14px;
            width: 100%;
            justify-content: space-between;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(12px);
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          }

          .nav-tab {
            padding: 8px 4px;
            font-size: 0.7rem;
            flex: 1;
            text-align: center;
            border-radius: 10px;
          }
        }
      ` }} />
    </nav>
  );
};

export default Navigation;
