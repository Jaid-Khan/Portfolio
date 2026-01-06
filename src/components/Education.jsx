import btechIcon from "../assets/graduated.png";
import diplomaIcon from "../assets/diploma.png";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-16 text-yellow-400">
          Education
        </h2>

        <div className="grid gap-10">
          {/* B.Tech Card */}
          <div
            className="
              group flex flex-col sm:flex-row gap-8 items-start
              p-8 rounded-2xl
              bg-slate-800
              border border-yellow-400/30
              shadow-lg
              transition-all duration-300
              hover:-translate-y-2
              hover:border-yellow-400
            "
          >
            {/* Icon */}
            <div className="shrink-0">
              <div
                className="
                  w-24 h-24 flex items-center justify-center
                  rounded-xl
                  bg-yellow-400
                  transition-transform duration-300
                  group-hover:scale-110
                "
              >
                <img src={btechIcon} alt="B.Tech" className="w-14 h-14" />
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Bachelor of Technology in Computer Science
              </h3>

              <p className="text-white/75 mt-2">
                Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal
              </p>

              <p className="text-white/60 mt-1">
                Aug 2021 – Jun 2024 · CGPA: 7.61
              </p>
            </div>
          </div>

          {/* Diploma Card */}
          <div
            className="
              group flex flex-col sm:flex-row gap-8 items-start
              p-8 rounded-2xl
              bg-slate-800
              border border-yellow-400/30
              shadow-lg
              transition-all duration-300
              hover:-translate-y-2
              hover:border-yellow-400
            "
          >
            {/* Icon */}
            <div className="shrink-0">
              <div
                className="
                  w-24 h-24 flex items-center justify-center
                  rounded-xl
                  bg-yellow-400
                  transition-transform duration-300
                  group-hover:scale-110
                "
              >
                <img src={diplomaIcon} alt="Diploma" className="w-14 h-14" />
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Diploma in Electronics & Telecommunication Engineering
              </h3>

              <p className="text-white/75 mt-2">
                Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal
              </p>

              <p className="text-white/60 mt-1">
                Aug 2018 – Jun 2021 · CGPA: 7.57
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
