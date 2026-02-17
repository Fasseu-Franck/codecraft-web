// Tableau comparatif des plans — sans API d'intégration ni éditeur avancé
import { Check, Minus } from "lucide-react";

const comparisonCategories = [
  {
    category: "Apprenants",
    features: [
      {
        name: "Nombre d'apprenants",
        starter: "50",
        premium: "200",
        enterprise: "Illimité",
      },
      {
        name: "Groupes / Classes",
        starter: "3",
        premium: "Illimité",
        enterprise: "Illimité",
      },
    ],
  },
  {
    category: "Contenu pédagogique",
    features: [
      {
        name: "Création de parcours",
        starter: "10",
        premium: "Illimité",
        enterprise: "Sur mesure",
      },
      {
        name: "Éditeur de code intégré",
        starter: true,
        premium: true,
        enterprise: true,
      },
      {
        name: "Prévisualisation temps réel",
        starter: true,
        premium: true,
        enterprise: true,
      },
      {
        name: "Projets personnalisés",
        starter: false,
        premium: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Suivi & Analytics",
    features: [
      {
        name: "Tableau de bord formateur",
        starter: "Basique",
        premium: "Avancé",
        enterprise: "Sur mesure",
      },
      {
        name: "Rapports de progression",
        starter: "Mensuels",
        premium: "Temps réel",
        enterprise: "Temps réel",
      },
      {
        name: "Exports de données",
        starter: false,
        premium: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Support & Services",
    features: [
      {
        name: "Support",
        starter: "Email",
        premium: "Prioritaire",
        enterprise: "Dédié 24/7",
      },
      {
        name: "Personnalisation interface",
        starter: false,
        premium: true,
        enterprise: true,
      },
      {
        name: "Marque blanche",
        starter: false,
        premium: false,
        enterprise: true,
      },
      {
        name: "Intégration SSO / LMS",
        starter: false,
        premium: false,
        enterprise: true,
      },
      { name: "SLA garanti", starter: false, premium: false, enterprise: true },
    ],
  },
];

function renderCell(value, isPremium) {
  if (value === true) {
    return (
      <Check
        className={`h-5 w-5 mx-auto ${isPremium ? "text-primary" : "text-frozen-water-500"}`}
      />
    );
  }
  if (value === false) {
    return <Minus className="h-5 w-5 mx-auto text-muted-foreground/30" />;
  }
  return <span className="text-sm font-medium text-foreground">{value}</span>;
}

export function ComparisonTable() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-badge-bg text-badge-text rounded-full text-sm font-medium mb-4">
            Comparaison détaillée
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Comparez nos plans en détail
          </h2>
        </div>

        {/* Tableau stylisé */}
        <div className="overflow-x-auto rounded-2xl border border-border bg-background">
          <table className="w-full">
            {/* En-tête */}
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-5 px-6 w-1/3">
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Fonctionnalités
                  </span>
                </th>
                <th className="text-center py-5 px-6">
                  <span className="text-sm font-bold text-foreground">
                    Starter
                  </span>
                </th>
                <th className="text-center py-5 px-6 bg-primary/5">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      Recommandé
                    </span>
                    <span className="text-sm font-bold text-primary">
                      Premium
                    </span>
                  </div>
                </th>
                <th className="text-center py-5 px-6">
                  <span className="text-sm font-bold text-foreground">
                    Enterprise
                  </span>
                </th>
              </tr>
            </thead>

            <tbody>
              {comparisonCategories.map((category, catIdx) => (
                <>
                  {/* Ligne de catégorie */}
                  <tr key={`cat-${catIdx}`} className="bg-muted/30">
                    <td
                      colSpan={4}
                      className="py-3 px-6 text-xs font-bold text-foreground uppercase tracking-wider"
                    >
                      {category.category}
                    </td>
                  </tr>

                  {/* Lignes de fonctionnalités avec hover animé */}
                  {category.features.map((feature, featIdx) => (
                    <tr
                      key={`feat-${catIdx}-${featIdx}`}
                      className="border-b border-border/30 transition-colors duration-200 hover:bg-primary/5 cursor-default"
                    >
                      <td className="py-4 px-6 text-sm text-foreground/80">
                        {feature.name}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {renderCell(feature.starter, false)}
                      </td>
                      <td className="py-4 px-6 text-center bg-primary/3">
                        {renderCell(feature.premium, true)}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {renderCell(feature.enterprise, false)}
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
