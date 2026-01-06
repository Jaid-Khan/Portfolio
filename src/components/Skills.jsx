import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiAxios,
  SiExpress,
  SiPostman,
  SiNetlify,
  SiCanva,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";
import { BiSolidComponent } from "react-icons/bi";
import { FaServer } from "react-icons/fa";
import { SiAiohttp } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Axios", icon: <SiAxios /> },
        { name: "Responsive Web Design", icon: <CgWebsite /> },
        { name: "Component-Based Architecture", icon: <BiSolidComponent /> },
      ],
    },
    {
      title: "Backend (Learning)",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "REST APIs", icon: <TbApi /> },
        { name: "CORS & Middleware", icon: <SiAiohttp /> },
        { name: "Client–Server Architecture", icon: <FaServer /> },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "VS Code", icon: <VscCode /> },
        { name: "Netlify", icon: <SiNetlify /> },
        { name: "Canva", icon: <SiCanva /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-yellow-400">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
                p-8 rounded-xl
                bg-slate-800
                border border-yellow-400/30
                hover:border-yellow-400
                transition-colors
              "
            >
              <h3 className="text-xl font-bold mb-6 text-white">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="
                      flex items-center gap-2 px-4 py-2 rounded-full
                      text-sm font-medium
                      bg-black/40
                      border border-yellow-400/30
                      text-yellow-400
                      hover:bg-black
                      transition-colors
                    "
                  >
                    <span className="text-lg">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
