// Basé sur task-1.md - Section 9: CTA FINAL
import { Button } from "@/src/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const reassurances = [
  "Aucune carte bancaire requise",
  "Accès immédiat",
  "Annulation à tout moment",
];

export function FinalCTA() {
  return (
    <section className="py-24 bg-linear-to-br from-[var(--color-indigo-velvet-950)] via-[var(--color-indigo-velvet-900)] to-[var(--color-indigo-velvet-800)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Titre */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Prêt à transformer votre apprentissage ?
        </h2>

        {/* Sous-titre */}
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          Rejoignez des milliers d'apprenants qui progressent chaque jour dans
          un environnement pensé pour la réussite
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button
            size="xl"
            className="bg-[var(--color-frozen-water-500)] text-[var(--color-frozen-water-950)] hover:bg-[var(--color-frozen-water-400)] shadow-lg hover:shadow-xl"
          >
            Commencer gratuitement
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="border-white/30 text-white hover:bg-white/10"
          >
            Réserver une démo
          </Button>
        </div>

        {/* Reassurance */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          {reassurances.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-white/70">
              <CheckCircle2 className="h-5 w-5 text-[var(--color-frozen-water-500)]" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
