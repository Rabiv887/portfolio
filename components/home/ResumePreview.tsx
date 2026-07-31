import Link from "next/link"
import { Document } from "@/components/Icons"
import { Container, Notice, SectionHead } from "@/components/ui"
import { resumePreview } from "@/lib/content"

/** Resume teaser. The PDF download stays disabled until a real file exists. */
export function ResumePreview() {
	return (
		<section className="section" aria-labelledby="resume-title">
			<Container>
				<SectionHead
					eyebrow="Resume"
					title="Resume coming soon"
					titleId="resume-title"
					description="The written summary is here now. A downloadable PDF will be published as soon as it is finalised."
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
							Download Resume — Coming Soon
						</button>
						<Link className="btn btn--ghost" href="/resume/">
							See resume page
						</Link>
					</div>

					<Notice>
						No PDF is linked yet on purpose — nothing here points to a file that
						does not exist.
					</Notice>
				</div>
			</Container>
		</section>
	)
}
