import { aboutContent } from "@/lib/content"
import { Button, SectionHeader } from "../ui"

export default function AboutPreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="About" title="A bit about me" />
        <p style={{ maxWidth: "var(--measure)" }}>{aboutContent.background}</p>
        <Button href="/about/" variant="secondary">
          Read more about me
        </Button>
      </div>
    </section>
  )
}
