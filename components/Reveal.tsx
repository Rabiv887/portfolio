"use client"

import { useEffect, useRef, useState } from "react"
import type { ElementType, ReactNode } from "react"

type RevealProps = {
	children: ReactNode
	as?: ElementType
	delay?: number
	className?: string
}

export function Reveal({ children, as: Tag = "div", delay = 0, className }: RevealProps) {
	const ref = useRef<HTMLElement | null>(null)
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const node = ref.current
		if (!node) return

		if (typeof IntersectionObserver === "undefined") {
			setVisible(true)
			return
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisible(true)
						observer.disconnect()
					}
				})
			},
			{ threshold: 0.15 },
		)

		observer.observe(node)
		return () => observer.disconnect()
	}, [])

	return (
		<Tag
			ref={ref}
			className={"reveal" + (visible ? " reveal--visible" : "") + (className ? " " + className : "")}
			style={{ transitionDelay: delay + "ms" }}
		>
			{children}
		</Tag>
	)
}
