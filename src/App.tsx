import { lazy, Suspense } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

const MouseTrail = lazy(() => import("./components/MouseTrail"))
const About = lazy(() => import("./components/About"))
const Experience = lazy(() => import("./components/Experience"))
const Skills = lazy(() => import("./components/Skills"))
const Projects = lazy(() => import("./components/Projects"))
const Widgets = lazy(() => import("./components/Widgets"))
const Education = lazy(() => import("./components/Education"))
const Contact = lazy(() => import("./components/Contact"))
const Footer = lazy(() => import("./components/Footer"))

function SectionFallback() {
  return (
    <div className="py-24 flex items-center justify-center" aria-hidden>
      <div className="w-8 h-8 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
    </div>
  )
}

const withSuspense = (Component: React.LazyExoticComponent<React.ComponentType>) => (
  <Suspense fallback={<SectionFallback />}>
    <Component />
  </Suspense>
)

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Suspense fallback={null}>
        <MouseTrail />
      </Suspense>
      <Navbar />
      <Hero />
      {withSuspense(About)}
      {withSuspense(Experience)}
      {withSuspense(Skills)}
      {withSuspense(Projects)}
      {withSuspense(Widgets)}
      {withSuspense(Education)}
      {withSuspense(Contact)}
      {withSuspense(Footer)}
    </div>
  )
}

export default App
