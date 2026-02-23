// Basé sur codecraft-style.md — Carte de formation réutilisable
// Pattern visuel inspiré de PricingPlans.jsx (cartes arrondies, ombres, hover)
import { Button } from "@/src/components/ui/button";
import { ArrowRight, Clock, FolderKanban, Signal } from "lucide-react";
import { Link } from "react-router-dom";

// Labels de niveau avec couleurs sémantiques — Basé sur codecraft-style.md
const levelConfig = {
  decouvrir: {
    label: "Découvrir",
    className:
      "bg-[var(--color-soft-cyan-500)]/15 text-[var(--color-soft-cyan-500)]",
  },
  debutant: {
    label: "Débutant",
    className:
      "bg-[var(--color-frozen-water-500)]/15 text-[var(--color-frozen-water-600)]",
  },
  intermediaire: {
    label: "Intermédiaire",
    className:
      "bg-[var(--color-indigo-velvet-500)]/15 text-[var(--color-indigo-velvet-500)]",
  },
  avance: {
    label: "Avancé",
    className:
      "bg-[var(--color-light-green-500)]/15 text-[var(--color-light-green-600)]",
  },
};

export function FormationCard({ formation, index }) {
  const FormationIcon = formation.icon;
  const level = levelConfig[formation.level] || levelConfig.debutant;

  return (
    <div
      className="group relative flex flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-primary/30"
      style={{
        animation: `fadeIn 0.5s ease-out ${0.05 * index}s both`,
      }}
    >
      {/* Badge (Populaire / Nouveau) */}
      {formation.badge && (
        <div className="absolute -top-3 right-4">
          <span
            className={`px-3 py-1 text-xs font-bold rounded-full ${
              formation.badge === "Populaire"
                ? "bg-frozen-water-500 text-(--color-frozen-water-950)"
                : "bg-primary text-primary-foreground"
            }`}
          >
            {formation.badge}
          </span>
        </div>
      )}

      {/* Header : Icône + métadonnées */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
          <FormationIcon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
            {formation.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {formation.description}
          </p>
        </div>
      </div>

      {/* Métadonnées : Niveau + Durée */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${level.className}`}
        >
          <Signal className="h-3 w-3" />
          {level.label}
        </span>
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          {formation.duration}h
        </span>
      </div>

      {/* Projet final — séparateur et description */}
      <div className="flex-1 mb-5">
        <div className="flex items-center gap-2 mb-2">
          <FolderKanban className="h-4 w-4 text-primary shrink-0" />
          <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
            Projet final
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 pl-6">
          {formation.project}
        </p>
      </div>

      {/* Bouton CTA */}
      <Link to={formation.link || "#"}>
        <Button
          variant="outline"
          className="w-full rounded-full cursor-pointer group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
        >
          Voir la formation
          <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </Link>
    </div>
  );
}
