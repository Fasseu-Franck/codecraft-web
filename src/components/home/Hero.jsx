// Basé sur task-1.md - Section 2: HERO SECTION
import heroImage from "@/src/assets/home/Working-Dark.jpg";
import { Button } from "@/src/components/ui/button";
import { CheckCircle2, Rocket, BookOpen } from "lucide-react";

// Stats data (Reverted to original)
const stats = [
  { icon: CheckCircle2, text: "+30 parcours de formation adaptés" },
  { icon: CheckCircle2, text: "Apprentissage 100% basé sur la pratique" },
  { icon: CheckCircle2, text: "Environnement collaboratif intégré" },
  { icon: CheckCircle2, text: "Suivi de progression en temps réel" },
];

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-background"
    >
      {/* Background decorations (subtle/clean) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-6 text-center lg:text-left animate-in slide-in-from-left-10 duration-700 fade-in">
            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-2">
              Passez de la théorie <br />à la maîtrise dans un <br />{" "}
              <span className="text-primary">cadre favorable</span>
            </h1>

            <p className="text-md sm:text-md text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              L'apprentissage par la pratique, structuré en projet le tout dans
              un environnement collaboratif qui favorise des progrès rapides.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-4">
              <Button className="h-14 px-6 rounded-full text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
                <Rocket className="mr-1 h-5 w-5" />
                Débuter maintenant
              </Button>
              <Button
                variant="outline"
                className="h-14 px-6 rounded-full text-base font-semibold border-2 hover:bg-secondary/20"
              >
                <BookOpen className="mr-1 h-5 w-5" />
                Consulter les parcours
              </Button>
            </div>

            {/* Stats (Reverted to original layout/style but adapted for 2-col) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-border/50">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <stat.icon className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground/80 text-left">
                    {stat.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Animated Visual */}
          <div className="flex justify-center items-center lg:justify-end relative group perspective-1000">
            {/* Animated Image Container with Organic Shape */}
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] transition-all duration-700 ease-out transform group-hover:scale-105 group-hover:rotate-x-6">
              <div
                className="absolute inset-0 shadow-2xl overflow-hidden animate-pulse-slow"
                style={{
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <img
                  src={heroImage}
                  alt="CodeCraft Hero"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent pointer-events-none" />
              </div>

              {/* Decorators */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse-slow lg:w-32 lg:h-32" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/30 rounded-full blur-2xl animate-pulse-slow delay-700 lg:w-40 lg:h-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
