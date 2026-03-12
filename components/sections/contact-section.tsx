"use client";

import { FormEvent } from "react";
import { Reveal } from "@/components/animations/reveal";

export function ContactSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="container-shell grid gap-8 md:grid-cols-[1fr,1.1fr] md:items-start">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.24em] text-brand-primary">Contact Us</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl">Tell us about your build</h2>
          <p className="mt-4 max-w-2xl text-sm text-brand-muted">
            Share what you need and we will reply with a concrete plan, timelines, and next steps to launch.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-brand-subtle list-disc pl-5">
            <li>Fast responses from the core team.</li>
            <li>Practical guidance on scope and sequencing.</li>
            <li>No spam - just a clear path forward.</li>
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-brand-surface/70 p-6 shadow-card">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm text-brand-muted" htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-white/15 bg-brand-surface/70 px-4 py-3 text-sm text-brand-text outline-none focus:border-brand-primary"
                  placeholder="Abhinay kokkula"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm text-brand-muted" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/15 bg-brand-surface/70 px-4 py-3 text-sm text-brand-text outline-none focus:border-brand-primary"
                  placeholder="yourmail@email.com"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm text-brand-muted" htmlFor="project">Project Type</label>
                <select
                  id="project"
                  name="project"
                  className="w-full rounded-xl border border-white/15 bg-brand-surface/70 px-4 py-3 text-sm text-brand-text outline-none focus:border-brand-primary"
                  defaultValue=""
                >
                  <option value="" disabled>Choose one</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="portfolio">Portfolio</option>
                  <option value="spa">Single-page app</option>
                  <option value="education">Educational platform</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm text-brand-muted" htmlFor="details">Project Details</label>
                <textarea
                  id="details"
                  name="details"
                  rows={5}
                  required
                  className="w-full rounded-xl border border-white/15 bg-brand-surface/70 px-4 py-3 text-sm text-brand-text outline-none focus:border-brand-primary"
                  placeholder="Share goals, timelines, and any links that help us understand your vision."
                />
              </div>

              <button type="submit" className="btn-primary w-full">Send message</button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
