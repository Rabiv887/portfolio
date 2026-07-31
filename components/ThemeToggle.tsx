"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "@/components/Icons"

export type Theme = "dark" | "light"
export const THEME_STORAGE_KEY = "jh-theme"

function applyTheme(theme: Theme) {
	document.documentElement.setAttribute("data-theme", theme)
	document.documentElement.style.colorScheme = theme
}

/** Dark is the default; the choice is remembered per browser. */
export function ThemeToggle({ className = "" }: { className?: string }) {
	const [theme, setTheme] = useState<Theme>("dark")
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		const current = document.documentElement.getAttribute("data-theme")
		setTheme(current === "light" ? "light" : "dark")
		setMounted(true)
	}, [])

	const toggle = () => {
		const next: Theme = theme === "dark" ? "light" : "dark"
		setTheme(next)
		applyTheme(next)
		try {
			window.localStorage.setItem(THEME_STORAGE_KEY, next)
		} catch {
			/* storage can be blocked — the toggle still works for this visit */
		}
	}

	const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme"

	return (
		<button
			type="button"
			className={"icon-btn " + className}
			onClick={toggle}
			aria-label={label}
			title={label}
		>
			{mounted && theme === "light" ? (
				<Moon size={18} className="theme-toggle__icon" />
			) : (
				<Sun size={18} className="theme-toggle__icon" />
			)}
		</button>
	)
}
