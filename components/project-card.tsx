"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "@/lib/data";

/*
  Case card — the image is the card. No container, no background panel,
  no letterboxing: the artwork bleeds to the edges of its cell.
  Hover washes the art back and brings the tags, title and arrow forward.
*/
export function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      id={project.slug}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 70, damping: 16, delay: (index % 2) * 0.08 }}
      aria-haspopup="dialog"
      aria-label={`Open case: ${project.title}`}
      className="group relative block w-full scroll-mt-28 text-left"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 560px"
          className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-20"
        />

        {/* Hover content */}
        <div className="absolute inset-0 flex flex-col justify-between p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:p-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-ink-dark backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-end justify-between gap-4">
            <div className="max-w-md">
              <p className="mb-1.5 text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
                {project.brand}
              </p>
              <h3 className="text-lg leading-snug font-semibold text-white sm:text-xl">
                {project.title}
              </h3>
            </div>
            <ArrowUpRight
              aria-hidden
              className="mb-1 size-6 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </div>
    </motion.button>
  );
}
