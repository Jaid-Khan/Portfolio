export default function Projects() {
  const projects = [
        {
      title: "E-Commerce Product Page",
      description:
        "Developed a responsive e-commerce web application that allows users to browse products, manage a shopping cart, and interact with a dynamic user interface. The project focuses on clean UI, component-based architecture, and efficient state handling using modern front-end technologies.",
      tech: ["HTML", "CSS", "JavaScript","React.js", "Tailwind CSS", "Component Design", "Responsive Design"],
      github: "https://github.com/Jaid-Khan/E-Commerce",
      demo: "https://urbaneaseecommerce.netlify.app/",
    },
    {
      title: "Cyber Cafe Website",
      description:
        "Designed and developed a modern, responsive Cyber Café website that showcases services, important links, and contact options with clear navigation and engaging UI. The site includes responsive layouts and interactive elements optimized for both desktop and mobile users.",
      tech: ["HTML", "CSS3", "JavaScript", "Tailwind CSS", "Responsive Design"],
      github: "https://github.com",
      demo: "https://alwaysonlineshop.netlify.app/",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built to showcase my skills, projects, and professional background with a clean and responsive UI. It highlights my work, experience, and contact information in an organized layout to make a strong first impression on employers.",
      tech: ["HTML", "CSS", "Javascript", "Tailwind CSS",],
      github: "https://github.com/Jaid-Khan/Jaid_Khan_Portfolio_Website",
      demo: "https://jaidkhan.netlify.app/",
    },
    {
      title: "Digital Clock",
      description:
        "A sleek and responsive Digital Clock built using HTML, Tailwind CSS, and JavaScript, designed to display the current time in real-time with smooth animations and modern styling.",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/Jaid-Khan/Digital-Clock",
      demo: "https://digital-clock-jaid-khan.netlify.app/",
    },
    // {
    //   title: "Chat Application UI",
    //   description:
    //     "Interactive chat interface showcasing component composition, state management, and modern UI patterns.",
    //   tech: ["React.js", "CSS Modules", "JavaScript", "UI/UX Design"],
    //   github: "https://github.com",
    //   demo: "#",
    // },
  ]

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden
                 bg-[oklch(0.12_0.02_240/0.3)]"
    >
      {/* glow blob */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full blur-3xl
                        bg-[oklch(0.65_0.3_40/0.1)]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16
                       bg-gradient-to-r
                       from-[oklch(0.62_0.32_180)]
                       to-[oklch(0.6_0.28_290)]
                       bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden
                         bg-[oklch(0.12_0.02_240)]
                         border border-[oklch(0.6_0.28_290/0.3)]
                         transition-all duration-300
                         hover:border-[oklch(0.62_0.32_180)]
                         hover:shadow-2xl hover:shadow-[oklch(0.6_0.28_290/0.2)]
                         hover:-translate-y-2"
            >
              <div className="absolute inset-0 transition-all duration-300
                              bg-gradient-to-br
                              from-[oklch(0.6_0.28_290/0)]
                              to-[oklch(0.62_0.32_180/0)]
                              group-hover:from-[oklch(0.6_0.28_290/0.1)]
                              group-hover:to-[oklch(0.62_0.32_180/0.1)]" />

              <div className="p-6 space-y-4 relative z-10">
                <h3 className="text-white text-xl font-bold transition-colors
                               group-hover:text-[oklch(0.62_0.32_180)]">
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed
                              text-[oklch(0.98_0_0/0.7)]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded text-xs font-medium
                                 bg-[oklch(0.62_0.32_180/0.2)]
                                 text-[oklch(0.62_0.32_180)]
                                 border border-[oklch(0.62_0.32_180/0.3)]
                                 hover:border-[oklch(0.62_0.32_180)]
                                 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 rounded-lg text-center text-sm font-semibold
                               bg-[oklch(0.6_0.28_290/0.2)]
                               text-[oklch(0.6_0.28_290)]
                               border border-[oklch(0.6_0.28_290/0.3)]
                               hover:bg-[oklch(0.6_0.28_290)]
                               hover:text-[oklch(0.98_0_0)]
                               transition-all"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 rounded-lg text-center text-sm font-semibold
                               bg-[oklch(0.62_0.32_180/0.2)]
                               text-[oklch(0.62_0.32_180)]
                               border border-[oklch(0.62_0.32_180/0.3)]
                               hover:bg-[oklch(0.62_0.32_180)]
                               hover:text-[oklch(0.08_0_0)]
                               transition-all"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
