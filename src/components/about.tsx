import {
  CheckCircle2,
  Gauge,
  Layers,
  Network,
  Radio,
  type LucideIcon,
} from "lucide-react";
import { about } from "@/data/portfolio";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";

const pillarIcons: Record<string, LucideIcon> = {
  gauge: Gauge,
  network: Network,
  radio: Radio,
  layers: Layers,
};

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow={about.eyebrow}
          title={about.title}
          description="Engineering products end to end, with outcomes you can measure."
        />

        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-muted-fg">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                At a glance
              </h3>
              <ul className="mt-5 space-y-4">
                {about.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-fg">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* The four themes this portfolio tells its story around */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {about.pillars.map((pillar, i) => {
            const Icon = pillarIcons[pillar.icon] ?? Gauge;
            return (
              <Reveal key={pillar.title} delay={0.1 + i * 0.06} className="h-full">
                <article className="glass card-lift h-full rounded-2xl p-6">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-fg">{pillar.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
