export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Product Page",
      description:
        "Developed a responsive e-commerce web application that allows users to browse products, manage a shopping cart, and interact with a dynamic user interface. The project focuses on clean UI, component-based architecture, and efficient state handling using modern front-end technologies.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "Component Design",
        "Responsive Design",
      ],
      github: "https://github.com/Jaid-Khan/E-Commerce",
      demo: "https://urbaneaseecommerce.netlify.app/",
    },
    {
      title: "Cyber Cafe Website",
      description:
        "Built a fully responsive Cyber Café website featuring a comprehensive suite of digital services such as form filling, document processing, printing, scanning, and quick navigation links, all delivered through a clear and engaging UI. Focused on providing easy access to essential online services with a smooth user experience across all devices.",
      tech: ["HTML", "CSS3", "JavaScript", "Tailwind CSS", "Responsive Design"],
      github: "https://github.com",
      demo: "https://alwaysonlineshop.netlify.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built to showcase my skills, projects, and professional background with a clean and responsive UI.",
      tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/Jaid-Khan/Jaid_Khan_Portfolio_Website",
      demo: "https://jaidkhan.netlify.app/",
    },
    {
      title: "Digital Clock",
      description:
        "A sleek and responsive Digital Clock built using HTML, Tailwind CSS, and JavaScript, designed to display the current time in real-time.",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/Jaid-Khan/Digital-Clock",
      demo: "https://digital-clock-jaid-khan.netlify.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-yellow-400">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group rounded-xl overflow-hidden
                bg-slate-800
                border border-yellow-400/30
                transition-all duration-300
                hover:border-yellow-400
                hover:-translate-y-2
                hover:shadow-xl hover:shadow-black/40
              "
            >
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed text-white/70">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-2 py-1 rounded text-xs font-medium
                        bg-black/40
                        text-yellow-400
                        border border-yellow-400/30
                      "
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
                    className="
                      flex-1 px-3 py-2 rounded-lg text-center text-sm font-semibold
                      bg-black/40
                      text-yellow-400
                      border border-yellow-400/40
                      hover:bg-yellow-400
                      hover:text-slate-900
                      transition-all
                    "
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1 px-3 py-2 rounded-lg text-center text-sm font-semibold
                      bg-yellow-400
                      text-slate-900
                      hover:bg-yellow-300
                      transition-all
                    "
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
  );
}
