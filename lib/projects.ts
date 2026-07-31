export type ProjectStatus = "live" | "in-progress" | "private"

export type Project = {
	slug: string
	name: string
	summary: string
	tags: string[]
	status: ProjectStatus
	featured: boolean
	liveUrl?: string
	repoUrl?: string
	media: string[]
}

export const projects: Project[] = [
	{
		slug: "project-one",
		name: "Project One",
		summary: "An AI-assisted web tool built to solve a real, everyday problem.",
		tags: ["Next.js", "React", "AI-Assisted"],
		status: "in-progress",
		featured: true,
		media: [],
	},
	{
		slug: "project-two",
		name: "Project Two",
		summary: "A web automation project that streamlines a repetitive workflow.",
		tags: ["Python", "Automation"],
		status: "in-progress",
		featured: true,
		media: [],
	},
	{
		slug: "project-three",
		name: "Project Three",
		summary: "A productivity-focused web tool designed for everyday use.",
		tags: ["JavaScript", "Web Tool"],
		status: "in-progress",
		featured: true,
		media: [],
	},
	{
		slug: "project-four",
		name: "Project Four",
		summary: "A private project exploring AI-assisted development workflows.",
		tags: ["AI-Assisted", "Private"],
		status: "private",
		featured: true,
		media: [],
	},
]

export function projectHref(slug: string): string {
	return "/projects/" + slug + "/"
}

export function featuredProjects(): Project[] {
	return projects.filter((project) => project.featured)
}
