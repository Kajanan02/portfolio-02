import {
  BadgeCheck,
  Flag,
  Globe,
  Sparkles,
  Terminal,
  Users,
  type LucideIcon,
} from "lucide-react";
import { volunteering } from "@/data/portfolio";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";

const icons: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  flag: Flag,
  globe: Globe,
  terminal: Terminal,
  badge: BadgeCheck,
  users: Users,
};

export function VolunteerLeadership() {
  return (
    <section id="community" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Beyond the job"
          title="Leadership & Community"
          description="Technical volunteering and community leadership across university, IEEE, and open-source communities."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {volunteering.map((item, i) => {
            const Icon = icons[item.icon] ?? Users;
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.06} className="h-full">
                <div className="glass flex h-full items-center gap-4 rounded-2xl p-5 transition-colors duration-300 hover:border-accent/40">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Icon className="size-4.5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-0.5 text-xs text-muted-fg">{item.org}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
