import type { Metadata } from "next";
import { NavProvider } from "@/context/nav-context";
import { CustomCursor } from "@/components/custom-cursor";
import { contact, person } from "@/lib/data";


import "@fontsource-variable/hanken-grotesk";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://olutomiwa.vercel.app/"),
  title: {
    default: "Olutomiwa Sanni | IT Support, Network Infrastructure & Frontend Developer",
    template: "%s",
  },
  description:
    "IT professional with 10+ years in technical support, network infrastructure management and IT operations, and a frontend developer. CCNA and HCIA certified.",
};

/* Person schema — makes the name resolve to this site, not to LinkedIn. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: person.role,
  email: `mailto:${contact.email}`,
  telephone: contact.phone,
  url: "https://olutomiwa.vercel.app/",
  sameAs: [contact.linkedin],
  knowsAbout: [
    "IT support",
    "Network infrastructure",
    "Routing and switching",
    "Data backup and disaster recovery",
    "IT operations management",
    "Frontend development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <NavProvider>
          {children}
          <CustomCursor />
        </NavProvider>
      </body>
    </html>
  );
}
