import Head from "next/head";
import { NextSeo } from "next-seo";
import { useState, useMemo } from "react";

import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import SectionDivider from "@/components/section-divider";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import {
  getProjectsBreadcrumbSchema,
  getProjectsCollectionPageSchema,
  getProjectsItemListSchema,
  toJsonLd,
} from "@/lib/seo/schema";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Get unique categories from projects
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(PROJECTS_CARD.map((project) => project.category))
    );
    return ["All", ...uniqueCategories.sort()];
  }, []);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return PROJECTS_CARD;
    }
    return PROJECTS_CARD.filter(
      (project) => project.category === selectedCategory
    );
  }, [selectedCategory]);

  // Get project count for current filter
  const projectCount = filteredProjects.length;
  const totalProjects = PROJECTS_CARD.length;

  return (
    <>
      <NextSeo
        title="Projects by Abdullah Khan - AI/ML Engineer"
        description="Explore a diverse collection of projects by Abdullah Khan, an AI/ML Engineer and Automation Specialist. Discover innovative AI-powered solutions like Evalyn HR Agent, Phishing Detection Lab, and AI PR Review systems built with Python and FastAPI."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title: "Explore Abdullah Khan's Projects - AI/ML & Automation Engineer",
          description:
            "Showcasing an array of projects crafted by Abdullah Khan, highlighting expertise in AI agents, Phishing detection, and LangGraph chatbots. Experience innovation through data-driven AI systems and custom automation workflows.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.image}`,
              alt: "Abdullah Khan - Project Showcase",
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
            __html: toJsonLd(getProjectsCollectionPageSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: toJsonLd(getProjectsItemListSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: toJsonLd(getProjectsBreadcrumbSchema()),
          }}
        />
      </Head>
      <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-border bg-muted/20 p-6 shadow-lg ring-1 ring-zinc-200/50 backdrop-blur-lg dark:ring-accent/20 sm:p-8 md:p-12">
            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:mb-8 sm:flex-row sm:items-center">
              <div className="flex flex-col gap-2">
                <h1 className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                  Projects
                </h1>
                <span className="text-sm text-muted-foreground">
                  {selectedCategory === "All"
                    ? `Showing all ${totalProjects} projects`
                    : `Showing ${projectCount} ${selectedCategory.toLowerCase()} projects`}
                </span>
              </div>
              <span className="hidden text-sm text-muted-foreground sm:block">
                Curated work showcasing engineering, AI, and product craft
              </span>
            </div>

            <p className="mb-6 max-w-3xl text-base font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg">
              This page lists selected software projects by Abdullah Khan,
              including AI products, automation systems, and e-commerce tools
              with focus on AI-driven growth and optimization.
            </p>

            {/* Category Filter Buttons */}
            <div className="mb-8 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25"
                      : "border border-border bg-muted/50 text-muted-foreground hover:bg-accent/10 hover:text-accent"
                  }`}
                >
                  {category}
                  {category === "All" && (
                    <span className="ml-2 text-xs opacity-70">
                      ({totalProjects})
                    </span>
                  )}
                  {category !== "All" && (
                    <span className="ml-2 text-xs opacity-70">
                      (
                      {
                        PROJECTS_CARD.filter((p) => p.category === category)
                          .length
                      }
                      )
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="mt-4 grid grid-cols-1 gap-6 sm:mt-6 sm:grid-cols-2 lg:grid-cols-2">
              {filteredProjects.map((card, index) => (
                <ProjectCard key={`${card.name}-${index}`} {...card} />
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 text-4xl">🔍</div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  No projects found
                </h3>
                <p className="max-w-md text-muted-foreground">
                  No projects match the selected category. Try selecting a
                  different category or view all projects.
                </p>
                <button
                  onClick={() => setSelectedCategory("All")}
                  className="mt-4 rounded-full bg-accent px-6 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  View All Projects
                </button>
              </div>
            )}
          </div>

          <SectionDivider />

          <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
            <p className="mt-10 text-base md:text-xl">
              Visit my GitHub to see some of the latest projects{" "}
              <a
                href={`${siteMetadata.github}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
