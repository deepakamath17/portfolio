import {
  Home,
  User,
  GraduationCap,
  Code2,
  FolderGit2,
  Mail,
  GitBranch,
  Link,
} from "lucide-react";

const menuItems = [
  {
    name: "Home",
    href: "#home",
    icon: Home,
  },
  {
    name: "About",
    href: "#about",
    icon: User,
  },
  {
    name: "Education",
    href: "#education",
    icon: GraduationCap,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: Code2,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: FolderGit2,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

function Sidebar({ activeSection }) {
  return (
    <aside className="fixed left-4 top-4 bottom-4 z-50 hidden w-64 flex-col rounded-2xl border border-white/5 bg-[#0d1225]/95 p-5 backdrop-blur-xl lg:flex">

      {/* Logo */}
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 text-xl font-bold">
          D
        </div>

        <div>
          <h1 className="font-bold tracking-wide">
            DEEPA
          </h1>

          <p className="text-xs text-gray-400">
            KAMATH A G
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            activeSection === item.href.substring(1);

          return (
            <a
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 rounded-xl px-4 py-3 text-sm transition-all ${
                isActive
                  ? "bg-gradient-to-r from-purple-600/40 to-pink-600/20 text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={18} />
              {item.name}
            </a>
          );
        })}
      </nav>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Availability */}
      <div className="rounded-2xl bg-gradient-to-br from-purple-600/40 to-pink-600/20 p-5">
        <p className="mb-2 text-sm font-semibold">
          Open to Opportunities
        </p>

        <p className="mb-4 text-xs leading-5 text-gray-400">
          Interested in learning, building, and contributing to meaningful projects.
        </p>

        <a
          href="#contact"
          className="flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-semibold transition hover:scale-105"
        >
          Let's Connect
        </a>
      </div>

      {/* Social links */}
      <div className="mt-6 flex gap-3">
        <a
          href="https://github.com/deepakamath17"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-white/5 p-2 text-gray-400 transition hover:bg-purple-500/20 hover:text-white"
        >
          <GitBranch size={18} />
        </a>

        <a
          href="https://www.linkedin.com/in/deepa-kamath-a-g/"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-white/5 p-2 text-gray-400 transition hover:bg-blue-500/20 hover:text-white"
        >
          <Link size={18} />
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;