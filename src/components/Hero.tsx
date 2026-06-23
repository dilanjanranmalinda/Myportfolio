import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import { personalInfo } from "../data/portfolioData"

const roles = ["Full-Stack Engineer", "React Developer", "UI/UX Enthusiast", "Problem Solver"]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 100)
    } else if (!deleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 1500)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 50)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setRoleIndex((r) => (r + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30
    const glare = document.getElementById("hero-glare")
    if (glare) {
      glare.style.transform = `translate(${x}px, ${y}px)`
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: "4s" }} />
      </div>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 inline-block group" id="hero-glare" style={{ transition: "transform 0.2s ease-out" }}>
          <div className="relative">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.3)] mx-auto group-hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] transition-all duration-500">
              <img src={personalInfo.avatar} alt={personalInfo.name} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-gray-900">
              <span className="w-3 h-3 bg-white rounded-full animate-ping absolute" />
              <span className="w-3 h-3 bg-white rounded-full relative" />
            </div>
          </div>
        </div>

        <p className="text-emerald-400 font-mono text-sm md:text-base mb-4 tracking-[0.3em]">
          HELLO, I'M
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          {personalInfo.name}
        </h1>
        <div className="h-10 md:h-12 mb-6">
          <p className="text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 font-semibold">
            {roles[roleIndex].substring(0, charIndex)}
            <span className="animate-pulse text-emerald-400">|</span>
          </p>
        </div>
        <p className="text-gray-400 max-w-xl mx-auto mb-8 text-lg">
          Building modern, scalable web applications with cutting-edge technologies.
          Passionate about crafting exceptional digital experiences.
        </p>

        <div className="flex items-center justify-center gap-4 mb-10">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3.5 bg-gray-800 hover:bg-emerald-500 rounded-full transition-all text-gray-300 hover:text-white hover:scale-110 shadow-lg border border-gray-700 hover:border-emerald-400">
            <Github size={20} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3.5 bg-gray-800 hover:bg-emerald-500 rounded-full transition-all text-gray-300 hover:text-white hover:scale-110 shadow-lg border border-gray-700 hover:border-emerald-400">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="p-3.5 bg-gray-800 hover:bg-emerald-500 rounded-full transition-all text-gray-300 hover:text-white hover:scale-110 shadow-lg border border-gray-700 hover:border-emerald-400">
            <Mail size={20} />
          </a>
          <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-full transition-all text-white font-semibold hover:scale-105 shadow-lg">
            <Download size={18} />
            Resume
          </a>
        </div>

        <button
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          className="animate-bounce mt-4"
        >
          <ArrowDown className="text-gray-400 w-6 h-6 mx-auto" />
        </button>
      </div>
    </section>
  )
}
