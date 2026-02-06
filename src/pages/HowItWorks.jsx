import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import { Button } from "@/src/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart,
  Check,
  Code,
  LayoutDashboard,
  Mail,
  MessageSquare,
  MonitorPlay,
  Search,
  UserCog,
  UserPlus,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Data Structure
const rolesData = {
  learner: {
    label: "Parcours Apprenant",
    steps: [
      {
        id: 1,
        title: "Découvrir",
        icon: Search,
        description: "Explorez un catalogue complet de formations pratiques.",
        details: [
          "Filtrez par technologie (React, Node, Python...)",
          "Consultez le programme détaillé et les prérequis.",
          "Visualisez les projets que vous allez réaliser.",
        ],
      },
      {
        id: 2,
        title: "S'inscrire",
        icon: MonitorPlay,
        description:
          "Rejoignez la plateforme et configurez votre environnement.",
        details: [
          "Création de compte rapide et sécurisée.",
          "Accès immédiat à votre tableau de bord.",
          "Configuration automatique de l'IDE en ligne.",
        ],
      },
      {
        id: 3,
        title: "Pratiquer",
        icon: Code,
        description: "Apprenez en codant directement dans le navigateur.",
        details: [
          "Exercices interactifs avec validation instantanée.",
          "Projets 'fil rouge' pour bâtir votre portfolio.",
          "Accès à des ressources (vidéos, documentation).",
        ],
      },
      {
        id: 4,
        title: "Collaborer",
        icon: Users,
        description: "Ne restez jamais bloqué grâce à la communauté.",
        details: [
          "Forums d'entraide dédiés par parcours.",
          "Mentorat et revue de code par des experts.",
          "Travail en binôme possible sur certains projets.",
        ],
      },
      {
        id: 5,
        title: "Certifier",
        icon: Award,
        description: "Validez vos compétences et boostez votre carrière.",
        details: [
          "Evaluation finale basée sur un projet concret.",
          "Obtention d'un certificat vérifiable.",
          "Mise en avant sur votre profil professionnel.",
        ],
      },
    ],
  },
  center: {
    label: "Parcours Centre de Formation",
    steps: [
      {
        id: 1,
        title: "Créer",
        icon: LayoutDashboard,
        description: "Digitalisez vos contenus de formation simplement.",
        details: [
          "Importez vos ressources existantes (PDF, Vidéos).",
          "Créez des quiz et des exercices de code.",
          "Structurez vos parcours par modules.",
        ],
      },
      {
        id: 2,
        title: "Publier",
        icon: MonitorPlay,
        description: "Rendez vos formations accessibles à vos apprenants.",
        details: [
          "Gestion de la visibilité (privé/public).",
          "Attribution facile aux groupes d'apprenants.",
          "Mise à jour du contenu en temps réel.",
        ],
      },
      {
        id: 3,
        title: "Gérer",
        icon: UserCog,
        description: "Administrez vos cohortes efficacement.",
        details: [
          "Ajout d'apprenants par import CSV.",
          "Création de groupes et de classes.",
          "Gestion des droits d'accès et des tuteurs.",
        ],
      },
      {
        id: 4,
        title: "Suivre",
        icon: BarChart,
        description: "Analysez la progression et la performance.",
        details: [
          "Tableaux de bord détaillés par apprenant.",
          "Suivi du temps passé et des scores.",
          "Identification des décrocheurs potentiels.",
        ],
      },
      {
        id: 5,
        title: "Évaluer",
        icon: MessageSquare,
        description: "Assurez un suivi pédagogique de qualité.",
        details: [
          "Outils de correction de code intégrés.",
          "Feedback précis et annotations.",
          "Messagerie directe avec les élèves.",
        ],
      },
    ],
  },
};

export function HowItWorks() {
  const [activeRole, setActiveRole] = useState("learner"); // 'learner' | 'center'
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const currentData = rolesData[activeRole];
  const currentStep = currentData.steps[activeStepIndex];

  const handleRoleChange = (role) => {
    setActiveRole(role);
    setActiveStepIndex(0); // Reset to first step
  };

  const nextStep = () => {
    if (activeStepIndex < currentData.steps.length - 1) {
      setActiveStepIndex(activeStepIndex + 1);
    }
  };

  const prevStep = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex(activeStepIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* 1. Header & Role Toggle */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Comment CodeCraft <br />
              <span className="text-primary">fonctionne ?</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Une expérience d'apprentissage fluide et moderne. Découvrez les
              étapes clés de votre réussite sur CodeCraft.
            </p>
          </div>

          <div className="bg-secondary/50 p-1.5 rounded-xl border border-border inline-flex w-full lg:w-auto">
            <button
              onClick={() => handleRoleChange("learner")}
              className={`flex-1 lg:flex-none px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeRole === "learner"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-background/50"
              }`}
            >
              Apprenant
            </button>
            <button
              onClick={() => handleRoleChange("center")}
              className={`flex-1 lg:flex-none px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeRole === "center"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-background/50"
              }`}
            >
              Organisateur
            </button>
          </div>
        </div>

        {/* 2. Split Layout: Steps List (Left) & Detail Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Vertical Steps List */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="mb-4 text-sm font-medium text-muted-foreground uppercase tracking-wider pl-2">
              {currentData.label}
            </div>
            {currentData.steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStepIndex(index)}
                className={`group flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200 border ${
                  activeStepIndex === index
                    ? "bg-secondary/40 border-primary/50 shadow-sm"
                    : "bg-transparent border-transparent hover:bg-secondary/20"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold transition-colors ${
                    activeStepIndex === index
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground group-hover:bg-secondary/80"
                  }`}
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <span
                    className={`font-semibold text-lg block ${
                      activeStepIndex === index
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {activeStepIndex === index && (
                  <ArrowRight className="w-5 h-5 text-primary animate-in fade-in slide-in-from-left-2" />
                )}
              </button>
            ))}
          </div>

          {/* Right Column: Dynamic Detail Card */}
          <div className="lg:col-span-8">
            <div className="bg-card border border-border rounded-3xl p-8 sm:p-10 h-full flex flex-col relative overflow-hidden shadow-2xl transition-all duration-500">
              {/* Background Decor */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              {/* Card Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <currentStep.icon className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    {currentStep.title}
                  </h2>
                  <span className="text-muted-foreground">
                    Étape {activeStepIndex + 1} sur {currentData.steps.length}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="space-y-6 flex-1">
                <p className="text-xl text-foreground font-medium">
                  {currentStep.description}
                </p>

                <div className="space-y-4 mt-6">
                  {currentStep.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-green-500" />
                      </div>
                      <span className="text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer / Navigation */}
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
                <Button
                  variant="ghost"
                  onClick={prevStep}
                  disabled={activeStepIndex === 0}
                  className={activeStepIndex === 0 ? "opacity-30" : ""}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
                </Button>

                {activeStepIndex < currentData.steps.length - 1 ? (
                  <Button onClick={nextStep} variant="secondary">
                    Suivant <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    {/* Final CTA based on role */}
                    {activeRole === "learner" ? (
                      <Link to="/inscription">
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                          Commencer maintenant
                        </Button>
                      </Link>
                    ) : (
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Demander une démo
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-24 text-center bg-[#0d091b] rounded-3xl p-12 border border-white/10 relative overflow-hidden group">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <h2 className="text-3xl font-bold mb-4 text-white relative z-10">
            Prêt à passer à l'action ?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 relative z-10">
            Que vous soyez là pour apprendre ou pour enseigner, CodeCraft a les
            outils qu'il vous faut.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Link to="/inscription">
              <Button className="h-14 px-8 rounded-full text-base font-semibold bg-linear-to-r from-indigo-velvet-500 to-indigo-velvet-600 hover:from-indigo-velvet-600 hover:to-[var(--color-indigo-velvet-700)] shadow-lg hover:shadow-xl transition-all text-white border-0">
                <UserPlus className="mr-2 h-5 w-5" />
                Créer un compte gratuit
              </Button>
            </Link>
            <Button
              variant="outline"
              className="h-14 px-8 rounded-full text-base font-semibold bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contactez-nous
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
