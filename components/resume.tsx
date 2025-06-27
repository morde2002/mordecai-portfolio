import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase } from "lucide-react"

const education = [
  {
    degree: "Diploma in Information & Technology",
    period: "2021 - 2023",
    institution: "Mount Kenya University, Mombasa, Kenya",
    description: "Graduated with Honors, gaining a strong foundation in software development, networking, and IT systems.",
  },
  {
    degree: "Kenya Certificate of Secondary Education",
    period: "2016 - 2019",
    institution: "Mombasa Baptist High School, Mombasa, Kenya",
    description: "Completed secondary education with a strong focus on computing and sciences.",
  },
]

const experience = [
  {
    title: "Front-End Developer & UI/UX Designer",
    period: "2019 - Present",
    location: "Mombasa, Kenya",
    achievements: [
      "5+ years of hands-on experience crafting modern UIs using React.js, Next.js, and React Native.",
      "Designed and built interactive dashboards and responsive applications with a focus on performance and usability.",
      "Integrated APIs and back-end services using Node.js and MongoDB for full-stack development.",
      "Delivered tailored solutions to startups, SMEs, and NGOs, adapting design systems to client needs.",
    ],
  },
  {
    title: "Software Developer",
    period: "2017 - Present",
    location: "Mombasa, Kenya",
    achievements: [
      "Began programming with VB; now proficient in JavaScript (ES6+), Python, and Node.js.",
      "Built real-world apps including a digital voting system, basketball team website, and internal tools during internships.",
      "Collaborated with supervisors and project teams to improve business and institutional systems.",
      "Demonstrated time management by handling up to 5 concurrent client and internal projects under tight deadlines.",
    ],
  },
]


export function Resume() {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Resume</h2>
          <p className="text-xl text-slate-600">My professional journey</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Summary */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Summary</h3>
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-xl font-semibold text-slate-900 mb-3">Mordecai Junior</h4>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  I’m a front-end developer passionate about crafting modern, responsive, and user-centric digital experiences.
                  Proficient in React.js, Next.js, and React Native, I specialize in designing clean UI interfaces, interactive dashboards, and mobile apps.
                  With practical experience in Node.js and MongoDB, I also contribute to full-stack solutions that are scalable and efficient.
                  I continuously seek to learn and apply the latest web technologies to bring ideas to life.
                </p>
                <div className="space-y-2 text-slate-600">
                  <p>📍 Mombasa, Kenya</p>
                  <p>📞 (+254) 115588218</p>
                  <p>✉️ mathengemordecai@gmail.com</p>
                </div>
              </div>
            </CardContent>
          </Card>


          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-900">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="border-l-4 border-blue-600 pl-6">
                        <h4 className="text-lg font-semibold text-slate-900 mb-2">{edu.degree}</h4>
                        <Badge variant="outline" className="mb-3">
                          {edu.period}
                        </Badge>
                        <p className="text-blue-600 font-medium mb-3">{edu.institution}</p>
                        <p className="text-slate-600">{edu.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center mb-8">
                <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-900">Professional Experience</h3>
              </div>

              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="border-l-4 border-blue-600 pl-6">
                        <h4 className="text-lg font-semibold text-slate-900 mb-2">{exp.title}</h4>
                        <Badge variant="outline" className="mb-3">
                          {exp.period}
                        </Badge>
                        <p className="text-blue-600 font-medium mb-4">{exp.location}</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-slate-600 text-sm leading-relaxed flex items-start">
                              <span className="text-blue-600 mr-2 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
