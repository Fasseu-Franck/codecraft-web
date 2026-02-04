// Basé sur task-1.md - Section 3: LE PROBLÈME DE LA FORMATION AUJOURD'HUI
import { BookX, FolderSearch, UserX } from 'lucide-react'

const problems = [
  {
    icon: FolderSearch,
    title: 'Des ressources éparpillées partout',
    description: 'Les projets pratiques sont dispersés entre GitHub, CodePen, différents sites de formation... Vous perdez du temps à chercher plutôt qu\'à apprendre.',
    impact: 'Frustration et perte de temps précieux',
  },
  {
    icon: BookX,
    title: 'Contenus pédagogiques inadaptés',
    description: 'Entre les tutoriels YouTube non structurés, les documentations trop techniques et les cours théoriques sans pratique, difficile de progresser efficacement.',
    impact: 'Apprentissage lent et désorganisé',
  },
  {
    icon: UserX,
    title: 'Apprendre seul dans son coin',
    description: 'L\'apprentissage en solo mène à l\'isolement, aux blocages non résolus et à l\'abandon. Sans entraide ni feedback, la motivation s\'effondre rapidement.',
    impact: '70% d\'abandon dans les 3 premiers mois',
  },
]

export function Problem() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            L'apprentissage en ligne{' '}
            <span className="text-[var(--color-destructive)]">standard ne fonctionne plus</span>{' '}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            L'écosystème actuel de formation aux métiers de développeurs souffre de problèmes structurels 
            qui freinent votre progression.
          </p>
        </div>

        {/* Les 3 problèmes majeurs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-2xl p-8 border border-border hover:border-destructive/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="h-7 w-7 text-destructive" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {problem.description}
              </p>

              {/* Impact badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-destructive/10 rounded-full">
                <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                <span className="text-sm font-medium text-destructive">{problem.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
