import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import blogData from '../data/blog_list.json';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const blog = blogData.find(post => post.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <div className="error-view">
        <h2>Blog post not found</h2>
        <button onClick={() => navigate('/blogs/')} className="btn btn-primary">
          Back to Blogs
        </button>
      </div>
    );
  }

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.desc,
    "datePublished": blog.date,
    "author": {
      "@type": "Person",
      "name": "Suraj Patidar"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://iamsurajpatidar18.github.io/blogs/${blog.id}/`
    }
  };

  return (
    <div className="blog-detail-view">
      <Helmet>
        <title>{blog.title} | Suraj Patidar Blog</title>
        <meta name="description" content={blog.desc} />
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
      </Helmet>

      <button onClick={() => navigate('/blogs/')} className="btn btn-secondary back-btn">
        <ArrowLeft size={18} /> Back to Blogs
      </button>

      <article className="blog-full-article">
        <header className="blog-detail-header">
          <div className="blog-meta-v3">
            <span className="blog-tag-v2"><Tag size={12} /> {blog.category}</span>
            <span className="blog-time-v2"><Clock size={12} /> {blog.readTime}</span>
          </div>
          <h1 className="blog-detail-title">{blog.title}</h1>
          <div className="blog-detail-date">
            <Calendar size={14} /> Published on {blog.date}
          </div>
        </header>

        <section className="blog-detail-content" dangerouslySetInnerHTML={{ __html: blog.content }}></section>
      </article>

      <style dangerouslySetInnerHTML={{ __html: `
        .blog-detail-view {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .back-btn {
          width: fit-content;
          padding: 8px 16px;
        }

        .blog-detail-header {
          display: flex;
          flex-direction: column;
          gap: 16px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 32px;
          margin-bottom: 32px;
        }

        .blog-meta-v3 {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
        }

        .blog-tag-v2, .blog-time-v2 {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-color);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .blog-detail-title {
          font-size: 2rem;
          line-height: 1.2;
          font-weight: 800;
          color: var(--text-primary);
        }

        .blog-detail-date {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .blog-detail-content {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-secondary);
        }

        .blog-detail-content h2 {
          margin: 32px 0 16px;
          font-size: 1.8rem;
          color: var(--text-primary);
        }

        .blog-detail-content h3 {
          margin: 24px 0 12px;
          font-size: 1.4rem;
          color: var(--text-primary);
        }

        .blog-detail-content p {
          margin-bottom: 20px;
        }

        .blog-detail-content ul {
          margin-bottom: 20px;
          padding-left: 24px;
          list-style: disc;
        }

        .blog-detail-content li {
          margin-bottom: 8px;
        }

        @media (min-width: 1024px) {
          .blog-detail-title {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 768px) {
          .blog-detail-title {
            font-size: 1.8rem;
          }
        }
      ` }} />
    </div>
  );
};

export default BlogDetail;
