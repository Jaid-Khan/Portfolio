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
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl border-b bg-[oklch(0.08_0_0/0.8)] border-[oklch(0.6_0.28_290/0.3)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-[oklch(0.6_0.28_290)] to-[oklch(0.62_0.32_180)] bg-clip-text text-transparent animate-[glow_2s_ease-in-out_infinite]"
          >
            JK
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-[oklch(0.98_0_0/0.7)] hover:text-[oklch(0.62_0.32_180)] transition-colors duration-200 font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[oklch(0.6_0.28_290)] to-[oklch(0.62_0.32_180)] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-[oklch(0.62_0.32_180)] transition-transform ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-[oklch(0.62_0.32_180)] transition-opacity ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-[oklch(0.62_0.32_180)] transition-transform ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-[slideDown_0.2s_ease-out]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-2 rounded-md text-[oklch(0.98_0_0/0.7)] hover:text-[oklch(0.62_0.32_180)] hover:bg-[oklch(0.6_0.28_290/0.1)] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
