import { Card, CardContent } from "@/components/ui/card"
import { Globe, Code, Palette, Brush, Settings, Server } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Design",
    description: "Crafting responsive, user-friendly layouts that combine modern aesthetics with seamless usability.",
  },
  {
    icon: Code,
    title: "Front-End Development",
    description: "Building scalable and performant web apps using React.js, Next.js, and modern JavaScript frameworks.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive user experiences and interfaces, transforming ideas into pixel-perfect, interactive designs.",
  },
  {
    icon: Brush,
    title: "Logo & Brand Design",
    description: "Delivering unique logos and visual identities that resonate with your audience and define your brand.",
  },
  {
    icon: Settings,
    title: "Website Maintenance",
    description: "Ongoing support for updates, performance tuning, backups, and security — keeping your site reliable and fresh.",
  },
  {
    icon: Server,
    title: "Freelance Support",
    description: "Offering flexible freelance services in design, content, admin support, and social media account management.",
  },
]


export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Services</h2>
          <p className="text-xl text-slate-600">My Services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
