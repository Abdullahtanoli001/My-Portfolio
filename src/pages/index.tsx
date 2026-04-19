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
        description="Explore the portfolio of Abdullah Khan, an AI/ML Engineer specializing in AI agents, Phishing detection, and HR automation."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Abdullah Khan - Portfolio",
          description: "AI/ML Engineer Portfolio",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.image}`,
              alt: "Portfolio",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{ cardType: "summary_large_image" }}
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

      {/* HERO */}
      <LandingHero />

      {/* ABOUT SHORT */}
      <section className="px-6 pb-4 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="max-w-3xl text-base font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg">
            AI/ML Engineer building intelligent systems and automation tools.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* ABOUT */}
      <AnimatePresence>
        <FadeUp duration={0.2} whileInView>
          <section className="px-6 py-16 sm:px-14 md:px-20">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-3xl font-bold text-accent">About Me</h2>

              <p className="mt-6 text-lg text-zinc-800 dark:text-zinc-300">
                I build AI agents, automation systems, and scalable backend solutions.
              </p>
            </div>
          </section>
        </FadeUp>
      </AnimatePresence>

      <SectionDivider />

      {/* SKILLS */}
      <SkillsShowcase skills={SKILLS_DATA} />

      <SectionDivider />

      {/* PROJECTS (🔥 FIXED AREA) */}
      <ProjectShowcase
        projects={
          // SAFE DATA CLEANING (IMPORTANT FIX)
          PROJECT_SHOWCASE.map((project) => ({
            ...project,
            image: {
              LIGHT:
                project?.image?.LIGHT ||
                project?.image ||
                "/images/fallback.png",
            },
          }))
        }
      />

      <SectionDivider />

      {/* CTA */}
      <AnimatePresence>
        <FadeUp duration={0.6} whileInView>
          <section className="px-6 py-16 sm:px-14 md:px-20">
            <div className="mx-auto max-w-7xl text-center">
              <h2 className="text-3xl font-bold text-accent">
                Let’s Build Something
              </h2>

              <div className="mt-8 flex justify-center gap-4">
                <Link
                  href="/projects"
                  className="rounded-full bg-accent px-6 py-3 text-white"
                >
                  View Projects
                </Link>

                <Link
                  href="/about"
                  className="rounded-full border border-accent px-6 py-3 text-accent"
                >
                  About Me
                </Link>
              </div>
            </div>
          </section>
        </FadeUp>
      </AnimatePresence>
    </>
  );
}