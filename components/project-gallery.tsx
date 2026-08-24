"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";

/*
  Shared gallery: the interactive cards + their modal.
  `limit` shows a glimpse (home page); omit it for the full portfolio.
*/
export function ProjectGallery({ limit }: { limit?: number }) {
  const [open, setOpen] = useState<number | null>(null);
  const shown = limit ? projects.slice(0, limit) : projects;

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        {shown.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            onOpen={() => setOpen(i)}
          />
        ))}
      </div>
      <ProjectModal
        project={open === null ? null : shown[open]}
        onClose={() => setOpen(null)}
      />
    </>
  );
}
