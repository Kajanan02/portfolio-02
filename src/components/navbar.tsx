"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { navLinks, person } from "@/data/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const reduceMotion = useReducedMotion();

  // Thin reading-progress bar along the bottom edge of the navbar.
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is in view to highlight the matching nav link.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl border-b border-card-border shadow-[0_8px_32px_-16px_rgba(0,0,0,0.25)]"
          : "border-b border-transparent",
      )}
      style={{ backgroundColor: scrolled ? "var(--nav-bg)" : "transparent" }}
    >
      {!reduceMotion ? (
        <motion.div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]"
          style={{ scaleX: progress }}
        />
      ) : null}
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <a
          href="#home"
          className="flex items-center gap-2 font-heading text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="glass flex size-8 items-center justify-center rounded-lg text-accent">
            <Terminal className="size-4" />
          </span>
          {person.shortName}
          <span className="hidden font-mono text-xs text-muted-fg sm:inline">
            / {person.role.toLowerCase()}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-colors duration-200",
                active === link.href
                  ? "bg-accent-soft text-accent"
                  : "text-muted-fg hover:text-foreground",
              )}
            >
              {link.label}
            </a>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="glass inline-flex size-10 cursor-pointer items-center justify-center rounded-full text-foreground"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass mx-4 mb-4 rounded-2xl p-3 md:hidden" style={{ backgroundColor: "var(--nav-bg)" }}>
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-sm transition-colors",
                    active === link.href
                      ? "bg-accent-soft text-accent"
                      : "text-muted-fg hover:bg-card hover:text-foreground",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
