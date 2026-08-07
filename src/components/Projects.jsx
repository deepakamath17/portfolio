import {
  GitBranch,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import { portfolioData } from "../data/portfolioData";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section
      id="projects"
      className="section-padding px-6 lg:px-16"
    >
      {/* Section heading */}
      <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            My Work
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Featured{" "}
            <span className="gradient-text">
              Projects
            </span>
          </h2>
        </div>

        <a
          href="https://github.com/deepakamath17"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
        >
          View GitHub
          <ArrowUpRight size={16} />
        </a>
      </div>

      {/* Project cards */}
      <div className="grid gap-8 lg:grid-cols-2">
        {portfolioData.projects.map((project) => (
          <article
            key={project.id || project.title}
            className="group overflow-hidden rounded-3xl border border-white/5 bg-[#11162a] transition duration-500 hover:-translate-y-2 hover:border-purple-500/50"
          >
            {/* Project image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} project screenshot`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#11162a] via-transparent to-transparent" />

              {/* Category */}
              <div className="absolute bottom-4 left-5">
                <span className="rounded-full bg-black/60 px-4 py-2 text-xs text-purple-300 backdrop-blur-md">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Card content */}
            <div className="p-7">
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap gap-3">
                {/* Button 1: GitHub Source Code */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold transition hover:border-purple-500 hover:bg-purple-500/10"
                >
                  <GitBranch size={18} />
                  GitHub
                </a>

                {/* Button 2: Dynamic Link to Details Page */}
                <Link
                  to={`/project/${project.id}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-3 text-sm font-semibold transition hover:scale-105"
                >
                  <ExternalLink size={18} />
                  View Details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;