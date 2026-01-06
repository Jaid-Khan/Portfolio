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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-yellow-400">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="
                relative p-8 rounded-2xl
                bg-slate-800
                border border-yellow-400/30
                hover:border-yellow-400
                transition-all
              "
            >
              {/* Icon */}
              <div
                className="
                  absolute -top-6 left-8 w-12 h-12 rounded-full
                  flex items-center justify-center
                  bg-yellow-400
                  text-slate-900 text-xl
                "
              >
                {exp.icon}
              </div>

              <div className="space-y-4 mt-4">
                <h3 className="text-2xl font-bold text-white">
                  {exp.role}
                </h3>

                <p className="text-yellow-400 font-semibold">
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
                  <div className="pt-4">
                    <a
                      href={exp.certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        px-4 py-2 rounded-lg text-sm font-semibold
                        bg-black/40
                        text-yellow-400
                        border border-yellow-400/40
                        hover:bg-yellow-400
                        hover:text-slate-900
                        transition-all
                      "
                    >
                      <FaCertificate />
                      {exp.certificate.label}
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
