import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { achievementsData } from "../data/achievementsData";

function AchievementsPage() {
  return (
    <section className="section-padding px-6 lg:px-16">
      <div className="mb-12 flex flex-wrap items-center justify-between gap-5">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Achievement Gallery
          </p>
          <h1 className="mt-3 text-4xl font-bold">
            Full Achievement Showcase
          </h1>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-purple-500/50 hover:bg-white/10"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {achievementsData.map((achievement) => (
          <article
            key={achievement.id}
            className="overflow-hidden rounded-3xl border border-white/5 bg-[#11162a]"
          >
            <div className="bg-[#0d1020] p-6">
              <img
                src={achievement.image}
                alt={achievement.alt}
                className="h-[420px] w-full rounded-3xl object-contain bg-[#0b0d1c] p-4"
              />
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-white">{achievement.title}</h2>
              <p className="mt-4 text-gray-400">{achievement.description}</p>
              <p className="mt-4 text-sm text-gray-500">
                Scroll or zoom in browser to view the certificate in full detail.
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AchievementsPage;
