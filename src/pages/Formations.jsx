// Page Bibliothèque des formations — Structure modulaire
// Architecture identique à Pricing.jsx : Navbar + sections + Footer
// Basé sur codecraft-style.md et codecraft-archi.md
import { Footer } from "@/src/components/Footer";
import { FormationsCTA } from "@/src/components/formations/FormationsCTA";
import { formations } from "@/src/components/formations/formationsData";
import { FormationsGrid } from "@/src/components/formations/FormationsGrid";
import { FormationsHero } from "@/src/components/formations/FormationsHero";
import { Navbar } from "@/src/components/Navbar";
import { useEffect, useMemo, useState } from "react";

export function Formations() {
  // États pour les filtres et la recherche
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLevel, setActiveLevel] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  // Simulation du chargement initial (skeleton state)
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Filtrage des formations — combinaison recherche + niveau + catégorie
  const filteredFormations = useMemo(() => {
    return formations.filter((formation) => {
      // Filtre par recherche textuelle
      const matchesSearch =
        searchQuery.trim() === "" ||
        formation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        formation.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        formation.project.toLowerCase().includes(searchQuery.toLowerCase());

      // Filtre par niveau
      const matchesLevel =
        activeLevel === "all" || formation.level === activeLevel;

      // Filtre par catégorie
      const matchesCategory =
        activeCategory === "all" || formation.category === activeCategory;

      return matchesSearch && matchesLevel && matchesCategory;
    });
  }, [searchQuery, activeLevel, activeCategory]);

  // Réinitialisation des filtres
  const handleReset = () => {
    setSearchQuery("");
    setActiveLevel("all");
    setActiveCategory("all");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Section 1: Hero avec recherche et filtres */}
      <FormationsHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeLevel={activeLevel}
        onLevelChange={setActiveLevel}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Section 2: Grille des formations */}
      <FormationsGrid
        formations={filteredFormations}
        isLoading={isLoading}
        onReset={handleReset}
      />

      {/* Section 3: CTA Final */}
      <FormationsCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
