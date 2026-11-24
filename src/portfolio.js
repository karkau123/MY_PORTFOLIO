export const profile = {
  email: "singhkartikeya202@gmail.com",
  github: "https://github.com/karkau123",
  linkedin: "https://www.linkedin.com/in/kartikeya-singh-735a34233/",
  leetcode: "https://leetcode.com/u/singh_kartik/",
};

export const experience = [
  {
    company: "InfoEdge (Naukri)",
    role: "Senior AI Engineer",
    dates: "Aug 2026 – Present",
    location: "Noida",
    highlights: [
      "Deployed a 4B-parameter Qwen model with vLLM, using continuous batching and KV-cache management to improve GPU utilization and throughput.",
      "Reduced embedding execution latency from 36 ms on CPU to 7–8 ms on a T4 GPU. Served all-MiniLM-L6-v2 with NVIDIA Triton and gRPC at 20–30 requests per second.",
      "Fine-tuned Qwen on domain data with LoRA adapters, using fewer trainable parameters and less GPU memory.",
    ],
    stack: ["vLLM", "NVIDIA Triton", "gRPC", "LoRA"],
  },
  {
    company: "IndiaMART InterMESH",
    role: "Software Engineer · AI & Backend",
    dates: "Sep 2025 – Aug 2026",
    location: "Noida",
    highlights: [
      "Consolidated 5+ isolated API processes into a Kafka and Debezium call-intelligence pipeline backed by GCP Cloud SQL, processing thousands of buyer–seller calls daily.",
      "Integrated Gemini 2.5 Flash via LiteLLM to extract 10+ product attributes per transcript using structured JSON and schema validation.",
      "Reduced recurring MagicPen prompt tokens by approximately 87% by consolidating static instructions and constraints. Used Ragas to compare faithfulness and answer relevance across retrieval and prompt changes.",
    ],
    stack: ["Go", "Kafka", "Debezium", "Cloud SQL", "LiteLLM", "Ragas"],
  },
  {
    company: "Tata 1mg",
    role: "Backend Development Intern",
    dates: "Jan 2025 – Sep 2025",
    location: "Chandigarh",
    highlights: [
      "Migrated wearable-data ingestion from Terra to Spike APIs, improving data freshness and saving approximately $4,200 annually in vendor costs.",
      "Built async FastAPI and Sanic services with MongoDB, SQS, Pydantic, and OAuth 2.0. Redis caching and compression reduced latency by 10–15% on key endpoints.",
      "Designed independently deployable device-linking endpoints and added pytest coverage for FoodLog and Water flows, meeting 100% line and diff coverage requirements.",
    ],
    stack: ["Python", "FastAPI", "Sanic", "Redis", "MongoDB", "SQS"],
  },
];

export const projects = [
  {
    id: "context-relay",
    title: "Context Relay",
    category: ["AI", "Developer tools"],
    format: "Browser extension",
    summary: "Move a conversation between ChatGPT, Claude, and Gemini with its decisions, open tasks, constraints, and artifacts intact.",
    impact: "Local-first handoff library with search, pinning, Markdown and JSON export, and secret redaction.",
    stack: ["Chrome MV3", "JavaScript", "LLM APIs"],
    links: [
      { label: "Chrome Web Store", href: "https://chromewebstore.google.com/detail/context-relay/glkbkbclnmgmpoajcpdiidpnppfkjpai" },
      { label: "Project website", href: "https://karkau123.github.io/context-relay/" },
    ],
  },
  {
    id: "repo-manager",
    title: "GitHub Repos Manager",
    category: ["Backend", "Developer tools"],
    format: "MCP server",
    summary: "Gives MCP-compatible clients a single interface for repositories, pull requests, issues, branches, and CI workflows.",
    impact: "89 GitHub operations with scoped allowlists, token validation, and signed webhooks. Caching and compact responses cut network overhead by more than 30%.",
    stack: ["TypeScript", "Node.js", "MCP", "GitHub API"],
    links: [{ label: "View repository", href: "https://github.com/karkau123/Repo-manager-mcp" }],
  },
  {
    id: "interview-integrity",
    title: "Interview Signal",
    category: ["AI"],
    format: "Interview integrity",
    summary: "An interviewer-facing prototype that surfaces potential AI-assistance signals for human review.",
    impact: "The review workflow distinguishes potential signals from verified findings and leaves decisions with the interviewer.",
    stack: ["Web application", "Human review"],
    links: [{ label: "Open live demo", href: "https://fieldnote-interview.vercel.app/" }],
  },
  {
    id: "medical-rag",
    title: "Medical RAG",
    category: ["AI"],
    format: "Retrieval prototype",
    summary: "A biomedical question-answering prototype over PubMed literature using PubMedBERT embeddings, Qdrant, and Meditron-7B.",
    impact: "Used Ragas to evaluate how well answers were grounded in retrieved passages.",
    stack: ["Python", "Qdrant", "Meditron-7B", "Ragas"],
    links: [{ label: "View repository", href: "https://github.com/karkau123/Medical-Rag" }],
  },
  {
    id: "multi-agent-rag",
    title: "Multi-Agent Customer Support",
    category: ["AI", "Backend"],
    format: "Agent orchestration",
    summary: "Routes travel-support requests to specialized agents and preserves conversation state across turns.",
    impact: "Used LangGraph for conditional routing, Qdrant for retrieval, and LangSmith for tracing.",
    stack: ["Python", "LangGraph", "Qdrant", "LangSmith"],
    links: [{ label: "View repository", href: "https://github.com/karkau123/MultiAgent-RAG-Customer-Support" }],
  },
  {
    id: "ecommerce",
    title: "Scalable E-commerce App",
    category: ["Backend"],
    format: "Full-stack application",
    summary: "An e-commerce application pairing a FastAPI backend with a React storefront, PostgreSQL persistence, and Redis caching.",
    stack: ["FastAPI", "React", "PostgreSQL", "Redis"],
    links: [{ label: "View repository", href: "https://github.com/karkau123/Scalable-Ecommerce-app" }],
  },
];

export const skillGroups = [
  { name: "Languages", skills: ["Python", "Go", "Rust", "C++", "TypeScript"] },
  { name: "AI & evaluation", skills: ["RAG", "LangChain", "LangGraph", "LlamaIndex", "LiteLLM", "Ragas", "LoRA"] },
  { name: "Inference & serving", skills: ["vLLM", "NVIDIA Triton", "sentence-transformers", "GPU inference"] },
  { name: "Backend & pipelines", skills: ["FastAPI", "Sanic", "Node.js", "Kafka", "Debezium", "REST", "gRPC", "SQS", "Pydantic"] },
  { name: "Data & search", skills: ["PostgreSQL", "Cloud SQL", "MongoDB", "Redis", "Qdrant", "Milvus"] },
  { name: "Cloud & tooling", skills: ["GCP", "Docker", "Docker Swarm", "Kubernetes", "Git", "Langfuse", "MCP"] },
];
