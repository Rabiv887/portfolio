import Link from "next/link"
import { Container, Notice } from "@/components/ui"

/**
 * Temporary page shell for routes delivered in a later build phase. The route,
 * metadata and navigation already work, and no invented content is shown.
 */
export function PhasePlaceholder({
	eyebrow,
	title,
	description,
	phase,
}: {
	eyebrow: string
	title: string
	description: string
	phase: string
}) {
	return (
		<section className="section">
			<Container>
				<div className="placeholder-page">
					<p className="eyebrow">{eyebrow}</p>
					<h1>{title}</h1>
					<p>{description}</p>
					<Notice>This page is built in {phase}.</Notice>
					<div className="btn-row">
						<Link className="btn btn--primary" href="/">
							Back to home
						</Link>
						<Link className="btn btn--ghost" href="/projects/">
							Browse projects
						</Link>
					</div>
				</div>
			</Container>
		</section>
	)
}
