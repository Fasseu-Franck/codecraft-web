// Basé sur task-1.md - Section 4: COMMENT CODECRAFT RÉSOUT CES PROBLÈMES
import { BookOpen, Target, Users } from "lucide-react";

const solutions = [
  {
    icon: Target,
    title: "Tout au même endroit",
    description:
      "Éditeur de code, prévisualisation, cours, projets, corrections... Tout est centralisé dans une interface intuitive. Plus besoin de jongler entre 10 outils.",
    benefit: "Concentrez-vous sur l'apprentissage, pas sur l'organisation",
  },
  {
    icon: BookOpen,
    title: "Parcours structurés et progressifs",
    description:
      "Plus de 30 parcours de formation conçus par des experts, avec des projets pratiques qui suivent une progression logique. Chaque concept est appliqué immédiatement dans du code réel.",
    benefit: "Progressez rapidement avec une méthode éprouvée",
  },
  {
    icon: Users,
    title: "Apprenez ensemble, progressez plus vite",
    description:
      "Posez vos questions, partagez vos solutions, aidez les autres apprenants. L'entraide est au cœur de Codecraft avec un système de collaboration pensé pour l'apprentissage.",
    benefit: "Restez motivé grâce à une communauté active",
  },
];

export function Solution() {
  return (
    <section id="formations" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-badge-bg text-badge-text rounded-full text-sm font-medium mb-4">
            Comment Codecraft résout ces problèmes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Une plateforme pensée pour{" "}
            <span className="text-primary">votre réussite</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Codecraft centralise tout ce dont vous avez besoin pour apprendre
            efficacement, par la pratique et la collaboration.
          </p>
        </div>

        {/* Les 3 solutions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-card-subtle rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Emoji & Icon */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{solution.emoji}</span>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="h-6 w-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>

              {/* Benefit badge */}
              <div className="flex items-center gap-2 text-highlight-text">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-frozen-water-500)]" />
                <span className="text-sm font-medium">{solution.benefit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
