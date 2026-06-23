import { useState, useEffect } from "react"
import { Menu, X, Code2, FileText } from "lucide-react"
import { personalInfo } from "../data/portfolioData"

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-gray-900/90 backdrop-blur-xl shadow-lg shadow-black/10" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={() => scrollTo("#hero")} className="flex items-center gap-2 text-white font-bold text-xl group">
            <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-all">
              <Code2 className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="group-hover:text-emerald-400 transition-colors">Dilanjan</span>
            <span className="text-emerald-400 font-mono text-xs ml-0.5">.dev</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-gray-300 hover:text-emerald-400 transition-colors px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-800/50"
              >
                {link.label}
              </button>
            ))}
            <a
              href={personalInfo.resumeUrl}
              className="ml-3 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-emerald-500/25"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={14} />
              Resume
            </a>
          </div>

          <button className="md:hidden text-white p-2 hover:bg-gray-800/50 rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-xl border-t border-gray-800">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 px-4 py-3 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href={personalInfo.resumeUrl}
              className="flex items-center justify-center gap-2 mt-3 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-full text-sm font-semibold transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={14} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
