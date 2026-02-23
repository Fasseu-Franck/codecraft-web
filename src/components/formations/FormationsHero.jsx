// Basé sur codecraft-style.md — Hero Section de la Bibliothèque des formations
// Pattern visuel repris de PricingHero.jsx (blobs décoratifs, badge, structure)
import { Button } from "@/src/components/ui/button";
import {
  BookOpen,
  Brain,
  Code2,
  Layers,
  Lightbulb,
  Palette,
  Rocket,
  Search,
  Sparkles,
  Users,
} from "lucide-react";

// Filtres par niveau — Basé sur la demande utilisateur
const levelFilters = [
  { label: "Tous", value: "all", icon: Layers },
  { label: "Découvrir", value: "decouvrir", icon: Lightbulb },
  { label: "Débutant", value: "debutant", icon: BookOpen },
  { label: "Intermédiaire", value: "intermediaire", icon: Code2 },
  { label: "Avancé", value: "avance", icon: Rocket },
];

// Filtres par catégorie — Basé sur la demande utilisateur
const categoryFilters = [
  { label: "Toutes", value: "all", icon: Sparkles },
  { label: "Développeurs", value: "developpeurs", icon: Code2 },
  { label: "Entrepreneurs", value: "entrepreneurs", icon: Users },
  { label: "No-code", value: "nocode", icon: Layers },
  { label: "IA", value: "ia", icon: Brain },
  { label: "UI/UX", value: "uiux", icon: Palette },
];

export function FormationsHero({
  searchQuery,
  onSearchChange,
  activeLevel,
  onLevelChange,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <section className="relative pt-32 pb-8 overflow-hidden bg-background">
      {/* Décorations de fond — Même pattern que PricingHero et Home Hero */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge — Pattern identique à PricingHero */}
        <span
          className="inline-block px-4 py-1.5 bg-badge-bg text-badge-text rounded-full text-sm font-medium mb-6"
          style={{ animation: "fadeIn 0.5s ease-out" }}
        >
          <BookOpen className="inline h-4 w-4 mr-1.5 -mt-0.5" />
          Bibliothèque
        </span>

        {/* Titre principal */}
        <h1
          className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
          style={{ animation: "fadeIn 0.6s ease-out 0.1s both" }}
        >
          Bibliothèque des <span className="text-primary">formations</span>
        </h1>

        {/* Sous-titre engageant */}
        <p
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          style={{ animation: "fadeIn 0.6s ease-out 0.2s both" }}
        >
          Explorez nos parcours pratiques conçus pour vous faire progresser
          étape par étape, du premier pas jusqu'à la maîtrise complète.
        </p>

        {/* Barre de recherche stylisée */}
        <div
          className="max-w-2xl mx-auto mb-10"
          style={{ animation: "fadeIn 0.6s ease-out 0.3s both" }}
        >
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Rechercher une formation..."
              className="w-full h-14 pl-12 pr-4 rounded-2xl bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-base"
            />
          </div>
        </div>

        {/* Filtres par niveau */}
        <div
          className="mb-6"
          style={{ animation: "fadeIn 0.6s ease-out 0.4s both" }}
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Niveau
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {levelFilters.map((filter) => {
              const FilterIcon = filter.icon;
              const isActive = activeLevel === filter.value;
              return (
                <Button
                  key={filter.value}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => onLevelChange(filter.value)}
                  className={`rounded-full cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "shadow-md"
                      : "hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  <FilterIcon className="h-4 w-4 mr-1.5" />
                  {filter.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Filtres par catégorie */}
        <div style={{ animation: "fadeIn 0.6s ease-out 0.5s both" }}>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Catégorie
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categoryFilters.map((filter) => {
              const FilterIcon = filter.icon;
              const isActive = activeCategory === filter.value;
              return (
                <Button
                  key={filter.value}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => onCategoryChange(filter.value)}
                  className={`rounded-full cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "shadow-md"
                      : "hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  <FilterIcon className="h-4 w-4 mr-1.5" />
                  {filter.label}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
