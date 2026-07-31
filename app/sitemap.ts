import type { MetadataRoute } from "next"
import { projectHref, projects } from "@/lib/projects"
import { site } from "@/lib/site"

/* Static sitemap (PRD 25). New routes are picked up by adding them here. */
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date()

	const staticRoutes = [
		{ path: "/", priority: 1 },
		{ path: "/projects/", priority: 0.9 },
		{ path: "/about/", priority: 0.8 },
		{ path: "/contact/", priority: 0.7 },
		{ path: "/resume/", priority: 0.6 },
		{ path: "/faq/", priority: 0.5 },
	]

	return [
		...staticRoutes.map((route) => ({
			url: site.url + route.path,
			lastModified: now,
			changeFrequency: "monthly" as const,
			priority: route.priority,
		})),
		...projects.map((project) => ({
			url: site.url + projectHref(project.slug),
			lastModified: now,
			changeFrequency: "monthly" as const,
			priority: 0.7,
		})),
	]
}
