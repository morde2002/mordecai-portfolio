"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

const roles = ["Frontend Developer", "UI/UX Designer", "Full-Stack Builder", "Freelancer"]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const speed = isDeleting ? 40 : 80

    if (!isDeleting && text === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && text === "") {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? currentRole.substring(0, text.length - 1)
          : currentRole.substring(0, text.length + 1)
      )
    }, speed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden px-6">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-400/5 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-violet-300/5 blur-3xl" />

        {/* Curved decorative lines */}
        <svg
          className="absolute top-0 right-0 w-[600px] h-[600px] text-primary/[0.04] hidden sm:block"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle cx="400" cy="200" r="200" stroke="currentColor" strokeWidth="1" />
          <circle cx="400" cy="200" r="280" stroke="currentColor" strokeWidth="1" />
          <circle cx="400" cy="200" r="360" stroke="currentColor" strokeWidth="1" />
        </svg>

        {/* Dot grid */}
        <div className="absolute bottom-20 left-10 grid grid-cols-5 gap-4 opacity-[0.08] hidden sm:grid">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content — centered on mobile, left on desktop */}
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-widest text-muted-foreground mb-4"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
          >
            Mordecai
            <br />
            <span className="text-primary">Mathenge</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 h-8"
          >
            <span>I&apos;m a </span>
            <span className="text-foreground font-medium">{text}</span>
            <span className="animate-pulse text-primary">|</span>
          </motion.div>

          {/* Mobile profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-10 lg:hidden"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden ring-4 ring-primary/10 ring-offset-4 ring-offset-background shadow-xl shadow-primary/10">
              <Image
                src="/me.jpg"
                alt="Mordecai Mathenge"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4"
          >
            <a
              href="#portfolio"
              className="px-5 sm:px-7 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-5 sm:px-7 py-3 border border-border rounded-full text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Desktop profile image with decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:flex justify-center relative"
        >
          {/* Decorative ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[380px] h-[380px] rounded-full border-2 border-dashed border-primary/15 animate-[spin_30s_linear_infinite]" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[440px] h-[440px] rounded-full border border-primary/10" />
          </div>

          {/* Floating accent dots */}
          <div className="absolute top-8 right-16 w-3 h-3 rounded-full bg-primary/30 animate-bounce" style={{ animationDelay: "0s", animationDuration: "3s" }} />
          <div className="absolute bottom-16 left-12 w-2 h-2 rounded-full bg-violet-400/40 animate-bounce" style={{ animationDelay: "1s", animationDuration: "3.5s" }} />
          <div className="absolute top-1/2 right-6 w-2.5 h-2.5 rounded-full bg-blue-400/30 animate-bounce" style={{ animationDelay: "0.5s", animationDuration: "4s" }} />

          {/* Profile image */}
          <div className="relative w-[320px] h-[320px] rounded-full overflow-hidden ring-4 ring-primary/10 ring-offset-4 ring-offset-background shadow-2xl shadow-primary/10">
            <Image
              src="/me.jpg"
              alt="Mordecai Mathenge"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.a>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full text-background">
          <path
            d="M0 60V30C240 0 480 0 720 15C960 30 1200 30 1440 15V60H0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  )
}
