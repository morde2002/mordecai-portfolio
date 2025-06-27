import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Globe, Phone, MapPin, Mail, User } from "lucide-react"

export function About() {
  const personalInfo = [
    { icon: Calendar, label: "Birthday", value: "30th July 2002" },
    { icon: Globe, label: "Website", value: "edgeanimateux.vercel.app", link: "https://edgeanimateux.vercel.app/" },
    { icon: Phone, label: "Phone", value: "+254 115 588218", link: "tel:+254115588218" },
    { icon: MapPin, label: "City", value: "Mombasa, Kenya" },
    { icon: User, label: "Age", value: "22" },
    { icon: Mail, label: "Email", value: "mathengemordecai@gmail.com", link: "mailto:mathengemordecai@gmail.com" },
  ]

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A dedicated front-end developer specializing in React.js, Next.js, and React Native, with a strong focus on building dynamic dashboards, world class websites, intuitive UI designs, and engaging app experiences..
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="/me.jpg?height=500&width=400"
                alt="Mordecai Junior"
                width={400}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">5+</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Front-End Developer & UI Specialist</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                As a front-end developer specializing in React.js, Next.js, and React Native, 
                I bring interfaces to life through responsive dashboards and seamless app designs. 
                I'm driven by a passion for clean code and captivating user experiences. 
                Continuously exploring the latest tech trends, I ensure every project is 
                modern, performant, and user-focused.
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {personalInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <Icon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-slate-900">{info.label}:</span>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="ml-2 text-blue-600 hover:text-blue-800 transition-colors"
                              target={info.link.startsWith("http") ? "_blank" : undefined}
                              rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <span className="ml-2 text-slate-600">{info.value}</span>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <div>
              <p className="text-slate-600 leading-relaxed">
                I take pride in designing visually engaging, intuitive, and responsive user interfaces. 
                With a strong foundation in React.js, Next.js, and React Native, 
                I build seamless web and mobile experiences that prioritize performance and usability. 
                From dynamic dashboards to interactive app designs, I focus on delivering clean, scalable code 
                that brings ideas to life with precision and creativity.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="px-3 py-1">
                Available for Freelance
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                5+ Years Experience
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
