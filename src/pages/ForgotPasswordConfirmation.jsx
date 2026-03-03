// Basé sur codecraft-style.md — Confirmation d'envoi d'email de réinitialisation
// Pattern visuel identique à Signin.jsx (décorations, Card, layout)
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
import { ArrowLeft, Info, MailCheck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function ForgotPasswordConfirmationPage() {
  const location = useLocation();
  const email = location.state?.email || "votre adresse email";

  return (
    // Utilisation de bg-background et text-foreground — support dark/light mode
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative">
      {/* Décorations de fond — Cohérent avec les autres pages auth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      {/* Toggle dark/light mode */}
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

        {/* Card de confirmation */}
        <Card className="border-border bg-card shadow-lg">
          <CardHeader className="text-center pb-2">
            {/* Icône de confirmation — Feedback visuel positif */}
            <div className="flex justify-center mb-3">
              <div className="w-14 h-14 rounded-2xl bg-highlight-bg flex items-center justify-center">
                <MailCheck className="h-7 w-7 text-highlight-text" />
              </div>
            </div>

            <CardTitle className="text-2xl font-bold text-foreground">
              Vérifiez votre boîte mail
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Nous venons d'envoyer un lien de réinitialisation à{" "}
              <span className="font-semibold text-foreground">{email}</span>.
              Cliquez sur le lien dans l'email pour créer un nouveau mot de
              passe.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Rappel vérification spams */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 border border-border">
              <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground leading-relaxed">
                <p className="font-medium text-foreground mb-1">
                  Vous ne trouvez pas l'email ?
                </p>
                <p>
                  Vérifiez votre dossier{" "}
                  <span className="font-medium text-foreground">Spam</span> ou{" "}
                  <span className="font-medium text-foreground">
                    Courrier indésirable
                  </span>
                  . Le lien expire après 30 minutes.
                </p>
              </div>
            </div>

            {/* Bouton retour connexion — CTA principal */}
            <Link to="/login" className="block">
              <Button className="w-full font-medium cursor-pointer">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à la connexion
              </Button>
            </Link>

            {/* Lien pour renvoyer l'email */}
            <p className="text-center text-muted-foreground text-sm">
              Toujours rien ?{" "}
              <Link
                to="/mot-de-passe-oublie"
                className="text-primary hover:underline font-medium"
              >
                Renvoyer le lien
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
