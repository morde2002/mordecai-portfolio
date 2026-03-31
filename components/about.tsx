"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, Mail, Briefcase } from "lucide-react"

const infoItems = [
  { icon: MapPin, text: "Mombasa, Kenya" },
  { icon: Mail, text: "mathengemordecai@gmail.com" },
  { icon: Briefcase, text: "Available for Freelance" },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">About Me</h2>
          <motion.div
            className="w-12 h-1 bg-primary rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/me.jpg"
                alt="Mordecai Mathenge"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              className="text-lg font-medium text-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Frontend Developer &amp; UI/UX Designer
            </motion.p>

            <motion.p
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              I&apos;m a frontend developer with a strong UX/UI design foundation, actively
              transitioning to full-stack development. Currently at{" "}
              <span className="text-foreground font-medium">LogixFleet</span>, I build
              AI-powered fleet management dashboards and customer portals using React.js
              and Next.js. I also run{" "}
              <span className="text-foreground font-medium">XeleratedTech Inc</span>, a
              web agency delivering custom websites and digital solutions for clients across Kenya.
            </motion.p>

            <motion.p
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              My journey started during my IT diploma at Mount Kenya University, where I
              discovered my passion for building intuitive web experiences. Through internships
              at ICT Authority, Light International School, and Kenya Petroleum Refineries,
              I honed both my technical and problem-solving skills before diving fully into
              frontend development and design.
            </motion.p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {infoItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-sm cursor-default"
                  >
                    <Icon className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-muted-foreground">{item.text}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
