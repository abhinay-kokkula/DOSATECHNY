import type { ReactNode } from "react";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { ScrollProgress } from "@/components/shared/scroll-progress";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
