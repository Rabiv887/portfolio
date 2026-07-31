import Link from "next/link"
import { footerNav, site, socialList } from "@/lib/site"
import { GitHub, LinkedIn, Mail } from "@/components/Icons"
import { Container } from "@/components/ui"

function SocialIcon({ id }: { id: string }) {
	if (id === "linkedin") return <LinkedIn size={18} />
	if (id === "github") return <GitHub size={18} />
	return <Mail size={18} />
}

const isExternal = (href: string) => href.startsWith("http")

/** Footer: brand statement, navigation groups, social row, privacy note. */
export function SiteFooter() {
	const year = new Date().getFullYear()

	return (
		<footer className="site-footer">
			<Container>
				<div className="footer-grid">
					<div className="footer-brand">
						<Link href="/" className="brand" aria-label={site.name + " — home"}>
							<span className="brand__mark" aria-hidden="true">
								{site.monogram}
							</span>
							<span className="brand__name">{site.name}</span>
						</Link>
						<p>{site.tagline}</p>
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
										<SocialIcon id={link.id} />
									</a>
								),
							)}
						</div>
					</div>

					{footerNav.map((group) => (
						<nav key={group.title} className="footer-col" aria-label={group.title}>
							<h2>{group.title}</h2>
							<ul>
								{group.items.map((item) => (
									<li key={item.label}>
										{isExternal(item.href) ? (
											<a
												href={item.href}
												target="_blank"
												rel="noopener noreferrer"
											>
												{item.label}
											</a>
										) : item.href.startsWith("mailto:") ? (
											<a href={item.href}>{item.label}</a>
										) : (
											<Link href={item.href}>{item.label}</Link>
										)}
									</li>
								))}
							</ul>
						</nav>
					))}
				</div>

				<div className="footer-bottom">
					<p>
						© {year} {site.name}. All rights reserved.
					</p>
					<p>Only professional contact details are shared on this site.</p>
				</div>
			</Container>
		</footer>
	)
}
