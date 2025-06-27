import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Globe, Phone, MapPin, Mail, User } from "lucide-react"

export function About() {
  const personalInfo = [
    { icon: Calendar, label: "Birthday", value: "30th July 2002" },
    { icon: Globe, label: "Website", value: "www.xeleratedtech.com", link: "https://xeleratedtech.com" },
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
            A dedicated professional deeply immersed in the world of web design, development, and programming.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="/placeholder.svg?height=500&width=400"
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
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Web Designer & Developer</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                In the fast-paced world of web technologies, I am always eager to learn and grow. Staying updated with
                the latest trends and tools is not just a habit but a passion. This continuous learning allows me to
                incorporate cutting-edge techniques into my work, ensuring that my clients receive websites that are not
                only modern but also innovative in every sense.
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
                I take immense pride in my ability to design visually striking and user-friendly websites. Utilizing my
                skills in HTML, CSS, and JavaScript, I create responsive interfaces that ensure seamless navigation and
                an enjoyable user experience. Additionally, my expertise extends to back-end development, where
                languages like Python, PHP, and Ruby enable me to build powerful and dynamic web applications.
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
