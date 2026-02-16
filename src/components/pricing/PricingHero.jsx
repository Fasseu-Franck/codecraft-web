// Composant Hero de la page Tarification
export function PricingHero() {
  return (
    <section className="relative pt-32 pb-12 overflow-hidden bg-background">
      {/* Décorations de fond */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 bg-badge-bg text-badge-text rounded-full text-sm font-medium mb-6">
          Tarification
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
          Digitalisez vos formations <br />
          <span className="text-primary">avec Codecraft</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Des offres pensées pour les centres de formation qui veulent
          moderniser leur pédagogie et permettre à leurs apprenants de
          développer des parcours pratiques sur mesure.
        </p>
      </div>
    </section>
  );
}
