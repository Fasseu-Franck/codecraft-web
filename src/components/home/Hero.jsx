// Basé sur task-1.md - Section 2: HERO SECTION
import { Button } from '@/src/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

const stats = [
  { icon: CheckCircle2, text: '+30 parcours de formation adaptés' },
  { icon: CheckCircle2, text: 'Apprentissage 100% basé sur la pratique' },
  { icon: CheckCircle2, text: 'Environnement collaboratif intégré' },
  { icon: CheckCircle2, text: 'Suivi de progression en temps réel' },
]

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-indigo-velvet-50)] via-background to-[var(--color-frozen-water-50)] opacity-60" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[var(--color-frozen-water-500)]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[var(--color-indigo-velvet-500)]/20 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline principale */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            La meilleure méthode d'apprentissage{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-indigo-velvet-500)] to-[var(--color-frozen-water-500)]">
              dans un environnement adapté
            </span>
          </h1>

          {/* Sous-titre explicatif */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            La plateforme collaborative qui transforme l'apprentissage du code 
            en une expérience pratique, structurée et motivante dans un environnement 
            pensé pour votre réussite.
          </p>

          {/* CTAs principaux */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="xl" className="bg-gradient-to-r from-[var(--color-indigo-velvet-500)] to-[var(--color-indigo-velvet-600)] hover:from-[var(--color-indigo-velvet-600)] hover:to-[var(--color-indigo-velvet-700)] shadow-lg hover:shadow-xl transition-all">
              Débuter maintenant
            </Button>
            <Button variant="outline" size="xl">
              Consulter les parcours
            </Button>
          </div>

          {/* Preuves de crédibilité */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-background/60 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:border-[var(--color-frozen-water-500)]/50 transition-colors"
              >
                <stat.icon className="h-5 w-5 text-[var(--color-frozen-water-500)] flex-shrink-0" />
                <span className="text-sm text-foreground/80 text-left">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
