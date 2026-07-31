import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ContactCta } from "@/components/home/ContactCta"
import {
	CaseStudyList,
	CaseStudyParagraphs,
	CaseStudySection,
} from "@/components/CaseStudySection"
import { ArrowRight, ArrowUpRight } from "@/components/Icons"
import { Reveal } from "@/components/Reveal"
import { RelatedProjects } from "@/components/RelatedProjects"
import { MediaFrame, Notice, Section, SectionHead, StatusBadge } from "@/components/ui"
import { getProject, projectHref, projects } from "@/lib/projects"
import { getProjectDetail, getRelatedProjects } from "@/lib/projectDetails"
import { site } from "@/lib/site"

import "@/styles/projects.css"

type ProjectPageParams = { slug: string }

export function generateStaticParams(): ProjectPageParams[] {
	return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
	params,
}: {
	params: Promise<ProjectPageParams>
}): Promise<Metadata> {
	const { slug } = await params
	const project = getProject(slug)
	if (!project) return {}

	const title = project.shortTitle + " — " + site.name
	return {
		title: { absolute: title },
		description: project.cardSummary,
		alternates: { canonical: projectHref(project.slug) },
		openGraph: {
			type: "article",
			title,
			description: project.cardSummary,
		},
	}
}

export default async function ProjectDetailPage({
	params,
}: {
	params: Promise<ProjectPageParams>
}) {
	const { slug } = await params
	const project = getProject(slug)
	if (!project) notFound()

	const detail = getProjectDetail(project.slug)
	const related = getRelatedProjects(project.slug)

	const projectSchema = {
		"@context": "https://schema.org",
		"@type": "CreativeWork",
		name: project.title,
		description: project.summary,
		url: site.url + projectHref(project.slug),
		creator: { "@type": "Person", name: site.name, url: site.url },
		...(project.liveLinks.length > 0
			? { sameAs: project.liveLinks.map((link) => link.url) }
			: {}),
	}

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
			/>

			<Section id="project-hero">
				<Link className="back-link" href="/projects/">
					<ArrowRight size={15} className="back-link__icon" />
					All projects
				</Link>

				<div className="project-hero">
					<div>
						<p className="project-hero__type">{project.type}</p>
						<div className="project-hero__badges">
							<StatusBadge status={project.status} />
						</div>
						<h1>{project.title}</h1>
						<p className="project-hero__summary">{project.summary}</p>

						<ul className="tag-row">
							{project.tags.map((tag) => (
								<li className="tag" key={tag}>
									{tag}
								</li>
							))}
						</ul>

						{project.status === "private" && detail?.privacyNote ? (
							<div className="project-hero__privacy">
								<Notice>{detail.privacyNote}</Notice>
							</div>
						) : null}

						<div className="btn-row project-hero__actions">
							{project.liveLinks.map((link) => (
								<a
									key={link.url}
									className="btn btn--primary"
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={link.label + " (opens in a new tab)"}
								>
									{link.label}
									<ArrowUpRight size={17} />
								</a>
							))}
							<Link className="btn btn--secondary" href="/projects/">
								View all projects
							</Link>
							<Link className="btn btn--ghost" href="/contact/">
								Contact me
							</Link>
						</div>
					</div>

					<div className="project-hero__media">
						<MediaFrame media={project.media} />
					</div>
				</div>
			</Section>

			<Section id="case-study" labelledBy="case-study-title">
				<SectionHead
					eyebrow="Case study"
					title="How this project came together"
					titleId="case-study-title"
					description="The problem, the people it's for, and an honest look at how it was built."
				/>

				<div className="case-study">
					<Reveal>
						<CaseStudySection title="Problem">
							<CaseStudyParagraphs items={detail?.problem ?? []} />
						</CaseStudySection>
					</Reveal>

					<Reveal delay={40}>
						<CaseStudySection title="Target users">
							<CaseStudyList items={detail?.targetUsers ?? []} />
						</CaseStudySection>
					</Reveal>

					<Reveal delay={80}>
						<CaseStudySection title={detail?.featuresLabel ?? "Key features"}>
							<CaseStudyList items={detail?.features ?? []} />
						</CaseStudySection>
					</Reveal>

					<Reveal delay={120}>
						<CaseStudySection title="My role & contribution">
							<CaseStudyList items={detail?.role ?? []} />
						</CaseStudySection>
					</Reveal>

					<Reveal delay={160}>
						<CaseStudySection title="Tools & technologies">
							<CaseStudyList items={project.tech} />
						</CaseStudySection>
					</Reveal>

					{detail?.challenges ? (
						<Reveal delay={200}>
							<CaseStudySection title="Challenges">
								<CaseStudyList items={detail.challenges} />
							</CaseStudySection>
						</Reveal>
					) : null}
				</div>
			</Section>

			<RelatedProjects projects={related} />

			<ContactCta />
		</>
	)
}
