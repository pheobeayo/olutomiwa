/* ───────────────────────────────────────────────────────────────
   CONTENT — everything the site says lives here.
   Sourced from the CV: SANNI Olutomiwa Akintunde, IT Support.
   ─────────────────────────────────────────────────────────────── */

export const person = {
  name: "Olutomiwa Sanni",
  fullName: "Sanni Olutomiwa Akintunde",
  wordmark: "olutomiwa",
  role: "IT Support & Network Infrastructure Manager",
  positioning:
    "Olutomiwa Sanni: IT operations and network infrastructure. Ten years keeping corporate systems available, secure and understood — from the switch in the rack to the report on the desk.",
} as const;

/* The ABOUT overlay */
export const navTiles = [
  { label: "About", description: "Ten years of IT operations and infrastructure.", href: "/#about" },
  { label: "Experience", description: "Where the work has been done.", href: "/#work" },
  { label: "Capabilities", description: "What I can be trusted with.", href: "/#capabilities" },
  { label: "Portfolio", description: "The full record of engagements.", href: "/portfolio" },
  { label: "Certifications", description: "CCNA, HCIA — routing & switching.", href: "/#capabilities" },
  { label: "Contact", description: "Tell me what needs fixing.", href: "/#contact" },
] as const;

export const nodes = ["Akure", "Ibadan", "Lagos"] as const;

export const contact = {
  email: "olutomiwasanni@gmail.com",
  phone: "+234 805 765 2795",
  linkedin: "https://www.linkedin.com/in/olutomiwa-sanni",
  location: "Nigeria",
  replyWindow: "two working days",
} as const;

/* The proof band: three facts, no adjectives */
export const proofLine = [
  "10+ years in IT operations",
  "99.5% system uptime maintained",
  "CCNA · HCIA certified",
] as const;

/* ─────────── Engagements ─────────── */

export type Project = {
  slug: string;
  category: string;
  sector: string;
  brand: string;
  outcome: string;
  meta: string[];
  title: string;
  tags: string[];
  image: string;
  description: string;
  flagship?: boolean;
};

export const projects: Project[] = [
  {
    slug: "pinnacle-systems",
    category: "IT Operations – Pinnacle Systems Ltd",
    sector: "IT operations",
    brand: "Pinnacle Systems Ltd",
    outcome: "99.5% system uptime across multiple client organisations.",
    meta: ["IT operations", "Multi-client", "Ibadan, Oyo State", "2021 – present"],
    title: "Maintaining 99.5% Uptime Across Multi-Client IT Operations",
    tags: ["IT Operations", "Team Supervision", "Infrastructure"],
    image: "/projects/pinnacle.png",
    description:
      "As IT Operations Officer at Pinnacle Systems, managed comprehensive IT support operations across multiple client organisations while maintaining 99.5% system uptime. Diagnosed and resolved hardware and software faults, cutting average resolution time through structured troubleshooting workflows. Supervised technical teams on network configuration, equipment installation and system maintenance, and coordinated infrastructure projects spanning system upgrades, network expansions and equipment rollouts. Implemented operational procedures that improved departmental efficiency by 20% and reduced support costs.",
    flagship: true,
  },
  {
    slug: "eboluw-consult",
    category: "Technical Management – Eboluw Consult",
    sector: "Technical management",
    brand: "Eboluw Consult",
    outcome: "99%+ operational uptime through proactive monitoring.",
    meta: ["Technical management", "Corporate clients", "Akure, Ondo State", "2024 – 2026"],
    title: "Technical Leadership and Preventive Maintenance Across Corporate Clients",
    tags: ["Networking", "Leadership", "Preventive Maintenance"],
    image: "/projects/eboluw.png",
    description:
      "As Technical Manager at Eboluw Consult, provided hardware and software support across multiple corporate client environments with minimal downtime, achieving 99%+ operational uptime through proactive monitoring and preventive maintenance. Installed and configured routers, switches, servers and workstations for client deployments, and enforced data backup procedures and security protocols consistently across all managed systems. Led cross-functional technical teams and developed operational reports and performance metrics to guide management decisions.",
    flagship: true,
  },
  {
    slug: "truelogic-technologies",
    category: "Operations & Support – TrueLogic Technologies Ltd",
    sector: "Operations & support",
    brand: "TrueLogic Technologies",
    outcome: "Response times cut 25%; revenue up 15%.",
    meta: ["Operations & support", "Corporate accounts", "Lagos Island, Lagos", "2019 – 2020"],
    title: "Workflow Redesign That Cut Customer Response Times by 25%",
    tags: ["Process Design", "Service Delivery", "Operations"],
    image: "/projects/truelogic.png",
    description:
      "As Operations & Technical Support Manager at TrueLogic Technologies, delivered technical support for hardware, software and networking issues across corporate client accounts, and managed IT infrastructure for multiple clients to ensure reliable system performance and network uptime. Implemented operational workflows that reduced customer response times by 25% and raised service delivery standards. Supervised both sales and technical operations, contributing to a 15% revenue increase through process improvements.",
    flagship: true,
  },
  {
    slug: "stellar-tech-hub",
    category: "Management – Stellar Tech Hub",
    sector: "Technology hub",
    brand: "Stellar Tech Hub",
    outcome: "Led a team of 5+ running a technology co-working hub.",
    meta: ["Technology hub", "Team of 5+", "Ibadan, Oyo State", "2022 – 2023"],
    title: "Running the Systems, Team and Vendors of a Technology Hub",
    tags: ["Team Leadership", "Vendor Management", "Data Security"],
    image: "/projects/stellar.png",
    description:
      "As Manager of Stellar Tech Hub, ran the daily IT operations of a technology co-working hub, keeping system and network functionality smooth for resident members. Handled hardware maintenance and equipment configuration, and ensured data security and backup procedures were in place. Led a team of five or more staff with technical training, performance coaching and operational guidance, and managed vendor relationships for IT supplies and equipment to optimise procurement and cost efficiency.",
  },
  {
    slug: "newage-solutions",
    category: "IT Support – Newage Solutions & Technologies Ltd",
    sector: "IT support",
    brand: "Newage Solutions",
    outcome: "Four years leading support teams and infrastructure upgrades.",
    meta: ["IT support", "Client environments", "Ibadan, Oyo State", "2015 – 2019"],
    title: "Building the Support Function: Analysis, Upgrades and Disaster Recovery",
    tags: ["System Analysis", "Disaster Recovery", "Mentorship"],
    image: "/projects/newage.png",
    description:
      "As IT Support Operations Manager at Newage Solutions & Technologies, led IT support teams across system analysis, hardware maintenance, network troubleshooting and performance optimisation. Managed infrastructure upgrades and equipment installations with minimal disruption to client operations. Supervised technical staff and mentored them through complex support challenges and network administration, and ensured data backup and disaster recovery procedures were implemented and regularly tested across client environments.",
  },
];

/* ─────────── Capabilities ─────────── */

export const capabilities = [
  {
    title: "Network & System Performance",
    body: "I keep networks and systems available and predictable — proactive monitoring, preventive maintenance and structured troubleshooting workflows. Across corporate environments this has held uptime at 99.5% and steadily reduced average fault resolution time.",
  },
  {
    title: "Infrastructure Installation & Configuration",
    body: "Routers, switches, servers and workstations: specified, installed and configured for client deployments, and upgraded with minimal disruption to operations. CCNA and HCIA certified in routing and switching.",
  },
  {
    title: "Data Backup & Security Compliance",
    body: "Backup procedures and security protocols enforced consistently across managed systems, with disaster recovery routines implemented and regularly tested rather than assumed — so continuity holds when something actually fails.",
  },
  {
    title: "Team Leadership & Process Optimisation",
    body: "Leading cross-functional technical teams with training, coaching and hands-on support on the hard problems. Operational procedures I have introduced improved departmental efficiency by 20% and cut customer response times by 25%.",
  },
] as const;

/* Names shown in the marquee on the portfolio page */
export const clients = [
  "Eboluw Consult",
  "Pinnacle Systems Ltd",
  "Stellar Tech Hub",
  "TrueLogic Technologies",
  "Newage Solutions & Technologies",
] as const;

/* ─────────── Credentials ─────────── */

export const certifications = [
  { name: "Cisco Certified Network Associate (CCNA)", year: "2016" },
  { name: "Huawei Certified ICT Associate (HCIA) — Routing & Switching", year: "2019" },
] as const;

export const education = {
  degree: "B.Sc. (Hons) Mechanical Engineering",
  institution: "Obafemi Awolowo University, Ile-Ife",
  years: "2008 – 2014",
} as const;
