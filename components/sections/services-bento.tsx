import { Reveal } from "@/components/animations/reveal";

const services = [
  {
    title: "E-commerce websites",
    description: "Conversion-minded storefronts with fast product discovery, secure checkout flows, and analytics baked in.",
  },
  {
    title: "Static websites",
    description: "The static web app directly delivers the content to the end user’s browser without fetching any data from the server.",
  },
  {
    title: "Portfolio Sites",
    description: "Showcase your work with elegant layouts, motion, and SEO-friendly metadata that bring clients to you.",
  },
  {
    title: "Single-Page Applications",
    description: "Fluid, app-like experiences that keep users engaged with real-time interactions and responsive UI states.",
  },
  {
    title: "Health care & clinic",
    description: "Provides you a clean natural healthy websites for your clinics",
  },
  {
    title: "Educational Platforms",
    description: "Course, cohort, and LMS experiences with structured content, progress tracking, and reliable performance.",
  },
];

export function ServicesBento() {
  return (
    <section id="services" className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.24em] text-brand-primary">Services</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl">Digital builds tailored to your Goals</h2>
          <p className="mt-4 max-w-2xl text-sm text-brand-muted">
            From first impression to final checkout, we design and ship the experiences that move your business forward.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <div className="group electric-border block h-full rounded-2xl bg-brand-surface/70 p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-2xl text-brand-text">{service.title}</h3>
                  <span className="rounded-full border border-brand-primary/40 px-3 py-1 text-xs text-brand-primary">0{index + 1}</span>
                </div>
                <p className="mt-3 text-sm text-brand-muted">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
