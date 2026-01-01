import { FaCertificate } from "react-icons/fa"

export default function Certifications() {
  const certifications = [
    {
      title: "JavaScript Bootcamp",
      provider: "LetsUpgrade",
      description: "Completed an intensive JavaScript Bootcamp covering core and advanced concepts.",
      link: "#",
    },
    {
      title: "Git & GitHub",
      provider: "LetsUpgrade",
      description: "Hands-on certification focused on version control and GitHub workflows.",
      link: "#",
    },
    {
      title: "HTML & CSS Bootcamp",
      provider: "LetsUpgrade",
      description: "Built strong foundations in semantic HTML and modern CSS.",
      link: "#",
    },
    {
      title: "CSS (Basic)",
      provider: "HackerRank",
      description: "Certified in CSS fundamentals and styling best practices.",
      link: "#",
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl font-bold mb-16
                     bg-gradient-to-r
                     from-[oklch(0.62_0.32_180)]
                     to-[oklch(0.6_0.28_290)]
                     bg-clip-text text-transparent"
        >
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl
                         bg-[oklch(0.12_0.02_270)]
                         border border-[oklch(0.6_0.28_290/0.3)]
                         hover:border-[oklch(0.62_0.32_180)]
                         hover:-translate-y-2
                         transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaCertificate className="text-xl text-[oklch(0.62_0.32_180)]" />
                <h3 className="text-lg font-bold text-white">
                  {cert.title}
                </h3>
              </div>

              <p className="text-sm font-medium
                            text-[oklch(0.6_0.28_290)] mb-2">
                {cert.provider}
              </p>

              <p className="text-sm leading-relaxed
                            text-[oklch(0.98_0_0/0.7)] mb-4">
                {cert.description}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold
                           bg-[oklch(0.62_0.32_180/0.2)]
                           text-[oklch(0.62_0.32_180)]
                           border border-[oklch(0.62_0.32_180/0.3)]
                           hover:bg-[oklch(0.62_0.32_180)]
                           hover:text-[oklch(0.08_0_0)]
                           transition-all"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
