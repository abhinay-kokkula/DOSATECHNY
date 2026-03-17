import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";
import { JsonLd } from "@/components/shared/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

const timeline = [
  {year:"2026", event:"just started "},
  // { year: "2026", event: "DOSA framework concept created for SEO-native app architecture." },
  // { year: "2026", event: "DOSATECHNY founded as a focused studio for search-first product engineering." },
  { year: "2026", event: "Expanding globally by delivering extrodinary & Optimized results." },
];

const placeholderImage = "/images/pp1.png";

const team = [
  { name: "Abhinay kokkula", role: "Founder & Developer", image: placeholderImage },
];

const values = [
  {
    title: "Architecture Before Interface",
    text: "Every visual decision sits on top of measurable architecture and performance constraints.",
  },
];

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn the DOSATECHNY origin story, operating principles, and the team behind SEO-first application architecture.",
  path: "/about",
  keywords: ["about dosatechny", "engineering team", "seo-first approach"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />

      <section className="section-spacing">
        <div className="container-shell">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.24em] text-brand-primary">About DOSATECHNY</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl md:text-6xl">People will thought its a food item But,</h1>
            <p className="mt-6 max-w-3xl text-lg text-brand-muted">
              We started DOSATECHNY to build websites that helps you to visible your online presence anywhere in the Internet.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
            <Reveal>
              <article className="glass-panel p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-subtle">Origin Timeline</p>
                <div className="mt-6 space-y-4">
                  {timeline.map((item) => (
                    <div key={item.year} className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm font-semibold text-brand-primary">{item.year}</p>
                      <p className="mt-1 text-sm text-brand-muted">{item.event}</p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="glass-panel p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-subtle">Values</p>
                <div className="mt-6 space-y-3">
                  {values.map((value) => (
                    <details key={value.title} className="group rounded-xl border border-white/10 bg-white/5 p-4 open:border-brand-primary/35">
                      <summary className="cursor-pointer list-none font-display text-xl text-brand-text">{value.title}</summary>
                      <p className="mt-3 text-sm text-brand-muted">{value.text}</p>
                    </details>
                  ))}
                </div>
              </article>
            </Reveal>
          </div>

          <Reveal className="mt-12">
            <h2 className="font-display text-3xl">Team</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <article key={member.name} className="group rounded-2xl border border-white/10 bg-brand-surface/65 p-5 transition-colors hover:border-brand-primary/35">
                  <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                    <div className="relative aspect-square w-full">
                      <Image
                        src={member.image ?? placeholderImage}
                        alt={`${member.name} portrait`}
                        fill
                        sizes="(min-width: 1024px) 200px, 50vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                  <p className="font-display text-xl">{member.name}</p>
                  <p className="mt-1 text-sm text-brand-muted">{member.role}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
