import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const portfolioDetails = {
  id: "1",
  title: "XeleratedTech Website",
  category: "Web Design",
  client: "XeleratedTech Company",
  date: "March 2024",
  url: "https://xeleratedtech.com",
  description: `This project represents a comprehensive web design and development solution for XeleratedTech, a cutting-edge technology company. The website showcases modern design principles with a focus on user experience and responsive functionality.

The design incorporates clean lines, strategic use of whitespace, and a carefully curated color palette that reflects the company's innovative approach to technology solutions. The site features smooth animations, interactive elements, and optimized performance across all devices.

Key features include a dynamic portfolio showcase, integrated contact forms, and a content management system that allows the client to easily update their services and case studies.`,
  images: [
    "/portfolio1.png",
    "/portfolio2.png",
    "/portfolio3.png",
    "/portfolio4.png",
    "/portfolio5.png",
    "/portfolio6.png",
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
      <Navbar />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#portfolio" className="hover:text-foreground transition-colors">
              Portfolio
            </Link>
            <span>/</span>
            <span className="text-foreground">{portfolioDetails.title}</span>
          </div>

          {/* Title */}
          <div className="flex items-start justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">
                {portfolioDetails.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-muted-foreground">{portfolioDetails.category}</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-sm text-muted-foreground">{portfolioDetails.date}</span>
              </div>
            </div>
            {portfolioDetails.url !== "#" && (
              <a
                href={portfolioDetails.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Visit Site
              </a>
            )}
          </div>

          {/* Image Gallery */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {portfolioDetails.images.map((image, index) => (
              <div key={index} className="relative aspect-video rounded-xl overflow-hidden border border-border">
                <Image
                  src={image}
                  alt={`${portfolioDetails.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            <div>
              <h2 className="text-lg font-semibold mb-4">About the Project</h2>
              <div className="space-y-4">
                {portfolioDetails.description.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioDetails.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {portfolioDetails.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Client
                </h3>
                <p className="text-sm text-foreground">{portfolioDetails.client}</p>
              </div>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all projects
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
