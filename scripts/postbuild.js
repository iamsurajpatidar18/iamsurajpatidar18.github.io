import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, '../dist');
const blogDataPath = path.resolve(__dirname, '../src/data/blog_list.json');

const blogData = JSON.parse(fs.readFileSync(blogDataPath, 'utf8'));
const blogSlugs = blogData.map(post => post.id);

const pages = [
  'about',
  'resume',
  'portfolio',
  'blogs',
  'contact',
  ...blogSlugs.map(slug => `blogs/${slug}`)
];

const indexPath = path.join(distPath, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html not found!');
  process.exit(1);
}

const indexContent = fs.readFileSync(indexPath, 'utf8');

// Define metadata for static injection (aligned with React Helmet)
const metadata = {
  'about': {
    title: 'About | Suraj Patidar | Software Engineer & Python Expert',
    desc: 'Learn more about Suraj Patidar, a result-oriented Software Engineer at PySquad Informatics LLP specializing in Python backend development and scalable architecture.'
  },
  'resume': {
    title: 'Resume | Suraj Patidar | Python & Django Expert',
    desc: 'Professional resume of Suraj Patidar, Python Backend Developer. Designing scalable SaaS, Stripe billing, APIs, and microservices.'
  },
  'portfolio': {
    title: 'Portfolio | Projects by Suraj Patidar',
    desc: 'Explore the backend engineering projects, APIs, and SaaS architectures built by Suraj Patidar.'
  },
  'blogs': {
    title: 'Insights & Engineering Notes | Suraj Patidar',
    desc: 'Technical articles on Python, Django ORM optimization, FastAPI, Stripe billing architectures, Redis, and Celery background tasks.'
  },
  'contact': {
    title: 'Contact | Get in Touch with Suraj Patidar',
    desc: 'Contact Suraj Patidar for collaborations, backend engineering consulting, or scalable systems development.'
  }
};

// Add blog posts metadata
blogData.forEach(post => {
  metadata[`blogs/${post.id}`] = {
    title: `${post.title} | Suraj Patidar`,
    desc: post.desc
  };
});

// Update root index.html to have root canonical tag
const rootCanonicalTag = '  <link rel="canonical" href="https://iamsurajpatidar18.github.io/" />';
let updatedRootContent = indexContent;
if (!indexContent.includes('rel="canonical"')) {
  updatedRootContent = indexContent.replace('</head>', `${rootCanonicalTag}\n  </head>`);
  fs.writeFileSync(indexPath, updatedRootContent);
  console.log('Injected canonical tag into root index.html');
}

pages.forEach(page => {
  const pagePath = path.join(distPath, page);
  if (!fs.existsSync(pagePath)) {
    fs.mkdirSync(pagePath, { recursive: true });
  }

  const pageMeta = metadata[page] || {
    title: 'Suraj Patidar | Software Engineer | Python & Django Expert',
    desc: 'Portfolio of Suraj Patidar, a Python Backend Developer at PySquad Informatics LLP. Specializing in Django, FastAPI, Stripe integration, and scalable SaaS architecture.'
  };

  const pageCanonicalUrl = `https://iamsurajpatidar18.github.io/${page}/`;
  const canonicalTag = `  <link rel="canonical" href="${pageCanonicalUrl}" />`;

  let pageContent = indexContent;
  
  // Inject canonical tag
  pageContent = pageContent.replace('</head>', `${canonicalTag}\n  </head>`);
  
  // Inject page-specific title
  pageContent = pageContent.replace(/<title>.*?<\/title>/, `<title>${pageMeta.title}</title>`);
  
  // Inject page-specific description
  pageContent = pageContent.replace(/<meta name="description" content=".*?"\s*\/?>/, `<meta name="description" content="${pageMeta.desc}" />`);

  fs.writeFileSync(path.join(pagePath, 'index.html'), pageContent);
  console.log(`Generated optimized: ${page}/index.html`);
});

// Also create a 404.html as a final fallback (using root index content)
fs.writeFileSync(path.join(distPath, '404.html'), updatedRootContent);
console.log('Generated: 404.html');
