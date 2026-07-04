import { experience } from "@/data/portfolio";
import { SectionHeader } from "@/components/section-header";
import { ExperienceCard } from "@/components/experience-card";
import { Reveal } from "@/components/reveal";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Career"
          title="Experience"
          description="Five years of shipping production systems at SenzMate IoT Intelligence — from intern to engineer owning full-stack, real-time products."
        />

        <div className="relative">
          {/* Vertical timeline rail */}
          <div
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-[var(--accent)] via-[var(--card-border)] to-transparent md:block"
          />

          <ol className="space-y-8 md:space-y-10">
            {experience.map((entry, i) => (
              <li key={entry.period} className="relative md:pl-12">
                {/* Timeline node */}
                <span
                  aria-hidden
                  className="absolute left-0 top-8 hidden size-[15px] rounded-full border-2 border-[var(--accent)] bg-background shadow-[0_0_12px_var(--glow)] md:block"
                />
                <Reveal delay={i * 0.08}>
                  <ExperienceCard entry={entry} />
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
