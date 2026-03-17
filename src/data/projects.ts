import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Codenex Backend v1",
    href: "/projects",
    tags: ["Java", "Spring Boot", "Maven", "Docker", "Microservices"],
    image: {
      LIGHT: "/images/projects/codenex/landing-page-light.png",
      DARK: "/images/projects/codenex/landing-page-dark.png",
    },
  },
  {
    index: 1,
    title: "Codenex AI API Proxy",
    href: "/projects",
    tags: ["JavaScript", "OpenAI", "Claude", "Gemini", "API Gateway"],
    image: {
      LIGHT: "/images/projects/codenex-proxy/dashbord.png",
      DARK: "/images/projects/codenex-proxy/dashbord.png",
    },
  },
  {
    index: 2,
    title: "Serenify",
    href: "/projects",
    tags: [
      "React",
      "TypeScript",
      "Supabase",
      "Gemini AI",
      "Mental Health",
      "Open Source",
    ],
    image: {
      LIGHT: "/images/projects/serenify/landing-page-light.png",
      DARK: "/images/projects/serenify/landing-page-light.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Codenex",
    imageUrl: [
      "/images/projects/codenex/landing-page-light.png",
      "/images/projects/codenex/landing-page-dark.png",
      "/images/projects/codenex/dashboard-overview-light.png",
      "/images/projects/codenex/dashboard-overview-dark.png",
      "/images/projects/codenex/dashboard-usage-dark.png",
      "/images/projects/codenex/project-builder-dark.png",
      "/images/projects/codenex/login-page-dark.png",
    ],
    description:
      "Production-grade Java backend service for the Codenex platform, built with Spring Boot and Docker. Provides robust APIs and microservice-ready architecture for the Codenex ecosystem.",
    sourceCodeHref: "https://github.com/Nikunj2003/Codenex-backend-v1",
    liveWebsiteHref: "",
    category: "Backend",
    technologies: ["Java", "Spring Boot", "Maven", "Docker"],
  },
  {
    name: "Codenex AI API Proxy",
    imageUrl: [
      "/images/projects/codenex-proxy/dashbord.png",
      "/images/projects/codenex-proxy/providers.png",
      "/images/projects/codenex-proxy/api-docs.png",
      "/images/projects/codenex-proxy/login.png",
    ],
    description:
      "A unified AI gateway that bridges local AI tools to the web. Provides a single API interface to multiple LLM providers including OpenAI, Claude, and Gemini — enabling seamless switching between models.",
    sourceCodeHref: "https://github.com/Nikunj2003/codenex-ai-api-proxy",
    liveWebsiteHref: "",
    category: "AI Infrastructure",
    technologies: ["JavaScript", "OpenAI", "Claude", "Gemini", "API Gateway"],
  },
  {
    name: "Serenify",
    imageUrl: [
      "/images/projects/serenify/landing-page-light.png",
      "/images/projects/serenify/dashboard-light.png",
      "/images/projects/serenify/chat-light.png",
      "/images/projects/serenify/activities-light.png",
      "/images/projects/serenify/profile-light.png",
      "/images/projects/serenify/crisis-help-light.png",
      "/images/projects/serenify/login-page-light.png",
      "/images/projects/serenify/dashboard-streak-dark.png",
    ],
    description:
      "An open-source, full-stack mental wellness application combining empathetic AI chat, multi-dimensional mood tracking, journaling, guided wellness sessions, and personal analytics — all with privacy-first design. Powered by Google Gemini 2.5 Flash and Supabase.",
    sourceCodeHref: "https://github.com/Nikunj2003/Serenify",
    liveWebsiteHref: "",
    category: "Full Stack",
    technologies: ["React", "TypeScript", "Supabase", "Gemini AI", "Vercel"],
  },
  {
    name: "Codenex Images UI",
    imageUrl: [
      "/images/projects/codenex-images/login-page-dark.png",
      "/images/projects/codenex-images/generation-workspace-dark.png",
    ],
    description:
      "AI-powered image generation and editing frontend built with React, Vite, and Tailwind CSS. Lets users generate and edit images using Google Gemini models, with Auth0 authentication and deployment on Vercel.",
    sourceCodeHref: "https://github.com/Nikunj2003/codenex-images-ui",
    liveWebsiteHref: "",
    category: "AI Product",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Auth0",
      "Gemini AI",
    ],
  },
  {
    name: "Resume Fit — Codenex",
    imageUrl: [
      "/images/projects/resumefit/landing-page-light.png",
      "/images/projects/resumefit/landing-page-dark.png",
      "/images/projects/resumefit/job-description-dark.png",
      "/images/projects/resumefit/api-key-entry-light.png",
      "/images/projects/resumefit/api-key-entry-dark.png",
      "/images/projects/resumefit/upload-resume-empty-dark.png",
      "/images/projects/resumefit/upload-resume-filled-dark.png",
      "/images/projects/resumefit/system-architecture-dark.png",
    ],
    description:
      "An AI-powered resume analysis and optimization tool that helps job seekers match their resumes to specific job descriptions. Provides ATS score checking, performance scoring, and intelligent resume refinement suggestions powered by Google Gemini.",
    sourceCodeHref: "https://github.com/Nikunj2003/Resume-Fit-Codenex",
    liveWebsiteHref: "",
    category: "AI Product",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Gemini AI",
      "Vercel AI SDK",
    ],
  },
  {
    name: "LLaMa MCP Streamlit",
    imageUrl: [
      "/images/projects/llama-mcp-streamlit/configuration-dark.png",
      "/images/projects/llama-mcp-streamlit/tools-list-dark.png",
    ],
    description:
      "An interactive AI assistant built with Streamlit, NVIDIA NIM's LLaMA 3.3 70B, and Model Context Protocol (MCP). Provides a conversational interface where an LLM executes real-time external tools via MCP servers to retrieve data and perform actions.",
    sourceCodeHref: "https://github.com/Nikunj2003/LLaMa-MCP-Streamlit",
    liveWebsiteHref: "",
    category: "AI / LLM",
    technologies: ["Python", "Streamlit", "MCP", "LLaMA", "NVIDIA NIM", "Ollama"],
  },
];

export const BLOGS_CARD: ProjectCardProps[] = [
  {
    name: "Understand Debouncing and Throttling in javascript with examples",
    favicon: "📝",
    imageUrl: ["/images/projects/debounce.png"],
    description:
      "In this article, we will discuss and understand debouncing and throttling in javascript, which are very useful when it comes to the performance of a website.",
    sourceCodeHref: "",
    liveWebsiteHref: "",
    category: "Blog",
    technologies: ["JavaScript", "Performance", "Web Development"],
  },
  {
    name: "How to create your own custom Hooks in React (extensive guide)",
    favicon: "✍",
    imageUrl: ["/images/projects/hooks.png"],
    description:
      "Hooks are reusable functions. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom Hooks start with 'use'. Example...",
    sourceCodeHref: "",
    liveWebsiteHref: "",
    category: "Blog",
    technologies: ["React", "Hooks", "JavaScript"],
  },
  {
    name: "10 Important productivity tools to make developer life easier 👨‍💻👨‍💻",
    favicon: "📝",
    imageUrl: ["/images/projects/tools.png"],
    description:
      "Developing is not only about getting your device and start coding directly for all day long. Right tools & guidance is all we need. If you're a developer these tools will definitely make your life hassle free. Let's dive in !!",
    sourceCodeHref: "",
    liveWebsiteHref: "",
    category: "Blog",
    technologies: ["Productivity", "Developer Tools", "Workflow"],
  },
  {
    name: "map, filter, reduce functions in JavaScript made easy 🔥",
    favicon: "✍",
    imageUrl: ["/images/projects/filter.png"],
    description: `Let's understand some important functions of them, that are "map", "filter" and "reduce". You definitely have heard about them. You probably know about them. But are they still confusing to you? Let's make them beautifully more clearer to you via beautiful examples.`,
    sourceCodeHref: "",
    liveWebsiteHref: "",
    category: "Blog",
    technologies: ["JavaScript", "Array Methods", "Functional Programming"],
  },
];
