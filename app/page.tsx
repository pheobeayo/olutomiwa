import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProofLine } from "@/components/proof-line";
import { About } from "@/components/about";
import { SelectedWork } from "@/components/selected-work";
import { Capabilities } from "@/components/capabilities";
import { ContactBlock } from "@/components/contact-block";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ProofLine />
      <About />
      <SelectedWork />
      <Capabilities />
      <ContactBlock />
    </main>
  );
}
