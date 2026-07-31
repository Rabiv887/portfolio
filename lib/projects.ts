/**
 * Project content model. Detail pages (Phase 3) read from the same objects,
 * so adding a project here makes it appear everywhere automatically.
 */

export type ProjectLink = {
	label: string
	url: string
}

export type Project = {
	slug: string
	title: string
	shortTitle: string
	type: string
	summary: string
	cardSummary: string
	status: "public" | "private"
	featured: boolean
	tags: string[]
	tech: string[]
	liveLinks: ProjectLink[]
	/** Screenshots are intentionally empty until real captures exist. */
	media: { src: string; alt: string }[]
}

export const projects: Project[] = [
	{
		slug: "ai-typing-practice-platform",
		title: "AI Typing Practice Platform with E-Paper Auto Scroll",
		shortTitle: "AI Typing Practice Platform",
		type: "Public web tool · Typing productivity",
		summary:
			"Two connected typing tools: a practice platform for English and Bangla typing with speed and accuracy tracking, and an e-paper assistant that auto-scrolls an uploaded image so you can type without a printed page.",
		cardSummary:
			"A typing practice platform for English and Bangla, paired with an e-paper assistant that auto-scrolls uploaded images so typists no longer need a printed page.",
		status: "public",
		featured: true,
		tags: ["Web Tool", "AI-Assisted Development", "JavaScript", "GitHub Pages"],
		tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
		liveLinks: [
			{ label: "Typer Pro", url: "https://jobquiz.github.io/typerpro/" },
			{
				label: "E-Paper Assistant",
				url: "https://jobquiz.github.io/epapertyping/index.html",
			},
		],
		media: [],
	},
	{
		slug: "student-id-card-generator",
		title: "Student ID Card Generator",
		shortTitle: "Student ID Card Generator",
		type: "Public web tool · Education",
		summary:
			"A browser-based tool that lets students and institutions enter details, upload a photo, pick a template, and generate a downloadable student ID card without manual design work.",
		cardSummary:
			"Generate a student ID card in the browser: enter details, upload a photo, choose a template, and download the result — no design software needed.",
		status: "public",
		featured: true,
		tags: ["Web Tool", "Education Tool", "AI-Assisted Development", "GitHub Pages"],
		tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
		liveLinks: [{ label: "Live demo", url: "https://jobquiz.github.io/web/" }],
		media: [],
	},
	{
		slug: "facebook-image-pdf-telegram-automation",
		title: "Facebook Public Post Image to PDF & Telegram Automation",
		shortTitle: "Image → PDF → Telegram Automation",
		type: "Private automation · Python",
		summary:
			"A Python automation that checks public profiles on a fixed interval, detects new image posts, converts the images into a PDF, and delivers the update through a Telegram bot.",
		cardSummary:
			"Monitors public profiles on a timer, detects new image posts, converts them to PDF, and delivers the update through a Telegram bot.",
		status: "private",
		featured: false,
		tags: ["Automation", "Python", "Telegram Bot", "Productivity"],
		tech: [
			"Python",
			"Telegram Bot API",
			"Image-to-PDF library",
			"Scheduler / timer",
		],
		liveLinks: [],
		media: [],
	},
	{
		slug: "personal-productivity-automation-toolkit",
		title: "Personal Productivity Automation Toolkit",
		shortTitle: "Productivity Automation Toolkit",
		type: "Private toolkit · Evolving",
		summary:
			"A growing collection of personal automation and productivity tools built to remove repetitive daily work — file and PDF utilities, workflow scripts, browser tools, and AI-assisted helpers.",
		cardSummary:
			"A growing set of personal automation tools — PDF and file utilities, workflow scripts, and browser helpers that remove repetitive daily work.",
		status: "private",
		featured: false,
		tags: ["Automation", "Productivity", "Python", "Private Toolkit"],
		tech: [
			"Python",
			"HTML",
			"CSS",
			"JavaScript",
			"PDF processing libraries",
			"Telegram Bot API",
			"Git & GitHub",
		],
		liveLinks: [],
		media: [],
	},
]

export const featuredProjects = projects.filter((project) => project.featured)

export function getProject(slug: string): Project | undefined {
	return projects.find((project) => project.slug === slug)
}

export function projectHref(slug: string): string {
	return `/projects/${slug}/`
}

/** Headline counts shown in the hero identity card. */
export const projectStats = {
	total: projects.length,
	live: projects.filter((project) => project.status === "public").length,
}
