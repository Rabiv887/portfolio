import Link from "next/link"
import { ArrowUpRight } from "@/components/Icons"
import type { Project } from "@/lib/projects"
import { projectHref } from "@/lib/projects"

export function ProjectCard({ project }: { project: Project }) {
	return (
		<article className="card project-card">
			<div className="media-frame media-frame--placeholder">
				<span>Screenshot area reserved</span>
			</div>
			<div className="project-card__body">
				<div className="project-card__head">
					<h3 className="card__title">{project.name}</h3>
					{project.status === "private" ? (
						<span className="status-pill status-pill--private">Private</span>
					) : project.status === "in-progress" ? (
						<span className="status-pill status-pill--progress">In progress</span>
					) : (
						<span className="status-pill status-pill--live">Live</span>
					)}
				</div>
				<p className="project-card__summary">{project.summary}</p>
				<ul className="tag-row">
					{project.tags.map((tag) => (
						<li className="tag" key={tag}>
							{tag}
						</li>
					))}
				</ul>
				<Link className="project-card__link" href={projectHref(project.slug)}>
					View project <ArrowUpRight size={15} />
				</Link>
			</div>
		</article>
	)
}
