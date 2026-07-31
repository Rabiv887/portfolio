import type { ReactNode } from "react"

type ContainerProps = { children: ReactNode; className?: string }

export function Container({ children, className }: ContainerProps) {
	return (
		<div className={"container" + (className ? " " + className : "")}>
			{children}
		</div>
	)
}

type SectionProps = {
	children: ReactNode
	id?: string
	className?: string
	labelledBy?: string
}

export function Section({ children, id, className, labelledBy }: SectionProps) {
	return (
		<section
			id={id}
			className={"section" + (className ? " " + className : "")}
			aria-labelledby={labelledBy}
		>
			<Container>{children}</Container>
		</section>
	)
}

type SectionHeadProps = {
	eyebrow?: string
	title: string
	titleId?: string
	description?: string
	action?: ReactNode
}

export function SectionHead({
	eyebrow,
	title,
	titleId,
	description,
	action,
}: SectionHeadProps) {
	return (
		<div className="section-head">
			<div>
				{eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
				<h2 id={titleId}>{title}</h2>
				{description ? <p className="section-head__desc">{description}</p> : null}
			</div>
			{action ? <div className="section-head__action">{action}</div> : null}
		</div>
	)
}

export function Notice({ children }: { children: ReactNode }) {
	return <p className="notice">{children}</p>
}
