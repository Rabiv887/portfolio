import type { Metadata } from "next"
import { ContactCta } from "@/components/home/ContactCta"
import { ProjectsExplorer } from "@/components/ProjectsExplorer"
import { Section } from "@/components/ui"
import { projects } from "@/lib/projects"
import { site } from "@/lib/site"

import "@/styles/projects.css"

const description =
	"Browse every project built by " +
	site.name +
	", filterable by tag, technology, and status."

export const metadata: Metadata = {
	title: { absolute: "Projects \u2014 " + site.name },
	description,
	alternates: { canonical: "/projects/" },
	openGraph: {
		title: "Projects \u2014 " + site.name,
		description,
	},
}

export default function ProjectsPage() {
	return (
		<>
			<Section id="projects-header" className="page-header">
				<p className="eyebrow">Projects</p>
				<h1>All projects</h1>
				<p className="page-header__lede">
					Every tool I have shipped so far, with the problem it solves and the
					stack behind it. Filter by tag or search by name.
				</p>
			</Section>

			<Section id="projects-list">
				<ProjectsExplorer projects={projects} />
			</Section>

			<ContactCta />
		</>
	)
}
