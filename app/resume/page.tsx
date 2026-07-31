import type { Metadata } from "next"
import Link from "next/link"
import { ContactCta } from "@/components/home/ContactCta"
import { Document } from "@/components/Icons"
import { Notice, Section, SectionHead } from "@/components/ui"
import { resumePreview } from "@/lib/content"
import { site } from "@/lib/site"

import "@/styles/projects.css"

const description =
	"Resume summary of " +
	site.name +
	" \u2014 education, focus, and availability. A downloadable PDF will be added once it is finalised."

export const metadata: Metadata = {
	title: { absolute: "Resume \u2014 " + site.name },
	description,
	alternates: { canonical: "/resume/" },
	openGraph: {
		title: "Resume \u2014 " + site.name,
		description,
	},
}

export default function ResumePage() {
	return (
		<>
			<Section id="resume-header" className="page-header">
				<p className="eyebrow">Resume</p>
				<h1>Resume</h1>
				<p className="page-header__lede">
					A downloadable PDF resume has not been published yet. Here is an
					honest summary of my education, focus, and availability in the
					meantime.
				</p>
			</Section>

			<Section id="resume-summary" labelledBy="resume-summary-title">
				<SectionHead
					eyebrow="Summary"
					title={site.education}
					titleId="resume-summary-title"
					description={site.tagline}
				/>
				<div className="resume-panel">
					<dl className="resume-facts">
						{resumePreview.facts.map((fact) => (
							<div className="resume-fact" key={fact.label}>
								<dt>{fact.label}</dt>
								<dd>{fact.value}</dd>
							</div>
						))}
					</dl>

					<div className="btn-row">
						<button type="button" className="btn btn--secondary" disabled>
							<Document size={17} />
							Download Resume {'\u2014'} Coming Soon
						</button>
						<Link className="btn btn--ghost" href="/contact/">
							Contact me
						</Link>
					</div>

					<Notice>
						No PDF is linked yet on purpose {'\u2014'} nothing here points to a file
						that does not exist.
					</Notice>
				</div>
			</Section>

			<ContactCta />
		</>
	)
}
