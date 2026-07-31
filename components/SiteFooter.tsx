import Link from "next/link"
import { Github, Linkedin, Mail } from "@/components/Icons"
import { footerNav, site, socialLinks } from "@/lib/site"

export function SiteFooter() {
	const year = new Date().getFullYear()

	return (
		<footer className="site-footer">
			<div className="container site-footer__inner">
				<div className="site-footer__brand">
					<span className="monogram" aria-hidden="true">
						{site.monogram}
					</span>
					<p>{site.tagline}</p>
				</div>

				<nav className="site-footer__nav" aria-label="Footer">
					<ul>
						{footerNav.map((link) => (
							<li key={link.href}>
								<Link href={link.href}>{link.label}</Link>
							</li>
						))}
					</ul>
				</nav>

				<div className="site-footer__social">
					<a href={socialLinks.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
						<Linkedin size={18} />
					</a>
					{socialLinks.github.isPlaceholder ? (
						<span aria-label="GitHub profile coming soon" className="icon-link--disabled">
							<Github size={18} />
						</span>
					) : (
						<a href={socialLinks.github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
							<Github size={18} />
						</a>
					)}
					<a href={"mailto:" + site.email} aria-label="Send an email">
						<Mail size={18} />
					</a>
				</div>
			</div>
			<div className="container site-footer__legal">
				<p>
					\u00A9 {year} {site.name}. All rights reserved.
				</p>
			</div>
		</footer>
	)
}
