"use client"

import { motion } from "framer-motion"
import { Globe, Code, Palette, Brush, Settings, Server } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Design",
    description: "Responsive, user-friendly layouts combining modern aesthetics with seamless usability.",
  },
  {
    icon: Code,
    title: "Frontend Development",
    description: "Scalable web apps using React.js, Next.js, and modern JavaScript frameworks.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive experiences and interfaces, from wireframes to pixel-perfect interactive designs.",
  },
  {
    icon: Brush,
    title: "Logo & Brand Design",
    description: "Unique logos and visual identities that resonate with your audience and define your brand.",
  },
  {
    icon: Settings,
    title: "Website Maintenance",
    description: "Ongoing updates, performance tuning, backups, and security to keep your site reliable.",
  },
  {
    icon: Server,
    title: "Freelance Support",
    description: "Flexible freelance services in design, development, and digital project management.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 mt-10 mb-10 px-6 bg-secondary/50 section-curve-top section-curve-bottom">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">Services</h2>
          <motion.div
            className="h-1 bg-primary rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-border bg-background hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
