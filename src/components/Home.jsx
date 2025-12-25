import Navbar from "./Navbar"
import Hero from "./Hero"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"
import Education from "./Education"

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.08_0_0)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
