import {
  ArrowLeft,
  GitBranch,
} from "lucide-react";

import {
  Link,
  useParams,
} from "react-router-dom";

import { portfolioData } from "../data/portfolioData";

function ProjectDetails() {
  const { projectId } = useParams();

  const project = portfolioData.projects.find(
    (item) => item.id === projectId
  );

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080b1a] text-white">
        <div className="text-center">

          <h1 className="text-4xl font-bold">
            Project Not Found
          </h1>

          <Link
            to="/"
            className="mt-6 inline-block rounded-xl bg-purple-600 px-6 py-3"
          >
            Go Back Home
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080b1a] px-6 py-20 text-white lg:px-20">

      <div className="mx-auto max-w-6xl">

        {/* Back to portfolio */}

        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-gray-400 hover:text-white"
        >
          <ArrowLeft size={18} />

          Back to Portfolio
        </Link>

        {/* Project information */}

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-purple-400">
          {project.category}
        </p>

        <h1 className="text-5xl font-bold sm:text-7xl">
          {project.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="mt-7 flex flex-wrap gap-3">

          {project.technologies.map((technology) => (

            <span
              key={technology}
              className="rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-300"
            >
              {technology}
            </span>

          ))}

        </div>

        {/* GitHub */}

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 font-semibold"
        >
          <GitBranch size={19} />
          View Source Code
        </a>

        <div className="mt-20">

          <h2 className="mb-8 text-3xl font-bold">
            Key Features
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {project.features.map((feature, index) => (

              <div
                key={index}
                className="rounded-2xl border border-white/5 bg-[#11162a] p-5 text-gray-300"
              >
                <span className="mb-3 block text-sm text-purple-400">
                  0{index + 1}
                </span>

                {feature}

              </div>

            ))}

          </div>

        </div>

        {/* Screenshots */}

        <div className="mt-20">

          <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
            Project Gallery
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Screenshots
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">

            {project.screenshots.map((screenshot, index) => (

              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#11162a]"
              >

                <img
                  src={screenshot.image}
                  alt={screenshot.title}
                  className="h-auto w-full"
                />

                <div className="p-5">

                  <h3 className="font-semibold">
                    {screenshot.title}
                  </h3>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProjectDetails;