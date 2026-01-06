export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-[380px] h-[380px] bg-yellow-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/3 w-[380px] h-[380px] bg-orange-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-white/80">
              I’m a passionate <span className="text-yellow-400 font-semibold">Frontend Developer</span> with a
              strong foundation in Computer Science Engineering and hands-on
              experience building modern, responsive web applications. My
              journey began with a Diploma in Electronics & Telecommunication
              Engineering and evolved into a focused path in frontend and React
              development.
            </p>

            <p className="text-lg leading-relaxed text-white/80">
              I enjoy crafting <span className="text-yellow-400 font-semibold">pixel-perfect, user-friendly interfaces</span>
              with a strong emphasis on clean, maintainable code and performance.
              I actively work with React, REST APIs, and modern frontend tools,
              continuously learning to stay aligned with industry best
              practices.
            </p>

            <p className="text-lg leading-relaxed text-white/80">
              Currently strengthening my <span className="text-yellow-400 font-semibold">full-stack MERN</span> skills
              through real-world projects and hands-on development.
            </p>
          </div>

          {/* Right Cards */}
          <div className="space-y-6">
            {/* What I Do */}
            <div
              className="
                group relative p-6 rounded-2xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                hover:border-yellow-400/50
                transition-all
              "
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />

              <h3 className="font-semibold mb-4 text-yellow-400 text-lg">
                What I Do
              </h3>

              <ul className="space-y-3 text-white/80 leading-relaxed">
                <li>• Build responsive & accessible UIs using React</li>
                <li>• Develop reusable components & scalable layouts</li>
                <li>• Integrate REST APIs using Axios / Fetch</li>
                <li>• Manage state with Hooks & Context API</li>
                <li>• Optimize performance & maintain clean codebases</li>
              </ul>
            </div>

            {/* Current Focus */}
            <div
              className="
                group relative p-6 rounded-2xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                hover:border-yellow-400/50
                transition-all
              "
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />

              <h3 className="font-semibold mb-3 text-yellow-400 text-lg">
                Current Focus
              </h3>

              <p className="text-white/80 leading-relaxed">
                Deepening expertise in MERN stack development, building
                production-ready full-stack applications, and following best
                practices for scalability and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
