import { Reveal } from "@/components/animations/reveal";

const aboutPoints = [
  {
    title: "Built for visibility",
    detail: "We engineer every page so search engines and customers can find you quickly and trust what they see.",
  },
  {
    title: "Designed to convert",
    detail: "Clear storytelling, intuitive flows, and responsive layouts keep visitors engaged until they take action.",
  },
  {
    title: "Ready to grow",
    detail: "Modular components and modern tooling mean your site adapts easily as your offerings expand.",
  },
];

export function DosaPhilosophy() {
  return (
    <section id="about" className="section-spacing border-y border-white/10 bg-brand-surface/30">
      <div className="container-shell">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.24em] text-brand-primary">About</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl md:text-5xl">We develop your presence online.</h2>
          <p className="mt-4 max-w-2xl text-sm text-brand-muted">
            From the first pixel to the final deployment, DOSATECHNY blends design, engineering, and SEO so your brand is discoverable, credible, and ready to win online.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {aboutPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.08}>
              <article className="glass-panel h-full p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-brand-subtle">0{index + 1}</p>
                <p className="mt-4 font-display text-xl text-brand-text">{point.title}</p>
                <p className="mt-3 text-sm text-brand-muted">{point.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
