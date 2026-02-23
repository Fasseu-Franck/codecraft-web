// Grille responsive de cartes formations — Avec états loading et vide
// Basé sur codecraft-style.md et le pattern de PricingPlans.jsx
import { FormationCard } from "@/src/components/formations/FormationCard";
import { FormationCardSkeleton } from "@/src/components/formations/FormationCardSkeleton";
import { FormationsEmptyState } from "@/src/components/formations/FormationsEmptyState";

export function FormationsGrid({ formations, isLoading, onReset }) {
  // État de chargement — Skeleton loading
  if (isLoading) {
    return (
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Compteur skeleton */}
          <div className="mb-8">
            <div className="h-5 w-48 bg-muted rounded-lg animate-pulse" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <FormationCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // État vide — Aucune formation trouvée
  if (!formations || formations.length === 0) {
    return (
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FormationsEmptyState onReset={onReset} />
        </div>
      </section>
    );
  }

  // Grille des formations
  return (
    <section className="py-12 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Compteur de résultats */}
        <div className="mb-8">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              {formations.length}
            </span>{" "}
            formation{formations.length > 1 ? "s" : ""} disponible
            {formations.length > 1 ? "s" : ""}
          </p>
        </div>

        {/* Grille responsive — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {formations.map((formation, index) => (
            <FormationCard
              key={formation.id}
              formation={formation}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
