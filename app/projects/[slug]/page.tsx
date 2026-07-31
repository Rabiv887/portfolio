import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { CaseStudySection } from "@/components/CaseStudySection"
import { ContactCta } from "@/components/home/ContactCta"
import { ArrowUpRight, Github } from "@/components/Icons"
import { RelatedProjects } from "@/components/RelatedProjects"
import { Notice, Section } from "@/components/ui"
import { getProjectDetail } from "@/lib/projectDetails"
import { projectHref, projects } from "@/lib/projects"
import { site } from "@/lib/site"

import "@/styles/projects.css"

type ProjectPageProps = { params: { slug: string } }

export function generateStaticParams() {
	return projects.map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
	const project = projects.find((item) => item.slug === params.slug)
	if (!project) return { title: "Project not found" }

	const description = project.summary
	return {
		title: { absolute: project.name + " \u2014 " + site.name },
		description,
		alternates: { canonical: projectHref(project.slug) },
		openGraph: { title: project.name + " \u2014 " + site.name, description },
	}
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
	const project = projects.find((item) => item.slug === params.slug)
	if (!project) notFound()

	const detail = getProjectDetail(project.slug)

	return (
		<>
			<Section id="project-header" className="page-header project-header">
				<p className="eyebrow">Project</p>
				<h1>{project.name}</h1>
				<p className="page-header__lede">{project.summary}</p>

				<ul className="tag-row" aria-label="Technologies used">
					{project.tags.map((tag) => (
						<li className="tag" key={tag}>
							{tag}
						</li>
					))}
				</ul>

				<div className="btn-row">
					{project.liveUrl ? (
						<a
							className="btn btn--primary"
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							View live <ArrowUpRight size={16} />
						</a>
					) : (
						<button type="button" className="btn btn--secondary" disabled>
							{project.status === "private" ? "Private project" : "Live link coming soon"}
						</button>
					)}
					{project.repoUrl ? (
						<a
							className="btn btn--ghost"
							href={project.repoUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github size={16} /> View code
						</a>
					) : null}
				</div>
			</Section>

			<Section id="project-media" className="section--tight">
				<div className="media-frame media-frame--placeholder">
					<span>Screenshot area reserved</span>
				</div>
			</Section>

			{detail.sections.map((block) => (
				<CaseStudySection key={block.title} block={block} />
			))}

			<Section id="project-links" className="section--tight">
				<Notice>
					<Link href="/projects/">See all other projects</Link>
				</Notice>
			</Section>

			<RelatedProjects currentSlug={project.slug} tags={project.tags} />

			<ContactCta />
		</>
	)
}
