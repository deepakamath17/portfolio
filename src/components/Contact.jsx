import {
  Mail,
  Link,
  GitBranch,
  Send,
} from "lucide-react";

import { portfolioData } from "../data/portfolioData";

function Contact() {
  return (
    <section
      id="contact"
      className="section-padding px-6 lg:px-16"
    >
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          Get In Touch
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Let's <span className="gradient-text">Connect</span>
        </h2>
      </div>

      <div className="grid overflow-hidden rounded-3xl border border-white/5 bg-[#11162a] lg:grid-cols-2">

        {/* Left */}
        <div className="bg-gradient-to-br from-purple-700/60 via-pink-600/30 to-blue-600/20 p-8 lg:p-12">

          <Send
            className="mb-8"
            size={40}
          />

          <h3 className="max-w-md text-4xl font-bold">
            Let's build something meaningful together.
          </h3>

          <p className="mt-6 max-w-md leading-7 text-white/70">
            Whether it's a project, an opportunity, or simply a conversation about technology, I'd love to connect.
          </p>

        </div>

        {/* Right */}
        <div className="p-8 lg:p-12">

          <div className="space-y-6">

            <a
              href={`mailto:${portfolioData.email}`}
              className="flex items-center gap-5 rounded-2xl border border-white/5 bg-white/5 p-5 transition hover:border-purple-500/50"
            >
              <div className="rounded-xl bg-purple-500/20 p-3 text-purple-400">
                <Mail />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="mt-1 text-gray-200">
                  {portfolioData.email}
                </p>
              </div>
            </a>

            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-5 rounded-2xl border border-white/5 bg-white/5 p-5 transition hover:border-blue-500/50"
            >
              <div className="rounded-xl bg-blue-500/20 p-3 text-blue-400">
                <Link />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  LinkedIn
                </p>

                <p className="mt-1 text-gray-200">
                  Connect with me on LinkedIn
                </p>
              </div>
            </a>

            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-5 rounded-2xl border border-white/5 bg-white/5 p-5 transition hover:border-gray-400/50"
            >
              <div className="rounded-xl bg-white/10 p-3 text-white">
                <GitBranch />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  GitHub
                </p>

                <p className="mt-1 text-gray-200">
                  Explore my projects
                </p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;