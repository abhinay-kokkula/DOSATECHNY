"use client";

import { motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/shared/magnetic-button";

const headlineWords = ["Develop", "Once,", "Search", "Anywhere."];

const snippets = [
  "<article itemType=\"BlogPosting\">",
  "export const metadata = generateMetadata()",
  "{ \"@type\": \"Service\", \"name\": \"SEO Architecture\" }",
  "GET /api/search-index?status=ready",
];

export function HomeHero() {
  return (
    <section id="home" className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_30%,rgba(0,240,255,0.2),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(112,0,255,0.24),transparent_42%),linear-gradient(180deg,#0a0a0f_0%,#0a0a0f_55%,#12121a_100%)]" />
      <div className="absolute inset-0 -z-10 bg-grid-fade bg-[size:38px_38px] opacity-[0.14]" />

      <div className="container-shell grid items-center gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/40 bg-brand-primary/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-primary"
          >
            <Sparkles size={12} />
            grow your online presence Here
          </motion.p>

          <h1 className="font-display text-[clamp(2.5rem,6vw,4.6rem)] leading-[1.02] tracking-tight text-brand-text">
            {headlineWords.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 + index * 0.1 }}
                className={`mr-3 inline-block ${index % 2 === 0 ? "text-gradient" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.6 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-brand-muted"
          >
            We architect web applications with SEO DNA built in. Not bolted on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticButton href="/#contact">Start Your Journey</MagneticButton>
            {/* <MagneticButton href="/work" variant="secondary">
              View Our Work
            </MagneticButton> */}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="electric-border rounded-3xl bg-brand-surface/70 p-6 shadow-card"
        >
          <div className="mb-4 flex items-center gap-3 text-sm text-brand-muted">
            <Search size={15} className="text-brand-primary" />
            Search Surface Orchestration
          </div>

          <div className="space-y-3 font-mono text-xs text-cyan-100/85">
            {snippets.map((line, index) => (
              <motion.pre
                key={line}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.12 }}
                className="overflow-x-auto rounded-xl border border-white/10 bg-black/30 px-4 py-3"
              >
                <code>{line}</code>
              </motion.pre>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Lighthouse", value: "95+" },
              { label: "LCP", value: "< 2.5s" },
              { label: "CLS", value: "< 0.1" },
            ].map((metric) => (
              <div key={metric.label} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                <p className="text-lg font-semibold text-brand-primary">{metric.value}</p>
                <p className="text-xs text-brand-subtle">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
