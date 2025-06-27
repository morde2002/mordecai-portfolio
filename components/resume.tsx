import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase } from "lucide-react"

const education = [
  {
    degree: "Diploma in Information & Technology",
    period: "2021 - 2023",
    institution: "Mount Kenya University, Mombasa, Kenya",
    description: "Successfully completed university diploma with Honors designation, achieving credit 1 honors",
  },
  {
    degree: "Secondary Education",
    period: "2016 - 2019",
    institution: "Mombasa Baptist High School, Mombasa, Kenya",
    description: "Obtained Kenya Certificate of Secondary Education",
  },
]

const experience = [
  {
    title: "Web Design Specialist",
    period: "2019 - Present",
    location: "Mombasa, Kenya",
    achievements: [
      "My 5 years extensive background experience equips me to handle diverse projects, ensuring each one is crafted with precision and creativity.",
      "My pricing model is designed to ensure that businesses of varying sizes can access high-quality web design services.",
      "Incorporating UI/UX principles, I ensure that the websites I create are not only visually appealing but also intuitive and user-friendly.",
      "Specializing in responsive web design, guaranteeing that your website looks and functions flawlessly across all devices.",
    ],
  },
  {
    title: "Programmer",
    period: "2017 - Present",
    location: "Mombasa, Kenya",
    achievements: [
      "Starting with VB language 8 years ago, my journey has evolved, allowing me to stay at the forefront of programming trends and technologies.",
      "Undertook substantial programming projects, including the development of a school election voting system during my high school days.",
      "My proficiency extends to languages like Java, Python, and JavaScript, enabling me to tackle a wide range of projects and challenges.",
      "Successfully designed and implemented a dynamic website for a basketball team.",
      "During my internship program, I collaborated closely with my supervisor, contributing to the enhancement of his systems.",
      "Managed up to 5 projects or tasks at a given time while under pressure",
      "I prioritize a client-focused approach, actively engaging with stakeholders to understand their requirements.",
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
                  I am a highly skilled web designer, developer, and programmer proficient in an array of technologies
                  and programming languages. My expertise encompasses front-end development using HTML, CSS, and
                  JavaScript, creating responsive and interactive interfaces. I have hands-on experience with JavaScript
                  frameworks such as React.js and jQuery, enhancing web applications' efficiency and interactivity. In
                  back-end development, I excel in Python, PHP, ensuring robust server-side functionality and seamless
                  database management with MySQL.
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
