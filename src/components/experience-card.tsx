import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  current: boolean;
  summary: string;
  achievements: readonly string[];
  tech: readonly string[];
};

/** Single entry in the experience timeline. */
export function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <article
      className={cn(
        "glass card-lift group rounded-2xl p-6 md:p-8",
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground md:text-xl">
            {entry.role}
          </h3>
          <p className="mt-1 text-sm text-accent">{entry.company}</p>
        </div>
        <p className="font-mono text-xs text-muted-fg">
          {entry.period}
          {entry.current ? (
            <span className="ml-2 rounded-full bg-accent-soft px-2 py-0.5 text-accent">Current</span>
          ) : null}
        </p>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-fg">{entry.summary}</p>

      <ul className="mt-5 space-y-3">
        {entry.achievements.map((achievement) => (
          <li key={achievement.slice(0, 40)} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-fg">
            <ChevronRight className="mt-1 size-3.5 shrink-0 text-accent" aria-hidden />
            {achievement}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {entry.tech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </article>
  );
}
