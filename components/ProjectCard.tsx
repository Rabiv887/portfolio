import Link from "next/link"
import type { Project } from "@/lib/projects"
import { MediaFrame, StatusBadge, Tag } from "./ui"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card project-card">
      <MediaFrame media={project.media[0]} />
      <div className="project-card-status">
        <StatusBadge status={project.status} />
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="tag-row">
        {project.tags.slice(0, 3).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="project-card-links">
        <Link href={`/projects/${project.slug}/`}>View case study {'\u2192'}</Link>
        {project.liveLinks.map((link) => (
          <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.label} {'\u2197'}
          </a>
        ))}
      </div>
    </article>
  )
}
