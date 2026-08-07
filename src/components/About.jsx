import { UserRound, Code2, Lightbulb } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function About() {
  return (
    <section
      id="about"
      className="section-padding px-6 lg:px-16"
    >
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          Get To Know Me
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          About <span className="gradient-text">Me</span>
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <div className="rounded-3xl border border-white/5 bg-[#11162a] p-8">
          <UserRound className="mb-6 text-purple-400" size={36} />

          {portfolioData.about
            .split("\n\n")
            .map((paragraph, index) => (
              <p
                key={index}
                className="mb-5 leading-8 text-gray-400"
              >
                {paragraph}
              </p>
            ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">

          <div className="rounded-3xl border border-white/5 bg-[#11162a] p-6 transition hover:-translate-y-2 hover:border-purple-500/40">
            <Code2
              className="mb-5 text-pink-400"
              size={32}
            />

            <h3 className="mb-3 text-xl font-semibold">
              Web Development
            </h3>

            <p className="text-sm leading-7 text-gray-400">
              Building responsive and functional web applications using modern technologies.
            </p>
          </div>

          <div className="rounded-3xl border border-white/5 bg-[#11162a] p-6 transition hover:-translate-y-2 hover:border-purple-500/40">
            <Lightbulb
              className="mb-5 text-blue-400"
              size={32}
            />

            <h3 className="mb-3 text-xl font-semibold">
              Problem Solving
            </h3>

            <p className="text-sm leading-7 text-gray-400">
              Enjoy solving real-world problems through logical thinking and technology.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;