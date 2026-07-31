export type SkillGroup = { title: string; skills: string[] }

export const skillGroups: SkillGroup[] = [
  { title: "Development", skills: ["HTML", "CSS", "JavaScript", "Web Tool Development", "Git & GitHub"] },
  {
    title: "Automation",
    skills: ["Python for Automation", "Workflow Automation", "Automation Scripts", "PDF Processing", "Telegram Bot API"],
  },
  { title: "AI & Productivity", skills: ["AI-Assisted Development", "Prompt Engineering", "AI Tools", "Productivity Workflows"] },
  {
    title: "Thinking & Process",
    skills: ["Problem Solving", "Analytical Thinking", "Research & Experimentation", "User-Centered Thinking", "Continuous Learning"],
  },
]

export type FaqItem = { question: string; answer: string }

export const faqItems: FaqItem[] = [
  { question: "Who are you?", answer: "A B.Sc. in Mathematics graduate passionate about AI-assisted development, web tools, and automation." },
  { question: "What kind of projects do you build?", answer: "Practical web tools, automation systems, productivity tools, and AI-assisted applications." },
  { question: "Which technologies do you use?", answer: "HTML, CSS, JavaScript, Python, Git, GitHub, AI tools, and modern web technologies." },
  { question: "Are your projects open source?", answer: "Some projects are public, while others remain private due to security or ongoing development." },
  { question: "Can I collaborate with you?", answer: "Yes. I am open to collaborations, internships, and interesting technology projects." },
  { question: "How can I contact you?", answer: "Through the contact form or my professional email." },
  {
    question: "Are you currently learning new technologies?",
    answer: "Yes. I continuously learn and improve my skills by building real-world projects and experimenting with modern technologies.",
  },
  { question: "Do you accept freelance or custom project requests?", answer: "Yes, for projects that match my skills and availability." },
]

export const aboutContent = {
  background:
    "I'm Md. Julmot Hossain, a B.Sc. in Mathematics graduate who builds practical web tools and automation systems through AI-assisted development. I enjoy turning everyday problems into working software: typing practice tools, ID card generators, and automation scripts that save real time.",
  education: "B.Sc. in Mathematics",
  learningApproach:
    "I learn by building. Every project starts from a real problem I or someone around me has faced, and I use AI tools alongside my own research and experimentation to design, build, and refine a working solution.",
  responsibleAi:
    "I use AI as a collaborative tool throughout my development process, for planning, problem solving, and implementation, while staying responsible for understanding, testing, and improving everything I ship.",
  values: [
    { title: "Practical over polished", description: "I care more about whether a tool actually solves the problem than how impressive it looks on paper." },
    { title: "Transparent process", description: "I'm upfront about using AI-assisted development and about what is public versus private in my work." },
    { title: "Continuous learning", description: "Every project is a chance to pick up a new skill, tool, or way of thinking about a problem." },
    { title: "User-centered thinking", description: "I start from who will use a tool and what they need, not just from the technology itself." },
  ],
  futureGoals:
    "I'm continuing to build practical web tools and automation systems, deepen my AI-assisted development workflow, and explore opportunities to collaborate on interesting technology projects.",
}

export const resumeContent = {
  status: "Resume PDF will be added once finalized.",
  summary:
    "B.Sc. in Mathematics graduate focused on AI-assisted development, practical web tools, and automation. Experienced in building typing practice platforms, education tools, and Python-based automation scripts, with a strong focus on solving real, everyday problems.",
  education: [{ degree: "B.Sc. in Mathematics", details: "Focused on analytical thinking and problem solving, which now shapes how I approach building software." }],
}
