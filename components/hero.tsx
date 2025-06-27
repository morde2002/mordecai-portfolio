"use client"

import { useEffect, useState } from "react"

const roles = ["a Web Designer", "a Web Developer", "a Freelancer", "a Programmer"]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = roles[currentRole]

        if (isDeleting) {
          setDisplayText(current.substring(0, displayText.length - 1))

          if (displayText === "") {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        } else {
          setDisplayText(current.substring(0, displayText.length + 1))

          if (displayText === current) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentRole, displayText, isDeleting])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Mordecai Junior
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-300">
            I'm <span className="text-blue-400 font-semibold">{displayText}</span>
            <span className="animate-pulse">|</span>
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#about"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="border border-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
