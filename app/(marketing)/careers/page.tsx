import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { buildMetadata } from "@/lib/seo/metadata";

const openings = [
  {
    title: "Senior Next.js Engineer",
    location: "Remote / India",
    type: "Full-time",
    description: "Lead architecture for SEO-first web platforms and mentor delivery squads.",
  },
  {
    title: "Technical SEO Strategist",
    location: "Hybrid / Bengaluru",
    type: "Full-time",
    description: "Partner with engineering teams to design indexing-ready product systems and measurement frameworks.",
  },
  {
    title: "Cloud Platform Engineer",
    location: "Remote",
    type: "Contract",
    description: "Design edge-native deployments, infrastructure automation, and reliability playbooks.",
  },
];

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Join DOSATECHNY and build search-first, scalable products with a team that values engineering rigor and creative thinking.",
  path: "/careers",
  keywords: ["dosatechny careers", "nextjs jobs", "seo engineering jobs"],
});

export default function CareersPage() {
  return (
    <section className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.24em] text-brand-primary">Careers</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl md:text-6xl">Build the future of discoverable software</h1>
          <p className="mt-6 max-w-3xl text-lg text-brand-muted">
            We hire people who care deeply about architecture quality, measurable outcomes, and shipping with intent.
          </p>
        </Reveal>

        <div className="mt-10 space-y-4">
          {openings.map((opening, index) => (
            <Reveal key={opening.title} delay={index * 0.08}>
              <article className="rounded-2xl border border-white/10 bg-brand-surface/70 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="font-display text-2xl">{opening.title}</h2>
                  <div className="flex gap-2 text-xs uppercase tracking-[0.15em] text-brand-subtle">
                    <span className="rounded-full border border-white/15 px-3 py-1">{opening.location}</span>
                    <span className="rounded-full border border-white/15 px-3 py-1">{opening.type}</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-brand-muted">{opening.description}</p>
                <Link href="/contact" className="mt-6 inline-flex text-sm font-semibold text-brand-primary hover:text-cyan-200">
                  Apply now →
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
