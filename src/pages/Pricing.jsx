// Page de Tarification — Pour centres de formation
// Composants structurés dans src/components/pricing/
import { Footer } from "@/src/components/Footer";
import { Testimonials } from "@/src/components/home/Testimonials";
import { Navbar } from "@/src/components/Navbar";
import { ComparisonTable } from "@/src/components/pricing/ComparisonTable";
import { PricingCTA } from "@/src/components/pricing/PricingCTA";
import { PricingHero } from "@/src/components/pricing/PricingHero";
import { PricingPlans } from "@/src/components/pricing/PricingPlans";
import { StatsSection } from "@/src/components/pricing/StatsSection";

export function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Section 1: Hero tarification */}
      <PricingHero />

      {/* Section 2: Plans de tarification */}
      <PricingPlans />

      {/* Section 3: Tableau comparatif */}
      <ComparisonTable />

      {/* Section 4: Avantages en chiffres */}
      <StatsSection />

      {/* Section 5: Témoignages (réutilisé depuis homepage) */}
      <Testimonials />

      {/* Section 6: CTA Final adapté centres de formation */}
      <PricingCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
