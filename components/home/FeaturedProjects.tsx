import { getFeaturedProjects } from "@/lib/projects"
import ProjectCard from "../ProjectCard"
import { Button, SectionHeader } from "../ui"

export default function FeaturedProjects() {
  const projects = getFeaturedProjects()
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="Selected work" title="Featured projects" description="A look at the public web tools I've built and shipped." />
        <div className="grid grid-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div style={{ marginTop: "32px" }}>
          <Button href="/projects/" variant="secondary">
            View all projects
          </Button>
        </div>
      </div>
    </section>
  )
}
