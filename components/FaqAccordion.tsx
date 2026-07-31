"use client"

import { useId, useState } from "react"
import type { FaqItem } from "@/lib/content"
import { Plus } from "@/components/Icons"

/**
 * Keyboard-accessible FAQ accordion. The expand transition is CSS-only and is
 * neutralised automatically under prefers-reduced-motion.
 */
export function FaqAccordion({
	items,
	defaultOpenIndex = 0,
}: {
	items: FaqItem[]
	defaultOpenIndex?: number | null
}) {
	const baseId = useId()
	const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex)

	return (
		<div className="accordion">
			{items.map((item, index) => {
				const isOpen = openIndex === index
				const panelId = baseId + "-panel-" + index
				const buttonId = baseId + "-button-" + index

				return (
					<div className="accordion__item" key={item.question}>
						<h3>
							<button
								type="button"
								id={buttonId}
								className="accordion__trigger"
								aria-expanded={isOpen}
								aria-controls={panelId}
								onClick={() => setOpenIndex(isOpen ? null : index)}
							>
								{item.question}
								<Plus size={20} className="accordion__icon" />
							</button>
						</h3>
						<div
							id={panelId}
							role="region"
							aria-labelledby={buttonId}
							className="accordion__panel"
							data-open={isOpen ? "true" : "false"}
							hidden={!isOpen}
						>
							<div>
								<p>{item.answer}</p>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}
