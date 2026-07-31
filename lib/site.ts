export const site = {
	name: "Md. Julmot Hossain",
	title: "Student | AI-Assisted Builder | Web Tool Creator | Automation Enthusiast",
	tagline:
		"I build practical, AI-assisted web tools and automations that solve real problems.",
	shortDescription:
		"Md. Julmot Hossain is a B.Sc. Mathematics student and AI-assisted builder who creates practical web tools and automation projects.",
	education: "B.Sc. in Mathematics",
	email: "contact@julmothossain.me",
	url: "https://julmothossain.me",
	monogram: "MJH",
	availability: "Open to collaboration and interesting problems",
}

export const socialLinks = {
	linkedin: {
		label: "LinkedIn",
		url: "https://www.linkedin.com/in/md-julmot-hossain",
	},
	github: {
		label: "GitHub",
		url: "",
		isPlaceholder: true,
	},
	email: {
		label: "Email",
		url: "mailto:contact@julmothossain.me",
	},
}

export type NavLink = { label: string; href: string }

export const primaryNav: NavLink[] = [
	{ label: "Home", href: "/" },
	{ label: "Projects", href: "/projects/" },
	{ label: "About", href: "/about/" },
	{ label: "Resume", href: "/resume/" },
	{ label: "FAQ", href: "/faq/" },
	{ label: "Contact", href: "/contact/" },
]

export const footerNav: NavLink[] = [...primaryNav]
