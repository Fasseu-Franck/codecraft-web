// État vide — Aucune formation trouvée
// Basé sur le design system de codecraft-style.md
import { Button } from "@/src/components/ui/button";
import { SearchX } from "lucide-react";

export function FormationsEmptyState({ onReset }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-24 text-center"
      style={{ animation: "fadeIn 0.5s ease-out" }}
    >
      {/* Icône */}
      <div className="w-20 h-20 rounded-2xl bg-muted/60 flex items-center justify-center mb-6">
        <SearchX className="h-10 w-10 text-muted-foreground" />
      </div>

      {/* Message */}
      <h3 className="text-xl font-bold text-foreground mb-2">
        Aucune formation trouvée
      </h3>
      <p className="text-muted-foreground max-w-md mb-8">
        Ajustez vos filtres ou votre recherche pour trouver la formation idéale
        qui correspond à vos objectifs.
      </p>

      {/* Bouton reset */}
      <Button
        variant="outline"
        onClick={onReset}
        className="rounded-full cursor-pointer"
      >
        Réinitialiser les filtres
      </Button>
    </div>
  );
}
