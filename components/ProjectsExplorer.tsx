"use client"

import { useMemo, useState } from "react"
import { ProjectCard } from "@/components/ProjectCard"
import type { Project } from "@/lib/projects"

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
	const [query, setQuery] = useState("")
	const [activeTag, setActiveTag] = useState<string | null>(null)

	const allTags = useMemo(() => {
		const tags = new Set<string>()
		projects.forEach((project) => project.tags.forEach((tag) => tags.add(tag)))
		return Array.from(tags)
	}, [projects])

	const filtered = useMemo(() => {
		return projects.filter((project) => {
			const matchesQuery =
				query.trim().length === 0 ||
				project.name.toLowerCase().includes(query.trim().toLowerCase()) ||
				project.summary.toLowerCase().includes(query.trim().toLowerCase())
			const matchesTag = !activeTag || project.tags.includes(activeTag)
			return matchesQuery && matchesTag
		})
	}, [projects, query, activeTag])

	return (
		<div className="projects-explorer">
			<div className="projects-explorer__controls">
				<label className="visually-hidden" htmlFor="project-search">
					Search projects
				</label>
				<input
					id="project-search"
					type="search"
					className="input"
					placeholder="Search projects\u2026"
					value={query}
					onChange={(event) => setQuery(event.target.value)}
				/>
				<ul className="tag-filter" role="group" aria-label="Filter by tag">
					<li>
						<button
							type="button"
							className={"tag-filter__btn" + (activeTag === null ? " is-active" : "")}
							onClick={() => setActiveTag(null)}
							aria-pressed={activeTag === null}
						>
							All
						</button>
					</li>
					{allTags.map((tag) => (
						<li key={tag}>
							<button
								type="button"
								className={"tag-filter__btn" + (activeTag === tag ? " is-active" : "")}
								onClick={() => setActiveTag(tag)}
								aria-pressed={activeTag === tag}
							>
								{tag}
							</button>
						</li>
					))}
				</ul>
			</div>

			{filtered.length > 0 ? (
				<ul className="projects-grid">
					{filtered.map((project) => (
						<li key={project.slug}>
							<ProjectCard project={project} />
						</li>
					))}
				</ul>
			) : (
				<p className="notice">No projects match your search.</p>
			)}
		</div>
	)
}
