import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { hero, person } from "@/data/portfolio";
import { ButtonLink } from "@/components/ui/button";
import { MetricCard } from "@/components/metric-card";
import { Reveal } from "@/components/reveal";

/** Faux-terminal panel rendering real CV metrics as a config object. */
function SnapshotTerminal() {
  return (
    <div className="glass overflow-hidden rounded-2xl">
      <div className="flex items-center gap-2 border-b border-card-border px-5 py-3.5">
        <span aria-hidden className="size-2.5 rounded-full bg-card-border" />
        <span aria-hidden className="size-2.5 rounded-full bg-card-border" />
        <span aria-hidden className="size-2.5 rounded-full bg-accent/60" />
        <p className="ml-2 font-mono text-xs text-muted-fg">production — snapshot</p>
      </div>
      <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed md:p-6" aria-label="Engineering snapshot">
        <p className="text-muted-fg">
          <span className="text-accent-2">const</span>{" "}
          <span className="text-foreground">engineer</span> = {"{"}
        </p>
        {hero.snapshot.map((line) => (
          <p key={line.key} className="pl-5 text-muted-fg">
            <span className="text-foreground">{line.key}</span>
            {": "}
            <span className="text-accent">{line.value}</span>,
          </p>
        ))}
        <p className="text-muted-fg">
          {"}"};<span className="terminal-caret ml-1 inline-block h-4 w-2 translate-y-0.5 bg-accent" aria-hidden />
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      {/* Ambient backdrop: engineering grid + layered aurora wash */}
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden className="aurora absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-1.5 font-mono text-xs text-muted-fg">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                {hero.availability}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="font-mono text-sm text-accent">Hi, I&apos;m {person.name}</p>
              <h1 className="mt-5 font-heading text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4rem]">
                Senior Software Engineer building{" "}
                <em className="serif-accent text-gradient">
                  scalable, high&#8209;performance
                </em>{" "}
                digital products.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-fg md:text-lg">
                {hero.subheadline}
              </p>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted-fg">
                <MapPin className="size-4 text-accent" aria-hidden />
                {person.location}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <ButtonLink href="#projects" variant="primary">
                  View Projects
                  <ArrowRight className="size-4" aria-hidden />
                </ButtonLink>
                <ButtonLink href="#contact" variant="secondary">
                  <Mail className="size-4" aria-hidden />
                  Contact Me
                </ButtonLink>
                <ButtonLink href={person.cvPath} variant="ghost" download>
                  <Download className="size-4" aria-hidden />
                  Download CV
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          {/* Snapshot panel — desktop-only so the mobile hero stays focused */}
          <Reveal delay={0.28} className="hidden lg:block">
            <SnapshotTerminal />
          </Reveal>
        </div>

        {/* Editorial stat strip — hairline rules instead of floating cards */}
        <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-10 md:mt-24 lg:grid-cols-4">
          {hero.metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={0.35 + i * 0.08}>
              <MetricCard value={metric.value} label={metric.label} detail={metric.detail} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
