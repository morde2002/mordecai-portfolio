"use client"

import { motion } from "framer-motion"
import { Cpu, Globe, Smartphone, FolderKanban } from "lucide-react"

const highlights = [
  {
    icon: Cpu,
    title: "AI-Powered SaaS",
    description: "Building fleet management tools with real-time tracking at LogixFleet",
  },
  {
    icon: Globe,
    title: "Web Agency",
    description: "Running XeleratedTech Inc, delivering web solutions since 2023",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native apps including the Siphyy Driver platform",
  },
  {
    icon: FolderKanban,
    title: "6+ Projects Delivered",
    description: "From ALMA to Baraka Mining \u2014 real-world solutions for real clients",
  },
]

export function Highlights() {
  return (
    <section className="py-24 mt-10 mb-10 px-6 bg-secondary/50 section-curve-top section-curve-bottom">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">What I Do</h2>
          <motion.div
            className="h-1 bg-primary rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-border bg-background hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
