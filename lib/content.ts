export type SkillGroup = {
	title: string
	icon: "code" | "automation" | "ai" | "design"
	items: string[]
}

export const skillGroups: SkillGroup[] = [
	{
		title: "Web Development",
		icon: "code",
		items: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
	},
	{
		title: "AI-Assisted Building",
		icon: "ai",
		items: ["Prompt Engineering", "AI-Assisted Development", "ChatGPT / LLM tooling"],
	},
	{
		title: "Automation",
		icon: "automation",
		items: ["Python", "Workflow Automation", "Scripting"],
	},
	{
		title: "Design & Foundations",
		icon: "design",
		items: ["UI/UX Fundamentals", "Mathematics"],
	},
]

export const aboutPreview = {
	paragraphs: [
		"I'm a B.Sc. Mathematics student who fell into web development through curiosity about automating small, annoying problems. What started as scripts to save myself time turned into a habit of building complete tools \u2014 web apps that other people could actually use.",
		"AI is a core part of how I build. I use it to move faster, explore ideas, and learn new tools \u2014 not as a replacement for understanding what I ship. Every project here was shaped, tested, and refined by me.",
		"My mathematics background shows up in how I approach problems: breaking things into smaller pieces, looking for patterns, and valuing correctness over shortcuts.",
	],
	values: [
		{
			title: "Build things people actually use",
			body: "A project is only finished when it solves a real problem for a real person.",
		},
		{
			title: "Learn in public, ship anyway",
			body: "I don't wait until I feel like an expert. I build, learn from the process, and improve the next version.",
		},
		{
			title: "AI as a tool, not a shortcut",
			body: "I use AI to accelerate my work, but I stay responsible for every decision and every line that ships.",
		},
		{
			title: "Clarity over complexity",
			body: "Simple, well-structured solutions beat clever ones that are hard to maintain.",
		},
	],
}

export const resumePreview = {
	facts: [
		{ label: "Education", value: "B.Sc. in Mathematics" },
		{ label: "Focus", value: "AI-assisted web tools & automation" },
		{ label: "Availability", value: "Open to collaboration and interesting problems" },
	],
	downloadLabel: "Download Resume \u2014 Coming Soon",
}

export type FaqItem = { question: string; answer: string }

export const faqItems: FaqItem[] = [
	{
		question: "Are you currently looking for a job?",
		answer:
			"Not actively \u2014 this portfolio is primarily about building my personal brand and sharing my projects. That said, I'm open to interesting opportunities and collaborations.",
	},
	{
		question: "Do you use AI to build your projects?",
		answer:
			"Yes, extensively. AI helps me write code faster, explore approaches, and learn new tools. I review, test, and take responsibility for everything that ships \u2014 AI is a tool I direct, not an autopilot.",
	},
	{
		question: "What technologies do you work with?",
		answer:
			"HTML, CSS, JavaScript, React, and Next.js for the web; Python for automation and scripting; and AI-assisted tooling throughout my workflow.",
	},
	{
		question: "Can I see the source code for your projects?",
		answer:
			"Where a project is public, the project page links to its repository. Some projects are private and are labeled as such instead of linking to a broken or restricted URL.",
	},
	{
		question: "How can I get in touch?",
		answer:
			"The fastest way is the contact form on the Contact page, or email me directly. My LinkedIn is also open for connection.",
	},
	{
		question: "Do you have a resume I can download?",
		answer:
			"A downloadable PDF is coming soon. In the meantime, the Resume page has a summary of my education, focus, and availability.",
	},
]

export const contactCta = {
	eyebrow: "Let's build something",
	title: "Have a project in mind or just want to say hi?",
	body: "I'm always happy to talk about AI-assisted building, automation, or new ideas.",
	primaryLabel: "Contact me",
	primaryHref: "/contact/",
	secondaryLabel: "See my projects",
	secondaryHref: "/projects/",
}
