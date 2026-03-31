"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "All Ladies Martial Arts Academy",
    category: "Women's Martial Arts",
    description:
      "Premier women-only martial arts academy in Mombasa, led by World Championship Bronze Medalist, empowering women through self-defense and competitive martial arts training.",
    image: "/ALMA Website.webp",
    link: "https://allladiestimd.com/",
    tags: ["Next.js", "React", "Tailwind CSS", "Schema.org"],
  },
  {
    title: "Hisia Youth Website",
    category: "Non-Profit Website",
    description:
      "Community-focused platform for Hisia Youth Guiding and Counselling CBO, empowering youth development and mentorship programs in Likoni sub-county.",
    image: "/Hisia Youth Website.webp",
    link: "https://morde2002.github.io/hisiayouth.github.io/",
    tags: ["Next.js", "React", "Tailwind CSS", "CMS"],
  },
  {
    title: "Baraka Mining Portal",
    category: "Business Website",
    description:
      "Professional mining company website showcasing sustainable gem mining operations and rare mineral exploration services across Kenya.",
    image: "/Baraka MIning Website.webp",
    link: "https://barakaminingltd.co.ke",
    tags: ["React", "Node.js", "MongoDB", "Responsive Design"],
  },
  {
    title: "Construction Company Website",
    category: "Corporate Website",
    description:
      "Professional construction business website featuring project galleries, service portfolios, and client testimonials with modern responsive design.",
    image: "/construction website.webp",
    link: "https://construction-website254.vercel.app/",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
  },
  {
    title: "Safaris Adventure Platform",
    category: "Travel & Tourism",
    description:
      "Comprehensive road transport and safari booking platform offering celebration packages, adventure tours, and customized travel solutions.",
    image: "/safari website.webp",
    link: "https://safaris-adventure.vercel.app/",
    tags: ["Next.js", "React", "Stripe", "Google Maps API"],
  },
  {
    title: "Personal Portfolio Website",
    category: "Portfolio Website",
    description:
      "Modern developer portfolio showcasing skills, projects, and professional experience with interactive animations and responsive design.",
    image: "/portfolio website.webp",
    link: "https://morde2002.github.io/mordecaiportfolio.github.io/",
    tags: ["HTML5", "CSS3", "JavaScript", "GSAP"],
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">Portfolio</h2>
          <motion.div
            className="h-1 bg-primary rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group block rounded-2xl border border-border overflow-hidden bg-background hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                    <ExternalLink className="h-3.5 w-3.5 text-foreground" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Badge variant="secondary" className="text-xs font-normal bg-white/90 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <div className="p-4 sm:p-5 text-center">
                <h3 className="font-semibold text-foreground mb-1.5 text-sm sm:text-base">{project.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-normal px-2 py-0.5"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
