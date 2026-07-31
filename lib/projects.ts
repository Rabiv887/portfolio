export type ProjectStatus = "public" | "private"

export type ProjectLiveLink = { label: string; url: string }

export type ProjectMedia = { src: string; alt: string }

export type Project = {
	slug: string
	title: string
	shortTitle: string
	type: string
	status: ProjectStatus
	featured: boolean
	summary: string
	cardSummary: string
	tags: string[]
	tech: string[]
	liveLinks: ProjectLiveLink[]
	media: ProjectMedia[]
}

export const projects: Project[] = [
	{
		slug: "ai-typing-practice-platform",
		title: "AI Typing Practice Platform",
		shortTitle: "AI Typing Practice Platform",
		type: "Web Tool",
		status: "public",
		featured: true,
		summary:
			"A web-based typing practice platform with AI-assisted exercises, built to help users improve typing speed and accuracy, alongside a companion e-paper assistant tool.",
		cardSummary: "AI-assisted typing practice with real-time feedback, plus a companion e-paper assistant.",
		tags: ["Web Tool", "AI", "Education"],
		tech: ["HTML", "CSS", "JavaScript", "AI-assisted development"],
		liveLinks: [
			{ label: "Typer Pro", url: "https://typerpro.example.com" },
			{ label: "E-Paper Assistant", url: "https://epaperassistant.example.com" },
		],
		media: [],
	},
	{
		slug: "student-id-card-generator",
		title: "Student ID Card Generator",
		shortTitle: "Student ID Card Generator",
		type: "Web Tool",
		status: "public",
		featured: true,
		summary:
			"A web tool that generates printable, customizable student ID cards, built to simplify a repetitive administrative task for students and small institutions.",
		cardSummary: "Generate customizable, printable student ID cards in a few clicks.",
		tags: ["Web Tool", "Productivity"],
		tech: ["HTML", "CSS", "JavaScript"],
		liveLinks: [{ label: "Live demo", url: "https://studentidgenerator.example.com" }],
		media: [],
	},
	{
		slug: "facebook-image-pdf-telegram-automation",
		title: "Facebook Image-to-PDF Telegram Automation",
		shortTitle: "FB Image-to-PDF Telegram Bot",
		type: "Automation",
		status: "private",
		featured: false,
		summary:
			"A private automation system that collects images from Facebook, converts them into PDF documents, and delivers them through a Telegram bot.",
		cardSummary: "Automates collecting Facebook images into PDFs and delivers them via Telegram.",
		tags: ["Automation", "Python"],
		tech: ["Python", "Telegram Bot API", "Automation scripting"],
		liveLinks: [],
		media: [],
	},
	{
		slug: "personal-productivity-automation-toolkit",
		title: "Personal Productivity Automation Toolkit",
		shortTitle: "Productivity Automation Toolkit",
		type: "Automation",
		status: "private",
		featured: false,
		summary:
			"A private collection of automation scripts and tools built to streamline personal, everyday productivity tasks.",
		cardSummary: "A private toolkit of scripts that automate everyday productivity tasks.",
		tags: ["Automation", "Productivity"],
		tech: ["Python", "Automation scripting"],
		liveLinks: [],
		media: [],
	},
]

export const featuredProjects = projects.filter((project) => project.featured)

export function getProject(slug: string): Project | undefined {
	return projects.find((project) => project.slug === slug)
}

export function projectHref(slug: string): string {
	return "/projects/" + slug + "/"
}

export const projectStats = {
	total: projects.length,
	live: projects.filter((project) => project.status === "public").length,
}
