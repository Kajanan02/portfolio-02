"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type MetricCardProps = {
  value: string;
  label: string;
  detail?: string;
  className?: string;
};

/**
 * Animates every numeric run inside a metric string ("3000→700ms",
 * "5,000+") from zero to its final value, preserving surrounding text.
 * Renders the final value immediately for SSR and reduced-motion users.
 */
function AnimatedValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);

  const segments = useMemo(() => value.split(/(\d[\d,]*)/), [value]);

  useEffect(() => {
    if (!inView || reduceMotion) return;

    const controls = animate(0, 1, {
      duration: 1.4,
      ease: [0.22, 0.65, 0.3, 1],
      onUpdate: (progress) => {
        setDisplay(
          segments
            .map((segment) => {
              if (!/^\d/.test(segment)) return segment;
              const target = Number(segment.replace(/,/g, ""));
              const current = Math.round(target * progress);
              return segment.includes(",") ? current.toLocaleString("en-US") : String(current);
            })
            .join(""),
        );
      },
    });

    return () => controls.stop();
  }, [inView, reduceMotion, segments]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}

/** Editorial stat block with an animated count-up value — used in the hero strip. */
export function MetricCard({ value, label, detail, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        "group border-t-2 border-card-border pt-5 transition-colors duration-300 hover:border-accent/60",
        className,
      )}
    >
      <p className="text-gradient font-mono text-3xl font-semibold tracking-tight md:text-4xl">
        <AnimatedValue value={value} />
      </p>
      <p className="mt-2.5 text-sm font-medium text-foreground">{label}</p>
      {detail ? <p className="mt-1 text-xs leading-relaxed text-muted-fg">{detail}</p> : null}
    </div>
  );
}
