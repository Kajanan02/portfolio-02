import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm " +
  "px-6 h-12 cursor-pointer select-none transition-all duration-200 " +
  "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 " +
  "active:scale-[0.98]";

const variants = {
  primary:
    "bg-accent text-background shadow-[0_0_24px_var(--glow)] hover:shadow-[0_0_36px_var(--glow)] hover:brightness-110",
  secondary:
    "glass text-foreground hover:border-accent/50 hover:bg-accent-soft",
  ghost:
    "text-muted-fg hover:text-foreground hover:bg-card",
} as const;

export type ButtonVariant = keyof typeof variants;

export function buttonStyles(variant: ButtonVariant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

type ButtonLinkProps = React.ComponentPropsWithoutRef<"a"> & {
  variant?: ButtonVariant;
};

/** Anchor styled as a button — most portfolio CTAs are navigational. */
export function ButtonLink({ variant = "primary", className, children, ...props }: ButtonLinkProps) {
  return (
    <a className={buttonStyles(variant, className)} {...props}>
      {children}
    </a>
  );
}

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
};

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button className={buttonStyles(variant, className)} {...props}>
      {children}
    </button>
  );
}
