const fs = require('fs');
const path = './src/data/blog_list.json';

const newBlogs = [
  {
    "id": "odoo-sap-integration-guide",
    "title": "Bridging the Gap: Integrating Odoo ERP with SAP for Seamless Operations",
    "date": "Jun 20, 2026",
    "readTime": "15 min read",
    "category": "ERP Integration",
    "desc": "A comprehensive guide on connecting Odoo and SAP, covering middleware, data mapping, and common challenges.",
    "content": "<h2>Why Integrate Odoo and SAP?</h2><p>Many enterprises use SAP for their core financial and HR operations, while leveraging Odoo for agile CRM, e-commerce, or specialized manufacturing workflows. Integrating the two ensures a single source of truth and eliminates manual data entry.</p><h3>Choosing the Right Integration Strategy</h3><p>There are several approaches to bridging these two powerful systems. Point-to-point API integration is straightforward for simple workflows, but using an Enterprise Service Bus (ESB) or middleware platform like MuleSoft or a custom Python microservice provides greater scalability and error handling.</p><h3>Key Data Flows</h3><p>The most critical integration points typically involve syncing Customer Masters, Product Masters, and pushing Sales Orders from Odoo into SAP for fulfillment and invoicing. Ensuring bidirectional sync with robust conflict resolution is paramount.</p><h3>Handling Errors and Retries</h3><p>Network failures happen. Your integration layer must implement exponential backoff and maintain a dead-letter queue for failed transactions. This guarantees that a temporary SAP outage won't result in lost Odoo orders.</p><h3>Conclusion</h3><p>Integrating Odoo and SAP unlocks the best of both worlds: Odoo's flexibility and SAP's enterprise robustness. With a well-architected middleware layer, you can create a unified ecosystem that scales with your business.</p>"
  },
  {
    "id": "odoo-sap-data-sync-strategies",
    "title": "Data Synchronization Strategies: Odoo and SAP Architecture",
    "date": "Jun 18, 2026",
    "readTime": "12 min read",
    "category": "Architecture",
    "desc": "Deep dive into real-time vs batch processing, payload transformation, and security in Odoo-SAP integrations.",
    "content": "<h2>Real-time vs. Batch Processing</h2><p>When designing an Odoo-SAP integration, the first architectural decision is whether to sync data in real-time or via scheduled batches. Real-time sync using webhooks provides immediate visibility but puts more load on both systems. Batch processing is often preferred for high-volume transactions like inventory updates.</p><h3>Payload Transformation and Mapping</h3><p>Odoo and SAP have vastly different data models. A robust integration requires a transformation layer. For example, Odoo's res.partner must be mapped to SAP's Business Partner structure. Using Python tools like Pandas or dedicated ETL tools can streamline this mapping process.</p><h3>Security and Authentication</h3><p>Securing the data pipeline is critical. Implement OAuth2 or mutually authenticated TLS (mTLS) between your middleware and both ERPs. Never hardcode credentials; use a secure vault like AWS Secrets Manager.</p><h3>Monitoring the Pipeline</h3><p>Visibility into the integration is just as important as the integration itself. Implement comprehensive logging and set up alerts for sync failures. A dashboard showing successful vs. failed syncs per hour is essential for maintaining operational health.</p>"
  },
  {
    "id": "production-rag-langchain-vector-db",
    "title": "Building Production-Ready RAG Pipelines with LangChain and Vector Databases",
    "date": "Jun 15, 2026",
    "readTime": "20 min read",
    "category": "AI & Machine Learning",
    "desc": "Learn how to move Retrieval-Augmented Generation (RAG) from prototype to production using scalable architecture.",
    "content": "<h2>The Evolution of RAG</h2><p>Retrieval-Augmented Generation (RAG) has moved from a neat AI trick to a core enterprise requirement. Building a prototype in a Jupyter notebook is easy; making it reliable, fast, and secure in production is hard.</p><h3>Choosing the Right Vector Database</h3><p>The foundation of any RAG pipeline is the vector database. Options like Pinecone, Weaviate, and pgvector (for PostgreSQL) each have their pros and cons. If you're already deeply invested in the Postgres ecosystem, pgvector is an excellent choice for keeping your infrastructure simple.</p><h3>LangChain in Production</h3><p>LangChain is a powerful orchestration framework, but it can be unwieldy. In production, avoid deeply nested LCEL (LangChain Expression Language) chains that are hard to debug. Instead, use LangChain for the core retrieval and generation steps, but wrap them in robust Python error handling and logging.</p><h3>Handling Hallucinations</h3><p>Even with RAG, LLMs can hallucinate. Implement a 'critic' step in your pipeline where a smaller, faster model evaluates the generated answer against the retrieved context. If the confidence is low, fall back to a predefined response or escalate to a human.</p><h3>Conclusion</h3><p>A production RAG system requires a software engineering mindset, not just data science. By focusing on scalable vector storage, robust orchestration, and strict evaluation, you can build AI features that users trust.</p>"
  },
  {
    "id": "optimizing-rag-chunking-hybrid-search",
    "title": "Optimizing RAG: Advanced Chunking Strategies and Hybrid Search",
    "date": "Jun 10, 2026",
    "readTime": "18 min read",
    "category": "AI & Machine Learning",
    "desc": "Take your RAG pipeline to the next level with semantic chunking, metadata filtering, and hybrid search techniques.",
    "content": "<h2>Beyond Basic Chunking</h2><p>The most common mistake in RAG pipelines is naive text chunking. Splitting documents strictly by character count often breaks sentences or logical thoughts, leading to poor retrieval. Instead, use semantic chunking—splitting by paragraphs or using NLP to identify logical boundaries.</p><h3>The Power of Metadata</h3><p>Vectors alone aren't always enough. Attach rich metadata to your chunks (e.g., date, author, document type). This allows you to perform pre-filtering before the vector search. For example, 'Find answers about policy X, but only in documents from 2025 onwards.'</p><h3>Implementing Hybrid Search</h3><p>Vector search is great for semantic meaning but terrible for exact keyword matching (like part numbers or specific names). Hybrid search combines dense vector retrieval with sparse keyword retrieval (like BM25). By using a reciprocal rank fusion algorithm, you can combine both results for vastly superior accuracy.</p><h3>Re-ranking for Precision</h3><p>Finally, retrieve a larger number of documents (e.g., top 20) and use a dedicated cross-encoder model to re-rank them before passing the top 3-5 to your LLM. This two-stage retrieval process adds a slight latency penalty but dramatically improves the quality of the final generation.</p>"
  }
];

const data = JSON.parse(fs.readFileSync(path, 'utf8'));
const updatedData = [...newBlogs, ...data];
fs.writeFileSync(path, JSON.stringify(updatedData, null, 2));
console.log('Successfully added 4 blogs!');
