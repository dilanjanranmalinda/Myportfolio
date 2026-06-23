import { Mail, MapPin, Github, Linkedin, Send, Phone } from "lucide-react"
import ScrollReveal from "./ScrollReveal"
import { personalInfo } from "../data/portfolioData"

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/3 rounded-full blur-[160px]" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-emerald-400 font-mono text-sm mb-2 tracking-widest">CONTACT</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Connect</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              I'm always open to new opportunities, collaborations, and conversations.
              Feel free to reach out!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-8">
          <ScrollReveal delay={100} className="md:col-span-2">
            <div className="space-y-5">
              <div className="flex items-center gap-4 bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-emerald-500/30 transition-all group">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-all">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-emerald-400 transition-colors text-sm">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-emerald-500/30 transition-all group">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-all">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Phone</p>
                  <p className="text-white text-sm">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-emerald-500/30 transition-all group">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-all">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Location</p>
                  <p className="text-white text-sm">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-emerald-500 border border-gray-700 hover:border-emerald-500 rounded-xl p-4 text-gray-300 hover:text-white transition-all hover:scale-105">
                  <Github size={18} />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-emerald-500 border border-gray-700 hover:border-emerald-500 rounded-xl p-4 text-gray-300 hover:text-white transition-all hover:scale-105">
                  <Linkedin size={18} />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="md:col-span-3">
            <form
              action="https://formspree.io/f/xpqgwkkd"
              method="POST"
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 space-y-5 hover:border-emerald-500/20 transition-all"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-all hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
