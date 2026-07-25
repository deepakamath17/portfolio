import { GraduationCap } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function Education() {
  return (
    <section
      id="education"
      className="section-padding px-6 lg:px-16"
    >
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          My Journey
        </p>

        <h2 className="mt-3 text-4xl font-bold gradient-text">
          Education
        </h2>
      </div>

      <div className="relative ml-3 border-l border-purple-500/30">

        {portfolioData.education.map((item, index) => (
          <div
            key={index}
            className="relative mb-10 pl-10"
          >

            <div className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 ring-8 ring-[#080b1a]">
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#11162a] p-7 transition hover:border-purple-500/40">

              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-bold">
                  {item.degree}
                </h3>

                <span className="rounded-full bg-purple-500/10 px-4 py-1 text-sm text-purple-300">
                  {item.duration}
                </span>
              </div>

              <div className="mb-4 flex items-center gap-2 text-pink-400">
                <GraduationCap size={18} />
                {item.institution}
              </div>

              <p className="leading-7 text-gray-400">
                {item.description}
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;