// Basé sur task-1.md - Section 7: TÉMOIGNAGES
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Martinez",
    role: "Reconversion professionnelle",
    avatar: "SM",
    quote:
      "Après 6 mois d'apprentissage en solitaire avec des résultats décevants, Codecraft a tout changé. L'environnement collaboratif m'a permis de débloquer mes incompréhensions rapidement. En 3 mois, j'ai créé 5 projets concrets et décroché mon premier CDI en tant que développeuse junior.",
    highlights: [
      "Progression rapide",
      "Environnement d'entraide",
      "Projets concrets",
    ],
  },
  {
    name: "Thomas Dubois",
    role: "Étudiant en école d'informatique",
    avatar: "TD",
    quote:
      "Les cours de la fac étaient trop théoriques. Avec Codecraft, j'ai enfin pu pratiquer sur de vrais projets et comprendre comment les concepts s'appliquent concrètement. La communauté est incroyablement active et bienveillante.",
    highlights: [
      "Apprentissage pratique",
      "Complémentarité avec les études",
      "Communauté active",
    ],
  },
  {
    name: "Amadou Konaté",
    role: "Formateur en centre de formation",
    avatar: "AK",
    quote:
      "Nous avons intégré Codecraft dans notre parcours développeur web. L'engagement des apprenants a explosé : +45% de taux de complétion. Le tableau de bord nous permet d'intervenir rapidement quand quelqu'un rencontre des difficultés. Un vrai game-changer.",
    highlights: [
      "Taux de complétion amélioré",
      "Suivi en temps réel",
      "Meilleurs résultats",
    ],
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-badge-bg text-badge-text rounded-full text-sm font-medium mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ils ont transformé leur apprentissage avec{" "}
            <span className="text-primary">Codecraft</span>
          </h2>
        </div>

        {/* Grille de témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-frozen-water-500 text-frozen-water-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 leading-relaxed mb-6 text-sm">
                "{testimonial.quote}"
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-6">
                {testimonial.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 text-xs px-2 py-1 bg-highlight-bg text-highlight-text rounded-full"
                  >
                    ✓ {highlight}
                  </span>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-indigo-velvet-500 to-frozen-water-500 flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
