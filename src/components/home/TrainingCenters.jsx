// Basé sur task-1.md - Section 6: POUR LES CENTRES DE FORMATION
import { Button } from "@/src/components/ui/button";
import {
  LayoutDashboard,
  Rocket,
  Snail,
  TrendingDown,
  Users,
  Wrench,
} from "lucide-react";

const problems = [
  {
    icon: Snail,
    title: "Difficulté à engager les apprenants",
    description:
      "Les cours magistraux et les PDF n'engagent plus. Vos apprenants décrochent, s'ennuient et abandonnent.",
    consequence: "Taux de complétion faible, satisfaction en baisse",
  },
  {
    icon: TrendingDown,
    title: "Manque de suivi des progrès",
    description:
      "Impossible de savoir où en sont vraiment vos apprenants. Qui est en difficulté ? Vous naviguez à l'aveugle.",
    consequence: "Interventions tardives, résultats hétérogènes",
  },
  {
    icon: Wrench,
    title: "Outils pédagogiques dispersés",
    description:
      "Entre les LMS vieillissants, les outils de code en ligne, les forums externes... Une jungle d'outils incompatibles.",
    consequence: "Expérience fragmentée, complexité administrative",
  },
];

const solutions = [
  {
    icon: LayoutDashboard,
    title: "Tout dans une seule interface moderne",
    description:
      "Cours, projets pratiques, éditeur de code, suivi des apprenants, évaluations... Codecraft centralise tous vos besoins.",
    benefit: "Simplifiez votre gestion et offrez une expérience premium",
  },
  {
    icon: Users,
    title: "Tableau de bord formateur",
    description:
      "Visualisez en temps réel la progression de chaque apprenant : projets réalisés, temps passé, difficultés rencontrées.",
    benefit: "Accompagnement personnalisé et résultats améliorés",
  },
  {
    icon: Rocket,
    title: "80% de pratique, 20% de théorie",
    description:
      "Vos apprenants codent directement sur des projets réels. Ils construisent un portfolio de réalisations concrètes.",
    benefit: "Engagement maximal, compétences opérationnelles",
  },
];

export function TrainingCenters() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[var(--color-indigo-velvet-100)] text-[var(--color-indigo-velvet-800)] rounded-full text-sm font-medium mb-4">
            Pour les professionnels
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Codecraft pour les centres de formation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une solution complète pour moderniser votre offre pédagogique et
            améliorer les résultats de vos formations
          </p>
        </div>

        {/* Problèmes des centres */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
            Les défis actuels des formateurs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-muted/30 rounded-xl p-6 border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{problem.emoji}</span>
                  <problem.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {problem.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {problem.description}
                </p>
                <p className="text-xs text-destructive font-medium">
                  → {problem.consequence}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions pour les centres */}
        <div className="bg-gradient-to-br from-[var(--color-indigo-velvet-950)] to-[var(--color-indigo-velvet-900)] rounded-3xl p-8 sm:p-12">
          <h3 className="text-xl font-semibold text-white mb-8 text-center">
            Nos solutions pour les centres de formations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <solution.icon className="h-8 w-8 text-[var(--color-frozen-water-500)] mb-4" />
                <h4 className="font-semibold text-white mb-2">
                  {solution.title}
                </h4>
                <p className="text-sm text-white/70 mb-4">
                  {solution.description}
                </p>
                <p className="text-sm text-[var(--color-frozen-water-400)] font-medium">
                  ✓ {solution.benefit}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[var(--color-frozen-water-500)] text-[var(--color-frozen-water-950)] hover:bg-[var(--color-frozen-water-900)]"
            >
              Demander une démo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-foreground hover:bg-white/10"
            >
              S'inscrire comme centre de formation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
