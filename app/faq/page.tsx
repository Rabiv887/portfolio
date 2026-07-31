import type { Metadata } from "next"
import { ContactCta } from "@/components/home/ContactCta"
import { FaqAccordion } from "@/components/FaqAccordion"
import { Section } from "@/components/ui"
import { faqItems } from "@/lib/content"
import { site } from "@/lib/site"

import "@/styles/projects.css"

const description =
	"Answers to common questions about how " +
	site.name +
	" builds tools and uses AI responsibly."

export const metadata: Metadata = {
	title: { absolute: "FAQ \u2014 " + site.name },
	description,
	alternates: { canonical: "/faq/" },
	openGraph: {
		title: "FAQ \u2014 " + site.name,
		description,
	},
}

export default function FaqPage() {
	return (
		<>
			<Section id="faq-header" className="page-header">
				<p className="eyebrow">FAQ</p>
				<h1>Frequently asked questions</h1>
				<p className="page-header__lede">
					Short, honest answers about how I work, what I build, and what I
					use AI for.
				</p>
			</Section>

			<Section id="faq-list" className="section--tight">
				<div className="faq-grid">
					<FaqAccordion items={faqItems} defaultOpenIndex={0} />
				</div>
			</Section>

			<ContactCta />
		</>
	)
}
