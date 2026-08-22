import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

// System instructions providing full professional context about Kartikeya
const SYSTEM_PROMPT = `
You are Keeto, a friendly and professional AI assistant for Kartikeya Singh's portfolio. 
Your goal is to help recruiters, hiring managers, and visitors learn about Kartikeya.
Refer to yourself in the first person ("I am Keeto, Kartikeya's assistant") and to Kartikeya in the third person ("Kartikeya is...", "He built...").

Here is everything you need to know about Kartikeya:

About Kartikeya:
- Name: Kartikeya Singh
- Location: Noida / Patna, India
- Role: Senior AI Engineer at InfoEdge, former Software Engineer at Indiamart Intermesh Ltd, and former Backend Intern at Tata 1mg.
- Key Expertise: LLMs, RAG (Retrieval-Augmented Generation), Multi-Agent systems, Backend engineering, API development, Event-driven architecture.
- Education: B.Tech in Computer Science and Engineering from National Institute of Technology, Patna (2021-2025). CGPA: 8.83/10 (secured a perfect 10.0 CGPA in the 8th semester).

Work Experience:
1. Senior AI Engineer at InfoEdge (May 2026 – Present)
   - Technologies: Python, vLLM, Qdrant, LangChain, RAG
   - Spearheaded the development of a production-grade LLM pipeline for intelligent job matching and semantic search, improving recommendation relevance.
   - Deployed scalable RAG architectures using vLLM and Qdrant to process, embed, and retrieve candidate profiles with sub-second latency.
2. Software Engineer at Indiamart Intermesh Ltd (Sep 2025 – Apr 2026)
   - Technologies: Golang, Kafka, LangChain, LiteLLM, Ragas, GCP
   - Engineered an event-driven call intelligence pipeline using Kafka, Debezium, and Cloud SQL to extract real-time data from buyer-seller calls.
   - Integrated Gemini 2.5 Flash via LiteLLM with structured schemas to eliminate LLM hallucinations, extracting 10+ product attributes per call transcript.
   - Established a Ragas-based evaluation framework to monitor and guide RAG pipeline quality.
3. Backend Development Intern at TATA 1MG (Jan 2025 – Sep 2025)
   - Technologies: Python, FastAPI, Sanic, SQS, MongoDB, Redis
   - Architected a scalable microservice ecosystem using FastAPI and Sanic with async I/O.
   - Integrated Spike API to stream wearable health data, reducing third-party costs by $4,200 annually.
   - Optimized critical API endpoints with Redis caching, reducing average response latency by 10-15%.

Projects:
1. GitHub Repos Manager (MCP Server)
   - Tech: Node.js, TypeScript, GitHub API
   - A lightweight Model Context Protocol (MCP) server that exposes 89 GitHub repository operations to AI agents, automating repository workflows programmatically.
2. Medical RAG: Retrieval-Augmented QA
   - Tech: Python, LangChain, Qdrant, Meditron-7B, Ragas
   - A biomedical QA system over PubMed literature. Uses PubMedBERT embeddings and Qdrant vector search. Achieved 0.84+ faithfulness score via Ragas.
3. Multi-Agent RAG Customer Support
   - Tech: Python, LangChain, LangGraph, Qdrant, LangSmith
   - Multi-agent travel query conversational system built on LangGraph for intent-based routing to specialized sub-agents with stateful memory.

Key Achievements:
- Rated 1721 at LeetCode with 850+ problems solved (top 10% coders).
- Reached peak 1720 rating (3-star) on CodeChef.
- Secured 1st Rank in HackNITP 2.0 Hackathon.
- Runner-up in Tata 1mg Hackathon.
- Team Lead Backend for Google Developer Student Club (GDSC).

Contact & Links:
- Email: singhkartikeya2020@gmail.com
- Phone: +91 7355106125
- GitHub: https://github.com/karkau123
- LinkedIn: https://www.linkedin.com/in/kartikeya-singh-735a34233/
- LeetCode: https://leetcode.com/u/singh_kartik/

Style Guidelines:
- Keep your answers professional, conversational, concise, and structured.
- Use markdown formatting (bolding, bullet points) where appropriate.
- Direct recruiters to his email or LinkedIn if they ask how to get in touch.
- Always focus on his strengths in AI/LLMs and backend systems.
`;

const KeetoChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "Hi, I am Keeto! Ask me anything about Kartikeya's experience, projects, or technical skills.",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  // Scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    if (!textToSend) {
      setInputText("");
    }

    // Add user message
    const userMessage = {
      role: "user",
      text: text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // If API Key is not set, provide a helpful fallback guidance
    if (!apiKey) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "model",
            text: "⚠️ **API Key Missing**: Keeto is currently in demo mode. To enable my AI engine, please create a `.env` file in the project root and add your Gemini API Key:\n\n`VITE_GEMINI_API_KEY=your_gemini_api_key` \n\nOnce configured, I will be able to answer any questions using the live Gemini model!",
            timestamp: new Date(),
          },
        ]);
        setIsLoading(false);
      }, 1000);
      return;
    }

    try {
      // Build conversation history for the API call
      // Filter out recent messages to provide context
      const chatHistory = messages
        .filter((m) => !m.text.includes("API Key Missing")) // Ignore warning logs
        .map((m) => ({
          role: m.role === "model" ? "model" : "user",
          parts: [{ text: m.text }],
        }));

      // Append current user message
      chatHistory.push({
        role: "user",
        parts: [{ text: text }],
      });

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: chatHistory,
            systemInstruction: {
              parts: [{ text: SYSTEM_PROMPT }],
            },
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 600,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      const modelText =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I'm sorry, I encountered an issue retrieving an answer. Please try again.";

      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: modelText,
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "❌ Sorry, I'm having trouble connecting to my brain right now. Please check if your Gemini API key is valid or try again later.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion);
  };

  const suggestions = [
    "What's his technical stack?",
    "Tell me about his RAG projects",
    "View his contact info & links",
    "What did he build at Indiamart?",
  ];

  // Helper function to render text with bold, code blocks, and links
  const renderMessageContent = (text) => {
    // Process bullet points and line breaks first
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      let content = line;

      // Handle bullet lists: line starting with "-" or "*"
      const isBullet = content.trim().startsWith("- ") || content.trim().startsWith("* ");
      if (isBullet) {
        content = content.replace(/^[\-\*]\s+/, "");
      }

      // 1. Process inline code `code`
      content = content.replace(/`([^`]+)`/g, '<code class="bg-neutral-800 px-1 py-0.5 rounded text-red-400 font-mono text-xs">$1</code>');

      // 2. Process bold **bold**
      content = content.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-white">$1</strong>');

      // 3. Process links [text](url)
      content = content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:text-indigo-300 underline font-medium">$1</a>');

      if (isBullet) {
        return (
          <li key={idx} className="list-disc ml-4 text-neutral-200 mt-1" dangerouslySetInnerHTML={{ __html: content }} />
        );
      }

      return (
        <p
          key={idx}
          className={`${line.trim() === "" ? "h-2" : "mt-1.5 first:mt-0"} text-neutral-200 leading-relaxed`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      );
    });
  };

  return (
    <>
      {/* Floating Action Button Trigger */}
      <div className="fixed top-24 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-full flex items-center justify-center bg-neutral-900 border border-neutral-800 shadow-2xl text-white hover:bg-neutral-800 transition-all duration-200 cursor-pointer group shadow-[0_0_15px_rgba(99,102,241,0.25)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]"
          aria-label="Open Chatbot Keeto"
        >
          {/* Pulsing indicator */}
          <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-neutral-900"></span>
          </span>

          {/* Holographic pulse ring */}
          <span className="absolute inset-0 rounded-full bg-indigo-500/10 border border-indigo-500/20 animate-pulse -z-10 scale-110" />

          {/* Robot Chatbot Face Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-indigo-400 group-hover:scale-110 transition-transform duration-200"
          >
            {/* Robot Head */}
            <rect x="3" y="10" width="18" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
            {/* Eyes (Blinking) */}
            <circle cx="8" cy="15" r="1.5" className="animate-pulse" fill="currentColor" />
            <circle cx="16" cy="15" r="1.5" className="animate-pulse" fill="currentColor" />
            {/* Antenna */}
            <path d="M12 10V6" />
            <circle cx="12" cy="4" r="1" fill="currentColor" />
            {/* Mouth */}
            <path d="M9 18h6" />
            {/* Ears */}
            <path d="M2 14v2" />
            <path d="M22 14v2" />
          </svg>
        </motion.button>
      </div>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="fixed top-44 right-6 z-50 w-[92vw] max-w-[390px] sm:max-w-[420px] h-[550px] flex flex-col rounded-2xl border border-neutral-800 bg-neutral-950/95 shadow-2xl overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-900 bg-neutral-950/50">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a10 10 0 0 0-10 10c0 5.523 4.477 10 10 10a9.96 9.96 0 0 0 6.67-2.51l3.03 1.01a1 1 0 0 0 1.265-1.265l-1.01-3.03A9.96 9.96 0 0 0 22 12A10 10 0 0 0 12 2Z" />
                    <circle cx="8" cy="12" r="1" />
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="16" cy="12" r="1" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Keeto</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[10px] text-neutral-400 font-medium">
                      AI Recruiter Assistant
                    </span>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer"
                aria-label="Close chatbot window"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Messages Box */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 scrollbar-thin scrollbar-thumb-neutral-800">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    msg.role === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm ${
                      msg.role === "user"
                        ? "bg-indigo-600 text-white rounded-tr-none shadow-md shadow-indigo-600/10"
                        : "bg-neutral-900/60 border border-neutral-800/80 text-neutral-200 rounded-tl-none"
                    }`}
                  >
                    {renderMessageContent(msg.text)}
                  </div>
                  <span className="text-[9px] text-neutral-500 mt-1 px-1">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex flex-col items-start">
                  <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce delay-100" />
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce delay-200" />
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce delay-300" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions panel (only show when chatbot is idle) */}
            {!isLoading && messages.length === 1 && (
              <div className="px-5 py-2 border-t border-neutral-900 bg-neutral-950/20">
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mb-1.5">
                  Try asking Keeto:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {suggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="text-[10.5px] text-left px-2.5 py-1.5 rounded-lg bg-neutral-900/40 hover:bg-neutral-900 border border-neutral-850 hover:border-neutral-800 text-neutral-300 hover:text-white transition-all duration-200 cursor-pointer truncate"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Bar Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="px-5 py-4 border-t border-neutral-900 bg-neutral-950/50 flex gap-2.5 items-center"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask Keeto about Kartikeya..."
                disabled={isLoading}
                className="flex-1 bg-neutral-900 border border-neutral-800 focus:border-neutral-700 focus:outline-none rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !inputText.trim()}
                className="w-10 h-10 rounded-xl bg-white hover:bg-neutral-200 text-black flex items-center justify-center disabled:opacity-40 disabled:hover:bg-white transition-all duration-200 cursor-pointer shrink-0"
                aria-label="Send message"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="rotate-45 -translate-x-0.5 translate-y-0.5"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default KeetoChatbot;
