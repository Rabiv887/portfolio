import Link from "next/link"
import { Reveal } from "@/components/Reveal"
import { iconMap } from "@/components/Icons"
import { Container, SectionHead } from "@/components/ui"
import { skillGroups } from "@/lib/content"

/** Skills grouped by how they are actually used. */
export function SkillsPreview() {
	return (
		<section className="section section--alt" aria-labelledby="skills-title">
			<Container>
				<SectionHead
					eyebrow="Skills & technologies"
					title="What I work with"
					titleId="skills-title"
					description="Grouped by how I actually use them, not by how impressive they sound."
					action={
						<Link className="btn btn--ghost btn--sm" href="/about/">
							More about me
						</Link>
					}
				/>

				<ul className="skills-grid">
					{skillGroups.map((group, index) => {
						const Icon = iconMap[group.icon]
						return (
							<Reveal as="li" key={group.title} delay={index * 60}>
								<div className="card skill-card">
									<span className="skill-card__icon" aria-hidden="true">
										<Icon size={20} />
									</span>
									<h3 className="card__title">{group.title}</h3>
									<ul className="tag-row">
										{group.items.map((skill) => (
											<li className="tag" key={skill}>
												{skill}
											</li>
										))}
									</ul>
								</div>
							</Reveal>
						)
					})}
				</ul>
			</Container>
		</section>
	)
}
