import heroImg from "../assets/hero-image.png";

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-20 pb-32 bg-slate-900 overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl bg-yellow-400/10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-yellow-400/10" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* IMAGE */}
          <div className="flex justify-center md:order-2">
            <div
              className="
                relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96
                rounded-full overflow-hidden
                border-4 border-yellow-400
                shadow-2xl
                transition-transform hover:scale-105
              "
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
              Hi, I’m{" "}
              <span className="text-yellow-400">
                Jaid Khan
              </span>
            </h1>

            <p className="text-xl font-medium text-white">
              Frontend Developer (React) | MERN Stack Enthusiast
            </p>

            <p className="text-lg leading-relaxed text-white/80 max-w-xl mx-auto md:mx-0">
              Frontend Developer with hands-on experience building responsive
              and scalable web applications using React for real-world use
              cases. Strong in component-based architecture, state management,
              and REST API integration. Experienced with modern UI development
              and familiar with full-stack workflows using the MERN stack.
              Focused on writing clean, maintainable, and user-friendly code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection("projects")}
                className="
                  px-8 py-3 rounded-lg font-semibold
                  bg-yellow-400 text-black
                  hover:bg-black hover:text-yellow-400
                  transition-all
                "
              >
                View My Work
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="
                  px-8 py-3 rounded-lg font-semibold
                  border-2 border-yellow-400 text-yellow-400
                  hover:bg-black transition-all
                "
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
