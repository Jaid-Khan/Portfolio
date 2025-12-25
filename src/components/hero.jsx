import heroImg from "../assets/hero-image.png"

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse
                        bg-[oklch(0.6_0.28_290/0.2)]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse
                        bg-[oklch(0.62_0.32_180/0.2)]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* 🔁 MOBILE: image first | DESKTOP: text first */}
        <div className="flex flex-col-reverse md:flex-row gap-14 items-center">

          {/* TEXT */}
          <div className="space-y-6 text-center md:text-left
                          animate-[fadeUp_0.8s_ease-out_forwards]">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r
                               from-[oklch(0.6_0.28_290)]
                               via-[oklch(0.65_0.3_40)]
                               to-[oklch(0.62_0.32_180)]
                               bg-clip-text text-transparent
                               drop-shadow-[0_0_12px_oklch(0.6_0.28_290/0.6)]">
                Jaid Khan
              </span>
            </h1>

            <p className="text-xl font-medium text-[oklch(0.62_0.32_180)]">
              Frontend Developer | MERN Stack Learner
            </p>

            <p className="text-lg leading-relaxed text-[oklch(0.98_0_0/0.7)] max-w-xl mx-auto md:mx-0">
              I build modern, responsive, and scalable web applications using React.
              Currently learning full-stack development with the MERN stack.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 rounded-lg font-semibold
                           bg-gradient-to-r from-purple-500 to-pink-500
                           text-white transition-all duration-300
                           hover:scale-105 hover:shadow-lg">
                View My Work
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 rounded-lg font-semibold
                           border-2 border-cyan-400 text-cyan-400
                           transition-all duration-300
                           hover:bg-cyan-400/10 hover:scale-105">
                Get In Touch
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="group flex justify-center
                          animate-[fadeDown_0.8s_ease-out_forwards]">
            <div
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96
                         rounded-full overflow-hidden
                         border-4 border-purple-500/40
                         shadow-2xl
                         transition-all duration-500
                         animate-[float_6s_ease-in-out_infinite]
                         group-hover:scale-105
                         group-hover:shadow-purple-500/40"
            >
              <img
                src={heroImg}
                alt="Jaid Khan"
                className="w-full h-full object-cover
                           transition-transform duration-500
                           group-hover:scale-110"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
