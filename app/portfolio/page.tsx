import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { LogoMarquee } from "@/components/logo-marquee";
import { ProjectGallery } from "@/components/project-gallery";
import { ContactBlock } from "@/components/contact-block";

export const metadata: Metadata = {
  title: "Portfolio | Olutomiwa Sanni",
  description: "Selected engineering projects.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-paper">
      <Navbar tone="light" />
      <LogoMarquee />
      <section className="px-6 pb-24 md:pb-28">
        <div className="mx-auto max-w-5xl">
          <ProjectGallery />
        </div>
      </section>
      <ContactBlock />
    </main>
  );
}
