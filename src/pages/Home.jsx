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
      {/* 1️⃣ Barre de navigation */}
      <Navbar />

      {/* 2️⃣ Hero Section */}
      <Hero />

      {/* 3️⃣ Section Problème */}
      <Problem />

      {/* 4️⃣ Section Solution */}
      <Solution />

      {/* 5️⃣ Comment ça marche */}
      <HowItWorks />

      {/* 6️⃣ Pour les centres de formation */}
      <TrainingCenters />

      {/* 7️⃣ Témoignages */}
      <Testimonials />

      {/* 8️⃣ FAQ */}
      <FAQ />

      {/* 9️⃣ CTA Final */}
      <FinalCTA />

      {/* 🔟 Footer */}
      <Footer />
    </div>
  );
}
