import Link from "next/link"
import { FaqAccordion } from "@/components/FaqAccordion"
import { Container, SectionHead } from "@/components/ui"
import { faqPreviewItems } from "@/lib/content"

/** First four FAQ questions; the rest live on /faq/. */
export function FaqPreview() {
	return (
		<section className="section section--alt" aria-labelledby="faq-title">
			<Container>
				<SectionHead
					eyebrow="FAQ"
					title="Questions people usually ask"
					titleId="faq-title"
					description="Short, honest answers about how I work and what I use AI for."
					action={
						<Link className="btn btn--ghost btn--sm" href="/faq/">
							All questions
						</Link>
					}
				/>

				<div className="faq-grid">
					<FaqAccordion items={faqPreviewItems} />
				</div>
			</Container>
		</section>
	)
}
