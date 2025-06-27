import { Card, CardContent } from "@/components/ui/card"
import { Globe, Code, Palette, Brush, Settings, Server } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Design",
    description: "Responsive website design services, clients can expect more than just a visually stunning site",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "When it comes to Web Development Services, I offer a comprehensive suite of services tailored to meet diverse client needs.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "UX/UI Design Enhancement, Brand Identity Development and Strategic Visual Communication are the Key Offerings and Specializations",
  },
  {
    icon: Brush,
    title: "Logo Design",
    description: "Innovation, weaving strategic vision with creative ingenuity to sculpt iconic brand identities",
  },
  {
    icon: Settings,
    title: "Website Management",
    description: "Optimal website performance, security, and growth.",
  },
  {
    icon: Server,
    title: "Freelancing Services",
    description: "Data entry, content writing, social account management.",
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
