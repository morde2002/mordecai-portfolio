"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Django", "Python", "Node.js", "PHP", "REST APIs"],
  },
  {
    title: "Mobile",
    skills: ["React Native"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Design",
    skills: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vercel", "VS Code", "CI/CD", "WebSocket"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">Skills</h2>
          <motion.div
            className="h-1 bg-primary rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="text-center sm:text-left"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-3 py-1.5 text-xs sm:text-sm font-normal cursor-default transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
