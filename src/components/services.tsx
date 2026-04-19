import FadeUp from "@/animation/fade-up";
import { motion as _motion } from "framer-motion";
const motion = _motion as any;

const SERVICES = [
  {
    title: "AI Agents & Automation",
    description:
      "Custom AI agents using LangGraph that take real actions — book appointments, review code, summarize emails, and more.",
    tags: ["LangGraph", "LangChain", "Agents"],
  },
  {
    title: "RAG Chatbots",
    description:
      "Production-ready RAG systems with semantic search (Pinecone, FAISS, ChromaDB) for accurate, hallucination-free responses.",
    tags: ["Pinecone", "FAISS", "ChromaDB"],
  },
  {
    title: "Voice AI Systems",
    description:
      "Real-time voice agents with LiveKit/WebRTC, ElevenLabs TTS, and WhatsApp integration for multi-channel deployment.",
    tags: ["LiveKit", "ElevenLabs", "WebRTC"],
  },
  {
    title: "MLOps Pipelines",
    description:
      "End-to-end ML pipelines with MLflow tracking, DVC data versioning, Docker containerization, and cloud deployment.",
    tags: ["MLflow", "DVC", "Docker"],
  },
  {
    title: "Workflow Automation",
    description:
      "n8n and custom automation workflows that eliminate repetitive tasks and connect your tools seamlessly.",
    tags: ["n8n", "Automation", "APIs"],
  },
  {
    title: "API Development",
    description:
      "Fast, scalable FastAPI backends with async workflows, JWT auth, and cloud database integration.",
    tags: ["FastAPI", "Python", "REST"],
  },
];

export default function Services() {
  return (
    <section className="px-6 py-24 sm:px-14 md:px-20 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <FadeUp duration={0.6} whileInView>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent sm:text-5xl md:text-6xl">
              My Services
            </h2>
            <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto sm:text-xl">
              Transforming ideas into intelligent automated systems using
              state-of-the-art AI.
            </p>
          </div>
        </FadeUp>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <FadeUp key={service.title} duration={0.6} delay={index * 0.1} whileInView>
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative h-full rounded-2xl border border-accent/20 bg-muted/20 p-8 shadow-lg ring-1 ring-zinc-200/50 backdrop-blur-lg transition-all duration-300 hover:shadow-accent/10 dark:ring-white/5"
              >
                {/* Subtle shine effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <h3 className="text-xl font-bold text-accent sm:text-2xl">
                  {service.title}
                </h3>
                
                <p className="mt-4 text-zinc-700 dark:text-zinc-400 leading-relaxed font-medium">
                  {service.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-semibold text-accent transition-colors duration-300 group-hover:bg-accent/10 sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
