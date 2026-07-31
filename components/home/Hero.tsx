import { site } from "@/lib/site"
import { Button } from "../ui"

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-avatar" aria-hidden="true">
          {site.monogram}
        </div>
        <span className="hero-eyebrow">{site.eyebrow}</span>
        <h1>{site.name}</h1>
        <p className="hero-role">{site.roleParts.join(" | ")}</p>
        <p className="hero-tagline">{site.tagline}</p>
        <div className="hero-actions">
          <Button href="/projects/">View projects</Button>
          <Button href="/contact/" variant="secondary">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  )
}
