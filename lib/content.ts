export type SkillGroup = {
	title: string
	icon: "code" | "bot" | "spark" | "compass"
	items: string[]
}

export const skillGroups: SkillGroup[] = [
	{
		title: "Languages & core",
		icon: "code",
		items: ["HTML", "CSS", "JavaScript", "Python"],
	},
	{
		title: "AI-assisted building",
		icon: "bot",
		items: ["AI-assisted development", "Prompt-driven workflows", "Rapid prototyping"],
	},
	{
		title: "Tools & platforms",
		icon: "spark",
		items: ["Git", "GitHub", "Automation scripting", "Telegram bots"],
	},
	{
		title: "Ways of working",
		icon: "compass",
		items: ["Problem-first thinking", "Continuous learning", "Documentation habits"],
	},
]

export const aboutPreview = {
	paragraphs: [
		"I'm a B.Sc. Mathematics graduate who got into building software by solving small, real problems I ran into myself — practicing typing, generating ID cards, or automating repetitive tasks.",
		"Most of what I build today is AI-assisted: I use AI tools to move fast from idea to working tool, while staying deliberate about the problem, the people it serves, and how it should actually behave.",
	],
	values: [
		{ title: "Practical over flashy", body: "Tools should solve a real problem, not just look impressive." },
		{ title: "Honest by default", body: "No fake screenshots, no invented metrics, no overstated claims." },
		{ title: "Always learning", body: "Every project is a chance to pick up something new." },
	],
}

export const resumePreview = {
	downloadLabel: "Download Resume — Coming Soon",
	facts: [
		{ label: "Education", value: "B.Sc. in Mathematics" },
		{ label: "Focus", value: "AI-assisted web tools & automation" },
		{ label: "Availability", value: "Open to collaborations and internships" },
		{ label: "Contact", value: "contact@julmothossain.me" },
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
		answer: "Practical web tools, automation systems, productivity tools, and AI-assisted applications.",
	},
	{
		question: "Which technologies do you use?",
		answer: "HTML, CSS, JavaScript, Python, Git, GitHub, AI tools, and modern web technologies.",
	},
	{
		question: "Are your projects open source?",
		answer: "Some projects are public, while others remain private due to security or ongoing development.",
	},
	{
		question: "Can I collaborate with you?",
		answer: "Yes. I am open to collaborations, internships, and interesting technology projects.",
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

export const faqPreviewItems = faqItems.slice(0, 4)

export const contactCta = {
	eyebrow: "Get in touch",
	heading: "Have a project or opportunity in mind?",
	description:
		"I'm open to collaborations, internships, and interesting technology projects. Reach out and I'll get back to you.",
}
