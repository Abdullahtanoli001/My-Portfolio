import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Evalyn HR Agent",
    href: "/projects",
    tags: ["TypeScript", "AI Agents", "Automation"],
    image: {
      LIGHT: "/images/projects/evalyn.png",
      DARK: "/images/projects/evalyn.png",
    },
  },
  {
    index: 1,
    title: "Phishing Detection Lab",
    href: "/projects",
    tags: ["Python", "LangChain", "LangGraph", "Streamlit"],
    image: {
      LIGHT: "/images/projects/phishing.png",
      DARK: "/images/projects/phishing.png",
    },
  },
  {
    index: 2,
    title: "LangGraph AI Chatbot",
    href: "/projects",
    tags: ["Python", "LangChain", "LangGraph", "RAG"],
    image: {
      LIGHT: "/images/projects/chatbot.png",
      DARK: "/images/projects/chatbot.png",
    },
  },
  {
    index: 3,
    title: "AI PR Review Agent",
    href: "/projects",
    tags: ["Python", "FastAPI", "Groq LLM", "Slack API"],
    image: {
      LIGHT: "/images/projects/pr-agent.png",
      DARK: "/images/projects/pr-agent.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Evalyn HR Agent",
    imageUrl: ["/images/projects/evalyn.png"],
    description:
      "An AI-powered HR assistant built using agent-based architecture to automate recruitment workflows. It analyzes resumes, extracts candidate data, and evaluates applicants efficiently.",
    sourceCodeHref: "https://github.com/Abdullahtanoli001/Evalyn-HR-Agent",
    liveWebsiteHref: "",
    category: "AI Agent",
    technologies: ["TypeScript", "AI Agents", "Automation"],
  },
  {
    name: "Phishing Detection Lab",
    imageUrl: ["/images/projects/phishing.png"],
    description:
      "An AI-powered multi-agent phishing detection system that detects phishing emails, URLs, and SMS using real-time analysis, risk scoring, and educational insights.",
    sourceCodeHref: "https://github.com/Abdullahtanoli001/Phishing-detection-lab",
    liveWebsiteHref: "",
    category: "Security",
    technologies: ["Python", "LangChain", "LangGraph", "Streamlit"],
  },
  {
    name: "LangGraph AI Chatbot",
    imageUrl: ["/images/projects/chatbot.png"],
    description:
      "An advanced agent-based chatbot using LangChain, LangGraph, and RAG. It supports tool usage and document-based question answering.",
    sourceCodeHref: "https://github.com/Abdullahtanoli001/LangGraph-ChatBot",
    liveWebsiteHref: "",
    category: "AI Chatbot",
    technologies: ["Python", "LangChain", "LangGraph", "RAG", "Streamlit"],
  },
  {
    name: "AI PR Review Agent",
    imageUrl: ["/images/projects/pr-agent.png"],
    description:
      "An AI-powered system that automates GitHub pull request reviews. Features automated analysis, smart linting (flake8), Groq summaries, and Slack integration.",
    sourceCodeHref: "https://github.com/Abdullahtanoli001",
    liveWebsiteHref: "",
    category: "Automation Agent",
    technologies: ["Python", "FastAPI", "Groq LLM", "Pinecone", "Slack API"],
  },
];

export const BLOGS_CARD: ProjectCardProps[] = [];

