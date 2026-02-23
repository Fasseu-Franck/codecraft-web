// Composant Skeleton de chargement pour la carte formation
// Basé sur le design system de codecraft-style.md
export function FormationCardSkeleton() {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-background p-6 animate-pulse">
      {/* Header : Icône + texte */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-muted shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-muted rounded-lg w-3/4" />
          <div className="h-3 bg-muted rounded-lg w-full" />
          <div className="h-3 bg-muted rounded-lg w-2/3" />
        </div>
      </div>

      {/* Métadonnées */}
      <div className="flex items-center gap-3 mb-4">
        <div className="h-6 w-24 bg-muted rounded-full" />
        <div className="h-4 w-14 bg-muted rounded-lg" />
      </div>

      {/* Projet */}
      <div className="flex-1 mb-5 space-y-2">
        <div className="h-3 bg-muted rounded-lg w-1/3" />
        <div className="h-3 bg-muted rounded-lg w-full ml-6" />
        <div className="h-3 bg-muted rounded-lg w-4/5 ml-6" />
      </div>

      {/* Bouton */}
      <div className="h-10 bg-muted rounded-full" />
    </div>
  );
}
