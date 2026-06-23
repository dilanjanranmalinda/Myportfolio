import ScrollReveal from "./ScrollReveal"
import { skills } from "../data/portfolioData"

const skillColors = [
  "from-emerald-400 to-teal-500",
  "from-blue-400 to-indigo-500",
  "from-purple-400 to-pink-500",
  "from-amber-400 to-orange-500",
  "from-rose-400 to-red-500",
  "from-cyan-400 to-sky-500",
  "from-lime-400 to-green-500",
  "from-violet-400 to-purple-500"
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-800 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[128px]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-emerald-400 font-mono text-sm mb-2 tracking-widest">SKILLS</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Tech Stack</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, idx) => (
            <ScrollReveal key={group.category} delay={idx * 80}>
              <div className="group bg-gray-700/30 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/30 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] h-full">
                <div className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${skillColors[idx % skillColors.length]} mb-5 group-hover:w-20 transition-all duration-500`} />
                <h3 className="text-white font-bold text-lg mb-4 group-hover:text-emerald-400 transition-colors">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, i) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-lg text-sm border border-gray-700 hover:border-emerald-500/50 hover:bg-gray-800/80 transition-all hover:scale-105 cursor-default"
                      style={{ transitionDelay: `${i * 30}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
