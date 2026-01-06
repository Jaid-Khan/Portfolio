import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const navLinks = [
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Certifications", id: "certifications" },
    { label: "Education", id: "education" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900 border-b border-yellow-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* Logo (smaller on mobile) */}
          <Link
            to="/"
            className="font-bold text-white hover:text-yellow-400 transition
                       text-base sm:text-lg md:text-2xl"
          >
            JK
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative group font-medium transition hover:text-yellow-400
                           text-sm md:text-base lg:text-lg text-white"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-yellow-400 transition-transform duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-yellow-400 transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-yellow-400 transition-transform duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE FULL SCREEN MENU */}
      <div
        className={`mt-16 fixed inset-0 z-40 bg-slate-900 text-white
                    flex flex-col items-center justify-center
                    gap-3 sm:gap-5
                    transform transition-transform duration-300
                    md:hidden ${
                      isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className="font-medium px-4 py-2 transition
                       text-base sm:text-lg md:text-2xl
                       border-b border-transparent
                       hover:border-yellow-400 hover:text-yellow-400"
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Spacer */}
      <div className="h-16" />
    </>
  )
}
