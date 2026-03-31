"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

const socials = [
  { icon: Twitter, href: "https://twitter.com/mordecai_j_m", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/in/mordecai-mathenge-b097bb1b5", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/mordecai_junior", label: "Instagram" },
  { icon: Github, href: "https://github.com/morde2002", label: "GitHub" },
]

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t border-border py-8 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Mordecai Mathenge
        </p>
        <div className="flex items-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label={social.label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            )
          })}
        </div>
      </div>
    </motion.footer>
  )
}
