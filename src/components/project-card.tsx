import {
  Activity,
  BookOpen,
  Car,
  Sprout,
  TrendingUp,
  Trophy,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  activity: Activity,
  car: Car,
  workflow: Workflow,
  sprout: Sprout,
  trophy: Trophy,
  book: BookOpen,
};

export type Project = {
  title: string;
  category: string;
  description: string;
  impact: string;
  tags: readonly string[];
  icon: string;
};

/** Featured project card: index + category header, boxed impact metric, tech tags. */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = icons[project.icon] ?? Activity;

  return (
    <article
      className={cn(
        "glass card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl p-6",
      )}
    >
      {/* Accent hairline that lights up along the top edge on hover */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div
        aria-hidden
        className="glow-spot pointer-events-none absolute -top-16 right-0 h-40 w-56 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="flex items-start justify-between">
        <div className="flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-105">
          <Icon className="size-5" aria-hidden />
        </div>
        <div className="text-right">
          <p className="font-mono text-xs text-muted-fg/70">{String(index + 1).padStart(2, "0")}</p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-accent">
            {project.category}
          </p>
        </div>
      </div>

      <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight text-foreground">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-fg">
        {project.description}
      </p>

      <p className="mt-5 flex items-start gap-2.5 rounded-xl bg-accent-soft px-4 py-3 text-sm font-medium leading-snug text-accent">
        <TrendingUp className="mt-0.5 size-4 shrink-0" aria-hidden />
        {project.impact}
      </p>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-card-border pt-5">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </article>
  );
}
