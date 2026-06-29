import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Suraj Patidar",
  "jobTitle": "Software Engineer",
  "url": "https://iamsurajpatidar18.github.io",
  "sameAs": [
    "https://github.com/iamsurajpatidar18",
    "https://in.linkedin.com/in/surajpatidar"
  ],
  "description": "Result-oriented Python Backend Developer with hands-on experience designing, developing, and maintaining scalable backend systems at PySquad."
};

function AppContent() {
  const location = useLocation();
  const canonicalUrl = `https://iamsurajpatidar18.github.io${location.pathname}${location.pathname.endsWith('/') ? '' : '/'}`;

  return (
    <div className="app-shell">
      <Helmet>
        <title>Suraj Patidar | Software Engineer | Python & Django Expert</title>
        <meta name="description" content="Portfolio of Suraj Patidar, a Python Backend Developer at PySquad Informatics LLP. Specializing in Django, FastAPI, Stripe integration, and scalable SaaS architecture." />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="glow-container">
        <div className="glow-ball ball-1"></div>
        <div className="glow-ball ball-2"></div>
      </div>

      <div className="main-layout animate-fade">
        <Sidebar />
        
        <div className="content-container">
          <Navigation />
          
          <main className="content-wrapper glass-card">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Navigate to="/about/" replace />} />
                <Route path="/about/" element={<PageWrapper><About /></PageWrapper>} />
                <Route path="/resume/" element={<PageWrapper><Resume /></PageWrapper>} />
                <Route path="/portfolio/" element={<PageWrapper><Portfolio /></PageWrapper>} />
                <Route path="/blogs/" element={<PageWrapper><Blogs /></PageWrapper>} />
                <Route path="/blogs/:id/" element={<PageWrapper><BlogDetail /></PageWrapper>} />
                <Route path="/contact/" element={<PageWrapper><Contact /></PageWrapper>} />
              </Routes>
            </AnimatePresence>
          </main>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .app-shell {
          min-height: 100vh;
          width: 100%;
          padding: 20px 12px;
          display: flex;
          justify-content: center;
          position: relative;
          background: #f1f5f9;
        }

        .glow-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          filter: blur(80px);
          opacity: 0.2;
        }

        .glow-ball {
          position: absolute;
          border-radius: 50%;
        }

        .ball-1 {
          width: 300px;
          height: 300px;
          top: -100px;
          right: -50px;
          background: rgba(99, 102, 241, 0.15);
        }

        .ball-2 {
          width: 250px;
          height: 250px;
          bottom: -50px;
          left: -30px;
          background: rgba(6, 182, 212, 0.1); 
        }

        .main-layout {
          max-width: 1240px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
        }

        .content-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
          min-width: 0;
        }

        .content-wrapper {
          padding: 20px 12px;
          flex: 1;
          min-height: auto;
        }

        @media (min-width: 1024px) {
          .app-shell {
            padding: 40px 20px;
          }
          .main-layout {
            flex-direction: row;
            align-items: flex-start;
            gap: 24px;
          }
          .content-wrapper {
            padding: 48px;
            min-height: 700px;
          }
          .glow-container {
            filter: blur(100px);
            opacity: 0.3;
          }
          .ball-1 { width: 500px; height: 500px; }
          .ball-2 { width: 400px; height: 400px; }
        }
      ` }} />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

export default App;
