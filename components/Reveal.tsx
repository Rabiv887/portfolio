"use client"

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react"

/**
 * Fade-in + slide-up reveal driven by IntersectionObserver.
 * Falls back to visible content when JS or IntersectionObserver is unavailable,
 * and CSS disables the motion entirely under prefers-reduced-motion.
 */
export function Reveal({
	children,
	as: Tag = "div",
	delay = 0,
	className = "",
}: {
	children: ReactNode
	as?: ElementType
	delay?: number
	className?: string
}) {
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
			{ rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
		)

		observer.observe(node)
		return () => observer.disconnect()
	}, [])

	return (
		<Tag
			ref={ref}
			className={`reveal ${className}`.trim()}
			data-visible={visible ? "true" : "false"}
			style={delay ? { transitionDelay: `${delay}ms` } : undefined}
		>
			{children}
		</Tag>
	)
}
