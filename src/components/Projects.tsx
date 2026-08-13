import { useState } from "react"
import { ExternalLink, Github, Globe, Smartphone, Puzzle, Layers } from "lucide-react"
import ScrollReveal from "./ScrollReveal"
import { projects, type Project } from "../data/portfolioData"

const categories = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "Widgets", value: "widget" }
] as const

type Category = typeof categories[number]["value"]

const categoryIcons: Record<string, typeof Globe> = {
  fullstack: Layers,
  web: Globe,
  mobile: Smartphone,
  widget: Puzzle,
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")

  const filtered = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[128px]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-emerald-400 font-mono text-sm mb-2 tracking-widest">PROJECTS</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              What I've{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Built</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex justify-center gap-3 mb-14 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.value
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 scale-105"
                    : "bg-gray-800 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 80}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const CategoryIcon = categoryIcons[project.category] || Globe

  return (
    <div className="group bg-gray-800/50 rounded-xl border border-gray-700 hover:border-emerald-500/40 transition-all duration-500 overflow-hidden hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] hover:-translate-y-1">
      <div className="h-44 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative overflow-hidden">
        {project.preview ? (
          <img src={project.preview} alt={project.title} loading="lazy" decoding="async" className="w-20 h-20 object-contain opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
        ) : (
          <CategoryIcon className="w-12 h-12 text-gray-600 group-hover:text-emerald-400 transition-colors" />
        )}

        <div className="absolute top-3 left-3 flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 gap-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-900/90 rounded-lg text-gray-300 hover:text-emerald-400 hover:bg-gray-900 transition-all hover:scale-110">
              <Github size={16} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-900/90 rounded-lg text-gray-300 hover:text-emerald-400 hover:bg-gray-900 transition-all hover:scale-110">
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">{project.title}</h3>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              <ExternalLink size={14} />
            </a>
          )}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 bg-gray-700/80 text-gray-400 rounded-md text-xs border border-gray-600/50">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
