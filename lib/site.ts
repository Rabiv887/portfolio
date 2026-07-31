/**
 * Single source of truth for site-wide identity, navigation and links.
 * Editing this file updates the whole site — no component changes required.
 */

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
		"Turning ideas into practical web tools through AI-assisted development. Focused on automation, productivity, and building solutions that make everyday tasks easier.",
	shortDescription:
		"Personal portfolio of Md. Julmot Hossain — practical web tools, AI-assisted development, and everyday automation projects.",
	email: "contact@julmothossain.me",
	url: "https://julmothossain.me",
	education: "B.Sc. in Mathematics",
	availability: "Open to collaborations and internships",
	localeLang: "en",
} as const

/**
 * GitHub is not published yet. Set `url` and flip `isPlaceholder` to false
 * when the profile is ready — every GitHub link on the site updates at once.
 */
export const socialLinks = {
	linkedin: {
		label: "LinkedIn",
		url: "https://www.linkedin.com/in/md-julmot-hossain",
		isPlaceholder: false,
	},
	github: {
		label: "GitHub",
		url: "", // TODO: add GitHub profile URL
		isPlaceholder: true,
	},
} as const

/**
 * Iterable form of the links above, used by the header, hero and footer so a
 * single edit updates every social row on the site.
 */
export type SocialLink = {
	id: "linkedin" | "github" | "email"
	label: string
	url: string
	isPlaceholder: boolean
}

export const socialList: SocialLink[] = [
	{
		id: "linkedin",
		label: "LinkedIn",
		url: socialLinks.linkedin.url,
		isPlaceholder: socialLinks.linkedin.isPlaceholder,
	},
	{
		id: "github",
		label: "GitHub",
		url: socialLinks.github.url,
		isPlaceholder: socialLinks.github.isPlaceholder,
	},
	{
		id: "email",
		label: "Email",
		url: `mailto:${site.email}`,
		isPlaceholder: false,
	},
]

export type NavItem = {
	label: string
	href: string
	description?: string
}

export const primaryNav: NavItem[] = [
	{ label: "Home", href: "/", description: "Overview" },
	{ label: "About", href: "/about/", description: "Background" },
	{ label: "Projects", href: "/projects/", description: "Case studies" },
	{ label: "Resume", href: "/resume/", description: "Coming soon" },
	{ label: "FAQ", href: "/faq/", description: "Common questions" },
	{ label: "Contact", href: "/contact/", description: "Get in touch" },
]

export const footerNav: { title: string; items: NavItem[] }[] = [
	{
		title: "Explore",
		items: [
			{ label: "Home", href: "/" },
			{ label: "About", href: "/about/" },
			{ label: "Projects", href: "/projects/" },
			{ label: "Resume", href: "/resume/" },
		],
	},
	{
		title: "Connect",
		items: [
			{ label: "Contact", href: "/contact/" },
			{ label: "FAQ", href: "/faq/" },
			{ label: "Email", href: `mailto:${site.email}` },
			{ label: "LinkedIn", href: socialLinks.linkedin.url },
		],
	},
]
