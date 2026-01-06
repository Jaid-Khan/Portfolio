import heroImg from "../assets/hero-image.png";

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* IMAGE – FIRST ON MOBILE */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 blur-xl opacity-40 group-hover:opacity-70 transition" />

              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl group-hover:scale-105 transition">
                <img
                  src={heroImg}
                  alt="Jaid Khan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* TEXT – SECOND ON MOBILE */}
          <div className="space-y-6 text-center md:text-left order-2 md:order-1">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-yellow-400 text-sm font-medium backdrop-blur">
              👋 Welcome to my portfolio
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Jaid Khan
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-white/90">
              Frontend Developer (React) · MERN Stack Enthusiast
            </p>

            <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto md:mx-0">
              I build modern, responsive, and scalable web applications using
              React and the MERN stack. Passionate about clean UI, component-driven
              architecture, REST API integration, and writing maintainable,
              user-friendly code.
            </p>

           <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start">
  <button
    onClick={() => scrollToSection("projects")}
    className="
      group relative px-8 py-3 rounded-full font-semibold
      bg-white/10 backdrop-blur
      border border-white/20
      text-yellow-400
      shadow-md
      hover:shadow-yellow-400/30 hover:-translate-y-1
      transition-all
    "
  >
    <span className="
      absolute inset-0 rounded-full
      bg-gradient-to-r from-yellow-400 to-orange-500
      opacity-0 group-hover:opacity-100 transition
    " />
    <span className="relative group-hover:text-black transition">
      View Projects
    </span>
  </button>

  <button
    onClick={() => scrollToSection("contact")}
    className="
      group relative px-8 py-3 rounded-full font-semibold
      bg-white/10 backdrop-blur
      border border-white/20
      text-white
      shadow-md
      hover:shadow-orange-500/30 hover:-translate-y-1
      transition-all
    "
  >
    <span className="
      absolute inset-0 rounded-full
      bg-gradient-to-r from-yellow-400 to-orange-500
      opacity-0 group-hover:opacity-100 transition
    " />
    <span className="relative group-hover:text-black transition">
      Contact Me
    </span>
  </button>
</div>

          </div>

        </div>
      </div>
    </section>
  );
}
