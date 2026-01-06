export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-16 text-yellow-400">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-white/80">
              I’m a passionate Frontend Developer with a strong foundation in
              Computer Science Engineering and hands-on experience building
              modern, responsive web applications. My journey began with a
              Diploma in Electronics & Telecommunication Engineering and has
              evolved into a focused path in frontend and React development.
            </p>

            <p className="text-lg leading-relaxed text-white/80">
              I enjoy crafting pixel-perfect, user-friendly interfaces with a
              strong emphasis on clean, maintainable code and performance. I
              actively work with React, APIs, and modern frontend tools, and I’m
              continuously learning to stay aligned with current web
              technologies and industry best practices.
            </p>

            <p className="text-lg leading-relaxed text-white/80">
              Currently strengthening full-stack MERN skills through hands-on
              projects and continuous learning.
            </p>
          </div>

          {/* Right Cards */}
          <div className="space-y-6">
            {/* What I Do */}
            <div className="p-6 rounded-lg bg-slate-900 border border-yellow-400">
              <h3 className="font-semibold mb-4 text-yellow-400">
                What I Do
              </h3>

              <ul className="space-y-3 text-white/80 leading-relaxed">
                <li>• Build responsive and accessible UI using React</li>
                <li>• Develop reusable components and clean layouts</li>
                <li>• Integrate REST APIs using Axios / Fetch</li>
                <li>• Manage state with hooks and Context API</li>
                <li>• Optimize performance and maintain clean codebases</li>
              </ul>
            </div>

            {/* Current Focus */}
            <div className="p-6 rounded-lg bg-slate-900 border border-yellow-400">
              <h3 className="font-semibold mb-3 text-yellow-400">
                Current Focus
              </h3>

              <p className="text-white/80 leading-relaxed">
                Deepening my expertise in MERN stack development, building
                full-stack applications, and following best practices for
                scalable, production-ready web apps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
