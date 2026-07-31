"use client"

import { useState } from "react"
import type { Project } from "@/lib/projects"
import ProjectCard from "./ProjectCard"

type Filter = "all" | "public" | "private"

export default function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all")
  const filtered = projects.filter((p) => filter === "all" || p.status === filter)

  return (
    <div>
      <div className="filters" role="group" aria-label="Filter projects by visibility">
        {(["all", "public", "private"] as Filter[]).map((value) => (
          <button
            key={value}
            type="button"
            className="filter-btn"
            aria-pressed={filter === value}
            onClick={() => setFilter(value)}
          >
            {value === "all" ? "All" : value === "public" ? "Public" : "Private"}
          </button>
        ))}
      </div>
      <div className="grid grid-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
