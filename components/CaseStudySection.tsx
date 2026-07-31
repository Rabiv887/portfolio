import type { ReactNode } from "react"

/**
 * One labelled block inside a project's case study (Problem, Target users,
 * Key features, Role, Tools, Challenges). Uses h3 so every project page keeps
 * a single h1 with one h2 case-study heading above these sub-sections.
 */
export function CaseStudySection({
	title,
	children,
}: {
	title: string
	children: ReactNode
}) {
	return (
		<div className="case-block">
			<h3>{title}</h3>
			{children}
		</div>
	)
}

export function CaseStudyList({ items }: { items: string[] }) {
	if (items.length === 0) return null
	return (
		<ul className="case-list">
			{items.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	)
}

export function CaseStudyParagraphs({ items }: { items: string[] }) {
	if (items.length === 0) return null
	return (
		<>
			{items.map((item) => (
				<p key={item} className="case-block__paragraph">
					{item}
				</p>
			))}
		</>
	)
}
