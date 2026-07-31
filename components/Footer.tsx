import Link from "next/link"
import { navLinks, site } from "@/lib/site"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <nav className="footer-links" aria-label="Footer">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="footer-links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <p className="footer-meta">
          {'\u00A9'} {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
