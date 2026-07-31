"use client"

import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  useEffect(() => {
    const stored = window.localStorage.getItem("theme")
    if (stored === "light" || stored === "dark") {
      setTheme(stored)
      document.documentElement.dataset.theme = stored
    }
  }, [])

  function toggle() {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    document.documentElement.dataset.theme = next
    window.localStorage.setItem("theme", next)
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label="Toggle color theme">
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  )
}
