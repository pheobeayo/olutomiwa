"use client";

import { motion } from "motion/react";
import { certifications, education } from "@/lib/data";

const grey = "text-ink-dark/40";

export function About() {
  return (
    <section id="about" className="relative z-10 scroll-mt-24 bg-paper px-6 pt-8 pb-20 md:pb-28">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 60, damping: 16 }}
          className="text-3xl leading-[1.2] font-semibold tracking-[-0.02em] text-ink-dark sm:text-4xl md:text-[2.9rem]"
        >
          I am Olutomiwa Sanni — an IT professional with ten years in{" "}
          <span className={grey}>technical support</span>,{" "}
          <span className={grey}>network infrastructure</span> and{" "}
          <span className={grey}>IT operations</span>. I keep corporate systems
          available, enforce the backup and security routines that make
          continuity real, and lead the teams that deliver it.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 60, damping: 16, delay: 0.1 }}
          className="mt-14 grid gap-10 border-t border-ink-dark/10 pt-10 sm:grid-cols-2"
        >
          <div>
            <p className="mb-4 text-[11px] font-semibold tracking-[0.22em] text-ink-dark/40 uppercase">
              Certifications
            </p>
            <ul className="space-y-2">
              {certifications.map((c) => (
                <li key={c.name} className="text-ink-dark/75">
                  {c.name}{" "}
                  <span className="text-ink-dark/40">— {c.year}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-[11px] font-semibold tracking-[0.22em] text-ink-dark/40 uppercase">
              Education
            </p>
            <p className="text-ink-dark/75">
              {education.degree}
              <span className="block text-ink-dark/40">
                {education.institution} · {education.years}
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
