export type CaseStudyBlock = {
	title: string
	paragraphs: string[]
}

export type ProjectDetail = {
	sections: CaseStudyBlock[]
}

const defaultSections: CaseStudyBlock[] = [
	{
		title: "The problem",
		paragraphs: [
			"Details for this project's problem statement are being finalised and will be added soon.",
		],
	},
	{
		title: "The approach",
		paragraphs: [
			"A full write-up of the approach, tools, and decisions behind this project is coming soon.",
		],
	},
	{
		title: "The outcome",
		paragraphs: [
			"Results and learnings from this project will be documented here once available.",
		],
	},
]

const detailsBySlug: Record<string, ProjectDetail> = {}

export function getProjectDetail(slug: string): ProjectDetail {
	return detailsBySlug[slug] ?? { sections: defaultSections }
}
