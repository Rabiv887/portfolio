"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Github, Linkedin, Menu, X } from "@/components/Icons"
import { ThemeToggle } from "@/components/ThemeToggle"
import { primaryNav, site, socialLinks } from "@/lib/site"

export function SiteHeader() {
	const pathname = usePathname()
	const [open, setOpen] = useState(false)

	useEffect(() => {
		setOpen(false)
	}, [pathname])

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : ""
		return () => {
			document.body.style.overflow = ""
		}
	}, [open])

	function isActive(href: string) {
		if (href === "/") return pathname === "/"
		return pathname?.startsWith(href)
	}

	return (
		<header className="site-header">
			<div className="container site-header__inner">
				<Link href="/" className="site-header__brand" aria-label={site.name + " home"}>
					<span className="monogram" aria-hidden="true">
						{site.monogram}
					</span>
					<span className="site-header__name">{site.name}</span>
				</Link>

				<nav className="site-header__nav" aria-label="Primary">
					<ul>
						{primaryNav.map((link) => (
							<li key={link.href}>
								<Link
									href={link.href}
									aria-current={isActive(link.href) ? "page" : undefined}
									className={isActive(link.href) ? "is-active" : undefined}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<div className="site-header__actions">
					<a
						className="icon-link"
						href={socialLinks.linkedin.url}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn profile"
					>
						<Linkedin size={18} />
					</a>
					{socialLinks.github.isPlaceholder ? (
						<span className="icon-link icon-link--disabled" aria-label="GitHub profile coming soon">
							<Github size={18} />
						</span>
					) : (
						<a
							className="icon-link"
							href={socialLinks.github.url}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub profile"
						>
							<Github size={18} />
						</a>
					)}
					<ThemeToggle />
					<button
						type="button"
						className="nav-toggle"
						aria-expanded={open}
						aria-controls="mobile-drawer"
						aria-label={open ? "Close menu" : "Open menu"}
						onClick={() => setOpen((v) => !v)}
					>
						{open ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>
			</div>

			<div
				id="mobile-drawer"
				className={"mobile-drawer" + (open ? " mobile-drawer--open" : "")}
				role="dialog"
				aria-modal="true"
				aria-label="Mobile navigation"
			>
				<nav aria-label="Mobile">
					<ul>
						{primaryNav.map((link) => (
							<li key={link.href}>
								<Link href={link.href} aria-current={isActive(link.href) ? "page" : undefined}>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}
