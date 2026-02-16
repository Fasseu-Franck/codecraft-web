// Basé sur task-1.md - Section 5: COMMENT APPRENDRE AVEC CODECRAFT
import meetingImage from "@/src/assets/home/Meeting.jpg";
import {
  BarChart3,
  Code2,
  GraduationCap,
  MessageCircle,
  PenLine,
} from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: PenLine,
    title: "Créez votre compte",
    description:
      "Inscription rapide en 2 minutes. Renseignez vos objectifs et votre niveau pour des recommandations personnalisées.",
  },
  {
    icon: GraduationCap,
    title: "Choisissez votre parcours",
    description:
      "Plus de 30 parcours disponibles : HTML/CSS, JavaScript, React, Python… Du débutant à l'expert.",
  },
  {
    icon: Code2,
    title: "Codez dans la plateforme",
    description:
      "Éditeur intégré, prévisualisation en temps réel. 20% théorie, 80% pratique sur des projets concrets.",
  },
  {
    icon: MessageCircle,
    title: "Échangez avec la communauté",
    description:
      "Bloqué ? Posez votre question. L'entraide renforce l'apprentissage avec des réponses en moins de 30 min.",
  },
  {
    icon: BarChart3,
    title: "Suivez votre évolution",
    description:
      "Tableau de bord personnalisé, projets complétés, compétences acquises et badges débloqués.",
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="comment-ca-marche" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Colonne gauche : Titre + Étapes */}
          <div className="flex flex-col gap-8">
            {/* Badge + Titre */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-badge-bg text-badge-text rounded-full text-sm font-medium mb-4">
                Comment ça fonctionne
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Apprenez efficacement en <br />{" "}
                <span className="text-primary">5 étapes simples</span>
              </h2>
              <p className="text-muted-foreground">
                De l'inscription à la maîtrise, Codecraft vous guide à chaque
                étape, afin de developper vos compétences
              </p>
            </div>

            {/* Liste des étapes - style accordéon */}
            <div className="flex flex-col gap-2">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const StepIcon = step.icon;

                return (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`group flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-primary/10 border border-primary/20"
                        : "hover:bg-muted/50 border border-transparent"
                    }`}
                  >
                    {/* Icône */}
                    <div
                      className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                      }`}
                    >
                      <StepIcon className="h-5 w-5" />
                    </div>

                    {/* Contenu */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-semibold transition-colors ${
                          isActive ? "text-foreground" : "text-foreground/80"
                        }`}
                      >
                        {step.title}
                      </h3>

                      {/* Description - visible uniquement quand actif */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isActive
                            ? "max-h-24 opacity-100 mt-1.5"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Indicateur numéro */}
                    <span
                      className={`shrink-0 text-xs font-bold mt-1 ${
                        isActive ? "text-primary" : "text-muted-foreground/50"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Colonne droite : Image organique (même style que Hero) */}
          <div className="flex justify-center items-center lg:justify-end relative group perspective-1000">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] transition-all duration-700 ease-out transform group-hover:scale-105 group-hover:rotate-x-6">
              <div
                className="absolute inset-0 shadow-2xl overflow-hidden"
                style={{
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <img
                  src={meetingImage}
                  alt="Apprendre le code avec Codecraft"
                  className="w-full h-full object-cover"
                />
                {/* Overlay pour profondeur */}
                <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent pointer-events-none" />
              </div>

              {/* Décorateurs */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse lg:w-32 lg:h-32" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/30 rounded-full blur-2xl animate-pulse delay-700 lg:w-40 lg:h-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
