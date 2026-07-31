import { projects } from "@/lib/projects"
import ProjectCard from "./ProjectCard"

export default function RelatedProjects({ excludeSlug }: { excludeSlug: string }) {
  const related = projects.filter((p) => p.slug !== excludeSlug).slice(0, 2)
  if (related.length === 0) return null
  return (
    <div className="container related-projects">
      <h2>More projects</h2>
      <div className="grid grid-2">
        {related.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
