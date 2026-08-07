import { ArrowRight, Download, GitBranch, Link as LinkIcon, Mail } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center px-6 py-12 lg:px-16 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-6xl w-full">
        
        {/* Horizontal Row Layout (Details on Left, Profile Image on Right) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* LEFT SIDE: Details (Takes up remaining horizontal space) */}
          <div className="flex-1 space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Opportunities
            </div>

            {/* Heading */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] font-semibold text-purple-400 mb-2">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white whitespace-nowrap">
                {portfolioData.name.split(" ")[0]}{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
                  {portfolioData.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>
              <h2 className="mt-3 text-xl sm:text-2xl font-semibold text-purple-300">
                {portfolioData.role}
              </h2>
            </div>

            {/* Description */}
            <p className="text-base text-gray-400 max-w-lg leading-relaxed">
              {portfolioData.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:scale-105 active:scale-95"
              >
                View My Work
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10 hover:border-purple-500/50"
              >
                Let's Connect
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-gray-300 transition hover:bg-white/10 hover:text-white"
              >
                <Download size={18} />
                Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={portfolioData.social?.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10"
                aria-label="GitHub Profile"
              >
                <GitBranch size={20} />
              </a>
              <a
                href={portfolioData.social?.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10"
                aria-label="LinkedIn Profile"
              >
                <LinkIcon size={20} />
              </a>
              <a
                href={`mailto:${portfolioData.email}`}
                className="p-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10"
                aria-label="Email Me"
              >
                <Mail size={20} />
              </a>
            </div>

          </div>

          {/* RIGHT SIDE: Fixed Horizontal Profile Image */}
          <div className="shrink-0 relative flex justify-center items-center">
            
            {/* Circular Glow */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-600 opacity-80 blur-xl -z-10" />

            {/* Profile Frame */}
            <div className="relative w-64 sm:w-80 h-72 sm:h-96 rounded-3xl overflow-hidden border-2 border-purple-500/40 bg-[#080b1a] shadow-2xl">
              <img
                src={portfolioData.profileImage || "/profile.jpg.jpeg"}
                alt={portfolioData.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.src = "/profile.jpg.jpeg";
                }}
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;