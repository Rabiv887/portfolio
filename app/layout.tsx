import type { Metadata, Viewport } from "next"
import { Inter, Manrope } from "next/font/google"
import { ScrollProgress } from "@/components/ScrollProgress"
import { SiteFooter } from "@/components/SiteFooter"
import { SiteHeader } from "@/components/SiteHeader"
import { ThemeScript } from "@/components/ThemeScript"
import { site, socialLinks } from "@/lib/site"

import "@/styles/tokens.css"
import "@/styles/base.css"
import "@/styles/layout.css"
import "@/styles/components.css"
import "@/styles/home.css"

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
})

// Secondary display face. Swap to Geist here if preferred — nothing else changes.
const display = Manrope({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-manrope",
})

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: {
		default: site.name + " — AI-Assisted Builder & Web Tool Creator",
		template: "%s — " + site.name,
	},
	description: site.shortDescription,
	applicationName: site.name,
	authors: [{ name: site.name, url: site.url }],
	creator: site.name,
	keywords: [
		"Md. Julmot Hossain",
		"AI-assisted development",
		"web tools",
		"automation projects",
		"productivity tools",
		"portfolio",
	],
	alternates: { canonical: "/" },
	openGraph: {
		type: "website",
		url: site.url,
		siteName: site.name,
		title: site.name + " — AI-Assisted Builder & Web Tool Creator",
		description: site.shortDescription,
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: site.name + " — AI-Assisted Builder & Web Tool Creator",
		description: site.shortDescription,
	},
	robots: { index: true, follow: true },
	icons: {
		icon: [{ url: site.basePath + "/favicon.svg", type: "image/svg+xml" }],
		apple: site.basePath + "/favicon.svg",
	},
	manifest: site.basePath + "/site.webmanifest",
}

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	viewportFit: "cover",
	themeColor: [
		{ media: "(prefers-color-scheme: dark)", color: "#0F172A" },
		{ media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
	],
}

const personSchema = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: site.name,
	url: site.url,
	email: "mailto:" + site.email,
	jobTitle: "AI-Assisted Builder and Web Tool Creator",
	description: site.shortDescription,
	knowsAbout: [
		"AI-assisted development",
		"Web tool development",
		"Workflow automation",
		"Python automation",
		"Productivity workflows",
	],
	alumniOf: { "@type": "EducationalOrganization", name: "B.Sc. in Mathematics" },
	sameAs: [socialLinks.linkedin.url],
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" data-theme="dark" suppressHydrationWarning>
			<head>
				<ThemeScript />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
				/>
			</head>
			<body className={inter.variable + " " + display.variable}>
				<a className="skip-link" href="#main">
					Skip to main content
				</a>
				<ScrollProgress />
				<SiteHeader />
				<main id="main">{children}</main>
				<SiteFooter />
			</body>
		</html>
	)
}
