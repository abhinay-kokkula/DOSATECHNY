import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { buildMetadata } from "@/lib/seo/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: "DosaTechny",
    description:
      "DOSATECHNY is a premium web application partner building SEO-first, scalable platforms for startups and enterprises.",
    path: "/",
    keywords: [
      "Develop Once Search Anywhere",
      "SEO-first development",
      "web partners",
      "web application architecture",
      "technical SEO",
    ],
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} font-body text-brand-text antialiased`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10 noise-overlay opacity-[0.07]" />
        {children}
      </body>
    </html>
  );
}
