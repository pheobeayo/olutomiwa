"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { capabilities } from "@/lib/data";

/* Four capability cards on the light surround. */
export function Capabilities() {
  return (
    <section id="capabilities" className="relative z-10 scroll-mt-24 bg-paper px-6 pb-28">
      <div className="mx-auto max-w-5xl">
        <p className="mb-8 text-[11px] tracking-[0.25em] text-ink-dark/40 uppercase">
          Capabilities
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          {capabilities.map((c, i) => (
            <motion.a
              key={c.title}
              href="#work"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 70, damping: 16, delay: (i % 2) * 0.08 }}
              className="group flex flex-col rounded-card bg-ground-deep p-7 transition-transform duration-500 hover:-translate-y-1 sm:p-8"
            >
              <span className="mb-6 block h-0.5 w-10 rounded-full bg-accent" aria-hidden />
              <h3 className="mb-4 text-xl leading-snug font-semibold text-white sm:text-2xl">
                {c.title}
              </h3>
              <p className="mb-8 text-[15px] leading-relaxed text-white/75">
                {c.body}
              </p>
              <ArrowRight
                className="mt-auto ml-auto size-6 text-white transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
