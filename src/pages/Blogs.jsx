import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, Clock, Tag } from 'lucide-react';
import blogData from '../data/blog_list.json';

const Blogs = () => {
  return (
    <section className="blogs-page">
      <Helmet>
        <title>Blogs | Suraj Patidar | Backend Engineering Insights</title>
        <meta name="description" content="Technical blog by Suraj Patidar. In-depth articles on Python, Django SaaS architecture, Stripe payments, PostgreSQL optimization, and AWS deployments." />
      </Helmet>

      <header className="page-header">
        <h1 className="page-title">Blogs</h1>
        <div className="title-bar"></div>
      </header>

      <div className="blog-container">
        {[...blogData].map((post) => (
          <article 
            key={post.id} 
            className="blog-card-premium glass-card"
          >
            <Link to={`/blogs/${post.id}/`} className="blog-link-wrapper">
              <div className="blog-inner">
                <div className="blog-meta-v2">
                  <span className="blog-tag-v2"><Tag size={12} /> {post.category}</span>
                  <span className="blog-time-v2"><Clock size={12} /> {post.readTime}</span>
                </div>
                <h3 className="blog-title-v2">{post.title}</h3>
                <p className="blog-excerpt-v2">{post.desc}</p>
                
                <div className="blog-footer-v2">
                  <span className="blog-date-v2">{post.date}</span>
                  <div className="btn btn-secondary blog-read-btn">
                    Read Article <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .blog-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .blog-card-premium {
          cursor: pointer;
          width: 100%;
        }

        .blog-link-wrapper {
          text-decoration: none;
          color: inherit;
          display: block;
          padding: 20px;
        }

        .blog-meta-v2 {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 12px;
        }

        .blog-tag-v2, .blog-time-v2 {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--accent-color);
          display: flex;
          align-items: center;
          gap: 6px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .blog-title-v2 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 10px;
          line-height: 1.3;
          word-break: break-word;
        }

        .blog-excerpt-v2 {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .blog-footer-v2 {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid var(--border-color);
        }

        .blog-date-v2 {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .blog-read-btn {
          padding: 10px 16px;
          font-size: 0.85rem;
          width: 100%;
        }

        /* Desktop Overrides */
        @media (min-width: 768px) {
          .blog-container {
            gap: 24px;
          }
          .blog-link-wrapper {
            padding: 32px;
          }
          .blog-title-v2 {
            font-size: 1.6rem;
          }
          .blog-excerpt-v2 {
            font-size: 1rem;
          }
          .blog-footer-v2 {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding-top: 24px;
          }
          .blog-read-btn {
            width: auto;
          }
        }
      ` }} />
    </section>
  );
};

export default Blogs;
