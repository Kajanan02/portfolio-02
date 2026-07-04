import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { navLinks, person } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:px-6 md:flex-row md:justify-between">
        <p className="text-sm text-muted-fg">
          © {year} {person.name}. Built with Next.js, Tailwind CSS & Framer Motion.
        </p>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-4">
            {navLinks.slice(0, 4).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-fg transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${person.email}`}
            aria-label="Email"
            className="glass flex size-9 items-center justify-center rounded-full text-muted-fg transition-colors hover:text-accent"
          >
            <Mail className="size-4" aria-hidden />
          </a>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
            className="glass flex size-9 items-center justify-center rounded-full text-muted-fg transition-colors hover:text-accent"
          >
            <LinkedinIcon className="size-4" aria-hidden />
          </a>
          <a
            href={person.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in a new tab)"
            className="glass flex size-9 items-center justify-center rounded-full text-muted-fg transition-colors hover:text-accent"
          >
            <GithubIcon className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
