import { Link } from "react-router-dom";
import { achievementsData } from "../data/achievementsData";

function Achievements() {
  const achievements = achievementsData;

  return (
    <section id="achievements" className="section-padding px-6 lg:px-16">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
        <div>
        
          <h2 className="mt-3 text-4xl font-bold gradient-text">
            Achievements & participations
          </h2>
        </div>

        <Link
          to="/achievements"
          className="inline-flex items-center rounded-full border border-white/10 bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
        >
          View All Achievements
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {achievements.map((achievement) => (
          <article
            key={achievement.title}
            className="overflow-hidden rounded-3xl border border-white/5 bg-[#11162a] transition duration-500 hover:-translate-y-2 hover:border-purple-500/50"
          >
            <div className="relative h-72 overflow-hidden bg-[#0d1020]">
              <img
                src={achievement.image}
                alt={achievement.alt}
                className="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
              />
            </div>

            <div className="p-7">
              <h3 className="text-2xl font-bold">{achievement.title}</h3>
              <p className="mt-4 leading-7 text-gray-400">{achievement.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
