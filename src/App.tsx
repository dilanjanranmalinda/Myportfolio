import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Widgets from "./components/Widgets"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import MouseTrail from "./components/MouseTrail"

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <MouseTrail />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Widgets />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
