import { GraduationCap, BookOpen } from "lucide-react"
import ScrollReveal from "./ScrollReveal"
import { education } from "../data/portfolioData"

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-800 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[128px]" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-emerald-400 font-mono text-sm mb-2 tracking-widest">EDUCATION</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Academic{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Background</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <ScrollReveal key={edu.id} delay={idx * 150}>
              <div className="group bg-gray-700/30 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/30 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] h-full">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-all">
                  {idx === 0 ? (
                    <GraduationCap className="w-7 h-7 text-emerald-400" />
                  ) : (
                    <BookOpen className="w-7 h-7 text-emerald-400" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{edu.degree}</h3>
                <p className="text-emerald-400 font-medium text-sm mb-3">{edu.institution}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 rounded-full text-xs text-gray-400 border border-gray-700 group-hover:border-emerald-500/30 transition-all">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {edu.period}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
