import { projects, type Project } from "@/lib/projects"

/**
 * Case-study content for individual project pages, transcribed directly from
 * the approved UI/UX Design Specification (Section 8). Only fields with real,
 * confirmed content are included — nothing here is invented.
 */
export type ProjectDetail = {
	problem: string[]
	targetUsers: string[]
	featuresLabel: string
	features: string[]
	role: string[]
	challenges?: string[]
	privacyNote?: string
}

export const projectDetails: Record<string, ProjectDetail> = {
	"ai-typing-practice-platform": {
		problem: [
			"Improving English and Bangla typing speed and accuracy.",
			"Typing from image or e-paper content without needing a physical printed page.",
		],
		targetUsers: [
			"Typing learners",
			"Students",
			"Job exam candidates",
			"Bangla and English typing users",
			"Users typing from image-based content",
		],
		featuresLabel: "Key features",
		features: [
			"English typing practice",
			"Bangla typing practice",
			"Speed and accuracy tracking",
			"Difficulty levels",
			"Image upload",
			"Auto-scroll",
			"Timer",
			"Interval and scroll distance controls",
			"Pause/resume",
			"Reset",
			"Keyboard support",
			"Mobile-friendly design",
		],
		role: [
			"Personal idea",
			"Problem identification",
			"Workflow planning",
			"Practical problem solving",
		],
		challenges: [
			"Bangla typing support",
			"Speed and accuracy calculation",
			"Auto-scroll control",
			"Mobile responsiveness",
			"Image handling",
			"Keyboard compatibility",
		],
	},
	"student-id-card-generator": {
		problem: [
			"Need for a simple way to generate digital student ID cards for education-related use cases.",
		],
		targetUsers: ["Students", "Schools", "Colleges", "Universities"],
		featuresLabel: "Key features",
		features: [
			"Enter student details",
			"Upload photo",
			"Choose template/design",
			"Generate ID card",
			"Download ID card",
		],
		role: [
			"Idea",
			"Design planning",
			"Form fields planning",
			"Template/layout planning",
			"AI-assisted development",
			"Testing",
			"Usability improvement",
			"Deployment",
		],
		challenges: ["ID card layout and design"],
	},
	"facebook-image-pdf-telegram-automation": {
		problem: [
			"Manually monitoring multiple public Facebook profiles for new posts is time-consuming.",
			"Needed a way to detect image posts and organize the updates automatically.",
		],
		targetUsers: [
			"Users monitoring public image-based updates",
			"Students and researchers",
			"Productivity-focused users",
		],
		featuresLabel: "Key features",
		features: [
			"Public profile monitoring",
			"Interval checking",
			"Image detection",
			"Image-to-PDF conversion",
			"Telegram delivery",
			"Multiple profile support",
		],
		role: [
			"Idea",
			"Workflow design",
			"Python script planning",
			"Telegram bot setup",
			"Testing",
			"Automation logic",
			"Run process planning",
		],
		privacyNote:
			"This is a private automation project. To protect the people involved, no credentials, bot tokens, sensitive workflow details, or private repository links are published here.",
	},
	"personal-productivity-automation-toolkit": {
		problem: [
			"Repetitive daily tasks need automation.",
			"Needed a way to reduce manual work and save time.",
		],
		targetUsers: [
			"Personal use",
			"Students",
			"Researchers",
			"Productivity-focused users",
		],
		featuresLabel: "Tools included in the toolkit",
		features: [
			"Facebook image-to-PDF Telegram automation",
			"File and PDF processing utilities",
			"Workflow automation scripts",
			"Browser-based productivity tools",
			"AI-assisted utility scripts",
			"Custom tools built to simplify repetitive daily tasks",
		],
		role: [
			"Problem identification",
			"Workflow design",
			"Automation planning",
			"AI-assisted implementation",
			"Testing and refinement",
			"Usability evaluation",
		],
		challenges: [
			"Reliability",
			"Real-world usefulness",
			"Workflow testing",
			"Usability improvement",
		],
	},
}

export function getProjectDetail(slug: string): ProjectDetail | undefined {
	return projectDetails[slug]
}

/** Up to `limit` other projects, featured first, for the related-projects rail. */
export function getRelatedProjects(slug: string, limit = 2): Project[] {
	return [...projects]
		.filter((project) => project.slug !== slug)
		.sort((a, b) => Number(b.featured) - Number(a.featured))
		.slice(0, limit)
}
