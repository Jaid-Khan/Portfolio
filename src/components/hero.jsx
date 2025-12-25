import heroImg from "../assets/hero-image.png";

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse
                        bg-[oklch(0.6_0.28_290/0.2)]"
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse
                        bg-[oklch(0.62_0.32_180/0.2)]"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            items-center
            gap-12
          "
        >
          {/* IMAGE (mobile first) */}
          <div className="flex justify-center md:order-2">
            <div
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96
                            rounded-full overflow-hidden
                            border-4 border-purple-500/40
                            shadow-2xl
                            animate-[float_6s_ease-in-out_infinite]
                            transition-transform hover:scale-105"
            >
              <img
                src={heroImg}
                alt="Jaid Khan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="space-y-6 text-center md:text-left md:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Hi, I'm{" "}
              <span
                className="
    bg-linear-to-r
    from-[oklch(0.6_0.28_290)]
    via-[oklch(0.65_0.3_40)]
    to-[oklch(0.62_0.32_180)]
    bg-clip-text
    text-transparent
  "
              >
                Jaid Khan
              </span>
            </h1>

            <p className="text-xl font-medium text-[oklch(0.62_0.32_180)]">
              Frontend Developer | React & MERN Stack
            </p>

            <p className="text-lg leading-relaxed text-[oklch(0.98_0_0/0.7)] max-w-xl mx-auto md:mx-0">
              Frontend Developer with hands-on experience in building responsive
              and scalable web applications using React. Skilled in
              component-based architecture, state management, API integration,
              and modern UI development. Familiar with full-stack workflows
              using the MERN stack and focused on delivering clean,
              user-friendly interfaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 rounded-lg font-semibold
             bg-linear-to-r from-purple-500 to-pink-500
             text-white transition-all hover:scale-105"
              >
                View My Work
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 rounded-lg font-semibold
                           border-2 border-cyan-400 text-cyan-400
                           hover:bg-cyan-400/10 transition-all hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
