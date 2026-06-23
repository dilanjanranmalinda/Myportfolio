import ScrollReveal from "./ScrollReveal"
import { personalInfo } from "../data/portfolioData"

const highlights = [
  { label: "Experience", value: "3+ Years" },
  { label: "Projects", value: "10+ Delivered" },
  { label: "Technologies", value: "20+ Mastered" },
  { label: "Clients", value: "5+ Happy" },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[128px]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-emerald-400 font-mono text-sm mb-2 tracking-widest">ABOUT ME</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Turning Ideas Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Reality</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={100}>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">{personalInfo.bio}</p>
              <p className="text-gray-400 leading-relaxed">
                I hold a Bachelor of Technology in Information and Communication Technology
                (Second Class Upper Division) from SIBA Campus and am currently pursuing my
                Master's in Information Technology at Uva Wellassa University, Sri Lanka.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My strengths lie in adaptability, quick learning, and a proactive approach
                to teamwork and challenges. I stay updated with modern tech trends and
                contribute meaningfully to both product and team success.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {highlights.map((h) => (
                  <div key={h.label} className="bg-gray-700/50 rounded-xl px-5 py-4 border border-gray-700 hover:border-emerald-500/30 transition-all text-center">
                    <p className="text-2xl font-bold text-emerald-400">{h.value}</p>
                    <p className="text-gray-400 text-sm">{h.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-gray-700/30 rounded-2xl p-8 border border-gray-700 hover:border-emerald-500/20 transition-all">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Core Strengths
              </h3>
              <div className="space-y-6">
                {[
                  { title: "Full-Stack Development", desc: "End-to-end web application development with modern stacks", icon: "⚡" },
                  { title: "Problem Solving", desc: "Strong analytical skills for tackling complex challenges", icon: "🎯" },
                  { title: "Quick Learner", desc: "Rapidly adapt to new technologies and frameworks", icon: "🚀" },
                  { title: "Team Collaboration", desc: "Proactive communicator with cross-functional experience", icon: "🤝" }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 group">
                    <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-lg group-hover:bg-emerald-500/10 transition-all">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-white font-semibold">{item.title}</h4>
                      </div>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
