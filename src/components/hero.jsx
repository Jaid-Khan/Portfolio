export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* background glow blobs */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse
                     bg-[oklch(0.6_0.28_290/0.2)]"
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse
                     bg-[oklch(0.62_0.32_180/0.2)]"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 animate-[fade-in_0.8s_ease-out_forwards]">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white text-balance mb-4">
              Hi, I'm{" "}
              <span
                className="bg-gradient-to-r
                           from-[oklch(0.6_0.28_290)]
                           via-[oklch(0.65_0.3_40)]
                           to-[oklch(0.62_0.32_180)]
                           bg-clip-text text-transparent
                           drop-shadow-[0_0_12px_oklch(0.6_0.28_290/0.6)]"
              >
                Jaid Khan
              </span>
            </h1>

            <p className="text-xl font-medium mb-2 text-[oklch(0.62_0.32_180)]">
              Frontend Developer | MERN Stack Learner
            </p>
          </div>

          <p className="text-lg max-w-2xl leading-relaxed text-[oklch(0.98_0_0/0.7)]">
            I build modern, responsive, and scalable web applications using React and modern frontend tools. Currently
            learning full-stack development with the MERN stack.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 rounded-lg font-semibold
                         bg-gradient-to-r
                         from-[oklch(0.6_0.28_290)]
                         to-[oklch(0.65_0.3_40)]
                         text-[oklch(0.98_0_0)]
                         hover:shadow-lg
                         hover:shadow-[oklch(0.6_0.28_290/0.5)]
                         transition-all duration-200
                         transform hover:scale-105"
            >
              View My Work
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 rounded-lg font-semibold
                         border-2 border-[oklch(0.62_0.32_180)]
                         text-[oklch(0.62_0.32_180)]
                         hover:bg-[oklch(0.62_0.32_180/0.1)]
                         hover:shadow-lg
                         hover:shadow-[oklch(0.62_0.32_180/0.3)]
                         transition-all duration-200
                         transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
