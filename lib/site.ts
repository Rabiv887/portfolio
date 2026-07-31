export type NavItem = {
	href: string
	label: string
	description: string
}

export const site = {
	name: "Md. Julmot Hossain",
	shortName: "Julmot Hossain",
	monogram: "MJH",
	role: "Student | AI-Assisted Builder | Web Tool Creator | Automation Enthusiast",
	roleParts: [
		"Student",
		"AI-Assisted Builder",
		"Web Tool Creator",
		"Automation Enthusiast",
	],
	tagline:
		"I build practical web tools and automation systems, often assisted by AI, to solve real everyday problems.",
	shortDescription:
		"Personal portfolio of Md. Julmot Hossain — a B.Sc. Mathematics graduate who builds practical, AI-assisted web tools and automation systems.",
	email: "contact@julmothossain.me",
	url: "https://julmothossain.me",
	education: "B.Sc. in Mathematics",
	availability: "Open to collaborations and internships",
	localeLang: "en",
}

export const socialLinks = {
	linkedin: {
		label: "LinkedIn",
		url: "https://www.linkedin.com/in/md-julmot-hossain",
		isPlaceholder: false,
	},
	github: {
		label: "GitHub",
		url: "",
		isPlaceholder: true,
	},
	email: {
		label: "Email",
		url: "mailto:" + "contact@julmothossain.me",
		isPlaceholder: false,
	},
}

export const socialList = [
	{ id: "linkedin", ...socialLinks.linkedin },
	{ id: "github", ...socialLinks.github },
	{ id: "email", ...socialLinks.email },
]

export const primaryNav: NavItem[] = [
	{ href: "/", label: "Home", description: "Overview and highlights" },
	{ href: "/projects/", label: "Projects", description: "Web tools and automation systems" },
	{ href: "/about/", label: "About", description: "Background, values, and skills" },
	{ href: "/resume/", label: "Resume", description: "Education and availability summary" },
	{ href: "/faq/", label: "FAQ", description: "Answers to common questions" },
	{ href: "/contact/", label: "Contact", description: "Get in touch" },
]

export const footerNav = [
	{
		title: "Site",
		items: primaryNav.map((item) => ({ label: item.label, href: item.href })),
	},
	{
		title: "Connect",
		items: [
			{ label: "LinkedIn", href: socialLinks.linkedin.url },
			{ label: "Email", href: socialLinks.email.url },
		],
	},
]
