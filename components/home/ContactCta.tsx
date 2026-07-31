import { site } from "@/lib/site"
import { Button } from "../ui"

export default function ContactCta() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <h2>Let's build something practical together</h2>
          <p>{site.availability}</p>
          <div className="hero-actions">
            <Button href="/contact/">Contact me</Button>
            <Button href={`mailto:${site.email}`} variant="secondary" external>
              Email directly
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
