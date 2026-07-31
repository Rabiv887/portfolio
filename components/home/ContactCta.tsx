import Link from "next/link"
import { ArrowRight, Mail } from "@/components/Icons"
import { Container } from "@/components/ui"
import { contactCta } from "@/lib/content"
import { site } from "@/lib/site"

/** Closing call to action. */
export function ContactCta() {
	return (
		<section className="section section--tight" aria-labelledby="cta-title">
			<Container>
				<div className="cta-panel">
					<p className="eyebrow">{contactCta.eyebrow}</p>
					<h2 id="cta-title">{contactCta.heading}</h2>
					<p>{contactCta.description}</p>

					<div className="btn-row">
						<Link className="btn btn--primary" href="/contact/">
							Contact me
							<ArrowRight size={17} />
						</Link>
						<a className="btn btn--secondary" href={"mailto:" + site.email}>
							<Mail size={17} />
							Email directly
						</a>
					</div>

					<p className="cta-panel__email">{site.email}</p>
				</div>
			</Container>
		</section>
	)
}
