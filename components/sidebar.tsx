"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Home, User, FileText, Briefcase, Server, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Resume", href: "#resume", icon: FileText },
  { name: "Portfolio", href: "#portfolio", icon: Briefcase },
  { name: "Services", href: "#services", icon: Server },
  { name: "Contact", href: "#contact", icon: Mail },
]

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/mordecai_j_m", icon: "𝕏" },
  { name: "Facebook", href: "https://www.facebook.com/mordecai.mathenge/", icon: "f" },
  { name: "Instagram", href: "https://www.instagram.com/mordy_junior/", icon: "📷" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mordecai-mathenge-b097bb1b5/", icon: "in" },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-80 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className="p-8 text-center border-b border-slate-700">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src="/me.jpg?height=128&width=128"
                alt="Mordecai Junior"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold mb-4">
              <Link href="#hero" className="hover:text-blue-400 transition-colors">
                Mordecai Junior
              </Link>
            </h1>

            {/* Social Links */}
            <div className="flex justify-center space-x-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <span className="text-sm font-bold">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors group"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="h-5 w-5 text-slate-400 group-hover:text-white" />
                      <span className="group-hover:text-white">{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={() => setIsOpen(false)} />
      )}
    </>
  )
}
