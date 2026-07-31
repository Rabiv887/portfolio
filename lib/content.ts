/** Shared editorial content used across pages. */

export type SkillGroup = {
	title: string
	icon: "code" | "bot" | "spark" | "compass"
	items: string[]
}

export const skillGroups: SkillGroup[] = [
	{
		title: "Development",
		icon: "code",
		items: ["HTML", "CSS", "JavaScript", "Web tool development", "Git & GitHub"],
	},
	{
		title: "Automation",
		icon: "bot",
		items: [
			"Python for automation",
			"Workflow automation",
			"Automation scripts",
			"PDF processing",
			"Telegram Bot API",
		],
	},
	{
		title: "AI & Productivity",
		icon: "spark",
		items: [
			"AI-assisted development",
			"Prompt engineering",
			"AI tools",
			"Productivity workflows",
		],
	},
	{
		title: "Thinking & Process",
		icon: "compass",
		items: [
			"Problem solving",
			"Analytical thinking",
			"Research & experimentation",
			"User-centered thinking",
			"Continuous learning",
		],
	},
]

export const aboutPreview = {
	paragraphs: [
		"I am a B.Sc. in Mathematics graduate with a strong interest in technology, AI-assisted development, web tools, and automation. My academic background is in Mathematics, but my focus is on building useful digital tools that solve real problems.",
		"I learn by creating projects, experimenting with ideas, and improving them through hands-on work. Every tool here started as a problem I ran into myself, and I use AI responsibly to turn those ideas into reliable, user-friendly solutions.",
	],
	values: [
		{
			title: "Honest documentation",
			body: "Projects are described exactly as they are, including what is private or still evolving.",
		},
		{
			title: "Practical problem solving",
			body: "Each tool exists because it removed real, repetitive work from someone's day.",
		},
		{
			title: "Continuous learning",
			body: "New technologies are learned by building, testing, and refining real projects.",
		},
	],
}

export const resumePreview = {
	facts: [
		{ label: "Education", value: "B.Sc. in Mathematics" },
		{ label: "Focus", value: "AI-assisted development, web tools, automation" },
		{ label: "Projects", value: "4 documented projects, 2 with public live tools" },
		{ label: "Open to", value: "Collaborations, internships, technology projects" },
	],
}

export type FaqItem = { question: string; answer: string }

export const faqItems: FaqItem[] = [
	{
		question: "Who are you?",
		answer:
			"A B.Sc. in Mathematics graduate passionate about AI-assisted development, web tools, and automation.",
	},
	{
		question: "What kind of projects do you build?",
		answer:
			"Practical web tools, automation systems, productivity tools, and AI-assisted applications.",
	},
	{
		question: "Which technologies do you use?",
		answer:
			"HTML, CSS, JavaScript, Python, Git, GitHub, AI tools, and modern web technologies.",
	},
	{
		question: "Are your projects open source?",
		answer:
			"Some projects are public, while others remain private due to security or ongoing development.",
	},
	{
		question: "Can I collaborate with you?",
		answer:
			"Yes. I am open to collaborations, internships, and interesting technology projects.",
	},
	{
		question: "How can I contact you?",
		answer: "Through the contact form or my professional email.",
	},
	{
		question: "Are you currently learning new technologies?",
		answer:
			"Yes. I continuously learn and improve my skills by building real-world projects and experimenting with modern technologies.",
	},
	{
		question: "Do you accept freelance or custom project requests?",
		answer: "Yes, for projects that match my skills and availability.",
	},
]

/** First four questions are surfaced on the home page; /faq/ shows all of them. */
export const faqPreviewItems: FaqItem[] = faqItems.slice(0, 4)

/** Closing call-to-action copy used by the home page. */
export const contactCta = {
	eyebrow: "Contact",
	heading: "Have an idea, a problem, or a project in mind?",
	description:
		"I am open to collaborations, internships, and interesting technology projects. Email is the fastest way to reach me, and I reply to every genuine message.",
}
