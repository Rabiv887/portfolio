"use client"

import { useMemo, useState } from "react"
import { ProjectCard } from "@/components/ProjectCard"
import type { Project } from "@/lib/projects"

type FilterId = "all" | "web-tools" | "automation" | "productivity" | "public" | "private"

const filters: Array<{ id: FilterId; label: string }> = [
	{ id: "all", label: "All" },
	{ id: "web-tools", label: "Web Tools" },
	{ id: "automation", label: "Automation" },
	{ id: "productivity", label: "Productivity" },
	{ id: "public", label: "Public" },
	{ id: "private", label: "Private" },
]

function matchesFilter(project: Project, filter: FilterId): boolean {
	switch (filter) {
		case "all":
			return true
		case "web-tools":
			return project.tags.includes("Web Tool")
		case "automation":
			return project.tags.includes("Automation")
		case "productivity":
			return project.tags.includes("Productivity")
		case "public":
			return project.status === "public"
		case "private":
			return project.status === "private"
		default:
			return true
	}
}

/**
 * Category filters are a client-side enhancement only. Every project is
 * already present in the server-rendered markup (the default filter is
 * "all"), so the full list still reads correctly with JavaScript disabled —
 * only the chip buttons need it.
 */
export function ProjectsExplorer({ projects }: { projects: Project[] }) {
	const [active, setActive] = useState<FilterId>("all")

	const visible = useMemo(
		() => projects.filter((project) => matchesFilter(project, active)),
		[projects, active],
	)

	return (
		<div className="projects-explorer">
			<div className="filter-row" role="group" aria-label="Filter projects by category">
				{filters.map((filter) => (
					<button
						key={filter.id}
						type="button"
						className={
							"filter-chip" + (active === filter.id ? " filter-chip--active" : "")
						}
						aria-pressed={active === filter.id}
						onClick={() => setActive(filter.id)}
					>
						{filter.label}
					</button>
				))}
			</div>

			{visible.length > 0 ? (
				<div className="projects-grid">
					{visible.map((project, index) => (
						<ProjectCard key={project.slug} project={project} index={index} />
					))}
				</div>
			) : (
				<p className="projects-explorer__empty">No projects match this filter yet.</p>
			)}
		</div>
	)
}
