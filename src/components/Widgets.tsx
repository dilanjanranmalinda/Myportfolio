import {
  MousePointerClick,
  MonitorSmartphone,
  Palette,
  MousePointer2,
  Link,
  BarChart3,
  Zap,
  RefreshCw,
  TrendingUp,
  Plug,
  PencilRuler,
  Code2,
  TestTube2,
  Rocket,
  Megaphone,
  Sparkles,
} from "lucide-react"
import ScrollReveal from "./ScrollReveal"

const capabilities = [
  { icon: MousePointerClick, title: "Clickable Ad Widgets", desc: "Interactive and clickable advertising widgets" },
  { icon: MonitorSmartphone, title: "Fully Responsive", desc: "Responsive mobile and desktop experiences" },
  { icon: Palette, title: "Brand-Focused UI", desc: "Brand-focused UI implementation" },
  { icon: MousePointer2, title: "Interactions & Animations", desc: "Interactive buttons, animations, and user interactions" },
  { icon: Link, title: "Click Tracking", desc: "Click-through and campaign tracking integration" },
  { icon: BarChart3, title: "API Data Submission", desc: "API-based data submission and integration" },
  { icon: Zap, title: "Performance Optimized", desc: "Lightweight and performance-optimized widgets" },
  { icon: RefreshCw, title: "Dynamic Content", desc: "Dynamic content and campaign-specific functionality" },
  { icon: TrendingUp, title: "Conversion Focused", desc: "Conversion-focused advertising experiences" },
  { icon: Plug, title: "Platform Integration", desc: "Integration with digital advertising platforms" },
]

const technologies = [
  "React.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "REST APIs",
  "Axios",
  "Responsive Design",
]

const brands = [
  {
    name: "Vim",
    desc: "Interactive advertising widget development focused on engaging users through responsive campaign experiences.",
  },
  {
    name: "Dettol",
    desc: "Interactive digital advertising experience with responsive UI and campaign-focused user interactions.",
  },
  {
    name: "Veet",
    desc: "Responsive and clickable advertising experience designed for seamless interaction across devices.",
  },
  {
    name: "Sunlight",
    desc: "Interactive promotional advertising widget developed for digital campaign engagement.",
  },
  {
    name: "Lucky1",
    desc: "Interactive campaign widget development with dynamic functionality and user interaction.",
  },
  {
    name: "Bid2Win",
    desc: "Interactive promotional advertising widget designed to support campaign engagement and user actions.",
  },
  {
    name: "Sportway",
    desc: "Interactive promotional advertising experience with responsive design and engaging campaign interactions.",
  },
]

const workflow = [
  { icon: PencilRuler, label: "Design" },
  { icon: Code2, label: "Development" },
  { icon: Plug, label: "API Integration" },
  { icon: TestTube2, label: "Testing" },
  { icon: Rocket, label: "Deployment" },
  { icon: Megaphone, label: "Campaign Launch" },
]

export default function Widgets() {
  return (
    <section id="widgets" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-emerald-400 font-mono text-sm mb-2 tracking-widest">AD EXPERIENCES</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Interactive Advertising{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Widgets</span>
            </h2>
            <p className="text-emerald-400/90 font-semibold text-lg mt-3">
              Clickable, Responsive & Conversion-Focused Ad Experiences
            </p>
            <p className="text-gray-400 leading-relaxed mt-6 max-w-3xl mx-auto">
              I specialize in developing interactive advertising widgets for digital advertising campaigns
              and online advertising platforms. I transform creative campaign designs into responsive,
              engaging, and interactive web experiences that encourage user engagement and seamless
              interaction with advertisements.
            </p>
            <p className="text-gray-400 leading-relaxed mt-4 max-w-3xl mx-auto">
              I have experience developing interactive advertising widgets and campaign experiences for
              brands including Vim, Dettol, Veet, Sunlight, Lucky1, Bid2Win, and Sportway, with a strong
              focus on performance, responsiveness, user interaction, API integration, and seamless
              integration with advertising platforms.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <ScrollReveal key={cap.title} delay={idx * 60}>
              <div className="group bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-emerald-500 group-hover:to-blue-500 transition-all duration-500">
                  <cap.icon className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-white font-bold mb-2 group-hover:text-emerald-400 transition-colors">{cap.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={100}>
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-white text-center mb-6">Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm border border-gray-700 hover:border-emerald-500/50 transition-all hover:scale-105 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="text-center mt-20 mb-12">
            <p className="text-emerald-400 font-mono text-sm mb-2 tracking-widest">BRAND & CAMPAIGN EXPERIENCE</p>
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              Selected Brand &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Campaign Work</span>
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand, idx) => (
            <ScrollReveal key={brand.name} delay={idx * 60}>
              <div className="group bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] h-full">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-5 h-5 text-emerald-400 group-hover:scale-125 transition-transform" />
                  <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">{brand.name}</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{brand.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={100}>
          <div className="mt-20">
            <h3 className="text-xl md:text-2xl font-semibold text-white text-center mb-10">Development Approach</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
              {workflow.map((step, idx) => (
                <div key={step.label} className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all">
                      <step.icon className="w-7 h-7 text-emerald-400 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-gray-400 text-sm mt-3 group-hover:text-white transition-colors">{step.label}</span>
                  </div>
                  {idx < workflow.length - 1 && (
                    <span className="text-gray-600 text-xl mx-1 hidden sm:block">→</span>
                  )}
                </div>
              ))}
            </div>
            <p className="text-gray-400 leading-relaxed text-center mt-12 max-w-3xl mx-auto">
              I focus on transforming creative campaign concepts into high-quality interactive digital
              advertising experiences that are responsive, reliable, lightweight, and optimized for user
              engagement.
            </p>
            <p className="text-gray-400 leading-relaxed text-center mt-4 max-w-3xl mx-auto">
              My goal is to bridge the gap between creative advertising concepts and functional digital
              experiences, ensuring that every widget delivers a smooth user experience while meeting
              campaign and technical requirements.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
