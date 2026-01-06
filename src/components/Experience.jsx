import { FaNetworkWired, FaCertificate } from "react-icons/fa";
import experienceCertificate from "../assets/experience-certificate.jpg";

export default function Experience() {
  const experiences = [
    {
      role: "Network Technician Apprentice",
      company: "Bharat Sanchar Nigam Limited (BSNL), Bhopal",
      duration: "Jan 2022 – Jan 2023 · Apprenticeship (Govt. of India)",
      icon: <FaNetworkWired />,
      description:
        "Completed a one-year National Apprenticeship Training Scheme (NATS) program under the Ministry of Education, Government of India, gaining hands-on experience in telecommunication systems and network infrastructure within a large-scale public-sector organization.",
      responsibilities: [
        "Configured, monitored, and maintained routers, switches, and networking equipment",
        "Assisted senior engineers in troubleshooting network and connectivity issues",
        "Supported installation, testing, and monitoring of telecom systems",
        "Maintained technical documentation, workflow records, and operational reports",
        "Demonstrated strong communication, analytical, and technical skills as per formal skill assessment",
      ],
      performance: "Performance Rating: Good (as per official skill assessment)",
      certificate: {
        label: "View Experience Certificate",
        link: experienceCertificate,
      },
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-yellow-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-orange-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="space-y-14">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="
                relative p-10 rounded-2xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                shadow-[0_20px_40px_rgba(0,0,0,0.45)]
                hover:-translate-y-2 hover:shadow-yellow-400/20
                transition-all duration-300
              "
            >
              {/* Card Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-yellow-400/10 to-orange-500/10 opacity-0 hover:opacity-100 transition pointer-events-none" />

              {/* Icon Badge */}
              <div
                className="
                  absolute -top-7 left-10
                  w-14 h-14 rounded-full
                  flex items-center justify-center
                  bg-gradient-to-tr from-yellow-400 to-orange-500
                  text-slate-900 text-2xl
                  shadow-lg
                "
              >
                {exp.icon}
              </div>

              <div className="relative space-y-4 mt-6">
                <h3 className="text-2xl font-bold text-white">
                  {exp.role}
                </h3>

                <p className="font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  {exp.company}
                </p>

                <p className="text-sm text-white/60 font-medium">
                  {exp.duration}
                </p>

                <p className="text-white/70 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="list-disc pl-5 space-y-2 text-white/75">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <p className="text-sm font-medium text-yellow-400">
                  {exp.performance}
                </p>

                {/* Certificate Button */}
                {exp.certificate && (
                  <div className="pt-6">
                    <a
                      href={exp.certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group relative inline-flex items-center gap-2
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
                      <span className="relative flex items-center gap-2 group-hover:text-black transition">
                        <FaCertificate />
                        {exp.certificate.label}
                      </span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
