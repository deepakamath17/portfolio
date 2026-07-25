import { Code2, Database, Layout, Wrench } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function Skills() {
  // Category Icon Mapping
  const categoryIcons = {
    Frontend: <Layout className="w-5 h-5 text-purple-400" />,
    Backend: <Code2 className="w-5 h-5 text-pink-400" />,
    Database: <Database className="w-5 h-5 text-indigo-400" />,
    Tools: <Wrench className="w-5 h-5 text-emerald-400" />,
    "Programming Languages": <Code2 className="w-5 h-5 text-cyan-400" />,
  };

  // Base skills array from data or default fallback
  const rawSkills = portfolioData?.skills || [
    { name: "HTML5 & CSS3", category: "Frontend", level: "Intermediate" },
    { name: "JavaScript", category: "Frontend", level: "Intermediate" },
    { name: "React", category: "Frontend", level: "Beginner / Learning" },
    { name: "Python", category: "Backend", level: "Intermediate" },
    { name: "C", category: "Programming Languages", level: "Intermediate" },
    { name: "C++", category: "Programming Languages", level: "Intermediate" },
    { name: "Java", category: "Programming Languages", level: "Intermediate" },
    { name: "PHP", category: "Backend", level: "Intermediate" },
    { name: "Node.js & Express", category: "Backend", level: "Beginner / Learning" },
    { name: "MySQL / SQL", category: "Database", level: "Intermediate" },
    { name: "Git & GitHub", category: "Tools", level: "Basic Usage" },
  ];

  // Ensure Python is present if portfolioData doesn't have it yet
  const hasPython = rawSkills.some((s) => s.name.toLowerCase() === "python");
  const skillsList = hasPython
    ? rawSkills
    : [
        ...rawSkills,
        { name: "Python", category: "Backend", level: "Intermediate" },
      ];

  // Group skills by category dynamically
  const groupedSkills = skillsList.reduce((acc, skill) => {
    acc[skill.category] = acc[skill.category] || [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-16 px-6 lg:px-16 relative">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-purple-400">
            Tech Stack & Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold gradient-text">
            Skills & Knowledge
          </h2>
          <p className="text-sm text-gray-400 max-w-lg mx-auto">
            Technologies and tools I work with while building web projects and expanding my software development skills.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(groupedSkills).map(([category, list]) => (
            <div
              key={category}
              className="rounded-2xl border border-white/10 bg-[#080b1a]/70 p-6 backdrop-blur-md transition-all hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/5 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 border-b border-white/10 pb-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    {categoryIcons[category] || <Code2 className="w-5 h-5 text-purple-400" />}
                  </div>
                  <h3 className="text-lg font-bold text-white">{category}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {list.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-gray-200">{skill.name}</span>
                        <span className="text-xs text-purple-300/80 bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/20">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;