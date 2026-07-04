import { ArrowUpRight, Package } from "lucide-react";
import { openSource } from "@/data/portfolio";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function OpenSource() {
  return (
    <section id="open-source" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Community code"
          title="Open Source"
          description={openSource.intro}
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {openSource.packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.08} className="h-full">
              <a
                href={pkg.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${pkg.name} on npm (opens in a new tab)`}
                className={cn(
                  "glass card-lift group flex h-full flex-col rounded-2xl p-6",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Package className="size-5" aria-hidden />
                  </span>
                  <ArrowUpRight
                    className="size-4 text-muted-fg transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    aria-hidden
                  />
                </div>
                <h3 className="mt-5 break-all font-mono text-sm font-semibold text-foreground">
                  {pkg.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-fg">
                  {pkg.description}
                </p>
                <p className="mt-4 font-mono text-xs text-accent">{pkg.language}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
