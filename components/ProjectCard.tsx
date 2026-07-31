import Link from "next/link"
import type { Project } from "@/lib/projects"
import { projectHref } from "@/lib/projects"
import { ArrowUpRight } from "@/components/Icons"
import { MediaFrame, StatusBadge } from "@/components/ui"

/**
 * Project card. Order: status row, reserved media area, title, summary, tags,
 * actions. Actions stay explicit so keyboard focus and external links are
 * never ambiguous.
 */
export function ProjectCard({
	project,
	index,
}: {
	project: Project
	index?: number
}) {
	return (
		<article className="card card--interactive project-card">
			<div className="project-card__head">
				<span className="project-card__index">
					{typeof index === "number"
						? String(index + 1).padStart(2, "0")
						: project.type}
				</span>
				<StatusBadge status={project.status} />
			</div>

			<MediaFrame media={project.media} />

			<h3 className="card__title project-card__title">
				<Link href={projectHref(project.slug)}>{project.shortTitle}</Link>
			</h3>

			<p className="card__desc">{project.cardSummary}</p>

			<ul className="tag-row">
				{project.tags.map((tag) => (
					<li className="tag" key={tag}>
						{tag}
					</li>
				))}
			</ul>

			<div className="project-card__actions">
				<Link className="btn btn--secondary btn--sm" href={projectHref(project.slug)}>
					View details
				</Link>
				{project.liveLinks.map((link) => (
					<a
						key={link.url}
						className="btn btn--ghost btn--sm"
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{link.label}
						<ArrowUpRight size={15} />
						<span className="visually-hidden">(opens in a new tab)</span>
					</a>
				))}
			</div>
		</article>
	)
}
