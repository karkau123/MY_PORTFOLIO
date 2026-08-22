export const myProjects = [
  {
    id: 0,
    title: "GitHub Repos Manager — MCP Server",
    description:
      "A lightweight MCP server that exposes GitHub repository operations to any MCP-compatible client without requiring heavy Docker dependencies or OAuth redirect flows.",
    subDescription: [
      "Built a lightweight MCP server that exposes GitHub repository operations to any MCP-compatible client without requiring heavy Docker dependencies or OAuth redirect flows.",
      "Implemented 89 GitHub API commands out-of-the-box via environment-based token auth, enabling AI agents to automate repository workflows (PRs, issues, branches) programmatically and securely.",
    ],
    href: "https://github.com/karkau123/Repo-manager-mcp",
    logo: "",
    image: "./assets/projects/repo-manager-mcp.jpg",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "./assets/logos/nodejs.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "./assets/logos/typescript.svg",
      },
      {
        id: 3,
        name: "GitHub API",
        path: "./assets/logos/github.svg",
      },
    ],
  },
  {
    id: 1,
    title: "Medical RAG: Retrieval-Augmented QA",
    description:
      "A domain-specific RAG system for biomedical question answering over PubMed literature using 512-token chunks with 64-token overlap and PubMedBERT embeddings for high-precision retrieval.",
    subDescription: [
      "Built a domain-specific RAG system for biomedical question answering over PubMed literature using 512-token chunks with 64-token overlap and PubMedBERT embeddings for high-precision retrieval.",
      "Orchestrated Qdrant vector retrieval (top-5) with Meditron-7B inference to generate context-grounded responses; evaluated pipeline with Ragas achieving 0.84+ faithfulness score across test queries.",
    ],
    href: "https://github.com/karkau123/Medical-Rag",
    logo: "",
    image: "./assets/projects/medical-rag.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "./assets/logos/python.svg",
      },
      {
        id: 2,
        name: "LangChain",
        path: "./assets/logos/langchain.svg",
      },
      {
        id: 3,
        name: "Qdrant",
        path: "./assets/logos/docker.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Multi-Agent RAG Customer Support",
    description:
      "A multi-agent conversational AI system with LangGraph for intent-based dynamic routing of complex travel queries to specialized domain-specific sub-agents with stateful memory across turns.",
    subDescription: [
      "Architected a multi-agent conversational AI with LangGraph for intent-based dynamic routing of complex travel queries to specialized domain-specific sub-agents with stateful memory across turns.",
      "Integrated Qdrant for fast vector retrieval and implemented conditional routing logic with full system observability via LangSmith tracing and token-level debugging.",
    ],
    href: "https://github.com/karkau123/MultiAgent-RAG-Customer-Support",
    logo: "",
    image: "./assets/projects/multiagent-rag.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "./assets/logos/python.svg",
      },
      {
        id: 2,
        name: "LangChain",
        path: "./assets/logos/langchain.svg",
      },
      {
        id: 3,
        name: "LangGraph",
        path: "./assets/logos/langchain.svg",
      },
      {
        id: 4,
        name: "Qdrant",
        path: "./assets/logos/docker.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/karkau123",
    icon: "./assets/logos/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/kartikeyaa-singh-735a34233/",
    icon: "./assets/socials/linkedIn.svg",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/singh_kartik/",
    icon: "./assets/socials/leetcode.svg",
  },
];

export const experiences = [
  {
    title: "Senior AI Engineer",
    job: "InfoEdge",
    date: "May 2026 – Present",
    contents: [
      "Tools & Technologies: Python, vLLM, Qdrant, LangChain, RAG",
      "Spearheaded the development of a production-grade LLM pipeline for intelligent job matching and semantic search, significantly improving recommendation relevance.",
      "Deployed scalable RAG architectures using vLLM and Qdrant to process, embed, and retrieve relevant candidate profiles with sub-second latency.",
    ],
  },
  {
    title: "Software Engineer",
    job: "Indiamart Intermesh Ltd",
    date: "Sep 2025 – Apr 2026",
    contents: [
      "Tools & Technologies: Golang, Kafka, LangChain, LiteLLM, Ragas",
      "Engineered an event-driven call intelligence pipeline using Kafka, Debezium, and Cloud SQL (GCP) to centralize real-time data extraction across thousands of daily seller-buyer calls, deprecating 5+ redundant isolated API processes.",
      "Integrated Gemini 2.5 Flash via LiteLLM with Structured JSON Schemas to enforce deterministic model outputs—eliminating hallucinations and enabling accurate extraction of 10+ product attributes per call transcript.",
      "Established a Ragas-based evaluation framework to continuously monitor RAG pipeline quality, tracking faithfulness and answer relevancy metrics across model iterations to guide prompt and retrieval improvements.",
    ],
  },
  {
    title: "Backend Development Intern",
    job: "TATA 1MG",
    date: "Jan 2025 – Sep 2025",
    contents: [
      "Tools & Technologies: Python, FastAPI, SQS, MongoDB",
      "Architected a scalable, high-throughput microservice ecosystem using FastAPI and Sanic with async I/O, enabling modular, independently deployable API endpoints under sustained load.",
      "Integrated Spike API, replacing the existing Terra API to stream wearable health data—reducing third-party vendor cost by $4,200 annually while improving data freshness.",
      "Designed low-latency data APIs with Pydantic schema validation and OAuth 2.0 authentication to deliver fast, reliable user health insights.",
      "Optimized critical API endpoints via Redis caching and response compression, reducing average response latency by 10–15% under production traffic.",
    ],
  },
];

export const reviews = [
  {
    name: "Leetcode",
    username: "",
    body: " Rated 1721 at LeetCode with over 850 problems solved, ranking among the top 10% of Coders",
    img: "https://robohash.org/jack",
  },
  {
    name: "Codechef",
    username: "",
    body: " Reached a peak rating of 1720 (3-star) on CodeChef with a global rank of 520 in the Starters 120 Competition.",
    img: "https://robohash.org/jill",
  },
  {
    name: "HackNITP 2.0",
    username: "",
    body: "Secured 1st Rank in HackNITP 2.0 Hackathon, showcasing coding proficiency and critical thinking skills.",
    img: "https://robohash.org/john",
  },
  {
    name: "Team Lead",
    username: "",
    body: "Google Developer Student Club – Backend Team",
    img: "https://robohash.org/alice",
  },
  {
    name: "Academics",
    username: "",
    body: "Secured a perfect 10.0 CGPA in the 8th semester, showcasing strong academic excellence.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Hackathon Tata 1mg",
    username: "",
    body: "Runner up",
    img: "https://robohash.org/charlie",
  },
];
