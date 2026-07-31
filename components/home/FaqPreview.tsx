import { faqItems } from "@/lib/content"
import FaqAccordion from "../FaqAccordion"
import { Button, SectionHeader } from "../ui"

export default function FaqPreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <FaqAccordion items={faqItems.slice(0, 3)} />
        <div style={{ marginTop: "24px" }}>
          <Button href="/faq/" variant="secondary">
            View all questions
          </Button>
        </div>
      </div>
    </section>
  )
}
