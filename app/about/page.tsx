import type { Metadata } from "next"
import Link from "next/link"
import { ContactCta } from "@/components/home/ContactCta"
import { Reveal } from "@/components/Reveal"
import { Check, iconMap } from "@/components/Icons"
import { Section, SectionHead } from "@/components/ui"
import { aboutPreview, skillGroups } from "@/lib/content"
import { site } from "@/lib/site"

import "@/styles/projects.css"

const description =
	"Background, values, and the full skills breakdown of " +
	site.name +
	" \u2014 a " +
	site.education +
	" graduate building practical, AI-assisted web tools."

export const metadata: Metadata = {
	title: { absolute: "About " + site.name },
	description,
	alternates: { canonical: "/about/" },
	openGraph: {
		title: "About " + site.name,
		description,
	},
}

export default function AboutPage() {
	return (
		<>
			<Section id="about-header" className="page-header">
				<p className="eyebrow">About</p>
				<h1>About {site.name}</h1>
				<p className="page-header__lede">
					A {site.education} graduate who learns by building {'\u2014'} turning
					everyday problems into practical, AI-assisted web tools.
				</p>
			</Section>

			<Section
				id="background"
				labelledBy="background-title"
				className="section--tight"
			>
				<SectionHead
					eyebrow="Background"
					title="How I got here"
					titleId="background-title"
				/>
				{aboutPreview.paragraphs.map((paragraph) => (
					<p key={paragraph} className="case-block__paragraph">
						{paragraph}
					</p>
				))}
			</Section>

			<Section id="values" labelledBy="values-title" className="section--tight">
				<SectionHead
					eyebrow="What I value"
					title="Principles behind the work"
					titleId="values-title"
				/>
				<div className="card">
					<ul className="value-list">
						{aboutPreview.values.map((value) => (
							<li className="value-item" key={value.title}>
								<span aria-hidden="true">
									<Check size={16} />
								</span>
								<div>
									<strong>{value.title}</strong>
									<span>{value.body}</span>
								</div>
							</li>
						))}
					</ul>
				</div>
			</Section>

			<Section id="skills" labelledBy="skills-title">
				<SectionHead
					eyebrow="Skills & technologies"
					title="The full breakdown"
					titleId="skills-title"
					description="Grouped by how I actually use them, not by how impressive they sound."
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
			</Section>

			<Section
				id="availability"
				labelledBy="availability-title"
				className="section--tight"
			>
				<SectionHead
					eyebrow="Availability"
					title={site.availability}
					titleId="availability-title"
					description="Read the resume summary, or reach out directly."
					action={
						<Link className="btn btn--ghost btn--sm" href="/resume/">
							See resume
						</Link>
					}
				/>
			</Section>

			<ContactCta />
		</>
	)
}
