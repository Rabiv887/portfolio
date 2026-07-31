export type ProjectDetail = {
	problem: string[]
	targetUsers: string[]
	featuresLabel?: string
	features: string[]
	role: string[]
	challenges?: string[]
	privacyNote?: string
}

export const projectDetails: Record<string, ProjectDetail> = {
	"ai-typing-practice-platform": {
		problem: [
			"Most typing practice tools are repetitive and do not adapt to a learner's actual mistakes, making improvement slow and demotivating.",
		],
		targetUsers: ["Students learning to type faster", "Anyone preparing for typing-speed requirements", "People who write long documents regularly"],
		featuresLabel: "Key features",
		features: [
			"Real-time speed and accuracy feedback",
			"AI-assisted exercise variety",
			"Companion e-paper assistant tool for reading and note support",
		],
		role: ["Designed the practice flow and feedback logic", "Built the interface end-to-end", "Used AI assistance to iterate quickly on exercise generation"],
		challenges: ["Keeping feedback timing accurate without slowing down typing input"],
	},
	"student-id-card-generator": {
		problem: [
			"Small institutions and student groups often need ID cards but lack access to design software or a printing workflow.",
		],
		targetUsers: ["Students", "Small schools or coaching centers", "Student clubs and organizations"],
		featuresLabel: "Key features",
		features: ["Customizable card templates", "Instant preview before printing", "Print-ready output"],
		role: ["Built the template and layout system", "Implemented the live preview and export flow"],
		challenges: ["Making printed output consistent across different browsers and printers"],
	},
	"facebook-image-pdf-telegram-automation": {
		problem: [
			"Manually saving images from Facebook posts and compiling them into a document is slow and repetitive.",
		],
		targetUsers: ["Myself, for personal document workflows", "Small teams needing quick image-to-PDF conversion"],
		featuresLabel: "Key features",
		features: ["Automated image collection", "PDF conversion pipeline", "Delivery through a Telegram bot"],
		role: ["Designed and built the full automation pipeline", "Set up the Telegram bot integration"],
		challenges: ["Handling inconsistent image formats and sizes reliably"],
		privacyNote:
			"This project is kept private because it interacts with personal Facebook content and Telegram credentials. Details are shared here without exposing tokens or internal repository links.",
	},
	"personal-productivity-automation-toolkit": {
		problem: ["Recurring personal tasks — file organization, reminders, small data entry — were taking up time better spent elsewhere."],
		targetUsers: ["Myself, for daily personal workflows"],
		featuresLabel: "Key features",
		features: ["A set of small scripts, each automating one recurring task", "Simple scheduling for recurring jobs"],
		role: ["Identified repetitive tasks worth automating", "Wrote and maintain each script in the toolkit"],
		challenges: ["Keeping scripts reliable as personal workflows changed over time"],
		privacyNote:
			"This toolkit is kept private because it is tailored to personal files and workflows. It is described here honestly without publishing the scripts themselves.",
	},
}

export function getProjectDetail(slug: string): ProjectDetail | undefined {
	return projectDetails[slug]
}

import { projects, type Project } from "@/lib/projects"

export function getRelatedProjects(slug: string, limit = 3): Project[] {
	const current = projects.find((project) => project.slug === slug)
	if (!current) return []
	return projects
		.filter((project) => project.slug !== slug)
		.filter((project) => project.tags.some((tag) => current.tags.includes(tag)))
		.slice(0, limit)
}
