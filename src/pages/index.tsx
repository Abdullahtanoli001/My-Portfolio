import Head from "next/head";
import { NextSeo } from "next-seo";
import Link from "next/link";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import FadeUp from "@/animation/fade-up";
import { AnimatePresence } from "framer-motion";
import SectionDivider from "@/components/section-divider";
import { getPersonSchema, getWebsiteSchema, toJsonLd } from "@/lib/seo/schema";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Abdullah Khan - AI/ML Engineer"
        description="Explore the portfolio of Abdullah Khan, an AI/ML Engineer specializing in AI agents, Phishing detection, and HR automation. Discover projects like Evalyn HR Agent and Phishing Detection Lab built with Python, FastAPI, and LangGraph."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Abdullah Khan - Portfolio of an AI/ML & Automation Engineer",
          description:
            "Explore a portfolio featuring advanced AI projects, Phishing detection labs, and HR automation agents. Expert in Python, FastAPI, LangGraph, and AI agent development.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.image}`,
              alt: "Abdullah Khan - AI/ML Engineer Portfolio",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: toJsonLd(getWebsiteSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: toJsonLd(getPersonSchema()),
          }}
        />
      </Head>

      {/* Enhanced Hero Section */}
      <LandingHero />

      <section className="px-6 pb-4 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="max-w-3xl text-base font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg">
            Abdullah Khan is an AI/ML Engineer focused on building intelligent systems that solve real-world problems. 
            He specializes in agent-based architectures, automation tools, and scalable AI solutions.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* About Summary Section */}
      <AnimatePresence>
        <FadeUp key="about-title" duration={0.2} whileInView={true}>
          <section className="px-6 py-16 sm:px-14 md:px-20">
            <div className="mx-auto max-w-7xl">
              <div className="rounded-2xl border border-border bg-muted/20 p-6 shadow-lg ring-1 ring-zinc-200/50 backdrop-blur-lg dark:ring-accent/20 sm:p-8 md:p-12">
                <h2 className="text-3xl font-bold text-accent sm:text-4xl md:text-5xl">
                  About Me
                </h2>
                <p className="mt-6 text-lg font-medium leading-relaxed text-zinc-900 dark:text-zinc-300 sm:text-xl">
                  I&apos;m a passionate engineer who specializes in
                  building intelligent, end-to-end solutions at the intersection
                  of{" "}
                  <span className="font-semibold text-accent">
                    machine intelligence and business needs
                  </span>
                  . I focus on creating agentic systems using LangChain and LangGraph to build 
                  impactful solutions across e-commerce and SaaS domains.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg bg-accent/10 p-4 backdrop-blur-sm">
                    <h3 className="font-semibold text-accent">
                      AI / ML
                    </h3>
                    <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                      Machine Learning, MLOps, LangChain, and LangGraph agents
                    </p>
                  </div>
                  <div className="rounded-lg bg-accent/10 p-4 backdrop-blur-sm">
                    <h3 className="font-semibold text-accent">
                      Backend
                    </h3>
                    <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                      Building robust APIs with Python and FastAPI
                    </p>
                  </div>
                  <div className="rounded-lg bg-accent/10 p-4 backdrop-blur-sm">
                    <h3 className="font-semibold text-accent">
                      Data Science
                    </h3>
                    <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                      Analysis and visualization with NumPy, Pandas, and Matplotlib
                    </p>
                  </div>
                  <div className="rounded-lg bg-accent/10 p-4 backdrop-blur-sm">
                    <h3 className="font-semibold text-accent">
                      DevOps / Tools
                    </h3>
                    <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                      Docker, Git, MLflow, and workflow automation with n8n
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeUp>
      </AnimatePresence>

      <SectionDivider />

      {/* Skills Section with Enhanced Styling */}
      <SkillsShowcase skills={SKILLS_DATA} />

      <SectionDivider />

      {/* Featured Projects Section */}
      <ProjectShowcase projects={PROJECT_SHOWCASE} />

      <SectionDivider />

      {/* Call to Action Section */}
      <AnimatePresence>
        <FadeUp key="cta-title" duration={0.6} whileInView={true}>
          <section className="px-6 py-16 sm:px-14 md:px-20">
            <div className="mx-auto max-w-7xl">
              <div className="mb-16 rounded-2xl border border-border bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 p-6 shadow-lg ring-1 ring-accent/20 backdrop-blur-lg sm:mb-20 sm:p-8 md:p-12">
                <h2 className="text-center text-3xl font-bold text-accent sm:text-4xl md:text-5xl">
                  Let&apos;s Build Something Amazing
                </h2>
                <p className="mt-6 text-center text-lg font-medium text-zinc-900 dark:text-zinc-300 sm:text-xl">
                  Ready to transform your ideas into reality? Let&apos;s
                  collaborate on your next project.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Link
                    href="/projects"
                    className="rounded-full bg-accent px-8 py-3 text-center text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-accent-light active:scale-95"
                  >
                    View My Work
                  </Link>
                  <Link
                    href="/about"
                    className="rounded-full border-2 border-accent px-8 py-3 text-center text-lg font-semibold text-accent transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-white active:scale-95"
                  >
                    Learn More About Me
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </FadeUp>
      </AnimatePresence>
    </>
  );
}

