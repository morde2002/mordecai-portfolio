"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experience = [
  {
    title: "Frontend Developer",
    company: "LogixFleet",
    period: "April 2025 \u2014 Present",
    location: "Nairobi, Kenya",
    description:
      "Building AI-powered fleet management SaaS platform. Developed responsive dashboards and customer portals using React.js and Next.js. Implemented real-time vehicle tracking with WebSocket and interactive mapping. Built and deployed the Siphyy Driver mobile app.",
  },
  {
    title: "Founder & Lead Developer",
    company: "XeleratedTech Inc",
    period: "June 2023 \u2014 Present",
    location: "Remote",
    description:
      "Running a web agency delivering custom websites and web applications. Designed and developed sites for clients including ALMA martial arts academy, Baraka Mining, and Texol Energy. Full-stack solutions using React, Next.js, Node.js, and various CMS platforms.",
  },
  {
    title: "IT Technician",
    company: "Light International School",
    period: "March 2024 \u2014 September 2024",
    location: "Mombasa, Kenya",
    description:
      "Managed school network infrastructure including routers, switches, and wireless access points. Provided technical support and trained staff on IT systems and cybersecurity best practices.",
  },
  {
    title: "IT Assistant & Web Developer",
    company: "ICT Authority",
    period: "June 2023 \u2014 September 2023",
    location: "Mombasa, Kenya",
    description:
      "Developed and maintained government websites. Operated and maintained network infrastructure for Uhuru na Kazi building. Managed help desk tickets and server room operations.",
  },
  {
    title: "IT Support Technician",
    company: "Kenya Petroleum Refineries Limited",
    period: "January 2023 \u2014 April 2023",
    location: "Mombasa, Kenya",
    description:
      "Installation, configuration, and maintenance of computer systems. Supported SUN, e-horizon, SAP and LIMS systems. Provided helpdesk and technical support.",
  },
]

const education = [
  {
    degree: "Diploma in Information & Technology",
    institution: "Mount Kenya University",
    period: "2021 \u2014 2023",
    note: "Credit 1 (Honors)",
  },
  {
    degree: "Kenya Certificate of Secondary Education",
    institution: "Mombasa Baptist High School",
    period: "2016 \u2014 2019",
    note: "",
  },
]

export function Resume() {
  return (
    <section id="resume" className="py-24 mt-10 mb-10 px-6 bg-secondary/50 section-curve-top section-curve-bottom">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">Resume</h2>
          <motion.div
            className="h-1 bg-primary rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
            Experience
          </h3>
          <div className="space-y-0 border-l-2 border-border ml-3">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-10 last:pb-0"
              >
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-primary" />
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                  <span className="text-muted-foreground">at</span>
                  <span className="text-primary font-medium">{item.company}</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <Badge variant="outline" className="font-normal text-xs">
                    {item.period}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{item.location}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
            Education
          </h3>
          <div className="space-y-0 border-l-2 border-border ml-3">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-10 last:pb-0"
              >
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-primary" />
                <h4 className="text-lg font-semibold text-foreground mb-1">{item.degree}</h4>
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <span className="text-primary font-medium text-sm">{item.institution}</span>
                  <Badge variant="outline" className="font-normal text-xs">
                    {item.period}
                  </Badge>
                </div>
                {item.note && (
                  <p className="text-muted-foreground text-sm">{item.note}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
