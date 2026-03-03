// Basé sur codecraft-style.md — Formulaire "Mot de passe oublié"
// Pattern visuel identique à Signin.jsx (décorations, Card, Input)
// Conforme au design system avec support dark/light mode
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
import { ArrowLeft, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  // Validation simple de l'email
  const validateEmail = (value) => {
    if (!value) return "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Veuillez entrer une adresse email valide.";
    }
    return "";
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    // Retirer l'erreur dès que l'utilisateur corrige
    if (emailError) {
      setEmailError(validateEmail(value));
    }
  };

  const handleEmailBlur = () => {
    if (email) {
      setEmailError(validateEmail(email));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation finale avant envoi
    const error = validateEmail(email);
    if (error) {
      setEmailError(error);
      return;
    }

    setIsLoading(true);
    // Simulation d'envoi de l'email de réinitialisation
    setTimeout(() => {
      setIsLoading(false);
      // Redirection vers la page de confirmation
      navigate("/mot-de-passe-oublie/confirmation", { state: { email } });
    }, 1500);
  };

  const isFormValid = email && !emailError;

  return (
    // Utilisation de bg-background et text-foreground — support dark/light mode
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative">
      {/* Décorations de fond — Cohérent avec Signin.jsx */}
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

        {/* Card — Variables sémantiques pour dark/light mode */}
        <Card className="border-border bg-card shadow-lg">
          <CardHeader className="text-center pb-2">
            {/* Icône décorative — Sécurité perçue */}
            <div className="flex justify-center mb-3">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="h-7 w-7 text-primary" />
              </div>
            </div>

            <CardTitle className="text-2xl font-bold text-foreground">
              Mot de passe oublié ?
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Entrez votre adresse email et nous vous enverrons un lien sécurisé
              pour réinitialiser votre mot de passe.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Champ email — Style identique à Signin.jsx */}
              <div className="space-y-2">
                <Label htmlFor="forgot-email" className="text-foreground">
                  Votre adresse email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="forgot-email"
                    type="email"
                    placeholder="m@exemple.com"
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                    required
                    aria-invalid={!!emailError}
                    className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary pl-10"
                  />
                </div>
                {/* Message d'erreur — Email invalide */}
                {emailError && (
                  <p className="text-destructive text-xs flex items-center gap-1.5 mt-1">
                    <span className="inline-block w-1 h-1 rounded-full bg-destructive shrink-0" />
                    {emailError}
                  </p>
                )}
              </div>

              {/* Bouton CTA principal — Pas de dégradé (règle utilisateur) */}
              <Button
                type="submit"
                disabled={!isFormValid || isLoading}
                className="w-full font-medium cursor-pointer"
              >
                {isLoading
                  ? "Envoi en cours..."
                  : "Envoyer le lien de réinitialisation"}
              </Button>
            </form>

            {/* Séparateur */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-card px-2 text-muted-foreground">
                  ou bien
                </span>
              </div>
            </div>

            {/* Lien secondaire humoristique — "Hop, je m'en souviens !" */}
            <div className="text-center">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium transition-colors group"
              >
                <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
                Hop, je m'en souviens finalement !
              </Link>
            </div>

            {/* Lien retour connexion classique */}
            <p className="text-center text-muted-foreground text-sm mt-4">
              <Link
                to="/login"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Retour à la connexion
              </Link>
            </p>
          </CardContent>
        </Card>

        {/* Mention de sécurité */}
        <p className="text-center text-muted-foreground/60 text-xs mt-6 px-4">
          <ShieldCheck className="inline h-3 w-3 mr-1 -mt-0.5" />
          Votre lien de réinitialisation expire après 30 minutes pour votre
          sécurité.
        </p>
      </div>
    </div>
  );
}
