import Navbar from "./Navbar"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"
import Education from "./Education"
import Experience from "./Experience"
import Certifications from "./Certifications"
import Hero from "./hero"

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.08_0_0)]">
      <Navbar />
      <main>
        <Hero/>
        <Skills />
        <Projects />
        <Experience />
        <Certifications/>
        <Education />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
