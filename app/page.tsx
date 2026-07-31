import type { Metadata } from "next"
import { AboutPreview } from "@/components/home/AboutPreview"
import { ContactCta } from "@/components/home/ContactCta"
import { FaqPreview } from "@/components/home/FaqPreview"
import { FeaturedProjects } from "@/components/home/FeaturedProjects"
import { Hero } from "@/components/home/Hero"
import { ProjectGalleryPreview } from "@/components/home/ProjectGalleryPreview"
import { ResumePreview } from "@/components/home/ResumePreview"
import { SkillsPreview } from "@/components/home/SkillsPreview"
import { site } from "@/lib/site"

export const metadata: Metadata = {
	title: { absolute: site.name + " — AI-Assisted Builder & Web Tool Creator" },
	description: site.shortDescription,
	alternates: { canonical: "/" },
}

export default function HomePage() {
	return (
		<>
			<Hero />
			<FeaturedProjects />
			<SkillsPreview />
			<AboutPreview />
			<ProjectGalleryPreview />
			<ResumePreview />
			<FaqPreview />
			<ContactCta />
		</>
	)
}
