export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8
                 bg-[oklch(0.2_0.01_0/0.3)]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-[oklch(0.98_0_0)]">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left content */}
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-[oklch(0.98_0_0/0.7)]">
              I'm a passionate frontend developer with a strong foundation in Computer Science Engineering concepts. My
              journey started with a Diploma in Electronics & Telecommunication Engineering, and I've been steadily
              building expertise in modern web development.
            </p>

            <p className="text-lg leading-relaxed text-[oklch(0.98_0_0/0.7)]">
              I'm particularly interested in crafting pixel-perfect, responsive interfaces that provide exceptional user
              experiences. I believe in writing clean, maintainable code and staying updated with the latest web
              technologies.
            </p>
          </div>

          {/* Right cards */}
          <div className="space-y-4">
            <div
              className="p-6 rounded-lg
                         bg-[oklch(0.08_0_0)]
                         border border-[oklch(0.2_0.05_270/0.5)]"
            >
              <h3 className="font-semibold mb-3 text-[oklch(0.62_0.32_180)]">
                Education
              </h3>

              <ul className="space-y-2 text-[oklch(0.98_0_0/0.7)]">
                <li>• Diploma in Electronics & Telecommunication Engineering</li>
                <li>• Computer Science Engineering Foundation</li>
                <li>• Networking Fundamentals</li>
              </ul>
            </div>

            <div
              className="p-6 rounded-lg
                         bg-[oklch(0.08_0_0)]
                         border border-[oklch(0.2_0.05_270/0.5)]"
            >
              <h3 className="font-semibold mb-3 text-[oklch(0.62_0.32_180)]">
                Current Focus
              </h3>

              <p className="text-[oklch(0.98_0_0/0.7)]">
                Mastering MERN stack development and building full-stack applications with modern tools and best
                practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
