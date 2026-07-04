import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Foundation"
          title="Education"
          description="Formal computer science education backed by hands-on professional training."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={(i % 2) * 0.08} className="h-full">
              <article className="glass flex h-full items-start gap-4 rounded-2xl p-6 transition-colors duration-300 hover:border-accent/40">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <GraduationCap className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">
                    {item.kind}
                  </p>
                  <h3 className="mt-1.5 font-heading text-base font-semibold text-foreground">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm text-muted-fg">{item.institution}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
