"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Smile, FileText, Headphones, GitBranch } from "lucide-react"

const facts = [
  { icon: Smile, label: "Happy Clients", value: 232, suffix: "" },
  { icon: FileText, label: "Projects", value: 15, suffix: "" },
  { icon: Headphones, label: "Hours Of Support", value: 1440, suffix: "" },
  { icon: GitBranch, label: "Git Commits", value: 558, suffix: "" },
]

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}

export function Facts() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Facts</h2>
          <p className="text-xl text-slate-600">Some numbers that matter</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => {
            const Icon = fact.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    <CountUp end={fact.value} />
                    {fact.suffix}
                  </div>
                  <p className="text-slate-600 font-medium">{fact.label}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
