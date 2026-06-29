import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Briefcase, Award, GraduationCap, Terminal, Database, Cpu, Globe, Brain, Layers } from 'lucide-react';

const Resume = () => {
  const experience = [
    {
      title: "Software Engineer",
      company: "PySquad Informatics LLP",
      period: "July 2022 - Present",
      desc: "Designing, developing, and maintaining backend applications using Python, Django, and Flask. Building RESTful APIs, optimizing PostgreSQL performance, and collaborating in an Agile/Scrum environment."
    }
  ];

  const education = [
    {
      title: "Bachelor’s Degree in Computer Science",
      institution: "GGTU",
      period: "2017 - 2020",
      desc: "Focused on core computer science principles, data structures, and algorithms."
    }
  ];

  const skillGroups = [
    {
      title: "Languages & Frameworks",
      icon: <Terminal size={18} />,
      skills: ["Python", "Django", "Flask", "FastAPI", "Odoo", "REST APIs"]
    },
    {
      title: "Databases",
      icon: <Database size={18} />,
      skills: ["PostgreSQL", "MySQL", "SQL", "NoSQL Concepts"]
    },
    {
      title: "Backend & Tools",
      icon: <Globe size={18} />,
      skills: ["Celery", "Redis", "Stripe", "Selenium", "Git", "AWS (EC2)"]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain size={18} />,
      skills: ["LLMs", "LangChain", "Vector Databases", "OpenAI API", "RAG"]
    },
    {
      title: "Core Concepts",
      icon: <Cpu size={18} />,
      skills: ["OOPs", "Data Structures", "Algorithms", "API Security", "Unit Testing"]
    }
  ];

  return (
    <section className="resume-page">
      <Helmet>
        <title>Resume | Suraj Patidar | Software Engineer Experience & Skills</title>
        <meta name="description" content="View the professional resume of Suraj Patidar. Highlights include Python development at PySquad, backend architecture skills, and a Computer Science degree from GGTU." />
      </Helmet>

      <header className="page-header">
        <h1 className="page-title">Resume</h1>
        <div className="title-bar"></div>
      </header>

      <div className="resume-grid">
        <section className="resume-column">
          <div className="resume-section-header">
            <div className="icon-badge"><Briefcase size={20} /></div>
            <h3 className="resume-section-title">Experience</h3>
          </div>

          <div className="resume-timeline">
            {experience.map((exp, i) => (
              <article key={i} className="timeline-block">
                <div className="timeline-dot"></div>
                <h4 className="timeline-title">{exp.title}</h4>
                <p className="timeline-subtitle">{exp.company} • {exp.period}</p>
                <p className="timeline-text">{exp.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-column">
          <div className="resume-section-header">
            <div className="icon-badge"><GraduationCap size={20} /></div>
            <h3 className="resume-section-title">Education</h3>
          </div>

          <div className="resume-timeline">
            {education.map((edu, i) => (
              <article key={i} className="timeline-block">
                <div className="timeline-dot"></div>
                <h4 className="timeline-title">{edu.title}</h4>
                <p className="timeline-subtitle">{edu.institution} • {edu.period}</p>
                <p className="timeline-text">{edu.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="skills-section-v2">
        <h3 className="section-subtitle">Technical Skills</h3>
        <div className="skills-container-v2">
          {skillGroups.map((group, i) => (
            <div key={i} className="skill-group-card glass-card">
              <div className="skill-group-header">
                <div className="skill-group-icon">{group.icon}</div>
                <h4>{group.title}</h4>
              </div>
              <div className="skill-pills">
                {group.skills.map((skill, idx) => (
                  <span key={idx} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        .resume-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          margin-bottom: 60px;
        }

        .resume-section-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
        }

        .icon-badge {
          width: 44px;
          height: 44px;
          background: #f1f5f9;
          color: var(--accent-color);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-color);
        }

        .resume-section-title {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .resume-timeline {
          position: relative;
          padding-left: 32px;
          border-left: 1px solid var(--border-color);
        }

        .timeline-block {
          position: relative;
          margin-bottom: 40px;
        }

        .timeline-dot {
          position: absolute;
          left: -37.5px;
          top: 6px;
          width: 10px;
          height: 10px;
          background: var(--accent-color);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-glow);
          border: 2px solid #ffffff;
        }

        .timeline-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .timeline-subtitle {
          font-size: 0.85rem;
          color: var(--accent-color);
          font-weight: 600;
          margin-bottom: 12px;
        }

        .timeline-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .skills-container-v2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .skill-group-card {
          padding: 24px;
        }

        .skill-group-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .skill-group-icon {
          color: var(--accent-color);
        }

        .skill-group-card h4 {
          font-size: 1.1rem;
          font-weight: 700;
        }

        .skill-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-pill {
          background: #f8fafc;
          color: var(--text-secondary);
          padding: 6px 14px;
          border-radius: 10px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid var(--border-color);
          transition: all 0.2s ease;
        }

        .skill-pill:hover {
          color: var(--accent-color);
          border-color: var(--accent-color);
          transform: translateY(-2px);
          background: #ffffff;
        }

        @media (max-width: 900px) {
          .resume-grid, .skills-container-v2 {
            grid-template-columns: 1fr;
          }
        }
      ` }} />
    </section>
  );
};

export default Resume;
