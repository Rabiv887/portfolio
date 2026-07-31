"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { primaryNav, site, socialLinks } from "@/lib/site"
import { Close, GitHub, LinkedIn, Menu } from "@/components/Icons"
import { ThemeToggle } from "@/components/ThemeToggle"

function isActive(pathname: string, href: string) {
	if (href === "/") return pathname === "/"
	return pathname.startsWith(href)
}

export function SiteHeader() {
	const pathname = usePathname() || "/"
	const [scrolled, setScrolled] = useState(false)
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8)
		onScroll()
		window.addEventListener("scroll", onScroll, { passive: true })
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	useEffect(() => {
		setOpen(false)
	}, [pathname])

	useEffect(() => {
		if (!open) return
		const onKey = (event: KeyboardEvent) => {
			if (event.key === "Escape") setOpen(false)
		}
		document.addEventListener("keydown", onKey)
		document.body.style.overflow = "hidden"
		return () => {
			document.removeEventListener("keydown", onKey)
			document.body.style.overflow = ""
		}
	}, [open])

	return (
		<>
			<header className="site-header" data-scrolled={scrolled ? "true" : "false"}>
				<div className="container site-header__inner">
					<Link href="/" className="brand" aria-label={site.name + " — home"}>
						<span className="brand__mark" aria-hidden="true">
							{site.monogram}
						</span>
						<span className="brand__name">{site.name}</span>
					</Link>

					<nav className="nav-desktop" aria-label="Primary">
						{primaryNav.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="nav-link"
								aria-current={isActive(pathname, item.href) ? "page" : undefined}
							>
								{item.label}
							</Link>
						))}
					</nav>

					<div className="header-actions">
						<a
							className="icon-btn icon-btn--social"
							href={socialLinks.linkedin.url}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn profile (opens in a new tab)"
						>
							<LinkedIn size={18} />
						</a>
						{socialLinks.github.isPlaceholder ? (
							<span
								className="icon-btn icon-btn--social"
								title="GitHub profile coming soon"
								aria-label="GitHub profile coming soon"
								role="img"
							>
								<GitHub size={18} />
							</span>
						) : (
							<a
								className="icon-btn icon-btn--social"
								href={socialLinks.github.url}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub profile (opens in a new tab)"
							>
								<GitHub size={18} />
							</a>
						)}
						<span className="header-actions__divider" aria-hidden="true" />
						<ThemeToggle />
						<button
							type="button"
							className="icon-btn nav-toggle"
							onClick={() => setOpen(true)}
							aria-label="Open menu"
							aria-expanded={open}
							aria-controls="mobile-menu"
						>
							<Menu size={20} />
						</button>
					</div>
				</div>
			</header>

			{open ? (
				<div className="drawer" id="mobile-menu">
					<button
						type="button"
						className="drawer__scrim"
						aria-label="Close menu"
						onClick={() => setOpen(false)}
					/>
					<div className="drawer__panel" role="dialog" aria-modal="true" aria-label="Site menu">
						<div className="drawer__head">
							<span className="brand">
								<span className="brand__mark" aria-hidden="true">
									{site.monogram}
								</span>
								<span className="brand__name">Menu</span>
							</span>
							<button
								type="button"
								className="icon-btn"
								onClick={() => setOpen(false)}
								aria-label="Close menu"
								autoFocus
							>
								<Close size={20} />
							</button>
						</div>

						<nav className="drawer__links" aria-label="Mobile">
							{primaryNav.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className="drawer__link"
									aria-current={isActive(pathname, item.href) ? "page" : undefined}
								>
									{item.label}
									<span>{item.description}</span>
								</Link>
							))}
						</nav>

						<div className="drawer__footer">
							<a className="btn btn--secondary btn--sm" href={"mailto:" + site.email}>
								Email me
							</a>
							<a
								className="btn btn--ghost btn--sm"
								href={socialLinks.linkedin.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
						</div>
					</div>
				</div>
			) : null}
		</>
	)
}
