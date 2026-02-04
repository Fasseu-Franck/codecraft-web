// Basé sur task-1.md - Section 5: COMMENT APPRENDRE AVEC CODECRAFT
import { BarChart3, Code2, GraduationCap, MessageCircle, PenLine } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: PenLine,
    emoji: '✍️',
    title: 'Créez votre compte gratuitement',
    description: 'Inscription en 2 minutes. Renseignez vos objectifs d\'apprentissage et votre niveau actuel pour recevoir des recommandations personnalisées.',
    detail: 'Temps : 2 minutes',
  },
  {
    number: '02',
    icon: GraduationCap,
    emoji: '🎓',
    title: 'Sélectionnez votre parcours',
    description: 'Choisissez parmi plus de 30 parcours de formation : développement web, JavaScript, React, Python... Du débutant à l\'expert.',
    detail: 'Populaires : HTML/CSS, JavaScript, React',
  },
  {
    number: '03',
    icon: Code2,
    emoji: '💻',
    title: 'Codez directement dans la plateforme',
    description: 'Suivez les instructions du projet, écrivez votre code dans l\'éditeur intégré et voyez le résultat en temps réel.',
    detail: 'Format : 20% Théorie / 80% Pratique',
  },
  {
    number: '04',
    icon: MessageCircle,
    emoji: '💬',
    title: 'Échangez avec la communauté',
    description: 'Bloqué sur un exercice ? Posez votre question. Maîtrisez un concept ? Aidez les autres. L\'entraide renforce l\'apprentissage.',
    detail: 'Réponse moyenne : < 30 minutes',
  },
  {
    number: '05',
    icon: BarChart3,
    emoji: '📊',
    title: 'Suivez votre évolution',
    description: 'Tableau de bord personnalisé, projets complétés, compétences acquises, badges débloqués... Visualisez votre progression.',
    detail: 'Gamification intelligente',
  },
]

export function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Votre parcours d'apprentissage en{' '}
            <span className="text-[var(--color-indigo-velvet-500)]">5 étapes simples</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            De l'inscription à la maîtrise, Codecraft vous guide à chaque étape
          </p>
        </div>

        {/* Timeline des 5 étapes */}
        <div className="relative">
          {/* Ligne de connexion verticale (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-indigo-velvet-500)] to-[var(--color-frozen-water-500)]" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Card */}
                <div
                  className={`bg-background rounded-2xl p-6 sm:p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-300 ${
                    index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Numéro */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-indigo-velvet-500)] to-[var(--color-indigo-velvet-600)] flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{step.emoji}</span>
                        <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-3">{step.description}</p>
                      <span className="inline-block px-3 py-1 bg-[var(--color-frozen-water-50)] text-[var(--color-frozen-water-700)] text-sm rounded-full font-medium">
                        {step.detail}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Point de connexion (desktop) */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[var(--color-indigo-velvet-500)] border-4 border-background shadow-md" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
