import { Button, SectionHeader } from "../ui"

export default function ResumePreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="Resume" title="Education & background" description="B.Sc. in Mathematics, with a focus on AI-assisted development, web tools, and automation." />
        <Button href="/resume/" variant="secondary">
          View resume
        </Button>
      </div>
    </section>
  )
}
