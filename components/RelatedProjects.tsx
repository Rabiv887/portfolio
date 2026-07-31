import { ProjectCard } from "@/components/ProjectCard"
import { Reveal } from "@/components/Reveal"
import { Section, SectionHead } from "@/components/ui"
import type { Project } from "@/lib/projects"

export function RelatedProjects({ projects }: { projects: Project[] }) {
	if (projects.length === 0) return null
	return (
		<Section
			id="related-projects"
			labelledBy="related-projects-title"
			className="section--tight"
		>
			<SectionHead
				eyebrow="Keep exploring"
				title="Related projects"
				titleId="related-projects-title"
			/>
			<div className="related-grid">
				{projects.map((project, index) => (
					<Reveal key={project.slug} delay={index * 70}>
						<ProjectCard project={project} index={index} />
					</Reveal>
				))}
			</div>
		</Section>
	)
}
