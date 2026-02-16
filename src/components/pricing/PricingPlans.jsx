// Composant Plans de tarification — Centres de formation — FCFA
import { Button } from "@/src/components/ui/button";
import { BookOpen, Check, Rocket, Shield } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    description: "Pour les centres qui débutent avec le numérique",
    price: "150 000",
    period: "/mois",
    features: [
      "Jusqu'à 50 apprenants",
      "Création de 10 parcours",
      "Éditeur de code intégré",
      "Suivi de progression basique",
      "Support par email",
      "Rapports mensuels",
    ],
    cta: "Commencer",
    ctaLink: "/contact",
    popular: false,
    icon: BookOpen,
  },
  {
    name: "Premium",
    description: "Pour les centres en pleine croissance",
    price: "350 000",
    period: "/mois",
    features: [
      "Jusqu'à 200 apprenants",
      "Création de parcours illimitée",
      "Tableau de bord formateur",
      "Support prioritaire",
      "Rapports en temps réel",
      "Personnalisation de l'interface",
      "Exports de données",
    ],
    cta: "Choisir Premium",
    ctaLink: "/contact",
    popular: true,
    icon: Rocket,
  },
  {
    name: "Enterprise",
    description: "Pour les grandes structures avec des besoins spécifiques",
    price: "Sur devis",
    period: "",
    features: [
      "Apprenants illimités",
      "Parcours personnalisés sur mesure",
      "Tableau de bord avancé",
      "Account manager dédié",
      "SLA garanti",
      "Marque blanche",
      "Intégration SSO / LMS",
      "Formation des formateurs",
    ],
    cta: "Nous contacter",
    ctaLink: "/contact",
    popular: false,
    icon: Shield,
  },
];

export function PricingPlans() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="py-16 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Titre + Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Des plans adaptés <br className="hidden sm:block" />à votre
              croissance
            </h2>
          </div>
          {/* Toggle Mensuel / Annuel */}
          <div className="flex items-center gap-2 bg-background border border-border rounded-full p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                billing === "monthly"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                billing === "yearly"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annuel <span className="text-xs opacity-100">(-20%)</span>
            </button>
          </div>
        </div>

        {/* Grille des 3 plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const PlanIcon = plan.icon;
            const isCustom = plan.price === "Sur devis";
            const rawPrice = isCustom
              ? 0
              : Number(plan.price.replace(/\s/g, ""));
            const displayPrice = isCustom
              ? "Sur devis"
              : billing === "yearly"
                ? `${Math.round(rawPrice * 0.8).toLocaleString("fr-FR")} FCFA`
                : `${rawPrice.toLocaleString("fr-FR")} FCFA`;

            return (
              <div
                key={index}
                className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  plan.popular
                    ? "bg-indigo-velvet-950 text-white border-2 border-primary shadow-lg scale-[1.02]"
                    : "bg-background border border-border"
                }`}
              >
                {/* Badge populaire */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-frozen-water-500 text-(--color-frozen-water-950) text-xs font-bold rounded-full whitespace-nowrap">
                      Le plus populaire
                    </span>
                  </div>
                )}

                {/* En-tête du plan */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        plan.popular ? "bg-white/15" : "bg-primary/10"
                      }`}
                    >
                      <PlanIcon
                        className={`h-5 w-5 ${
                          plan.popular
                            ? "text-frozen-water-500"
                            : "text-primary"
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                  </div>
                  <p
                    className={`text-sm ${
                      plan.popular ? "text-white/70" : "text-muted-foreground"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Prix */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{displayPrice}</span>
                    {plan.period && (
                      <span
                        className={`text-sm ${
                          plan.popular
                            ? "text-white/60"
                            : "text-muted-foreground"
                        }`}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className={`h-4 w-4 mt-0.5 shrink-0 ${
                          plan.popular
                            ? "text-frozen-water-500"
                            : "text-primary"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-white/90" : "text-foreground/80"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA - Lien vers Contact */}
                <Link to={plan.ctaLink}>
                  <Button
                    className={`w-full rounded-full font-semibold cursor-pointer ${
                      plan.popular
                        ? "bg-frozen-water-500 text-(--color-frozen-water-950) hover:bg-frozen-water-600"
                        : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
