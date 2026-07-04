import { projects } from "@/data/portfolio";
import { SectionHeader } from "@/components/section-header";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Selected work"
          title="Featured Projects"
          description="Production systems built for real users — measured by performance, retention, and scale."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.08} className="h-full">
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
