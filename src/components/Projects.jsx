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
        "Built a fully responsive Cyber Café website featuring digital services like form filling, document processing, printing, scanning, and quick navigation links with a smooth UI experience.",
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
        "A sleek and responsive Digital Clock built using HTML, Tailwind CSS, and JavaScript to display real-time updates.",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/Jaid-Khan/Digital-Clock",
      demo: "https://digital-clock-jaid-khan.netlify.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-yellow-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                relative group rounded-2xl p-8
                bg-white/5 backdrop-blur-xl
                border border-white/10
                shadow-[0_20px_40px_rgba(0,0,0,0.45)]
                hover:-translate-y-2 hover:shadow-yellow-400/20
                transition-all duration-300
              "
            >
              {/* Card Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />

              <div className="relative space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition">
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed text-white/70">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3 py-1 rounded-full text-xs font-medium
                        bg-white/10 backdrop-blur
                        border border-white/20
                        text-yellow-400
                        shadow-md
                        hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500
                        hover:text-black hover:scale-105
                        transition-all
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group relative flex-1 py-2 rounded-full text-center text-sm font-semibold
                      bg-white/10 backdrop-blur
                      border border-white/20
                      text-yellow-400
                      shadow-md
                      hover:-translate-y-0.5
                      transition-all
                    "
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition" />
                    <span className="relative group-hover:text-black transition">
                      GitHub
                    </span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group relative flex-1 py-2 rounded-full text-center text-sm font-semibold
                      bg-gradient-to-r from-yellow-400 to-orange-500
                      text-black
                      shadow-md
                      hover:shadow-yellow-400/40 hover:-translate-y-0.5
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
