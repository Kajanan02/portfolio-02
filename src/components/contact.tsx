"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { contact, person } from "@/data/portfolio";
import { SectionHeader } from "@/components/section-header";
import { ButtonLink, Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

type FormStatus = "idle" | "sending" | "sent";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    // Placeholder submission — no data leaves the browser.
    // To make this real, POST the form data to your own API route
    // (src/app/api/contact/route.ts) or a service like Formspree/Resend,
    // keeping any API keys in environment variables on the server.
    window.setTimeout(() => setStatus("sent"), 900);
  }

  const inputStyles =
    "glass w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-fg/60 " +
    "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-1";

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="glow-spot absolute left-1/2 bottom-0 -z-10 h-[360px] w-[720px] -translate-x-1/2 translate-y-1/3"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow={contact.eyebrow}
          title={contact.title}
          description={contact.body}
          align="center"
        />

        <Reveal delay={0.1}>
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href={`mailto:${person.email}`} variant="primary">
              <Mail className="size-4" aria-hidden />
              {person.email}
            </ButtonLink>
            <ButtonLink
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <LinkedinIcon className="size-4" aria-hidden />
              LinkedIn
            </ButtonLink>
            <ButtonLink
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <GithubIcon className="size-4" aria-hidden />
              GitHub
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="glass mx-auto max-w-xl space-y-4 rounded-2xl p-6 md:p-8"
            aria-label="Contact form"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className={inputStyles}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={inputStyles}
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or opportunity…"
                className={inputStyles}
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={status !== "idle"}
            >
              {status === "idle" ? (
                <>
                  <Send className="size-4" aria-hidden />
                  Send Message
                </>
              ) : status === "sending" ? (
                <>
                  <Loader2 className="size-4 animate-spin motion-reduce:animate-none" aria-hidden />
                  Sending…
                </>
              ) : (
                <>
                  <CheckCircle2 className="size-4" aria-hidden />
                  Message noted — I&apos;ll be in touch
                </>
              )}
            </Button>

            <p role="status" aria-live="polite" className="text-center text-xs text-muted-fg">
              {status === "sent"
                ? "Thanks! This demo form doesn't send data yet — please email me directly for now."
                : "Prefer email? The button above opens your mail client directly."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
