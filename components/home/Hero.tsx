import Link from "next/link"
import { projectStats } from "@/lib/projects"
import { site, socialList } from "@/lib/site"
import { ArrowRight, GitHub, LinkedIn, Mail } from "@/components/Icons"
import { Container } from "@/components/ui"

function SocialIcon({ id }: { id: string }) {
	if (id === "linkedin") return <LinkedIn size={18} />
	if (id === "github") return <GitHub size={18} />
	return <Mail size={18} />
}

/** Hero: identity, positioning, value proposition and primary actions. */
export function Hero() {
	return (
		<section className="hero" aria-labelledby="hero-title">
			<Container>
				<div className="hero__grid">
					<div>
						<p className="pill-status">
							<span className="dot" aria-hidden="true" />
							{site.availability}
						</p>

						<h1 className="hero__title" id="hero-title">
							{site.name}
						</h1>

						<p className="hero__role">
							{site.roleParts.map((part, index) => (
								<span key={part}>
									{index > 0 ? (
										<span className="sep" aria-hidden="true">
											/
										</span>
									) : null}
									{part}
								</span>
							))}
						</p>

						<p className="hero__tagline">{site.tagline}</p>

						<div className="btn-row hero__actions">
							<Link className="btn btn--primary" href="/projects/">
								View projects
								<ArrowRight size={17} />
							</Link>
							<Link className="btn btn--secondary" href="/contact/">
								Contact me
							</Link>
							<a className="btn btn--ghost" href="#featured-projects">
								Explore my work
							</a>
						</div>

						<div className="hero__social">
							<span className="hero__social-label">Find me on</span>
							<div className="social-row">
								{socialList.map((link) =>
									link.isPlaceholder ? (
										<span
											key={link.id}
											className="icon-btn icon-btn--social"
											role="img"
											title={link.label + " profile coming soon"}
											aria-label={link.label + " profile coming soon"}
										>
											<SocialIcon id={link.id} />
										</span>
									) : (
										<a
											key={link.id}
											className="icon-btn icon-btn--social"
											href={link.url}
											target={link.id === "email" ? undefined : "_blank"}
											rel={link.id === "email" ? undefined : "noopener noreferrer"}
											aria-label={
												link.id === "email"
													? "Email " + site.name
													: link.label + " profile (opens in a new tab)"
											}
										>
			