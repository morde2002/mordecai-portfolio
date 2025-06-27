import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Calendar, User, Globe } from "lucide-react"

// This would typically come from a database or API
const portfolioDetails = {
  id: "1",
  title: "XeleratedTech Website",
  category: "Web Design",
  client: "XeleratedTech Company",
  date: "01 March, 2024",
  url: "https://xeleratedtech.com",
  description: `This project represents a comprehensive web design and development solution for XeleratedTech, a cutting-edge technology company. The website showcases modern design principles with a focus on user experience and responsive functionality.

The design incorporates clean lines, strategic use of whitespace, and a carefully curated color palette that reflects the company's innovative approach to technology solutions. The site features smooth animations, interactive elements, and optimized performance across all devices.

Key features include a dynamic portfolio showcase, integrated contact forms, and a content management system that allows the client to easily update their services and case studies. The website successfully positions XeleratedTech as a leader in their industry while providing an intuitive user experience for potential clients.`,
  images: [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ],
  technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
  features: [
    "Responsive Design",
    "SEO Optimized",
    "Fast Loading Speed",
    "Modern UI/UX",
    "Content Management",
    "Contact Integration",
  ],
}

export default function PortfolioDetails() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Portfolio Details</h1>
              <nav className="flex items-center space-x-2 text-slate-300">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span>Portfolio Details</span>
              </nav>
            </div>
            <Button variant="outline" asChild>
              <Link href="/#portfolio">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Image Gallery */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                    {portfolioDetails.images.map((image, index) => (
                      <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${portfolioDetails.title} screenshot ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Project Information */}
            <div className="space-y-8">
              {/* Project Info Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Project Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Globe className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900">Category:</span>
                        <p className="text-slate-600">{portfolioDetails.category}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900">Client:</span>
                        <p className="text-slate-600">{portfolioDetails.client}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900">Project Date:</span>
                        <p className="text-slate-600">{portfolioDetails.date}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <ExternalLink className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900">Project URL:</span>
                        <Link
                          href={portfolioDetails.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          Visit Website
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technologies Used */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {portfolioDetails.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Features */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {portfolioDetails.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* CTA Button */}
              <Button className="w-full" asChild>
                <Link href={portfolioDetails.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Live Project
                </Link>
              </Button>
            </div>
          </div>

          {/* Project Description */}
          <Card className="mt-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{portfolioDetails.title}</h2>
              <div className="prose prose-slate max-w-none">
                {portfolioDetails.description.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-slate-600 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            &copy; Copyright <strong>Mordecai's Portfolio</strong>
          </p>
          <p className="text-slate-400">
            Designed by{" "}
            <Link
              href="https://xeleratedtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Mordecai Junior
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
