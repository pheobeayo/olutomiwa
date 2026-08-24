"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { projects } from "@/lib/data";
import { ProjectModal } from "@/components/project-modal";

/* Three flagship projects, opening the case in place. */
export function SelectedWork() {
  const flagship = projects.filter((p) => p.flagship).slice(0, 3);
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="work" className="scroll-mt-24 bg-paper px-6 pb-24 md:pb-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-[11px] font-semibold tracking-[0.22em] text-ink-dark/40 uppercase">
          Selected experience
        </h2>

        <p className="mt-6 max-w-3xl text-2xl leading-tight font-semibold tracking-[-0.02em] text-accent-deep text-balance sm:text-3xl md:text-4xl">
          &ldquo;When the infrastructure is right, nobody notices it. That is
          the whole job.&rdquo;
        </p>

        <p className="mt-8 text-[15px] font-medium text-ink-dark/50">
          Click to read the engagements
        </p>

        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          {flagship.map((p, i) => (
            <motion.button
              key={p.slug}
              type="button"
              onClick={() => setOpen(i)}
              aria-haspopup="dialog"
              aria-label={`Read the project: ${p.title}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 70, damping: 16, delay: i * 0.07 }}
              className="group block overflow-hidden rounded-2xl bg-ground-deep text-left transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 92vw, 320px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-lg leading-tight font-semibold text-white">
                    {p.brand}
                  </p>
                  <p className="text-lg leading-tight text-white/70">{p.sector}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <Link
          href="/portfolio"
          className="mt-10 inline-flex items-center gap-2 text-lg font-semibold text-ink-dark transition-colors hover:text-accent-deep"
        >
          See the portfolio
          <span aria-hidden>→</span>
        </Link>
      </div>

      <ProjectModal
        project={open === null ? null : flagship[open]}
        onClose={() => setOpen(null)}
      />
    </section>
  );
}
