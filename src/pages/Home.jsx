// Components from src/components/home
import { FAQ } from "@/src/components/home/FAQ";
import { FinalCTA } from "@/src/components/home/FinalCTA";
import { Hero } from "@/src/components/home/Hero";
import { HowItWorks } from "@/src/components/home/HowItWorks";
import { Problem } from "@/src/components/home/Problem";
import { Solution } from "@/src/components/home/Solution";
import { Testimonials } from "@/src/components/home/Testimonials";
import { TrainingCenters } from "@/src/components/home/TrainingCenters";

// Shared Components
import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";

// Page definition
export function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Barre de navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Section Problème */}
      <Problem />

      {/* Section Solution */}
      <Solution />

      {/* Comment ça marche */}
      <HowItWorks />

      {/* Pour les centres de formation */}
      <TrainingCenters />

      {/* Témoignages */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* CTA Final */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
