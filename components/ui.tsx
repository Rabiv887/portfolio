import type { ReactNode } from "react"
import { Image as ImageIcon, Info } from "@/components/Icons"

export function Container({
	children,
	className = "",
}: {
	children: ReactNode
	className?: string
}) {
	return <div className={`container ${className}`.trim()}>{children}</div>
}

export function Section({
	id,
	children,
	className = "",
	labelledBy,
}: {
	id?: string
	children: ReactNode
	className?: string
	labelledBy?: string
}) {
	return (
		<section id={id} className={`section ${className}`.trim()} aria-labelledby={labelledBy}>
			<Container>{children}</Container>
		</section>
	)
}

export function SectionHead({
	eyebrow,
	title,
	titleId,
	description,
	action,
}: {
	eyebrow: string
	title: string
	titleId?: string
	description?: string
	action?: ReactNode
}) {
	return (
		<div className="section-head">
			<div className="section-head__text">
				<p className="eyebrow">{eyebrow}</p>
				<h2 id={titleId}>{title}</h2>
				{description ? <p>{description}</p> : null}
			</div>
			{action}
		</div>
	)
}

/**
 * Reserved screenshot area. Intentionally shows no fake mockup — real captures
 * drop into the exact same box later without any layout change.
 */
export function MediaFrame({
	label = "Screenshot area reserved",
	media,
}: {
	label?: string
	media?: { src: string; alt: string }[]
}) {
	if (media && media.length > 0) {
		const [primary, ...rest] = media
		return (
			<div className="media-frame media-frame--filled">
				<img className="media-frame__image" src={primary.src} alt={primary.alt} loading="lazy" />
				{rest.length > 0 ? (
					<div className="media-frame__thumbs">
						{rest.map((item) => (
							<img
								key={item.src}
								className="media-frame__thumb"
								src={item.src}
								alt={item.alt}
								loading="lazy"
							/>
						))}
					</div>
				) : null}
			</div>
		)
	}

	return (
		<div className="media-frame" role="presentation">
			<span className="media-frame__label">
				<ImageIcon size={15} />
				{label}
			</span>
		</div>
	)
}

export function Tag({ children }: { children: ReactNode }) {
	return <li className="tag">{children}</li>
}

export function StatusBadge({ status }: { status: "public" | "private" }) {
	if (status === "public") {
		return (
			<span className="badge badge--live">
				<span className="badge__dot" aria-hidden="true" />
				Live
			</span>
		)
	}
	return <span className="badge badge--private">Private</span>
}

export function Notice({ children }: { children: ReactNode }) {
	return (
		<p className="notice">
			<Info size={17} />
			<span>{children}</span>
		</p>
	)
}

export function Monogram({
	className = "",
	text = "MJH",
}: {
	className?: string
	text?: string
}) {
	return (
		<span className={`monogram ${className}`.trim()} aria-hidden="true">
			{text}
		</span>
	)
}
