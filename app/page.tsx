import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Facts } from "@/components/facts"
import { Skills } from "@/components/skills"
import { Resume } from "@/components/resume"
import { Portfolio } from "@/components/portfolio"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Sidebar } from "@/components/sidebar"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="lg:ml-80">
        <Hero />
        <About />
        <Facts />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
      </main>
    </div>
  )
}
