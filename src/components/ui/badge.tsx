import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

/** Small pill used for tech tags and metadata. */
export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-card-border bg-card px-3 py-1",
        "font-mono text-xs text-muted-fg transition-colors duration-200",
        "hover:border-accent/40 hover:text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
