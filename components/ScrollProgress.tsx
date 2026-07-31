"use client"

import { useEffect, useRef } from "react"

/** Thin gradient bar that reflects reading progress on the current page. */
export function ScrollProgress() {
	const barRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		let frame = 0

		const update = () => {
			frame = 0
			const bar = barRef.current
			if (!bar) return
			const doc = document.documentElement
			const scrollable = doc.scrollHeight - doc.clientHeight
			const raw = scrollable > 0 ? doc.scrollTop / scrollable : 0
			const progress = Math.min(1, Math.max(0, raw))
			bar.style.transform = "scaleX(" + progress + ")"
		}

		const onScroll = () => {
			if (frame) return
			frame = window.requestAnimationFrame(update)
		}

		update()
		window.addEventListener("scroll", onScroll, { passive: true })
		window.addEventListener("resize", onScroll)
		return () => {
			window.removeEventListener("scroll", onScroll)
			window.removeEventListener("resize", onScroll)
			if (frame) window.cancelAnimationFrame(frame)
		}
	}, [])

	return (
		<div className="scroll-progress" aria-hidden="true">
			<div className="scroll-progress__bar" ref={barRef} />
		</div>
	)
}
