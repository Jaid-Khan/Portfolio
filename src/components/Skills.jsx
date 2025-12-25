export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
        "Component Architecture",
      ],
    },
    {
      title: "Backend (Learning)",
      skills: ["Node.js", "Express.js", "REST APIs", "CORS & Middleware", "Axios", "Fetch API"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Netlify", "Vercel"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16
                       bg-gradient-to-r
                       from-[oklch(0.62_0.32_180)]
                       to-[oklch(0.6_0.28_290)]
                       bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-8 rounded-xl
                         bg-[oklch(0.12_0.02_270)]
                         border border-[oklch(0.2_0.05_270/0.5)]
                         hover:border-[oklch(0.62_0.32_180/0.3)]
                         transition-colors duration-200"
            >
              <h3 className="text-xl font-bold mb-6 text-[oklch(0.62_0.32_180)]">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium
                               bg-[oklch(0.6_0.28_290/0.1)]
                               border border-[oklch(0.6_0.28_290/0.2)]
                               text-[oklch(0.6_0.28_290)]
                               hover:bg-[oklch(0.6_0.28_290/0.2)]
                               transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
