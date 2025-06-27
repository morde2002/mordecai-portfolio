"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Eye } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Hisia Youth C.B.O Website",
    category: "designs",
    image: "/portfolio1.png?height=300&width=400",
    description: "Community-based organization website with modern design",
    link: "https://morde2002.github.io/hisiayouth.github.io/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Baraka Mining Website",
    category: "designs",
    image: "/portfolio2.png?height=300&width=400",
    description: "Corporate website for mining company",
    link: "https://barakaminingltd.co.ke",
    tags: ["WordPress", "PHP", "MySQL"],
  },
  {
    id: 3,
    title: "XeleratedTech Website",
    category: "designs",
    image: "/portfolio3.png?height=300&width=400",
    description: "Technology company portfolio website",
    link: "#",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    id: 4,
    title: "Texol Energy Company Website",
    category: "designs",
    image: "/portfolio8.png?height=300&width=400",
    description: "Energy company corporate website",
    link: "https://morde2002.github.io/texoldemo.github.io/",
    tags: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: 5,
    title: "Personal Portfolio v1",
    category: "portfolios",
    image: "/portfolio5.png?height=300&width=400",
    description: "First iteration of personal portfolio",
    link: "#",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 6,
    title: "Personal Portfolio v2",
    category: "portfolios",
    image: "/portfolio4.png?height=300&width=400",
    description: "Second iteration with improved design",
    link: "#",
    tags: ["React", "Styled Components"],
  },
  {
    id: 7,
    title: "Creative Portfolio",
    category: "portfolios",
    image: "/portfolio10.png?height=300&width=400",
    description: "Creative portfolio with animations",
    link: "https://edgeanimateux.vercel.app/",
    tags: ["Vue.js", "GSAP", "CSS3"],
  },
  {
    id: 8,
    title: "Modern Portfolio",
    category: "portfolios",
    image: "/portfolio9.png?height=300&width=400",
    description: "Modern portfolio with dark theme",
    link: "#",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    id: 9,
    title: "Mobile App UI",
    category: "others",
    image: "/portfolio6.png?height=300&width=400",
    description: "Mobile application user interface design",
    link: "#",
    tags: ["Figma", "UI/UX", "Mobile Design"],
  },
]

const categories = [
  { id: "all", label: "All" },
  { id: "designs", label: "Designs" },
  { id: "portfolios", label: "Portfolios" },
  { id: "others", label: "Others" },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredItems =
    activeCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Portfolio</h2>
          <p className="text-xl text-slate-600">My Works</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="px-6 py-2"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <Button size="sm" variant="secondary">
                      <Link href={item.image} target="_blank" rel="noopener noreferrer">
                        View
                      </Link>
                      <Eye className="h-4 w-4 mr-2" />
                    </Button>
                    {item.link !== "#" && (
                      <Button size="sm" variant="secondary" asChild>
                        <Link href={item.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
