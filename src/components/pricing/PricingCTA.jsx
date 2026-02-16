// CTA Final adapté pour les centres de formation
import { Button } from "@/src/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const reassurances = [
  "Accompagnement personnalisé",
  "Mise en place rapide",
  "Sans engagement",
];

export function PricingCTA() {
  return (
    <section className="py-24 bg-indigo-velvet-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Titre */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Prêt à digitaliser votre centre de formation ?
        </h2>

        {/* Sous-titre */}
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          Rejoignez les centres de formation qui modernisent leur pédagogie et
          améliorent les résultats de leurs apprenants avec Codecraft.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link to="/contact">
            <Button
              size="lg"
              className="py-3 px-6 bg-frozen-water-500 text-(--color-frozen-water-950) hover:bg-frozen-water-600 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Demander une démonstration
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              variant="outline"
              size="lg"
              className="py-3 px-6 border-white/30 text-white hover:bg-white/10 cursor-pointer"
            >
              Parler à un conseiller
            </Button>
          </Link>
        </div>

        {/* Reassurance */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          {reassurances.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-white/70">
              <CheckCircle2 className="h-5 w-5 text-frozen-water-500" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
