import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navLinks = [
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Certifications", id: "certifications" },
    { label: "Education", id: "education" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            className="text-base sm:text-lg md:text-2xl font-bold
                       bg-gradient-to-r from-yellow-400 to-orange-500
                       bg-clip-text text-transparent"
          >
            JK
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="
                  px-4 py-2 rounded-xl text-sm lg:text-base font-medium
                  text-white/90
                  bg-white/5 backdrop-blur
                  border border-white/10
                 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500
                      hover:text-black hover:scale-105
                      transition-all duration-100
                "
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* HAMBURGER */}
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

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-slate-950/95 backdrop-blur
                    flex flex-col items-center justify-center gap-4
                    transition-transform duration-300 md:hidden
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className="
              px-8 py-3 rounded-xl text-lg font-semibold
              text-white/90
              bg-white/5
              border border-white/10
             hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500
                      hover:text-black hover:scale-105
                      transition-all duration-100
            "
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* SPACER */}
      <div className="h-16" />
    </>
  );
}
