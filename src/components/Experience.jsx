import { FaNetworkWired, FaCertificate } from "react-icons/fa"
import experienceCertificate from "../assets/experience-certificate.jpg"

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
    // 👉 Add more experiences here
  ]

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8
                 bg-[oklch(0.12_0.02_270/0.3)]"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-4xl font-bold mb-16
                     bg-gradient-to-r
                     from-[oklch(0.62_0.32_180)]
                     to-[oklch(0.6_0.28_290)]
                     bg-clip-text text-transparent"
        >
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl
                         bg-[oklch(0.12_0.02_270)]
                         border border-[oklch(0.6_0.28_290/0.3)]
                         hover:border-[oklch(0.62_0.32_180)]
                         transition-all"
            >
              {/* Icon */}
              <div
                className="absolute -top-6 left-8 w-12 h-12 rounded-full
                           flex items-center justify-center
                           bg-[oklch(0.6_0.28_290)]
                           text-white text-xl"
              >
                {exp.icon}
              </div>

              <div className="space-y-4 mt-4">
                <h3 className="text-2xl font-bold text-white">
                  {exp.role}
                </h3>

                <p className="text-[oklch(0.62_0.32_180)] font-semibold">
                  {exp.company}
                </p>

                <p className="text-sm text-[oklch(0.6_0.28_290)] font-medium">
                  {/* {exp.duration} */}
                </p>

                <p className="text-[oklch(0.98_0_0/0.7)] leading-relaxed">
                  {exp.description}
                </p>

                <ul
                  className="list-disc pl-5 space-y-2
                             text-[oklch(0.98_0_0/0.75)]"
                >
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <p className="text-sm font-medium text-[oklch(0.62_0.32_180)]">
                  {exp.performance}
                </p>

                {/* Certificate Button */}
                {exp.certificate && (
                  <div className="pt-4">
                    <a
                      href={exp.certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2
                                 px-4 py-2 rounded-lg text-sm font-semibold
                                 bg-[oklch(0.62_0.32_180/0.2)]
                                 text-[oklch(0.62_0.32_180)]
                                 border border-[oklch(0.62_0.32_180/0.3)]
                                 hover:bg-[oklch(0.62_0.32_180)]
                                 hover:text-[oklch(0.08_0_0)]
                                 transition-all"
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
  )
}
