import { HomeHero } from "@/components/sections/home-hero";
import { ServicesBento } from "@/components/sections/services-bento";
import { DosaPhilosophy } from "@/components/sections/dosa-philosophy";
import { TechnicalCredibility } from "@/components/sections/technical-credibility";
import { ContactSection } from "@/components/sections/contact-section";
import { JsonLd } from "@/components/shared/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, organizationSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "DosaTechny",
  description:
    "DOSATECHNY architects web applications with SEO DNA built in from day one, delivering discoverable products that scale globally.",
  path: "/",
  keywords: ["web application agency", "technical SEO", "development", "edge architecture"],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
          ]),
        ]}
      />
      <HomeHero />
      <ServicesBento />
      <DosaPhilosophy />
      <TechnicalCredibility />
      <ContactSection />
    </>
  );
}
