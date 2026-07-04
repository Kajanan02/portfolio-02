import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

/** Consistent heading block for every section: ruled eyebrow, title, optional description. */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "mb-14 flex flex-col gap-4 md:mb-20",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-accent">
        <span aria-hidden className="h-px w-8 bg-gradient-to-r from-[var(--accent)] to-transparent" />
        {eyebrow}
        {align === "center" ? (
          <span aria-hidden className="h-px w-8 bg-gradient-to-l from-[var(--accent)] to-transparent" />
        ) : null}
      </span>
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-muted-fg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
