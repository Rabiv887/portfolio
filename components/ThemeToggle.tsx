"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "@/components/Icons"

export function ThemeToggle() {
	const [theme, setTheme] = useState<"dark" | "light">("dark")

	useEffect(() => {
		const current = document.documentElement.getAttribute("data-theme")
		if (current === "light" || current === "dark") setTheme(current)
	}, [])

	function toggle() {
		const next = theme === "dark" ? "light" : "dark"
		setTheme(next)
		document.documentElement.setAttribute("data-theme", next)
		try {
			localStorage.setItem("mjh-theme", next)
		} catch (e) {
			// ignore storage errors (private browsing, etc.)
		}
	}

	return (
		<button
			type="button"
			className="theme-toggle"
			onClick={toggle}
			aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
		>
			{theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
		</button>
	)
}
