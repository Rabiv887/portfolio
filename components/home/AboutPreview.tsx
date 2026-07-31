import Link from "next/link"
import { Reveal } from "@/components/Reveal"
import { Check } from "@/components/Icons"
import { Container } from "@/components/ui"
import { aboutPreview } from "@/lib/content"

/** Short About section with the values list. */
export function AboutPreview() {
	return (
		<section className="section" aria-labelledby="about-title">
			<Container>
				<div className="about-grid">
					<div className="about-copy">
						<p className="eyebrow">About me</p>
						<h2 id="about-title">
							A mathematics graduate who builds practical tools
						</h2>
						{aboutPreview.paragraphs.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
						))}
						<div className="btn-row">
							<Link className="btn btn--secondary" href="/about/">
								Read full story
							</Link>
						</div>
					</div>

					<Reveal>
						<div className="card">
							<h3 className="card__title">What I value</h3>
							<ul className="value-list">
								{aboutPreview.values.map((value) => (
									<li className="value-item" key={value.title}>
										<span aria-hidden="true">
											<Check size={16} />
										</span>
										<div>
											<strong>{value.title}</strong>
											<span>{value.body}</span>
										</div>
									</li>
								))}
							</ul>
						</div>
					</Reveal>
				</div>
			</Container>
		</section>
	)
}
