// Basé sur codecraft-prd.md — Module d'Authentification : Inscription utilisateur
// Le PRD spécifie 3 types d'utilisateurs : Apprenant, Formateur, Centre de formation
// Processus en 2 étapes : 1) Choix du type de profil, 2) Formulaire d'inscription
// Conforme au design system (codecraft-style.md) avec support dark/light mode
import logo from "@/src/assets/logo.png";
import { ModeToggle } from "@/src/components/mode-toggle";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  ArrowLeft,
  BookOpen,
  Building2,
  Eye,
  EyeOff,
  GraduationCap,
  Info,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Basé sur codecraft-prd.md — Section Utilisateurs cibles / personas
// 3 types de profils définis dans le PRD
const profileTypes = [
  {
    id: "apprenant",
    label: "Apprenant",
    description:
      "Acquérir des compétences en programmation et suivre des parcours pratiques.",
    icon: GraduationCap,
  },
  {
    id: "formateur",
    label: "Formateur",
    description:
      "Créer, gérer et évaluer des parcours de formation pour vos apprenants.",
    icon: BookOpen,
  },
  {
    id: "centre",
    label: "Centre de formation",
    description:
      "Digitaliser et optimiser la gestion de vos formations en ligne.",
    icon: Building2,
  },
];

export function SignupPage() {
  // Étape 1 : Choix du profil, Étape 2 : Formulaire
  const [step, setStep] = useState(1);
  const [profileType, setProfileType] = useState(null);

  // Champs communs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Champs spécifiques Apprenant / Formateur
  const [fullName, setFullName] = useState("");

  // Champs spécifiques Centre de formation
  const [centerName, setCenterName] = useState("");
  const [centerAddress, setCenterAddress] = useState("");
  const [centerDescription, setCenterDescription] = useState("");

  const handleSelectProfile = (type) => {
    setProfileType(type);
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulation d'envoi du formulaire
    setTimeout(() => {
      setIsLoading(false);
      const data = {
        profileType: profileType.id,
        email,
        password,
        ...(profileType.id === "centre"
          ? { centerName, centerAddress, centerDescription }
          : { fullName }),
      };
      console.log("Inscription:", data);
    }, 1500);
  };

  // Validation du formulaire selon le type de profil
  const isFormValid = () => {
    const baseValid =
      email && password.length >= 8 && password === confirmPassword;
    if (profileType?.id === "centre") {
      return baseValid && centerName;
    }
    return baseValid && fullName;
  };

  return (
    // Utilisation de bg-background et text-foreground pour le support dark/light mode
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative">
      {/* Décorations de fond — Cohérent avec le reste de l'application */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      {/* Toggle dark/light mode — Positionné en haut à droite */}
      <div className="absolute top-4 right-4 z-20">
        <ModeToggle />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link to="/">
            <img src={logo} alt="Codecraft" className="h-10 w-auto" />
          </Link>
        </div>

        {/* ========== ÉTAPE 1 : Choix du type de profil ========== */}
        {step === 1 && (
          <Card className="border-border bg-card shadow-lg">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold text-foreground">
                Créer votre compte
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Choisissez votre type de profil pour commencer
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              {/* Sélection du type de profil — Basé sur codecraft-prd.md personas */}
              {profileTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => handleSelectProfile(type)}
                    className="w-full flex items-start gap-4 p-4 rounded-xl border border-border bg-secondary/30 hover:bg-secondary/60 hover:border-primary/50 transition-all duration-200 text-left cursor-pointer group"
                  >
                    <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-sm">
                        {type.label}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        {type.description}
                      </p>
                    </div>
                  </button>
                );
              })}

              {/* Séparateur */}
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-card px-2 text-muted-foreground">
                    Ou continuer avec
                  </span>
                </div>
              </div>

              {/* Boutons de connexion sociale */}
              <div className="grid grid-cols-3 gap-3">
                <Button
                  variant="outline"
                  className="bg-secondary/50 border-border text-foreground hover:bg-secondary cursor-pointer"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  className="bg-secondary/50 border-border text-foreground hover:bg-secondary cursor-pointer"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  className="bg-secondary/50 border-border text-foreground hover:bg-secondary cursor-pointer"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </Button>
              </div>

              {/* Lien vers connexion */}
              <p className="text-center text-muted-foreground text-sm mt-4">
                Vous avez déjà un compte ?{" "}
                <Link
                  to="/login"
                  className="text-primary hover:underline font-medium"
                >
                  Se connecter
                </Link>
              </p>
            </CardContent>
          </Card>
        )}

        {/* ========== ÉTAPE 2 : Formulaire d'inscription ========== */}
        {step === 2 && profileType && (
          <Card className="border-border bg-card shadow-lg">
            <CardHeader className="pb-2">
              {/* Bouton retour */}
              <button
                onClick={handleBack}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-2 cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
                Changer de profil
              </button>

              {/* Badge du type de profil sélectionné */}
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  <profileType.icon className="h-3.5 w-3.5" />
                  {profileType.label}
                </span>
              </div>

              <CardTitle className="text-2xl font-bold text-foreground">
                {profileType.id === "centre"
                  ? "Inscrivez votre centre"
                  : "Créer votre compte"}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {profileType.id === "centre"
                  ? "Renseignez les informations de votre centre de formation"
                  : "Entrez vos informations pour créer votre espace"}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Champs spécifiques selon le type de profil — Basé sur codecraft-prd.md */}
                {profileType.id === "centre" ? (
                  <>
                    {/* Nom du centre — Spécifique aux centres de formation */}
                    <div className="space-y-2">
                      <Label htmlFor="centerName" className="text-foreground">
                        Nom du centre
                      </Label>
                      <Input
                        id="centerName"
                        type="text"
                        placeholder="Ex: Institut Numérique du Cameroun"
                        value={centerName}
                        onChange={(e) => setCenterName(e.target.value)}
                        required
                        className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                      />
                    </div>

                    {/* Adresse */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="centerAddress"
                        className="text-foreground"
                      >
                        Adresse
                      </Label>
                      <Input
                        id="centerAddress"
                        type="text"
                        placeholder="Ex: Rue 1234, Akwa, Douala"
                        value={centerAddress}
                        onChange={(e) => setCenterAddress(e.target.value)}
                        className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                      />
                    </div>

                    {/* Description du centre */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="centerDescription"
                        className="text-foreground"
                      >
                        Description
                      </Label>
                      <textarea
                        id="centerDescription"
                        placeholder="Décrivez brièvement votre centre de formation..."
                        value={centerDescription}
                        onChange={(e) => setCenterDescription(e.target.value)}
                        rows={3}
                        className="w-full rounded-md bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:ring-1 focus-visible:outline-none px-3 py-2 text-sm resize-none"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Nom complet — Spécifique aux apprenants et formateurs */}
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-foreground">
                        Nom complet
                      </Label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Ex: Franck Obadia"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                      />
                    </div>
                  </>
                )}

                {/* Email — Commun à tous les profils */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@exemple.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                  />
                  <p className="text-xs text-muted-foreground">
                    Nous utiliserons cet email pour vous contacter. Nous ne le
                    partagerons avec personne.
                  </p>
                </div>

                {/* Mot de passe et Confirmation côte à côte */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Mot de passe */}
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-foreground">
                      Mot de passe
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Confirmer mot de passe */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="confirmPassword"
                      className="text-foreground"
                    >
                      Confirmer
                    </Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary pr-10"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Info mot de passe */}
                <div className="flex items-center gap-2 text-muted-foreground text-xs">
                  <Info className="h-4 w-4 shrink-0" />
                  <span>
                    Le mot de passe doit contenir au moins 8 caractères et être
                    différent de l'email
                  </span>
                </div>

                {/* Bouton principal — Pas de dégradé (règle utilisateur) */}
                <Button
                  type="submit"
                  disabled={!isFormValid() || isLoading}
                  className="w-full font-medium cursor-pointer"
                >
                  {isLoading
                    ? "Création en cours..."
                    : profileType.id === "centre"
                      ? "Inscrire mon centre"
                      : "Créer mon compte"}
                </Button>
              </form>

              {/* Lien vers connexion */}
              <p className="text-center text-muted-foreground text-sm mt-6">
                Vous avez déjà un compte ?{" "}
                <Link
                  to="/login"
                  className="text-primary hover:underline font-medium"
                >
                  Se connecter
                </Link>
              </p>
            </CardContent>
          </Card>
        )}

        {/* Mention légale */}
        <p className="text-center text-muted-foreground/60 text-xs mt-6 px-4">
          En continuant, vous acceptez nos{" "}
          <a href="#" className="text-primary hover:underline">
            Conditions d'utilisation
          </a>{" "}
          et notre{" "}
          <a href="#" className="text-primary hover:underline">
            Politique de confidentialité
          </a>
          .
        </p>
      </div>
    </div>
  );
}
