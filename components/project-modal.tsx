"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import type { Project } from "@/lib/data";


export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  // Escape closes; lock page scroll while open
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-70 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm sm:p-6"
        >
          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label={project.category}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
          >
            {/* Header */}
            <div className="mb-4 flex items-start justify-between gap-4">
              <h2 className="text-xl font-semibold text-ink-dark sm:text-2xl">
                {project.category}
              </h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="rounded-lg border border-ink-dark/15 p-1.5 text-ink-dark/60 transition-colors hover:bg-ink-dark/5 hover:text-ink-dark"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Meta: sector · scale · region · duration */}
            <p className="mb-5 text-sm text-ink-dark/45">
              {project.meta.join(" · ")}
            </p>

            {/* Tags */}
            <div className="mb-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-ink-dark/15 px-3.5 py-1 text-sm text-ink-dark"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Thumbnail + story */}
            <div className="grid gap-6 sm:grid-cols-[260px_1fr] sm:gap-8">
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl sm:aspect-auto sm:h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 92vw, 260px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="mb-3 text-xl leading-snug font-bold text-ink-dark sm:text-2xl">
                  {project.title}
                </h3>
                <p className="text-[17px] leading-relaxed text-ink-dark/70">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
