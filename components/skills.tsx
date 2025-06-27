import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "React.js", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "React Native", level: 85 },
  { name: "JavaScript (ES6+)", level: 90 },
  { name: "HTML5", level: 100 },
  { name: "CSS3 / Tailwind CSS", level: 95 },
  { name: "Node.js (Backend)", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "Git & Version Control", level: 85 },
  { name: "Figma to Code", level: 80 },
  { name: "WordPress / CMS", level: 75 },
  { name: "Photoshop (UI Assets)", level: 60 },
]



export function Skills() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Skills</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I excel in crafting seamless user experiences through innovative front-end design and robust back-end
            development
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-900">{skill.name}</span>
                    <span className="text-blue-600 font-bold">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-3" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
