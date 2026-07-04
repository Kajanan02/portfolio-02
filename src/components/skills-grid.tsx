import {
  Boxes,
  Cloud,
  Code2,
  Database,
  LayoutTemplate,
  Server,
  Smartphone,
  Users,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";

const icons: Record<string, LucideIcon> = {
  code: Code2,
  smartphone: Smartphone,
  layout: LayoutTemplate,
  server: Server,
  database: Database,
  cloud: Cloud,
  boxes: Boxes,
  users: Users,
};

export function SkillsGrid() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Toolbox"
          title="Skills & Technologies"
          description="A full-stack toolkit shaped by production work across mobile, web, backend, and cloud."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon] ?? Code2;
            return (
              <Reveal key={group.title} delay={(i % 4) * 0.06} className="h-full">
                <div className="glass h-full rounded-2xl p-5 transition-colors duration-300 hover:border-accent/40">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                      <Icon className="size-4.5" aria-hidden />
                    </span>
                    <h3 className="font-heading text-sm font-semibold text-foreground">
                      {group.title}
                    </h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
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
