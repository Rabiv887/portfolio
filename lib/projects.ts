export type ProjectStatus = "public" | "private"
export type ProjectLink = { label: string; url: string }
export type Project = {
  slug: string
  title: string
  summary: string
  statusLabel: string
  status: ProjectStatus
  type: string
  featured: boolean
  tags: string[]
  tech: string[]
  liveLinks: ProjectLink[]
  media: { src: string; alt: string }[]
}

export const projects: Project[] = [
  {
    slug: "ai-typing-practice-platform",
    title: "AI Typing Practice Platform with E-Paper Auto Scroll",
    summary:
      "Two connected typing tools: a practice platform for English and Bangla typing with speed and accuracy tracking, and an e-paper assistant that auto-scrolls an uploaded image so you can type without a printed page.",
    statusLabel: "Public Web Tool",
    status: "public",
    type: "Typing Productivity",
    featured: true,
    tags: ["Web Tool", "Typing Practice", "JavaScript", "GitHub Pages", "AI-Assisted Development"],
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    liveLinks: [
      { label: "Typer Pro", url: "https://jobquiz.github.io/typerpro/" },
      { label: "E-Paper Assistant", url: "https://jobquiz.github.io/epapertyping/index.html" },
    ],
    media: [],
  },
  {
    slug: "student-id-card-generator",
    title: "Student ID Card Generator",
    summary:
      "A web tool that helps students and educational institutions generate digital student ID cards from entered details, an uploaded photo, and a chosen template.",
    statusLabel: "Public Web Tool",
    status: "public",
    type: "Education Tool",
    featured: true,
    tags: ["Education Tool", "Web Tool", "GitHub Pages", "AI-Assisted Development"],
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    liveLinks: [{ label: "Live demo", url: "https://jobquiz.github.io/web/" }],
    media: [],
  },
  {
    slug: "facebook-image-pdf-telegram-automation",
    title: "Facebook Public Post Image to PDF & Telegram Automation",
    summary:
      "An automation that monitors public Facebook profiles, converts new image posts into a PDF, and delivers the update through a Telegram bot, removing the need to check profiles manually.",
    statusLabel: "Private Automation",
    status: "private",
    type: "Automation",
    featured: false,
    tags: ["Automation", "Python", "Telegram Bot", "PDF Processing", "Private Project"],
    tech: ["Python", "Telegram Bot API", "Image-to-PDF library", "Scheduler / timer"],
    liveLinks: [],
    media: [],
  },
  {
    slug: "personal-productivity-automation-toolkit",
    title: "Personal Productivity Automation Toolkit",
    summary:
      "An evolving collection of personal automation tools: file and PDF utilities, workflow scripts, and AI-assisted helpers, built to cut down repetitive daily work.",
    statusLabel: "Evolving Toolkit",
    status: "private",
    type: "Private Toolkit",
    featured: false,
    tags: ["Productivity", "Automation", "Python", "AI-Assisted Development", "Private Toolkit"],
    tech: ["Python", "HTML", "CSS", "JavaScript", "PDF processing libraries", "Telegram Bot API", "Git & GitHub"],
    liveLinks: [],
    media: [],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}
export function getFeaturedProjects() {
  return projects.filter((p) => p.featured)
}
