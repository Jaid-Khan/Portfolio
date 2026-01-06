import btechIcon from "../assets/graduated.png";
import diplomaIcon from "../assets/diploma.png";

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-[380px] h-[380px] bg-yellow-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[380px] h-[380px] bg-orange-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="grid gap-10">
          {/* B.Tech */}
          <div
            className="
              relative group flex flex-col sm:flex-row gap-8 items-start
              p-8 rounded-2xl
              bg-white/5 backdrop-blur-xl
              border border-white/10
              shadow-[0_20px_40px_rgba(0,0,0,0.45)]
              hover:-translate-y-2 hover:shadow-yellow-400/20
              transition-all duration-300
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />

            {/* Icon */}
            <div className="shrink-0">
              <div
                className="
                  w-24 h-24 flex items-center justify-center
                  rounded-2xl
                  bg-gradient-to-tr from-yellow-400 to-orange-500
                  shadow-lg
                  group-hover:scale-110 transition-transform
                "
              >
                <img src={btechIcon} alt="B.Tech" className="w-14 h-14" />
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Bachelor of Technology in Computer Science
              </h3>

              <p className="text-white/70">
                Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal
              </p>

              <p className="text-sm text-white/50 mt-1">
                Aug 2021 – Jun 2024 · CGPA: <span className="text-yellow-400 font-semibold">7.61</span>
              </p>
            </div>
          </div>

          {/* Diploma */}
          <div
            className="
              relative group flex flex-col sm:flex-row gap-8 items-start
              p-8 rounded-2xl
              bg-white/5 backdrop-blur-xl
              border border-white/10
              shadow-[0_20px_40px_rgba(0,0,0,0.45)]
              hover:-translate-y-2 hover:shadow-yellow-400/20
              transition-all duration-300
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />

            {/* Icon */}
            <div className="shrink-0">
              <div
                className="
                  w-24 h-24 flex items-center justify-center
                  rounded-2xl
                  bg-gradient-to-tr from-yellow-400 to-orange-500
                  shadow-lg
                  group-hover:scale-110 transition-transform
                "
              >
                <img src={diplomaIcon} alt="Diploma" className="w-14 h-14" />
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Diploma in Electronics & Telecommunication Engineering
              </h3>

              <p className="text-white/70">
                Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal
              </p>

              <p className="text-sm text-white/50 mt-1">
                Aug 2018 – Jun 2021 · CGPA: <span className="text-yellow-400 font-semibold">7.57</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
