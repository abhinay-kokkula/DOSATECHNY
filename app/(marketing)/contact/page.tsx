import { Reveal } from "@/components/animations/reveal";
import { ContactWizard } from "@/components/shared/contact-wizard";
import { JsonLd } from "@/components/shared/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Start your DOSATECHNY project intake with our guided contact wizard. Average response time is under two hours.",
  path: "/contact",
  keywords: ["contact dosatechny", "project estimator", "web app consultation"],
});

export default function ContactPage() {
  const localTime = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
    timeZoneName: "short",
  }).format(new Date());

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />

      <section className="section-spacing">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <p className="text-sm uppercase tracking-[0.24em] text-brand-primary">Contact</p>
              <h1 className="mt-4 max-w-3xl font-display text-4xl md:text-6xl">Tell us what you are building</h1>
              <p className="mt-5 max-w-2xl text-lg text-brand-muted">
                Use the guided estimator to share scope, budget, and timeline. We reply fast with technical next steps.
              </p>
            </Reveal>

            <div className="mt-8">
              <ContactWizard />
            </div>
          </div>

          <Reveal delay={0.08}>
            <aside className="glass-panel h-full p-6">
              <h2 className="font-display text-2xl">Studio Operations</h2>
              <div className="mt-6 space-y-4 text-sm text-brand-muted">
                <p>
                  <span className="text-brand-text">Office Time:</span> {localTime}
                </p>
                <p>
                  <span className="text-brand-text">Response Promise:</span> Under 2 hours
                </p>
                <p>
                  <span className="text-brand-text">Emergency Hotline:</span> +1 (555) 000-0000
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-[linear-gradient(140deg,#131320,#0f1522)] p-4">
                <p className="text-xs uppercase tracking-[0.15em] text-brand-subtle">Office Map</p>
                <div className="mt-3 h-48 rounded-xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(0,240,255,0.2),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(112,0,255,0.25),transparent_35%),#08080d]" />
                <p className="mt-3 text-xs text-brand-subtle">Bengaluru · Hyderabad · Remote Global Delivery</p>
              </div>

              <div className="mt-6 rounded-2xl border border-dashed border-white/25 p-4">
                <p className="text-xs uppercase tracking-[0.15em] text-brand-subtle">RFP Drop Zone</p>
                <p className="mt-2 text-sm text-brand-muted">Drag and drop your RFP package (PDF, DOCX, ZIP) when API upload is connected.</p>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
