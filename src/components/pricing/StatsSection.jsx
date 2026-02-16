// Section statistiques / avantages en chiffres — 5 éléments, fond uni sans dégradé
import { Award, BarChart3, TrendingUp, Users, Zap } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5 000+",
    label: "Apprenants formés",
  },
  {
    icon: TrendingUp,
    value: "+45%",
    label: "Taux de complétion",
  },
  {
    icon: Award,
    value: "98%",
    label: "Satisfaction",
  },
  {
    icon: Zap,
    value: "< 30min",
    label: "Temps de réponse communauté",
  },
  {
    icon: BarChart3,
    value: "3x",
    label: "Plus rapide qu'un LMS classique",
  },
];

export function StatsSection() {
  return (
    <section className="py-24 bg-indigo-velvet-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white/80 rounded-full text-sm font-medium mb-4">
            Nos résultats
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Des résultats qui parlent <br />
            <span className="text-frozen-water-500">d'eux-mêmes</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-frozen-water-500/20 transition-colors duration-300">
                  <StatIcon className="h-7 w-7 text-frozen-water-500" />
                </div>
                <span className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </span>
                <span className="text-sm text-white/60">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
