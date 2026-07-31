import Link from "next/link"
import { ProjectCard } from "@/components/ProjectCard"
import { Reveal } from "@/components/Reveal"
import { Container, SectionHead } from "@/components/ui"
import { featuredProjects } from "@/lib/projects"

/** Featured work: the two public, live tools. */
export function FeaturedProjects() {
	return (
		<section
			className="section"
			id="featured-projects"
			aria-labelledby="featured-projects-title"
		>
			<Container>
				<SectionHead
					eyebrow="Featured work"
					title="Tools that solve a real, everyday problem"
					titleId="featured-projects-title"
					description="Both of these started as problems I ran into myself. They are public, free to try, and documented honestly."
					action={
						<Link className="btn btn--ghost btn--sm" href="/projects/">
							All projects
						</Link>
					}
				/>

				<div className="featured-grid">
					{featuredProjects.map((project, index) => (
						<Reveal key={project.slug} delay={index * 70}>
							<ProjectCard project={project} index={index} />
						</Reveal>
					))}
				</div>
			</Container>
		</section>
	)
}
