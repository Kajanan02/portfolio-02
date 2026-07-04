import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { FeaturedProjects } from "@/components/featured-projects";
import { OpenSource } from "@/components/open-source";
import { SkillsGrid } from "@/components/skills-grid";
import { Achievements } from "@/components/achievements";
import { Education } from "@/components/education";
import { VolunteerLeadership } from "@/components/volunteer-leadership";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { person } from "@/data/portfolio";

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    email: `mailto:${person.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Vavuniya", addressCountry: "LK" },
    sameAs: [person.linkedin, person.github],
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <ExperienceTimeline />
        <FeaturedProjects />
        <OpenSource />
        <SkillsGrid />
        <Achievements />
        <Education />
        <VolunteerLeadership />
        <Contact />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}
