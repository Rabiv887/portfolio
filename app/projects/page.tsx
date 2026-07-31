import type { Metadata } from "next"
import { ContactCta } from "@/components/home/ContactCta"
import { ProjectCard } from "@/components/ProjectCard"
import { ProjectsExplorer } from "@/components/ProjectsExplorer"
import { Notice, Section, SectionHead } from "@/components/ui"
import { featuredProjects, projects } from "@/lib/projects"
import { site } from "@/lib/site"

import "@/styles/projects.css"

const description =
	"Practical web tools and AI-assisted automation projects, documented honestly with real scope, tech, and challenges."

export const metadata: Metadata = {
	title: { absolute: "Projects by " + site.name },
	description,
	alternates: { canonical: "/projects/" },
	openGraph: {
		title: "Projects by " + site.name,
		description,
	},
}

export default function ProjectsPage() {
	return (
		<>
			<Section id="projects-header" className="page-header">
				<p className="eyebrow">Projects</p>
				<h1>Practical tools, automation systems, and AI-assisted experiments</h1>
				<p className="page-header__lede">
					{projects.length} documented projects — public web tools you can try
					right now, and private automation built to solve real day-to-day
					problems.
				</p>
			</Section>

			<Section
				id="featured-projects"
				labelledBy="projects-featured-title"
				className="section--tight"
			>
				<SectionHead
					eyebrow="Featured"
					title="Start here"
					titleId="projects-featured-title"
					description="The two public tools, live and ready to try."
				/>
				<div className="featured-grid">
					{featuredProjects.map((project, index) => (
						<ProjectCard key={project.slug} project={project} index={index} />
					))}
				</div>
			</Section>

			<Section id="all-projects" labelledBy="all-projects-title">
				<SectionHead
					eyebrow="All projects"
					title="Everything I have built so far"
					titleId="all-projects-title"
					description="Filter by category, or by whether a project is public or kept private."
				/>
				<ProjectsExplorer projects={projects} />
				<Notice>
					Private projects are described honestly — problem, role, tools, and
					challenges — without publishing credentials, tokens, or internal
					repository links.
				</Notice>
			</Section>

			<ContactCta />
		</>
	)
}
