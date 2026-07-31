import type { Metadata } from "next"
import Link from "next/link"
import { Container } from "@/components/ui"

export const metadata: Metadata = {
	title: "Page not found",
	description: "The page you were looking for does not exist.",
	robots: { index: false, follow: true },
}

export default function NotFound() {
	return (
		<section className="section">
			<Container>
				<div className="placeholder-page">
					<p className="eyebrow">404</p>
					<h1>This page does not exist</h1>
					<p>
						The link may be outdated or mistyped. Everything on this site is
						reachable from the home page or the projects list.
					</p>
					<div className="btn-row">
						<Link className="btn btn--primary" href="/">
							Back to home
						</Link>
						<Link className="btn btn--secondary" href="/projects/">
							Browse projects
						</Link>
					</div>
				</div>
			</Container>
		</section>
	)
}
