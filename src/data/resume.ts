// Centralized resume data for Abdullah Khan
// Types
export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface ProjectItem {
  name: string;
  technologies: string[];
  achievements: string[];
}

export interface HackathonAchievement {
  title: string;
  event: string;
  location: string;
  description: string;
  tags: string[];
  date: string; 
}

export interface EducationItem {
  institution: string;
  program: string;
  cgpa: string;
  duration: string;
  location: string;
  subjects: string[];
}

export type ExploreLinkIcon = "code" | "user" | "award" | "briefcase";
export interface ExploreLink {
  href: string;
  iconName: ExploreLinkIcon;
  label: string;
  description: string;
}

export interface ResumeData {
  technicalSkillsGroups: SkillGroup[];
  experience: ExperienceItem[];
  featuredProjects: ProjectItem[];
  hackathons: HackathonAchievement[];
  education: EducationItem[];
  exploreLinks: ExploreLink[];
}

// Data
const technicalSkillsGroups: SkillGroup[] = [
  {
    category: "AI / ML",
    skills: ["Machine Learning", "MLOps", "LangChain", "LangGraph"],
  },
  {
    category: "Backend / Programming",
    skills: ["Python", "FastAPI"],
  },
  {
    category: "Data / Libraries",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    category: "DevOps / Tools",
    skills: ["Docker", "Git", "GitHub", "MLflow", "n8n"],
  },
];

const experience: ExperienceItem[] = [
  {
    company: "Revnix",
    role: "AI/ML Engineer",
    period: "Aug 2025 – Present",
    location: "Remote",
    achievements: [
      "Building AI-driven systems focused on automation, content intelligence, and e-commerce optimization.",
      "Developing AI agents like Ranknaut for SEO automation, involving scraping pipelines and content generation.",
      "Designing backend systems using FastAPI and integrating LLMs (via Groq) for scalable data processing.",
      "Collaborating on system reliability, workflow optimization, and applying new AI/ML techniques.",
    ],
  },
];

const featuredProjects: ProjectItem[] = [
  {
    name: "Evalyn HR Agent",
    technologies: ["TypeScript", "AI Agents", "Automation"],
    achievements: [
      "Built an AI-powered HR assistant with agent-based architecture.",
      "Automated recruitment workflows: resume analysis and candidate evaluation.",
    ],
  },
  {
    name: "Phishing Detection Lab",
    technologies: ["Python", "LangChain", "LangGraph", "Streamlit"],
    achievements: [
      "Developed a multi-agent phishing detection system for emails/SMS.",
      "Implemented real-time risk scoring and educational insights.",
    ],
  },
  {
    name: "LangGraph AI Chatbot",
    technologies: ["Python", "LangChain", "LangGraph", "RAG", "Streamlit"],
    achievements: [
      "Created an advanced agent-based chatbot with RAG support.",
      "Integrated tool usage for document-based question answering.",
    ],
  },
  {
    name: "AI PR Review Agent",
    technologies: ["Python", "FastAPI", "Groq LLM", "Pinecone", "Slack API"],
    achievements: [
      "Automated GitHub PR reviews with smart linting and Groq summaries.",
      "Integrated Slack notifications and analytics dashboard.",
    ],
  },
];

const hackathons: HackathonAchievement[] = [];

const education: EducationItem[] = [
  {
    institution: "Computer Science University",
    program: "Bachelor of Science in Computer Science",
    cgpa: "3.x",
    duration: "2020 – 2024",
    location: "Location",
    subjects: ["Artificial Intelligence", "Software Engineering", "Data Science"],
  },
];

const exploreLinks: ExploreLink[] = [
  {
    href: "/projects",
    iconName: "code",
    label: "Projects",
    description: "View my latest work",
  },
  {
    href: "/about",
    iconName: "user",
    label: "About Me",
    description: "Learn more about me",
  },
  {
    href: "/#skills",
    iconName: "award",
    label: "Skills",
    description: "Technical expertise",
  },
  {
    href: "/about#experience",
    iconName: "briefcase",
    label: "Experience",
    description: "Professional journey",
  },
];

const resumeData: ResumeData = {
  technicalSkillsGroups,
  experience,
  featuredProjects,
  hackathons,
  education,
  exploreLinks,
};

export function getResumeData(): ResumeData {
  return resumeData;
}

export default resumeData;
