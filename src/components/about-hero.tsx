import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";
import heroProfileImg from "../../public/images/heroProfile.png";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 max-w-7xl px-6 py-20 sm:px-14 md:mt-20 md:px-20 lg:mt-0">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/20 p-6 shadow-lg ring-1 ring-zinc-200/50 backdrop-blur-lg dark:ring-accent/20 sm:p-8 md:p-12">
        {/* Background accents */}
        <div className="bg-accent/15 pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full blur-3xl sm:h-72 sm:w-72" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl sm:h-96 sm:w-96" />

        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
          <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2">
            <AnimatePresence>
              <FadeUp key="hero-image" duration={0.6} whileInView>
                <Image
                  src={heroProfileImg}
                  width={800}
                  height={800}
                  className="h-auto w-full rounded-xl border border-accent/10 px-0 xl:px-16"
                  alt="Portrait of Abdullah Khan"
                  priority={false}
                />
              </FadeUp>
            </AnimatePresence>
          </div>
          <div className="sm:1/2 mt-10 w-full lg:w-1/2">
            <AnimatePresence>
              <FadeUp key="title-greeting" duration={0.6}>
                <h1 className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-5xl lg:text-4xl xl:text-6xl">
                  Hi, I&apos;m Abdullah Khan
                </h1>
              </FadeUp>
              <FadeUp key="bio-1" duration={0.6} delay={0.2}>
                <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-relaxed text-zinc-900 dark:text-zinc-300 sm:text-lg">
                  I am an AI/ML Engineer focused on building intelligent systems that solve real-world problems. My work revolves around developing AI agents, automation tools, and data-driven applications, especially in the e-commerce and SaaS domain.
                </p>
              </FadeUp>
              <FadeUp key="bio-2" duration={0.6} delay={0.3}>
                <p className="mx-auto mt-4 max-w-3xl text-base font-medium leading-relaxed text-zinc-900 dark:text-zinc-300 sm:text-lg">
                  I specialize in creating agent-based architectures using modern frameworks like LangChain and LangGraph, enabling systems to reason, interact, and make decisions autonomously. From AI-powered chatbots to conversion optimization agents, I aim to build solutions that are not just functional, but impactful.
                </p>
              </FadeUp>
              <FadeUp key="bio-3" duration={0.6} delay={0.4}>
                <p className="mx-auto mt-4 max-w-3xl text-base font-medium leading-relaxed text-zinc-900 dark:text-zinc-300 sm:text-lg">
                  My technical stack includes Python, FastAPI, and modern web technologies like Next.js, along with strong experience in data processing, model integration, and MLOps workflows. I also work with tools like Docker, MLflow, and vector databases to build scalable and production-ready AI systems.
                </p>
              </FadeUp>
              <FadeUp key="bio-4" duration={0.6} delay={0.5}>
                <p className="mx-auto mt-4 max-w-3xl text-base font-medium leading-relaxed text-zinc-900 dark:text-zinc-300 sm:text-lg">
                  I am passionate about exploring the future of AI, particularly in automation, multi-agent systems, and intelligent decision-making. I continuously experiment, build, and refine my skills to stay at the cutting edge of technology.
                </p>
              </FadeUp>
              <FadeUp key="bio-5" duration={0.6} delay={0.6}>
                <p className="mx-auto mt-4 max-w-3xl text-base font-medium leading-relaxed text-zinc-900 dark:text-zinc-300 sm:text-lg font-semibold text-accent">
                  Currently, I am focused on building AI-driven products that bridge the gap between machine intelligence and real-world business needs.
                </p>
              </FadeUp>

              {/* Highlights row */}
              <FadeUp key="highlights" duration={0.6} delay={0.5}>
                <div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    { label: "AI / ML" },
                    { label: "Data Science" },
                    { label: "Backend & MLOps" },
                  ].map((h) => (
                    <div
                      key={h.label}
                      className="rounded-lg border border-accent/20 bg-accent/10 px-3 py-2 text-sm font-semibold text-accent backdrop-blur-sm"
                    >
                      {h.label}
                    </div>
                  ))}
                </div>
              </FadeUp>

              {/* CTAs */}
              <FadeUp key="about-ctas" duration={0.6} delay={0.65}>
                <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-3 sm:flex-row sm:justify-start">
                  <Link
                    href="/projects"
                    className="rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-accent-light active:scale-95 sm:text-base"
                  >
                    View Projects
                  </Link>
                  <a
                    href="mailto:abuk10977@gmail.com"
                    className="rounded-full border-2 border-accent bg-accent/10 px-6 py-3 text-center text-sm font-semibold text-accent backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:bg-accent hover:text-white active:scale-95 sm:text-base"
                  >
                    Contact Me
                  </a>
                </div>
              </FadeUp>

              <FadeRight
                key="hero-location"
                duration={0.6}
                delay={0.8}
                className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
              >
                <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
                  {/* Local flag or icon placeholder */}
                </div>
                <span className="text-lg font-medium text-foreground">
                  Global / Remote
                </span>
              </FadeRight>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}



