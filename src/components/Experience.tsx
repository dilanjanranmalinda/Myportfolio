import { Briefcase, Building2 } from "lucide-react"
import ScrollReveal from "./ScrollReveal"
import { experience } from "../data/portfolioData"

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-emerald-400 font-mono text-sm mb-2 tracking-widest">EXPERIENCE</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Where I've{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Worked</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/50 via-blue-500/50 to-transparent -translate-x-1/2" />

          <div className="space-y-16">
            {experience.map((exp, idx) => (
              <ScrollReveal key={exp.id} delay={idx * 150}>
                <div className={`relative flex flex-col md:flex-row items-start gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden md:flex flex-1 justify-end">
                    {idx % 2 === 0 && (
                      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/30 transition-all w-full max-w-md group">
                        <ExpContent exp={exp} />
                      </div>
                    )}
                  </div>

                  <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 z-10">
                    <div className="w-5 h-5 bg-emerald-500 rounded-full border-4 border-gray-900 shadow-[0_0_20px_rgba(16,185,129,0.3)]" />
                  </div>

                  <div className="md:hidden w-full pl-16">
                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/30 transition-all group">
                      <ExpContent exp={exp} />
                    </div>
                  </div>

                  <div className="hidden md:flex flex-1">
                    {idx % 2 !== 0 && (
                      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/30 transition-all w-full max-w-md group">
                        <ExpContent exp={exp} />
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExpContent({ exp }: { exp: typeof experience[number] }) {
  return (
    <>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <p className="text-emerald-400 font-semibold text-sm">{exp.company}</p>
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">{exp.role}</h3>
        </div>
        <div className="text-xs text-gray-400 bg-gray-700/50 px-3 py-1.5 rounded-full whitespace-nowrap">
          {exp.period}
        </div>
      </div>
      <p className="text-gray-500 text-xs mb-3 flex items-center gap-1">
        <Briefcase className="w-3 h-3" />
        {exp.location}
      </p>
      <ul className="space-y-2">
        {exp.description.map((desc, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
            {desc}
          </li>
        ))}
      </ul>
    </>
  )
}
