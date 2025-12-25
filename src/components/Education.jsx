import btechIcon from "../assets/graduated.png";
import diplomaIcon from "../assets/diploma.png";

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* HERO-STYLE BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse
                     bg-[oklch(0.6_0.28_290/0.15)]"
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse
                     bg-[oklch(0.62_0.32_180/0.15)]"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-16
                       bg-gradient-to-r
                       from-[oklch(0.62_0.32_180)]
                       to-[oklch(0.6_0.28_290)]
                       bg-clip-text text-transparent">
          Education
        </h2>

        <div className="grid gap-10">
          {/* B.Tech Card */}
          <div
            className="group flex flex-col sm:flex-row gap-8 items-start
                       p-8 rounded-2xl
                       bg-[oklch(0.12_0_0/0.6)] backdrop-blur
                       border border-[oklch(0.62_0.32_180/0.25)]
                       shadow-xl
                       transition-all duration-300
                       hover:-translate-y-2
                       hover:shadow-[oklch(0.6_0.28_290/0.35)]"
          >
            {/* Icon */}
            <div className="shrink-0">
              <div
                className="w-24 h-24 flex items-center justify-center
                           rounded-xl
                           bg-[oklch(0.62_0.32_180)]
                           border-2 border-[oklch(0.6_0.28_290)]
                           transition-transform duration-300
                           group-hover:scale-110"
              >
                <img src={btechIcon} alt="B.Tech" className="w-14 h-14" />
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Bachelor of Technology in Computer Science
              </h3>

              <p className="text-[oklch(0.98_0_0/0.75)] mt-2">
                Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal
              </p>

              <p className="text-[oklch(0.98_0_0/0.6)] mt-1">
                Aug 2021 – Jun 2024 · CGPA: 7.61
              </p>
            </div>
          </div>

          {/* Diploma Card */}
          <div
            className="group flex flex-col sm:flex-row gap-8 items-start
                       p-8 rounded-2xl
                       bg-[oklch(0.12_0_0/0.6)] backdrop-blur
                       border border-[oklch(0.62_0.32_180/0.25)]
                       shadow-xl
                       transition-all duration-300
                       hover:-translate-y-2
                       hover:shadow-[oklch(0.62_0.32_180/0.35)]"
          >
            {/* Icon */}
            <div className="shrink-0">
              <div
                className="w-24 h-24 flex items-center justify-center
                           rounded-xl
                           bg-[oklch(0.6_0.28_290)]
                           border-2 border-[oklch(0.62_0.32_180)]
                           transition-transform duration-300
                           group-hover:scale-110"
              >
                <img src={diplomaIcon} alt="Diploma" className="w-14 h-14" />
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Diploma in Electronics & Telecommunication Engineering
              </h3>

              <p className="text-[oklch(0.98_0_0/0.75)] mt-2">
                Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal
              </p>

              <p className="text-[oklch(0.98_0_0/0.6)] mt-1">
                Aug 2018 – Jun 2021 · CGPA: 7.57
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
