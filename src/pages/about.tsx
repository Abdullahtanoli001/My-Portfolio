import Head from "next/head";
import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import SectionDivider from "@/components/section-divider";
import { EXPERIENCE } from "@/data/experience";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import {
  getAboutBreadcrumbSchema,
  getAboutProfilePageSchema,
  getPersonSchema,
  toJsonLd,
} from "@/lib/seo/schema";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Abdullah Khan - AI/ML Engineer"
        description="Discover the journey and skills of Abdullah Khan, an AI/ML Engineer specializing in AI agents, automation, and CRO. Explore my expertise in Next.js, FastAPI, and Shopify development."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Abdullah Khan - AI/ML Engineer",
          description:
            "Dive into the story of Abdullah Khan, an AI/ML Engineer and Automation Specialist. Uncover my experiences in building AI agents, security tools like Phishing Detection Lab, and HR automation solutions.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.image}`,
              alt: "Abdullah Khan - AI/ML Engineer Portfolio",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "profile",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: toJsonLd(getAboutProfilePageSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: toJsonLd(getPersonSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: toJsonLd(getAboutBreadcrumbSchema()),
          }}
        />
      </Head>

      <AboutHero />
      <SectionDivider />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
    </>
  );
}
