import {
  SiPython,
  SiFastapi,
  SiDocker,
  SiGithub,
  SiGit,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiMlflow,
  SiN8N,
  SiOpenai,
  SiPlotly,
} from "react-icons/si";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";
import PythonSvg from "@/public/icons/python.svg";
import FastSvg from "@/public/icons/fastapi.svg";
import LangSvg from "@/public/icons/langchain-seeklogo.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "AI / ML",
    skills: [
      {
        name: "Machine Learning",
        icon: SiScikitlearn,
      },
      {
        name: "MLOps",
        icon: SiMlflow,
      },
      {
        name: "LangChain",
        icon: LangSvg,
      },
      {
        name: "LangGraph",
        icon: SiOpenai,
      },
    ],
  },
  {
    sectionName: "Backend / Programming",
    skills: [
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "FastAPI",
        icon: FastSvg,
      },
    ],
  },
  {
    sectionName: "Data / Libraries",
    skills: [
      {
        name: "NumPy",
        icon: SiNumpy,
      },
      {
        name: "Pandas",
        icon: SiPandas,
      },
      {
        name: "Matplotlib",
        icon: SiPlotly,
      },
      {
        name: "Seaborn",
        icon: SiPlotly,
      },
    ],
  },
  {
    sectionName: "DevOps / Tools",
    skills: [
      {
        name: "Docker",
        icon: SiDocker,
      },
      {
        name: "Git",
        icon: SiGit,
      },
      {
        name: "GitHub",
        icon: SiGithub,
      },
      {
        name: "MLflow",
        icon: SiMlflow,
      },
      {
        name: "n8n",
        icon: SiN8N,
      },
    ],
  },
];

