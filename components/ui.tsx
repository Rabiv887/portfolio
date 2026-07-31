import Link from "next/link"
import type { ReactNode } from "react"

type ButtonProps = {
  href?: string
  children: ReactNode
  variant?: "primary" | "secondary" | "disabled"
  external?: boolean
}

export function Button({ href, children, variant = "primary", external }: ButtonProps) {
  const className = variant === "primary" ? "btn btn-primary" : variant === "secondary" ? "btn btn-secondary" : "btn btn-disabled"
  if (!href || variant === "disabled") {
    return (
      <span className={className} aria-disabled="true">
        {children}
      </span>
    )
  }
  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  )
}

export function StatusBadge({ status }: { status: "public" | "private" }) {
  const className = status === "public" ? "badge badge-public" : "badge badge-private"
  const label = status === "public" ? "Public" : "Private"
  return <span className={className}>{label}</span>
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="tag">{children}</span>
}

export function Card({ children }: { children: ReactNode }) {
  return <div className="card">{children}</div>
}

export function MediaFrame({ media }: { media?: { src: string; alt: string } }) {
  if (!media) {
    return <div className="media-frame">Screenshot area reserved</div>
  }
  return (
    <div className="media-frame">
      <img src={media.src} alt={media.alt} loading="lazy" />
    </div>
  )
}

type SectionHeaderProps = { eyebrow?: string; title: string; description?: string }

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="section-header reveal">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}

export function Notice({ children }: { children: ReactNode }) {
  return <div className="notice">{children}</div>
}
