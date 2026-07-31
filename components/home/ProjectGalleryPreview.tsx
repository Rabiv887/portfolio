import Link from "next/link"
import { Reveal } from "@/components/Reveal"
import { ArrowRight } from "@/components/Icons"
import { Container, SectionHead, StatusBadge } from "@/components/ui"
import { projectHref, projects } from "@/lib/projects"

/** Compact list of every project, public and private. */
export function ProjectGalleryPreview() {
	return (
		<section className="section section--alt" aria-labelledby="gallery-title">
			<Container>
				<SectionHead
					eyebrow="Project gallery"
					title="Everything I have built so far"
					titleId="gallery-title"
					description="Some tools run privately on my own machine, so they are listed without a public link."
				/>

				<ul className="gallery-list">
					{projects.map((project, index) => (
						<Reveal as="li" key={project.slug} delay={index * 50}>
							<Link className="gallery-row" href={projectHref(project.slug)}>
								<span className="gallery-row__title">{project.shortTitle}</span>
								<span className="gallery-row__type">{project.type}</span>
								<span className="gallery-row__meta">
									<StatusBadge status={project.status} />
								</span>
								<span className="gallery-row__arrow" aria-hidden="true">
									<ArrowRight size={17} />
								</span>
							</Link>
						</Reveal>
					))}
				</ul>
			</Container>
		</section>
	)
}
