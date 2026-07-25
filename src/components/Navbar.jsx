import { Menu, X } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "../data/portfolioData";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Education", "#education"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Achievements & Participations", "/achievements"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="sticky top-0 z-40 border-b border-white/5 bg-[#080b1a]/80 px-6 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        
        {/* Left Side: Brand Logo Badge */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 font-bold text-white shadow-md transition-transform group-hover:scale-105">
            {portfolioData?.shortName?.charAt(0) || "D"}
          </div>
          <span className="font-bold text-white tracking-wide hidden sm:inline-block">
            {portfolioData?.shortName || "Deepa"}
          </span>
        </a>

        {/* Center/Right: Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
            >
              {name}
            </a>
          ))}
        </div>

        {/* Far Right: Let's Talk CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-xl bg-purple-600/80 hover:bg-purple-600 px-5 py-2 text-sm font-semibold text-white transition-all shadow-md shadow-purple-500/20 active:scale-95 inline-block"
          >
            Let's Talk ↗
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-lg bg-white/5 p-2 text-gray-300 hover:text-white"
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="mt-3 space-y-2 md:hidden rounded-xl border border-white/10 bg-[#080b1a] p-3 shadow-xl">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
            >
              {name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white mt-2"
          >
            Let's Talk ↗
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;