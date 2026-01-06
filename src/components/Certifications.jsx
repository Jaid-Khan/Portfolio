import { FaCertificate } from "react-icons/fa";

export default function Certifications() {
  const certifications = [
    {
      title: "JavaScript Bootcamp",
      provider: "LetsUpgrade",
      description:
        "Completed an intensive JavaScript Bootcamp covering core and advanced concepts.",
      link: "#",
    },
    {
      title: "Git & GitHub",
      provider: "LetsUpgrade",
      description:
        "Hands-on certification focused on version control and GitHub workflows.",
      link: "#",
    },
    {
      title: "HTML & CSS Bootcamp",
      provider: "LetsUpgrade",
      description:
        "Built strong foundations in semantic HTML and modern CSS.",
      link: "#",
    },
    {
      title: "CSS (Basic)",
      provider: "HackerRank",
      description:
        "Certified in CSS fundamentals and modern styling best practices.",
      link: "#",
    },
  ];

  return (
    <section
      id="certifications"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-[380px] h-[380px] bg-yellow-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[380px] h-[380px] bg-orange-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="
                relative group p-8 rounded-2xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                shadow-[0_20px_40px_rgba(0,0,0,0.45)]
                hover:-translate-y-2 hover:shadow-yellow-400/20
                transition-all duration-300
              "
            >
              {/* Card Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />

              {/* Icon */}
              <div
                className="
                  w-12 h-12 rounded-full mb-5
                  flex items-center justify-center
                  bg-gradient-to-tr from-yellow-400 to-orange-500
                  text-slate-900 text-xl
                  shadow-lg
                "
              >
                <FaCertificate />
              </div>

              <h3 className="text-lg font-bold text-white mb-1 relative">
                {cert.title}
              </h3>

              <p className="text-sm font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-3">
                {cert.provider}
              </p>

              <p className="text-sm leading-relaxed text-white/70 mb-6">
                {cert.description}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group relative inline-flex items-center justify-center
                  px-6 py-2.5 rounded-full text-sm font-semibold
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
                  View Certificate
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
