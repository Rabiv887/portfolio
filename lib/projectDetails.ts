export type ProjectDetail = {
  slug: string
  role: string[]
  challenges: string[]
  sections: { problem: string; targetUsers: string[]; features: string[] }
  privacyNote?: string
}

export const projectDetails: Record<string, ProjectDetail> = {
  "ai-typing-practice-platform": {
    slug: "ai-typing-practice-platform",
    role: ["Personal idea", "Problem identification", "Workflow planning", "Practical problem solving"],
    challenges: [
      "Supporting accurate Bangla typing alongside English",
      "Calculating speed and accuracy reliably",
      "Building smooth, controllable auto-scroll for e-paper images",
      "Keeping the experience mobile-friendly",
      "Handling uploaded images cleanly",
      "Ensuring broad keyboard compatibility",
    ],
    sections: {
      problem: "Typing learners needed a way to practice and improve English and Bangla typing speed and accuracy, and to type directly from image-based content (like e-paper clippings) without needing a printed page in front of them.",
      targetUsers: ["Typing learners", "Students", "Job exam candidates", "Bangla and English typing users", "Users typing from image-based content"],
      features: ["English typing practice", "Bangla typing practice", "Speed tracking", "Accuracy tracking", "Difficulty levels", "Image upload", "Auto-scroll", "Timer", "Interval control", "Scroll distance control", "Pause / resume", "Reset", "Keyboard support", "Mobile-friendly design"],
    },
  },
  "student-id-card-generator": {
    slug: "student-id-card-generator",
    role: ["Idea", "Design planning", "Form fields planning", "Template / layout planning", "AI-assisted development", "Testing", "Usability improvement", "Deployment"],
    challenges: ["Designing a clean, printable ID card layout"],
    sections: {
      problem: "Schools, colleges, and universities often need a simple way to generate digital student ID cards without expensive software.",
      targetUsers: ["Students", "Schools", "Colleges", "Universities"],
      features: ["Enter student details", "Upload photo", "Choose template / design", "Generate ID card", "Download ID card"],
    },
  },
  "facebook-image-pdf-telegram-automation": {
    slug: "facebook-image-pdf-telegram-automation",
    role: ["Idea", "Workflow design", "Python script planning", "Telegram bot setup", "Testing", "Automation logic", "Run process planning"],
    challenges: ["Reliably detecting new image posts on public profiles", "Converting images into well-formed PDFs", "Delivering updates through Telegram without manual steps", "Keeping the workflow private and secure"],
    sections: {
      problem: "Manually checking multiple public Facebook profiles for new image posts is time-consuming and easy to miss.",
      targetUsers: ["Users monitoring public image-based updates", "Students / researchers", "Productivity users"],
      features: ["Public profile monitoring", "Interval checking", "Image detection", "Image-to-PDF conversion", "Telegram delivery", "Multiple profile support"],
    },
    privacyNote: "Credentials, bot tokens, and other sensitive workflow details are kept private and are not shown here.",
  },
  "personal-productivity-automation-toolkit": {
    slug: "personal-productivity-automation-toolkit",
    role: ["Problem identification", "Workflow design", "Automation planning", "AI-assisted implementation", "Testing / refinement", "Usability evaluation"],
    challenges: ["Keeping automations reliable over time", "Making tools genuinely useful in daily workflows", "Testing across different real-world scenarios", "Improving usability of internal tools"],
    sections: {
      problem: "Repetitive daily tasks were taking up time that could be saved through automation.",
      targetUsers: ["Personal use", "Students", "Researchers", "Productivity-focused users"],
      features: ["Facebook image-to-PDF-Telegram automation", "File / PDF processing utilities", "Workflow scripts", "Browser productivity tools", "AI-assisted utility scripts", "Custom automation tools"],
    },
    privacyNote: "This is a private, evolving toolkit; implementation details are kept private.",
  },
}
