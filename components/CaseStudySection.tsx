import type { ReactNode } from "react"

export default function CaseStudySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="case-study-section">
      <div className="container">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  )
}
