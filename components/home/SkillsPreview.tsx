import { skillGroups } from "@/lib/content"
import { SectionHeader, Tag } from "../ui"

export default function SkillsPreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="Toolbox" title="Skills & focus areas" />
        <div className="grid grid-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group">
              <h3>{group.title}</h3>
              <div>
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
