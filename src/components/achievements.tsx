import { Trophy } from "lucide-react";
import { achievements } from "@/data/portfolio";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="glow-spot absolute left-1/2 top-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-60"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Recognition"
          title="Awards & Achievements"
          description="Competition wins that reflect fast, product-focused engineering under pressure."
          align="center"
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {achievements.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1} className="h-full">
              <article
                className={cn(
                  "glass card-lift group relative h-full overflow-hidden rounded-2xl p-6 text-center",
                )}
              >
                <div
                  aria-hidden
                  className="glow-spot pointer-events-none absolute -top-12 left-1/2 h-32 w-48 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="mx-auto flex size-14 items-center justify-center rounded-full border border-accent/30 bg-accent-soft text-accent shadow-[0_0_24px_var(--glow)]">
                  <Trophy className="size-6" aria-hidden />
                </span>
                <p className="mt-5 font-mono text-xs uppercase tracking-widest text-accent">
                  {item.award} · {item.year}
                </p>
                <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-fg">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
