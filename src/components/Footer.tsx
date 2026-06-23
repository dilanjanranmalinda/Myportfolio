import { Code2, Heart, ArrowUp } from "lucide-react"
import { personalInfo } from "../data/portfolioData"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Code2 className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold text-white">{personalInfo.name}</span>
          </div>

          <div className="flex items-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-400 transition-colors text-sm">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-400 transition-colors text-sm">LinkedIn</a>
            <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-400 transition-colors text-sm">Resume</a>
          </div>

          <p className="text-gray-500 text-xs flex items-center gap-1">
            Built with <Heart size={12} className="text-red-500 fill-red-500" /> using React & Tailwind
          </p>
        </div>

        <div className="border-t border-gray-800/50 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-500 hover:text-emerald-400 transition-colors text-xs group"
          >
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
